Step 1 — Audit and align source traces.
Input: AgentInstruct and ToolBench records in ReAct, JSON, and tool-specific formats.
Operation: Remove malformed records and few-shot demonstrations, require ToolBench FINAL ANSWER, remove DFSDT retry-preface samples, and convert fixed templates into multi-turn natural conversations.
Output and transition: Clean aligned conversations enter capability decomposition.
Check / stop rule: Reject records that violate Thought-Action-ActionInput or the stated ToolBench completion rules.

Step 2 — Decompose capabilities.
Input: Each aligned reasoning and tool-use conversation.
Operation: Derive separate training views for reasoning, tool retrieval, argument understanding, and instruction/format following, applying loss only to assistant clauses.
Output and transition: Four capability-specific pools become candidates for mixture weighting.
Check / stop rule: Preserve source semantics and required target fields; a view without its target capability is not admitted to that pool.

Step 3 — Balance data and add negatives.
Input: Capability pools plus queries crossing whether tools are provided and whether users request tool use.
Operation: Weight reasoning:retrieval:understanding at 1:0.25:0.75, add 2,000 format-following examples, and construct cases where tools are absent but requested or present but irrelevant.
Output and transition: A 24,703-record mixture, defaulting to 10% ReAct and 90% conversation format, enters SFT.
Check / stop rule: Negative targets must refuse nonexistent actions or answer normally without invoking an irrelevant tool; otherwise reject them.

Step 4 — Fine-tune and evaluate.
Input: The weighted mixture and Llama-2 at 7B, 13B, or 70B.
Operation: Run cosine-scheduled SFT, then evaluate held-in tasks, HotpotQA, SciWorld, WebArena, T-Eval, Agent-H, and general benchmarks.
Output and transition: Agent-FLAN checkpoints plus evidence on agent performance, hallucination, and scaling.
Check / stop rule: Compare both task score and Agent-H hallucination score; the paper does not specify one release-wide early-stopping threshold.

Reproducibility: pin the seven JSONL files, inherited source versions, transformation templates, loss masks, mixture weights, 10/90 format ratio, negative prompts, model scale, and Agent-H revision. Source-teacher cost, semantic decontamination, and one total training wall time are not disclosed.
