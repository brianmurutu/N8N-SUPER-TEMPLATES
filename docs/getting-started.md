# Getting Started with n8n Templates

This guide walks you through setting up n8n and using your first template from this repository.

---

## Prerequisites

- An **n8n instance** — [n8n Cloud](https://n8n.io/cloud/) (easiest) or [self-hosted](https://docs.n8n.io/hosting/)
- A **GitHub account** to clone/fork this repository
- The credentials required by your chosen template (see its `requiredCredentials` field)

---

## Step 1: Install or Access n8n

### Cloud (recommended for beginners)
Sign up at [n8n.io](https://n8n.io) — free tier available.

### Self-hosted with Docker
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```
Then open `http://localhost:5678`.

### npm (global install)
```bash
npm install -g n8n
n8n start
```

---

## Step 2: Pick a Template

Browse the [README category tables](../README.md) and click the `[JSON]` link of your chosen template.

---

## Step 3: Import the Template

**Option A — Import from URL (easiest):**
1. In n8n, click **Workflows** → **New** → **...** → **Import from URL**
2. Paste the raw GitHub URL of the JSON file:  
   `https://raw.githubusercontent.com/YOUR_USERNAME/awesome-n8n-templates/main/templates/email-automation/ai-gmail-auto-labeller.json`
3. Click **Import**

**Option B — Import from File:**
1. Download the `.json` file from this repo
2. In n8n, click **Workflows** → **New** → **...** → **Import from File**
3. Select the downloaded file

---

## Step 4: Configure Credentials

Each template's `meta.infoBay.requiredCredentials` lists what you need.

To add credentials in n8n:
1. Go to **Credentials** (left sidebar)
2. Click **Add Credential**
3. Search for the service (e.g. "Gmail OAuth2")
4. Follow the setup wizard

---

## Step 5: Test the Workflow

1. Use **Test Workflow** (play button) to run manually
2. Check the **Execution Log** for each node's input/output
3. Fix any credential or configuration errors
4. Once satisfied, toggle **Active** to run on trigger

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Credential not found" | Re-add the credential and reconnect it to the node |
| "Rate limit exceeded" | Add a **Wait** node between API calls |
| Workflow not triggering | Check the trigger node settings and ensure the workflow is **Active** |
| Node version mismatch | Update n8n to the version in `testedOn` field |

---

## Next Steps

- Read [CONTRIBUTING.md](../CONTRIBUTING.md) to add your own templates
- Browse all [template categories](../README.md#-template-categories)
- Join the [n8n Community Forum](https://community.n8n.io) for help
