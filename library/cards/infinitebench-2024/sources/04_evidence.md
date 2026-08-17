The official paper reports that existing long-context LLMs still struggle on 100K+ contexts, and the repository publishes the task table, data download path, scripts, and example results for models such as GPT-4, Claude 2, Kimi-Chat, YaRN-Mistral-7B, Yi-200K models, and ChatGLM-3-128K.

The strongest evidence is task-specific: for retrieval, code, math, dialogue, and multiple choice, the row-level signal is whether the parsed answer matches the target under the official accuracy scorer; for QA and summarization, it is the text-overlap score under the named ROUGE implementation.

Evidence boundary: aggregate averages are not comparable unless all task files, prompt templates, output budgets, API versions, and metric implementations are fixed. A high score on retrieval tasks does not prove broad long-document reasoning, and a ROUGE score is not a semantic correctness certificate.
