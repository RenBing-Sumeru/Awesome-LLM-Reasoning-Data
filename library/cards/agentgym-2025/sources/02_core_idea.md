The contribution is a gather-and-filter pipeline that converts heterogeneous live environments into a common pool of successful ReAct demonstrations. Existing traces or rule-solvable paths receive added thoughts, while other paths come from commercial-model exploration or crowdsourcing; environment reward is the feedback contract. The category rationale is direct: the released rows supervise intermediate thoughts and actions in SFT. AgentInstruct and AGENT BANK are the closest data comparisons, while AgentBench is mainly an evaluation comparison.

Google Scholar citations: 160（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=AGENT+GYM%3A+Evaluating+and+Training+Large+Language+Model-based+Agents+across+Diverse+Environments&author=Zhiheng+Xi&hl=en）

Open dataset: Yes
Dataset name: AgentTraj-L
Official URL: https://huggingface.co/datasets/AgentGym/AgentTraj-L
Scale: 14,485 high-quality trajectories across 11 environments, within a 14-environment framework
Record form: Multi-turn instruction, thought, action, observation, and reward episode
File / storage format: Public Hugging Face dataset files with environment-specific records
Domains / languages: English web navigation, text games, embodied tasks, tools, and programming
Construction and filtering: Rule/human traces with added thoughts or model/crowd exploration, followed by reward and correctness filtering
License / access constraints: Non-gated public access; no dedicated dataset license declared, while code is MIT
Intended use: Cross-environment agent SFT and controlled comparison with reward-based self-improvement
