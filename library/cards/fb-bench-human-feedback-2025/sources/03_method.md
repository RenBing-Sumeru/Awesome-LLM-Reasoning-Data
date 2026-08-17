1. **Collect scenarios:** Chinese multi-turn revision problems are selected from real user interactions and common applications, covering eight task categories such as knowledge, reasoning, writing, and task execution.
2. **Label deficiencies:** The first response is categorized by five deficiency types, including factual error, reasoning failure, omission, irrelevance, and failure to follow requirements.
3. **Construct feedback:** Nine feedback types are designed from realistic user expressions, including direct correction, added constraints, challenge or rebuttal, follow-up questions, and hints.
4. **Write checklists:** Each sample receives correction requirements, content to preserve, and prohibited new failures, with human review ensuring alignment between feedback and deficiency.
5. **Run evaluation:** The tested model generates a second-turn response, a GPT judge scores each weighted checklist item, and performance is analyzed by task, deficiency, and feedback type.

