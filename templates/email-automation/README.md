# 📧 Email Automation Templates

Workflows for Gmail, Outlook, IMAP/SMTP — smart routing, AI drafting, classification, and follow-ups.

## Templates in This Category

| # | Template | Description | Difficulty |
|---|----------|-------------|------------|
| 1 | [ai-gmail-auto-labeller.json](ai-gmail-auto-labeller.json) | Labels incoming Gmail messages with AI | Beginner |
| 2 | [smart-reply-drafter.json](smart-reply-drafter.json) | Drafts email replies using GPT-4 | Beginner |
| 3 | [phishing-email-detector.json](phishing-email-detector.json) | Flags phishing attempts and alerts Slack | Intermediate |
| 4 | [lead-followup-sequence.json](lead-followup-sequence.json) | Timed follow-up email sequence for leads | Intermediate |
| 5 | [outlook-auto-categoriser.json](outlook-auto-categoriser.json) | Moves Outlook emails into folders via AI | Beginner |

## Common Credentials Needed

- **Gmail OAuth2** — for Gmail-based workflows
- **Microsoft Outlook OAuth2** — for Outlook-based workflows
- **OpenAI API** — for AI-powered classification and drafting
- **SMTP** — for generic send workflows

## Tips

- Gmail Trigger polls every minute by default; adjust in the node settings.
- Always test with a non-production Gmail account first.
- Use Gmail labels (not just stars) — they're more programmatically reliable.
