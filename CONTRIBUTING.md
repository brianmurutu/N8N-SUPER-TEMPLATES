# Contributing to Awesome n8n Templates

Thank you for taking the time to contribute! 🎉  
This guide covers everything you need to know to get a pull request merged successfully.

---

## Table of Contents

- [Before You Start](#before-you-start)
- [Types of Contributions](#types-of-contributions)
- [Development Setup](#development-setup)
- [Adding a New Template](#adding-a-new-template)
  - [1. Choose the Right Category](#1-choose-the-right-category)
  - [2. Export the Workflow JSON](#2-export-the-workflow-json)
  - [3. Add the Metadata Block](#3-add-the-metadata-block)
  - [4. Sanitise Credentials](#4-sanitise-credentials)
  - [5. Update README.md](#5-update-readmemd)
  - [6. Open the Pull Request](#6-open-the-pull-request)
- [Template Quality Checklist](#template-quality-checklist)
- [Fixing Bugs or Improving Documentation](#fixing-bugs-or-improving-documentation)
- [Review Process](#review-process)
- [Style Guide](#style-guide)
- [InfoBay.ai Contributor Notes](#infobayai-contributor-notes)

---

## Before You Start

- Search [existing issues](../../issues) and [open PRs](../../pulls) to avoid duplicates.
- For large changes (new categories, structural refactors), open an issue first to discuss.
- Read the [Code of Conduct](CODE_OF_CONDUCT.md). All contributors must follow it.

---

## Types of Contributions

| Type | Description | Welcome? |
|------|-------------|----------|
| New template | Add a new `.json` workflow + README row | ✅ Always |
| Template fix | Fix a broken node, credential, or logic error | ✅ Always |
| Metadata improvement | Complete missing or incorrect metadata | ✅ Always |
| Documentation | Improve README, guides, or inline comments | ✅ Always |
| New category | Propose and populate a new category folder | ✅ Discuss first |
| Duplicate template | Same workflow already exists | ❌ Not accepted |
| Templates with hardcoded secrets | Any `.json` with real API keys / passwords | ❌ Not accepted |

---

## Development Setup

No special tooling is required — this is a JSON + Markdown repository.

Recommended tools:

```bash
# Validate JSON syntax (optional, requires Node.js)
npx jsonlint templates/ai-agents/my-workflow.json

# Preview Markdown locally
npx markdownlint-cli README.md
```

---

## Adding a New Template

### 1. Choose the Right Category

Place your file inside the matching `templates/<category>/` folder:

| Folder | Use for |
|--------|---------|
| `ai-agents/` | LLM agents, RAG, multi-step AI reasoning |
| `email-automation/` | Gmail, Outlook, IMAP, SMTP workflows |
| `communication-messaging/` | Telegram, Slack, WhatsApp, Discord |
| `crm-sales/` | HubSpot, Salesforce, Pipedrive, lead flows |
| `social-media/` | Twitter/X, LinkedIn, Instagram, TikTok |
| `document-management/` | PDF, Google Drive, Notion, SharePoint |
| `data-processing/` | ETL, APIs, databases, transformations |
| `devops-engineering/` | GitHub, CI/CD, cloud monitoring, containers |

If no category fits, open an issue to discuss adding a new one.

---

### 2. Export the Workflow JSON

1. Open your workflow in n8n.
2. Click the **...** menu → **Download** (or `Ctrl/Cmd + Shift + E`).
3. Save the file as `kebab-case-descriptive-name.json` inside the correct category folder.

**Naming convention:**  
`{short-verb}-{service}-{action}.json`  
Examples: `ai-gmail-auto-labeller.json`, `rag-chatbot-pinecone.json`

---

### 3. Add the Metadata Block

Open the downloaded JSON and add an `infoBay` object inside the top-level `"meta"` key:

```json
{
  "meta": {
    "templateCredsSetupCompleted": true,
    "infoBay": {
      "name": "AI Gmail Auto-Labeller",
      "description": "Automatically labels incoming Gmail messages into categories using OpenAI.",
      "category": "email-automation",
      "difficulty": "beginner",
      "trigger": "Gmail Trigger",
      "requiredCredentials": ["Gmail OAuth2", "OpenAI API"],
      "requiredNodes": [
        "n8n-nodes-base.gmailTrigger",
        "n8n-nodes-base.openAi"
      ],
      "author": "your-github-username",
      "authorUrl": "https://github.com/your-github-username",
      "version": "1.0.0",
      "testedOn": "n8n 1.70+",
      "tags": ["email", "ai", "gmail", "openai"]
    }
  },
  "nodes": [ ... ],
  "connections": { ... }
}
```

All fields are required. PRs without complete metadata will not be merged.

---

### 4. Sanitise Credentials

**Before committing**, verify that your JSON contains **no real credentials**:

- API keys must be replaced with `YOUR_API_KEY_HERE` placeholder strings  
- OAuth tokens must be removed — n8n exports them safely, but double-check  
- Webhook URLs containing secrets must be replaced with `https://your-n8n-instance.com/webhook/YOUR_WEBHOOK_ID`

Run a quick check:

```bash
# Search for common secret patterns
grep -iE "(sk-|Bearer |password|secret|token)" templates/my-category/my-workflow.json
```

If anything is found that shouldn't be there, sanitise it before committing.

---

### 5. Update README.md

Add one row to the correct category table in `README.md`:

```markdown
| N | **Template Name** | One-line description of what it does. | Trigger Type | Service A, Service B | [JSON](templates/category/filename.json) |
```

Follow the existing table format exactly. Keep descriptions concise (≤ 15 words).

---

### 6. Open the Pull Request

1. Commit your changes:
   ```bash
   git add templates/category/my-workflow.json README.md
   git commit -m "feat(templates): add AI Gmail Auto-Labeller"
   git push origin feat/ai-gmail-auto-labeller
   ```
2. Open a PR against the `main` branch.
3. Fill in the **PR template** that appears automatically.
4. Link any related issues with `Closes #123`.

---

## Template Quality Checklist

Before submitting, ensure your template meets **all** of these criteria:

- [ ] JSON is valid and parseable
- [ ] Workflow can be imported into n8n without errors
- [ ] All nodes are properly connected (no dangling nodes)
- [ ] All credential fields use placeholder values only
- [ ] `meta.infoBay` block is complete and accurate
- [ ] File is placed in the correct `templates/<category>/` folder
- [ ] File name follows `kebab-case-descriptive-name.json` convention
- [ ] A corresponding row has been added to `README.md`
- [ ] The workflow has been tested and functions correctly on n8n 1.x
- [ ] No duplicate of an existing template in the repository

---

## Fixing Bugs or Improving Documentation

- Use the **Bug Report** issue template for broken templates.
- For typos or docs improvements, a direct PR is fine without an issue.
- Reference the template file name and category in your PR description.

---

## Review Process

1. A maintainer will review within **7 days** of PR submission.
2. Automated checks will validate JSON syntax and metadata completeness.
3. If changes are requested, update your branch and push — the PR will re-enter review.
4. Once approved, your PR will be squash-merged into `main`.

---

## Style Guide

- **JSON**: 2-space indentation, UTF-8 encoding, no trailing commas
- **Markdown**: Use ATX-style headings (`#`), keep lines under 120 chars
- **Commit messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/)
  - `feat(templates): add <name>`
  - `fix(templates): repair broken node in <name>`
  - `docs: improve <section> in README`

---

## InfoBay.ai Contributor Notes

This repository participates in the **InfoBay.ai Developer Contributor Program**. Here is what that means for contributors:

- **Pull Requests are the primary activity signal.** Each merged PR represents real development activity.
- **Quality over quantity.** One well-documented, tested template is worth more than five broken ones.
- **Your author information matters.** Fill in `meta.infoBay.author` and `meta.infoBay.authorUrl` correctly — these fields attribute your work.
- **Keep your PRs focused.** Prefer one template per PR to make review faster.

Visit [infobay.ai/contributors](https://infobay.ai/contributors) to register your repository and learn how earning works.

---

Thank you for contributing! Every template you add helps thousands of developers automate more. 🚀
