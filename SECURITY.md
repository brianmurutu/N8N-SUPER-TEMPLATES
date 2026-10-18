# Security Policy

## Supported Versions

This repository contains **workflow template JSON files**, not executable application code. Security support applies to the repository tooling and scripts.

| Component | Supported |
|-----------|-----------|
| Template JSON files | ✅ |
| CI/CD scripts (`scripts/`) | ✅ |
| GitHub Actions workflows | ✅ |

## Reporting a Vulnerability

If you discover a security issue in this repository — including:

- A template that inadvertently leaks credentials or sensitive data
- A CI script with a command injection vulnerability
- A template that performs unsafe operations when imported

Please **do not** open a public issue. Instead:

1. Go to **Security → Report a Vulnerability** on GitHub (private disclosure).
2. Describe the issue, affected file(s), and steps to reproduce.
3. We will respond within **72 hours** and coordinate a fix + disclosure timeline.

## Template Security Best Practices

When using templates from this repository:

- **Never run a workflow against live production data without testing it first.**
- **Review all HTTP Request nodes** — verify the target URLs are what you expect.
- **Check Code nodes** — read any JavaScript or Python code before executing it.
- **Rotate credentials** if you accidentally expose them during setup.
- **Use the least-privilege principle** — grant credentials only the scopes a workflow needs.
