# 🤖 AI Agents & LLM Workflow Templates

Autonomous agents, RAG pipelines, AI assistants, and LLM-powered decision-making workflows.

## Templates in This Category

| # | Template | Description | Difficulty |
|---|----------|-------------|------------|
| 1 | [gpt4o-research-agent.json](gpt4o-research-agent.json) | Multi-step web research agent with formatted report | Advanced |
| 2 | [rag-chatbot-pinecone.json](rag-chatbot-pinecone.json) | RAG chatbot over your own documents in Pinecone | Intermediate |
| 3 | [ai-content-moderation-pipeline.json](ai-content-moderation-pipeline.json) | LLM-based content classification & routing | Intermediate |
| 4 | [daily-ai-briefing-generator.json](daily-ai-briefing-generator.json) | Daily news digest with AI summaries via email | Beginner |
| 5 | [autonomous-task-manager-agent.json](autonomous-task-manager-agent.json) | Goal → sub-tasks → execution agent | Advanced |

## Common Credentials Needed

- **OpenAI API** — GPT-4o / GPT-4 for reasoning
- **Pinecone API** — vector database for RAG workflows
- **SerpAPI / Brave Search API** — web search for research agents
- **Gmail / SMTP** — for digest delivery

## Tips

- Use **LangChain nodes** (available in n8n 1.x) for agentic loops with memory.
- Set a **max iterations** safeguard on agent loops to prevent runaway API costs.
- RAG workflows work best with document chunks of 512–1024 tokens.
