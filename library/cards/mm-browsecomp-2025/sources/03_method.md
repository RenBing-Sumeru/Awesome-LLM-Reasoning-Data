1. Inputs: a benchmark question, hidden or encrypted reference answer fields in the release, relevant web/media evidence, and the browsing-agent scaffold being evaluated.
2. Pipeline: the agent searches or navigates the web, opens candidate pages, reads text, inspects images or videos when needed, reasons over the gathered evidence, and returns a concise answer.
3. Outputs: final answer text, optional browsing trace/logs from the evaluated agent, and a score from the official evaluation script or judge path.
4. Feedback contract: the official repository uses reference answers and a checklist/judge prompt with a pinned LLM judge; web navigation itself is only the evidence-gathering substrate.
5. Reproducibility notes: pin dataset version, decrypted/plaintext handling policy, judge model and prompt, browser/search tools, date of web access, media availability, and API/tool budgets.
