# 🌐 Environmental Agent, Tool, Web, and SWE Trajectory Data

> Tool calls, browser tasks, app worlds, OS environments, repository-level software engineering, and replayable state-action episodes.

## What this category means

Use this page to learn how an environment becomes a data source: observations, actions, tools, traces, tests, rewards, and replay metadata.

Agent data turns reasoning from a static prompt-answer record into an interaction. A tool-using model chooses actions, receives observations, updates state, and eventually succeeds, fails, or asks for help. The environment is not decoration; it is the verifier-bearing substrate. In web tasks, it may be a browser state. In app and OS tasks, it may be a controllable software world. In repository-level SWE tasks, it may be a Git diff plus tests. The training record is often an episode, not a single completion.

This category collects the lineage from ReAct and Toolformer through ToolLLM, API-Bank, Gorilla, APIGen, BFCL, ToolSandbox, tau-bench, Mind2Web, WebLINX, BrowserGym, WebArena, VisualWebArena, WorkArena, OSWorld, AndroidWorld, AppWorld, OpenHands, SWE-bench, SWE-bench Verified, SWE-Gym, R2E-Gym, SWE-RL, SWE-smith, SWE-rebench, Terminal-Bench, and The Agent Company. The names vary, but the reusable questions are the same: what is the state, what actions are valid, what makes the task complete, and can the episode be replayed?

For practitioners, environmental data is attractive because it produces realistic feedback and naturally supports reinforcement learning. It is also expensive and fragile. Simulators drift, APIs change, hidden tests leak, browser pages mutate, and a successful trajectory may contain accidental shortcuts. Good papers document environment versions, task generation, action spaces, termination predicates, failure labels, and whether the same tasks are used for training and evaluation.

## Read first

| Work | Year | Venue | Links | Why it matters |
|---|---:|---|---|---|
| SWE-Gym | 2025 | arXiv | [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md) | Repository-scale training environment showing substrate as data. |
| LeanDojo: Theorem proving with retrieval-augmented language models | 2023 | NeurIPS Datasets and Benchmarks | [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../cards/agents/leandojo.md) | It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record. |
| ToolLLM: Facilitating large language models to master 16000+ real-world APIs | 2023 | ICLR | [Paper](https://arxiv.org/abs/2307.16789) · [Card](../cards/agents/toolllm_toolbench.md) | Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback. |
| Leaky Thoughts | 2025 | arXiv | [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../cards/failures/leaky-thoughts.md) | It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface. |
| MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | 2025 | arXiv preprint arXiv:2506.13585 | [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../cards/recipes/minimax_m1.md) | Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces. |
| R2E-Gym | 2025 | arXiv | [Paper](https://arxiv.org/abs/2504.07164) · [Card](../cards/agents/r2e_gym.md) | Verifiable SWE environment for reasoning-to-edit tasks. |
| AndroidWorld: A dynamic benchmarking environment for autonomous agents | 2024 | arXiv | [Paper](https://arxiv.org/abs/2405.14573) · [Card](../cards/agents/androidworld.md) | Android tasks turn mobile UI state and action histories into evaluable agent trajectories. |
| AppWorld: A controllable world of apps and people for benchmarking interactive coding agents | 2024 | arXiv | [Paper](https://arxiv.org/abs/2407.18901) · [Card](../cards/agents/appworld.md) | Controllable app world for interactive agents where tool/API state and final task success form the feedback contract. |
| BrowserGym: A gym environment for web agents | 2024 | arXiv | [Paper](https://arxiv.org/abs/2412.05467) · [Card](../cards/agents/browsergym.md) | A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation. |
| OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments | 2024 | NeurIPS | [Paper](https://arxiv.org/abs/2404.07972) · [Card](../cards/agents/osworld.md) | Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation. |

## Full paper list

### 🧭 Survey Background

- 🧭 **[Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence](https://arxiv.org/abs/2604.18292)**
  <sub>2026 · arXiv preprint arXiv:2604.18292 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2604.18292)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646)**
  <sub>2026 · arXiv preprint arXiv:2511.13646 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2511.13646)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training](https://arxiv.org/abs/2602.03411)**
  <sub>2026 · arXiv preprint arXiv:2602.03411 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2602.03411)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2502.18449)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · 🧭 survey background · unknown · unknown · L1_link_verified</sub>
  [Paper](https://arxiv.org/abs/2505.20411)
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

### 🧯 Audit Failure

- 🧯 **[Leaky Thoughts](https://arxiv.org/abs/2506.15674)**
  <sub>2025 · arXiv · 🧯 audit failure · 🧰 benchmark · judgment required · environmental · evaluation · safety alignment · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2506.15674) · [ACL](https://aclanthology.org/2025.emnlp-main.1347/) · [Code](https://github.com/parameterlab/leaky_thoughts) · [Card](../cards/failures/leaky-thoughts.md)
  _Why it matters:_ It turns chain-of-thought and test-time compute into a privacy audit problem: more internal reasoning can increase utility while enlarging the attack surface.

### 🚀 Model Report

- 🚀 **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · mixed · programmatic · rlvr · test time compute · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2506.13585) · [Code](https://github.com/MiniMax-AI/MiniMax-M1) · [Card](../cards/recipes/minimax_m1.md)
  _Why it matters:_ Frontier-style model report connecting efficient long-context/test-time compute, RL training, and software/agent evaluation surfaces.

### 🌐 Agent Environment

- 🌐 **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2504.07164) · [Card](../cards/agents/r2e_gym.md)
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
- 🌐 **[ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)**
  <sub>2023 · ICLR · 🌐 agent environment · 🏗️ construction recipe · environmental · mixed · agent training · evaluation · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2210.03629) · [OpenReview](https://openreview.net/forum?id=WE_vluYUL-X) · [Code](https://github.com/ysymyth/ReAct) · [Project](https://react-lm.github.io/) · [Card](../cards/agents/react.md)
  _Why it matters:_ It is a foundational agent-data pattern: the training/evaluation record is not just an answer but a trajectory of thought-like notes, actions, observations, and final response.

### 📦 Data Release

- 📦 **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · environmental · programmatic · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.21139) · [Card](../cards/agents/swe_gym.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.
- 📦 **[LeanDojo: Theorem proving with retrieval-augmented language models](https://arxiv.org/abs/2306.15626)**
  <sub>2023 · NeurIPS Datasets and Benchmarks · 📦 data release · 🧰 benchmark · environmental · programmatic · agent training · sft · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2306.15626) · [Venue](https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html) · [Code](https://github.com/lean-dojo/LeanDojo) · [Data](https://zenodo.org/records/10114157) · [Project](https://leandojo.org/) · [Card](../cards/agents/leandojo.md)
  _Why it matters:_ It turns formal proof work into reusable agent data: repository state, accessible premises, proof states, tactics, retrieval context, and verifier feedback are all part of the record.
- 📦 **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · environmental · programmatic · sft · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.16789) · [Card](../cards/agents/toolllm_toolbench.md)
  _Why it matters:_ Tool-use data and ToolBench-style evaluation show how API calls become the reasoning trace and how tool responses anchor feedback.

### 🧰 Benchmark

- 🧰 **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2405.14573) · [Card](../cards/agents/androidworld.md)
  _Why it matters:_ Android tasks turn mobile UI state and action histories into evaluable agent trajectories.
- 🧰 **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.18901) · [Card](../cards/agents/appworld.md)
  _Why it matters:_ Controllable app world for interactive agents where tool/API state and final task success form the feedback contract.
- 🧰 **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2404.07972) · [Card](../cards/agents/osworld.md)
  _Why it matters:_ Open-ended computer-use benchmark that makes environment state, UI actions, and terminal outcomes central to reasoning-data evaluation.
- 🧰 **[SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · programmatic · evaluation · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2310.06770) · [OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [Code](https://github.com/swe-bench/SWE-bench) · [Project](https://www.swebench.com/original.html) · [Card](../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)
  _Why it matters:_ It is the agent/environment anchor where the reasoning-data object includes repository state, issue text, actions, patches, and test-backed outcomes.
- 🧰 **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2307.13854) · [Card](../cards/agents/webarena.md)
  _Why it matters:_ Realistic web tasks where the data object is an agent episode and the verifier is task completion in a live-like browser environment.

### 🛠️ Infrastructure

- 🛠️ **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · environmental · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2412.05467) · [Card](../cards/agents/browsergym.md)
  _Why it matters:_ A web-agent substrate: useful less as a static dataset and more as a repeatable environment for trajectory collection and evaluation.
- 🛠️ **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · environmental · mixed · agent training · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2407.16741) · [Code](https://github.com/All-Hands-AI/OpenHands) · [Project](https://www.openhands.dev/) · [Card](../cards/agents/openhands.md)
  _Why it matters:_ Open platform for software-development agents; useful for thinking about executable trajectories, sandbox state, and community-maintained agent scaffolds.

### 🏗️ Construction Recipe

- 🏗️ **[Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)**
  <sub>2023 · NeurIPS · 🏗️ construction recipe · 🌐 agent environment · mixed · sft · agent training · L5_audit_ready</sub>
  [Paper](https://arxiv.org/abs/2302.04761) · [OpenReview](https://openreview.net/forum?id=Yacmpz84TH) · [Card](../cards/agents/toolformer.md)
  _Why it matters:_ It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.

### ⚠️ Needs search or metadata

- 🧭 **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **MCP-Universe: Tool and environment infrastructure for agent evaluation and training**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🚀 **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · programmatic · environmental · sft · rlvr · L0_seeded</sub>
  [Code](https://github.com/QwenLM/Qwen3-Coder) · [Project](https://qwenlm.github.io/blog/qwen3-coder/) · [Card](../cards/recipes/qwen3_coder.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.
- 🧭 **R2E-Gym: Procedural training environments for repository-level code agents**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SWE-RL: Advancing language agents for software engineering via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SWE-smith: Scaling data construction for software engineering agents**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **xLAM: A family of large action models to empower AI agent systems**
  <sub>2025 · NAACL · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **APIGen: Automated pipeline for generating verifiable and diverse function-calling datasets**
  <sub>2024 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Introducing SWE-bench Verified**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **PaperQA2 / Language agents achieve superhuman synthesis of scientific knowledge**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **SWE-Gym: Advancing software engineering agents with training and evaluation environments**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ToolACE: Winning the points of LLM function calling**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧰 **VisualWebArena: Evaluating multimodal agents on realistic visual web tasks**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · environmental · evaluation · agent training · L0_seeded</sub>
  needs_search
  _Why it matters:_ Extends WebArena-style evaluation toward visual web interaction, useful when reasoning data includes screenshots and UI state.
- 🧭 **WorkArena: How capable are web agents at solving common knowledge work tasks?**
  <sub>2024 · unknown · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Mind2Web: Towards a generalist agent for the web**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **Reflexion: Language agents with verbal reinforcement learning**
  <sub>2023 · NeurIPS · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **ScienceWorld: Is your agent smarter than a 5th grader?**
  <sub>2022 · EMNLP · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.
- 🧭 **HOList: An environment for machine learning of higher-order logic theorem proving**
  <sub>2019 · ICML · 🧭 survey background · unknown · unknown · L0_seeded</sub>
  needs_search
  _Why it matters:_ Use this entry as a verified citation waypoint until a paper-specific audit note is added.

## What to audit

- Can the state, observation stream, action schema, and terminal predicate be replayed?
- Are tool wrappers, browser state, repository commits, and time/token budgets pinned?
- Are failed and near-miss trajectories preserved?

## Related cards

- [Leaky Thoughts](../cards/failures/leaky-thoughts.md)
- [MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](../cards/recipes/minimax_m1.md)
- [R2E-Gym](../cards/agents/r2e_gym.md)
- [SWE-Gym](../cards/agents/swe_gym.md)
- [AndroidWorld: A dynamic benchmarking environment for autonomous agents](../cards/agents/androidworld.md)
- [AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](../cards/agents/appworld.md)
- [BrowserGym: A gym environment for web agents](../cards/agents/browsergym.md)
- [OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](../cards/agents/osworld.md)
- [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](../cards/agents/openhands.md)
- [LeanDojo: Theorem proving with retrieval-augmented language models](../cards/agents/leandojo.md)
- [ReAct: Synergizing reasoning and acting in language models](../cards/agents/react.md)
- [SWE-bench: Can language models resolve real-world GitHub issues?](../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md)
- [ToolLLM: Facilitating large language models to master 16000+ real-world APIs](../cards/agents/toolllm_toolbench.md)
- [Toolformer: Language models can teach themselves to use tools](../cards/agents/toolformer.md)
- [WebArena: A realistic web environment for building autonomous agents](../cards/agents/webarena.md)
- [Qwen3-Coder](../cards/recipes/qwen3_coder.md)

## Open gaps

- What minimum replay metadata should every agent trajectory release include?
- How can benchmark maintainers refresh task pools without breaking comparability?
- When are generated environments realistic enough for post-training rather than merely curriculum pretraining?
- How should trajectories expose failed attempts so models learn recovery rather than just imitation of successful traces?

## Back to map

- [Paper atlas README](README.md)
- [Repository README](../README.md)
