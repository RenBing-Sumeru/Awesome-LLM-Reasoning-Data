- Interface unit to inspect: execution component calls and extracted LLM input, LLM output, scalar-reward transitions and trace spans.
- Demonstration rewards to verify: final-answer correctness for Spider text-to-SQL and Calc-X math; 0.9 answer F1 plus 0.1 format validity for MuSiQue RAG.
- Framework boundary to preserve: user supplies datasets, agents, environments and rewards; no canonical trace/reward/model/benchmark corpus is linked.
- Reuse gate before relying on a run: source rights, privacy/consent/redaction, trace and credit lineage, split/contamination analysis, reward validation and pinned runtime evidence.

