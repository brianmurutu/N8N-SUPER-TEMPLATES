# Template Metadata Standard

Every workflow `.json` file in this repository must include a `meta.infoBay` block.  
This is how templates are indexed, credited, and quality-checked.

---

## Full Schema

```json
{
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "REPLACE_WITH_YOUR_INSTANCE_ID",
    "infoBay": {
      "name": "Human-readable template name",
      "description": "One sentence: what this workflow does and why it matters.",
      "category": "one-of-the-valid-categories",
      "difficulty": "beginner | intermediate | advanced",
      "trigger": "Manual | Webhook | Schedule | Gmail Trigger | ...",
      "requiredCredentials": ["Service A API", "Service B OAuth2"],
      "requiredNodes": [
        "n8n-nodes-base.openAi",
        "n8n-nodes-base.gmail"
      ],
      "author": "Original workflow creator",
      "authorUrl": "https://n8n.io/workflows/1234-template-name/",
      "curatedBy": "brianmurutu",
      "curatorUrl": "https://github.com/brianmurutu",
      "source": "https://n8n.io/workflows/1234-template-name/",
      "version": "1.0.0",
      "testedOn": "Not independently tested; imported from the official n8n template library",
      "tags": ["tag1", "tag2", "tag3"]
    }
  }
}
```

---

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Display name of the template |
| `description` | string | ✅ | One-sentence summary (≤ 20 words) |
| `category` | string (enum) | ✅ | See valid categories below |
| `difficulty` | string (enum) | ✅ | `beginner`, `intermediate`, or `advanced` |
| `trigger` | string | ✅ | How the workflow is triggered |
| `requiredCredentials` | string[] | ✅ | Human-readable credential names |
| `requiredNodes` | string[] | ✅ | n8n node type names used |
| `author` | string | ✅ | Name or handle of the original workflow creator |
| `authorUrl` | string | ✅ | URL identifying the original creator or source listing |
| `curatedBy` | string | ✅ | GitHub username of the repository curator |
| `curatorUrl` | string | ✅ | GitHub profile URL of the repository curator |
| `source` | string | For imports | Official n8n listing for imported workflows |
| `version` | string | ✅ | Semantic version (`major.minor.patch`) |
| `testedOn` | string | ✅ | n8n version tested, or a clear note that it was not independently tested |
| `tags` | string[] | ✅ | Keywords for search/filtering |

---

## Valid Categories

| Value | Description |
|-------|-------------|
| `ai-agents` | LLM agents, RAG, multi-step AI reasoning |
| `email-automation` | Gmail, Outlook, IMAP, SMTP |
| `communication-messaging` | Telegram, Slack, WhatsApp, Discord |
| `crm-sales` | HubSpot, Salesforce, Pipedrive |
| `social-media` | Twitter/X, LinkedIn, Instagram, TikTok |
| `document-management` | PDF, Google Drive, Notion, SharePoint |
| `data-processing` | ETL, APIs, databases, transforms |
| `devops-engineering` | GitHub, CI/CD, cloud monitoring |

---

## Difficulty Levels

| Level | Description |
|-------|-------------|
| `beginner` | ≤ 5 nodes, single credential, common trigger |
| `intermediate` | 5–15 nodes, 2–3 credentials, some conditional logic |
| `advanced` | 15+ nodes, complex branching, multiple services, agent loops |

---

## Why Metadata Matters

- **Attribution**: Original creators and the repository curator are credited separately
- **Discoverability**: Tags and categories make templates searchable
- **CI validation**: The GitHub Actions pipeline enforces completeness
