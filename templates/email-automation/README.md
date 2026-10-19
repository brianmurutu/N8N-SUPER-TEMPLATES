# 📧 Email Automation Templates

Workflows for Gmail, Outlook, IMAP/SMTP — smart routing, AI drafting, classification, and follow-ups.

## Templates in This Category

| # | Template | Description | Difficulty |
|---|----------|-------------|------------|
| 1 | [ai-gmail-auto-labeller.json](ai-gmail-auto-labeller.json) | Labels incoming Gmail messages with AI | Beginner |
| 2 | [personalized-daily-newsletter.json](personalized-daily-newsletter.json) | Summarizes RSS feeds with Gemini and emails a daily digest | Advanced |

## Common Credentials Needed

- **Gmail OAuth2** — for Gmail-based workflows
- **Microsoft Outlook OAuth2** — for Outlook-based workflows
- **OpenAI API** — for AI-powered classification and drafting
- **SMTP** — for generic send workflows

## Tips

- Gmail Trigger polls every minute by default; adjust in the node settings.
- Always test with a non-production Gmail account first.
- Use Gmail labels (not just stars) — they're more programmatically reliable.
