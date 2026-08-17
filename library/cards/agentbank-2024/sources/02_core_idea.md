The one-sentence contribution is to recover gold action sequences independently of their rationales, then serialize both with observations as large-scale SFT demonstrations. Continuous tasks can use failed exploration plus a known answer, discrete tasks can use environment-state search, and existing gold traces can be reformatted; task execution supplies the feedback contract. This belongs in instruction/demonstration/rationale data because the released target contains the thought and action at each turn, not merely a success label. Closest comparisons are AgentInstruct and Agent-FLAN, which are smaller or emphasize mixture design rather than this annotation scale.

Google Scholar citations: 57（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=AGENT+BANK%3A+Towards+Generalized+LLM+Agents+via+Fine-Tuning+on+50000%2B+Interaction+Trajectories&author=Yifan+Song&hl=en）

Open dataset: Yes
Dataset name: AGENT BANK
Official URL: https://huggingface.co/datasets/Solaris99/AgentBank
Scale: 51,287 trajectories in the paper across 16 tasks; 53,205 rows in 19 hosted configurations at audit time
Record form: Instruction followed by interleaved rationale-bearing actions and environment observations
File / storage format: Hugging Face configurations backed by Parquet conversion
Domains / languages: English reasoning, mathematics, programming, web navigation, embodied tasks, and tool use
Construction and filtering: Exploration, answer forcing, heuristic search, or reformatting, followed by task-native execution checks
License / access constraints: Public and non-gated under Apache-2.0, with upstream task terms still relevant
Intended use: Masked-response trajectory SFT and analysis of cross-task agent generalization
