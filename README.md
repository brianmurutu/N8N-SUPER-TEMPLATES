# 🚀 Awesome n8n Templates

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![n8n](https://img.shields.io/badge/Built%20for-n8n-FF6D5A.svg)](https://n8n.io)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, community-driven collection of production-ready **n8n workflow templates** covering AI agents, email automation, CRM, DevOps, social media, and more.  
> **Import any template in under 60 seconds** — no coding required.

Curated by [Brian Murutu](https://github.com/brianmurutu). Original workflow creators and
official n8n template sources are credited in each imported template.

---

## 📑 Table of Contents

- [Why This Repository?](#-why-this-repository)
- [How to Use a Template](#-how-to-use-a-template)
- [Template Categories](#-template-categories)
  - [🤖 AI Agents & LLM Workflows](#-ai-agents--llm-workflows)
  - [📧 Email Automation](#-email-automation)
  - [💬 Communication & Messaging](#-communication--messaging)
  - [📊 CRM & Sales](#-crm--sales)
  - [📱 Social Media](#-social-media)
  - [📂 Document Management](#-document-management)
  - [🔧 Data Processing & ETL](#-data-processing--etl)
  - [⚙️ DevOps & Engineering](#️-devops--engineering)
- [Template Metadata Standard](#-template-metadata-standard)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [License](#-license)
- [Disclaimer](#️-disclaimer)

---

## 💡 Why This Repository?

n8n's template marketplace is growing fast — but finding high-quality, well-documented, production-tested workflows can be hard. This repository solves that by:

- **Curating** only templates with clear descriptions and working JSON
- **Categorising** workflows by use-case for instant discoverability
- **Documenting** every template with required credentials, nodes, and setup steps
- **Welcoming** community PRs so the collection grows continuously

---

## ⚡ How to Use a Template

1. **Browse** the category tables below and pick a template.
2. **Click** the `[JSON]` link to open the raw workflow file.
3. In your n8n instance, go to **Workflows → Import from File / URL**.
4. **Paste** the raw URL or upload the downloaded `.json` file.
5. **Configure** the credentials listed in the template metadata at the top of the JSON.
6. **Activate** the workflow. Done ✅

> **Self-hosted n8n:** Use `File → Import` in the editor.  
> **n8n Cloud:** Use the **...** menu → `Import workflow`.

---

## 📁 Template Categories

---

### 🤖 AI Agents & LLM Workflows

Autonomous agents, RAG pipelines, AI assistants, and LLM-powered decision-making.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **GPT-4o Research Agent** | Multi-step web research agent that searches the web, summarises sources, and outputs a formatted report. | Manual / Webhook | OpenAI, SerpAPI, HTTP Request | [JSON](templates/ai-agents/gpt4o-research-agent.json) |
| 2 | **RAG Chatbot with Pinecone** | Retrieval-Augmented Generation chatbot that answers questions from your own documents stored in Pinecone. | Chat Trigger | OpenAI, Pinecone, LangChain | [JSON](templates/ai-agents/rag-chatbot-pinecone.json) |
| 3 | **AI Content Moderation Pipeline** | Classifies incoming text submissions as safe, flagged, or blocked using an LLM, then routes results accordingly. | Webhook | OpenAI, Switch, Postgres | [JSON](templates/ai-agents/ai-content-moderation-pipeline.json) |
| 4 | **Daily AI Briefing Generator** | Fetches news via RSS, summarises headlines with GPT, and sends a morning digest email. | Schedule (Daily) | OpenAI, RSS Feed, Gmail/SMTP | [JSON](templates/ai-agents/daily-ai-briefing-generator.json) |
| 5 | **Autonomous Task Manager Agent** | Breaks a high-level goal into sub-tasks using an LLM, executes each sub-task, and reports results. | Manual / Webhook | OpenAI, Notion/Airtable, HTTP Request | [JSON](templates/ai-agents/autonomous-task-manager-agent.json) |

---

### 📧 Email Automation

Smart email routing, drafting, classification, and follow-up workflows.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **AI Gmail Auto-Labeller** | Labels incoming Gmail messages into categories (Support, Sales, Inquiry) using OpenAI. | Gmail Trigger | Gmail, OpenAI | [JSON](templates/email-automation/ai-gmail-auto-labeller.json) |
| 2 | **Personalized Daily Newsletter** | Summarizes RSS news with Gemini and emails a personalized daily digest. | Schedule | RSS, Google Gemini, SMTP | [JSON](templates/email-automation/personalized-daily-newsletter.json) |

---

### 💬 Communication & Messaging

Telegram bots, Slack integrations, WhatsApp, and Discord automations.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **Telegram AI Assistant** | Full-featured Telegram bot with voice + text support, memory via Supabase, and GPT-4 responses. | Telegram Trigger | Telegram, OpenAI, Supabase | [JSON](templates/communication-messaging/telegram-ai-assistant.json) |
| 2 | **Slack Incident Notifier** | Posts formatted alert cards to a Slack channel whenever a webhook fires (monitoring, CI/CD, etc.). | Webhook | Slack, Set, IF | [JSON](templates/communication-messaging/slack-incident-notifier.json) |
| 3 | **WhatsApp Customer Support Bot** | Answers customer FAQs on WhatsApp using an LLM, escalates unknowns to a human agent. | WhatsApp Trigger | WhatsApp Business, OpenAI, Airtable | [JSON](templates/communication-messaging/whatsapp-customer-support-bot.json) |
| 4 | **Discord Server Moderator** | Monitors Discord messages for toxic language and automatically times out offending users. | Discord Trigger | Discord, OpenAI, IF | [JSON](templates/communication-messaging/discord-server-moderator.json) |
| 5 | **Telegram PDF Chat** | Allows users to upload a PDF to Telegram and ask questions about its content via AI. | Telegram Trigger | Telegram, OpenAI, PDF Extract | [JSON](templates/communication-messaging/telegram-pdf-chat.json) |

---

### 📊 CRM & Sales

Lead scoring, CRM sync, pipeline automation, and deal tracking.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **HubSpot Lead Scorer** | Scores new HubSpot contacts using AI based on form responses and enriches the contact record. | HubSpot Trigger | HubSpot, OpenAI, HTTP Request | [JSON](templates/crm-sales/hubspot-lead-scorer.json) |
| 2 | **CRM Deal Won Notifier** | Sends a personalised congratulations email and posts in Slack when a deal is marked as Won. | HubSpot / Salesforce Trigger | HubSpot/Salesforce, Slack, Gmail | [JSON](templates/crm-sales/crm-deal-won-notifier.json) |
| 3 | **Calendly to CRM Sync** | Syncs Calendly meeting bookings into HubSpot, creating or updating contacts and deals automatically. | Webhook (Calendly) | HTTP Request, HubSpot, Set | [JSON](templates/crm-sales/calendly-to-crm-sync.json) |
| 4 | **AI Proposal Generator** | Generates personalised sales proposals from a CRM contact record using GPT-4 and sends via email. | Manual / HubSpot | HubSpot, OpenAI, Gmail | [JSON](templates/crm-sales/ai-proposal-generator.json) |
| 5 | **Churn Risk Predictor** | Analyses customer activity data and flags accounts with high churn probability in your CRM. | Schedule | Postgres/MySQL, OpenAI, HubSpot | [JSON](templates/crm-sales/churn-risk-predictor.json) |

---

### 📱 Social Media

Scheduling, cross-posting, analytics monitoring, and AI content generation.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **AI Twitter/X Thread Generator** | Generates a multi-tweet thread from a topic or article URL and queues it in Buffer/Typefully. | Manual / Webhook | OpenAI, HTTP Request, Buffer | [JSON](templates/social-media/ai-twitter-thread-generator.json) |
| 2 | **Instagram & TikTok Cross-Poster** | Takes a video from Google Drive and automatically posts it to both Instagram and TikTok. | Google Drive Trigger | Google Drive, HTTP Request | [JSON](templates/social-media/instagram-tiktok-cross-poster.json) |
| 3 | **LinkedIn Post Scheduler** | Drafts and schedules LinkedIn posts from a Google Sheet content calendar. | Schedule | Google Sheets, LinkedIn, OpenAI | [JSON](templates/social-media/linkedin-post-scheduler.json) |
| 4 | **Brand Mention Monitor** | Monitors Twitter/X and Reddit for brand mentions and sends a daily digest to Slack. | Schedule | HTTP Request (APIs), Slack, OpenAI | [JSON](templates/social-media/brand-mention-monitor.json) |
| 5 | **YouTube Thumbnail & Description Generator** | Uses GPT-4 Vision to analyse a YouTube video thumbnail and generate an SEO-optimised description. | Manual / Webhook | OpenAI (Vision), HTTP Request | [JSON](templates/social-media/youtube-thumbnail-description-generator.json) |

---

### 📂 Document Management

PDF processing, Google Drive, Notion, SharePoint, and file workflows.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **Google Drive → Notion Summariser** | Watches a Google Drive folder for new documents, summarises them with AI, and creates a Notion page. | Google Drive Trigger | Google Drive, OpenAI, Notion | [JSON](templates/document-management/google-drive-notion-summariser.json) |
| 2 | **PDF Invoice Data Extractor** | Extracts key fields (vendor, amount, date) from PDF invoices and saves to Google Sheets or Airtable. | Email / Webhook | PDF Extract, OpenAI, Google Sheets | [JSON](templates/document-management/pdf-invoice-data-extractor.json) |
| 3 | **Contract Reviewer** | Sends a contract PDF through GPT-4 for a plain-English risk summary and flags critical clauses. | Manual / Webhook | PDF Extract, OpenAI, Gmail | [JSON](templates/document-management/contract-reviewer.json) |
| 4 | **SharePoint → Confluence Sync** | Syncs document metadata between Microsoft SharePoint and Confluence spaces on a schedule. | Schedule | Microsoft SharePoint, HTTP Request (Confluence) | [JSON](templates/document-management/sharepoint-confluence-sync.json) |
| 5 | **Meeting Transcript Summariser** | Accepts a transcript (text/file), summarises it with action items via GPT, and posts to Notion/Slack. | Webhook / Manual | OpenAI, Notion/Slack | [JSON](templates/document-management/meeting-transcript-summariser.json) |

---

### 🔧 Data Processing & ETL

Pipelines, transformations, database sync, and API integrations.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **QR Code Generator via Webhook** | Sends submitted text to QR Server and returns the generated image to the webhook caller. | Webhook | Webhook, HTTP Request | [JSON](templates/data-processing/qr-code-generator-webhook.json) |
| 2 | **Daily CSV Reconciliation** | Combines Google Drive CSV exports, deduplicates rows, saves rejects, and posts a Slack recap. | Schedule | Google Drive, Code, Slack | [JSON](templates/data-processing/daily-csv-reconciliation.json) |

---

### ⚙️ DevOps & Engineering

CI/CD hooks, GitHub automation, deployment workflows, and infrastructure monitoring.

| # | Template | Description | Trigger | Nodes Required | Link |
|---|----------|-------------|---------|----------------|------|
| 1 | **GitHub PR Auto-Reviewer** | Posts an AI-generated code review summary as a comment on every new pull request. | Webhook (GitHub) | GitHub, OpenAI, HTTP Request | [JSON](templates/devops-engineering/github-pr-auto-reviewer.json) |
| 2 | **Deployment Notifier** | Listens to CI/CD webhook events and posts build status (✅/❌) to a Slack channel. | Webhook | Slack, IF, Set | [JSON](templates/devops-engineering/deployment-notifier.json) |
| 3 | **AWS Cost Alert** | Queries AWS Cost Explorer daily and alerts via email if spend exceeds a defined threshold. | Schedule | HTTP Request (AWS), Gmail/SMTP, IF | [JSON](templates/devops-engineering/aws-cost-alert.json) |
| 4 | **Docker Container Monitor** | Checks Docker container health via SSH and restarts failed containers automatically. | Schedule | SSH, IF, Execute Command | [JSON](templates/devops-engineering/docker-container-monitor.json) |
| 5 | **Jira Bug Triage Agent** | Reads newly created Jira bugs, scores severity with AI, assigns priority labels, and notifies the team. | Webhook (Jira) | Jira, OpenAI, Slack | [JSON](templates/devops-engineering/jira-bug-triage-agent.json) |

---

## 📝 Template Metadata Standard

Every `.json` template in this repository includes metadata inside the workflow's `meta` key, following this standard:

```json
{
  "meta": {
    "templateCredsSetupCompleted": true,
    "infoBay": {
      "name": "Template Display Name",
      "description": "One-sentence description of what this workflow does.",
      "category": "ai-agents | email-automation | crm-sales | social-media | document-management | data-processing | devops-engineering | communication-messaging",
      "difficulty": "beginner | intermediate | advanced",
      "trigger": "Manual | Webhook | Schedule | App Trigger",
      "requiredCredentials": ["OpenAI API", "Gmail OAuth2"],
      "requiredNodes": ["n8n-nodes-base.openAi", "n8n-nodes-base.gmail"],
      "author": "Original workflow creator",
      "authorUrl": "https://n8n.io/workflows/1234-template-name/",
      "curatedBy": "brianmurutu",
      "curatorUrl": "https://github.com/brianmurutu",
      "source": "https://n8n.io/workflows/1234-template-name/",
      "version": "1.0.0",
      "testedOn": "n8n 1.x",
      "tags": ["ai", "email", "automation"]
    }
  }
}
```

This metadata is how templates are indexed and credited — fill it in completely when submitting a PR.

---

## 🤝 Contributing

We welcome templates, fixes, and documentation improvements from everyone!

👉 **Read the full guide: [CONTRIBUTING.md](CONTRIBUTING.md)**

**Quick summary:**

1. Fork this repository
2. Create a feature branch: `git checkout -b feat/my-awesome-template`
3. Add your workflow JSON to the correct `templates/<category>/` folder
4. Add a row to the appropriate table in `README.md`
5. Ensure your JSON includes the [metadata block](#-template-metadata-standard)
6. Open a Pull Request using the PR template

All contributions are reviewed for quality, documentation completeness, and functional correctness.

---

## 📜 Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## ⚖️ License

This repository is licensed under the **MIT License** — see [LICENSE](LICENSE) for full text.  
Individual workflow JSON files retain the copyright of their original authors where stated.

---

## ⚠️ Disclaimer

Templates in this repository are provided **as-is** for educational and productivity purposes. The maintainers:

- Do not guarantee templates are free of bugs or security vulnerabilities
- Are not responsible for costs incurred via third-party APIs used by templates
- Recommend testing all workflows in a **staging environment** before production use

Always review a workflow's logic and credential requirements before running it against live data.

---

<div align="center">

**⭐ Star this repo if it helps you — it encourages contributors and helps the community grow!**

Made with ❤️ by the community · [Report an Issue](.github/ISSUE_TEMPLATE/bug_report.md) · [Request a Template](.github/ISSUE_TEMPLATE/template_request.md)

</div>
