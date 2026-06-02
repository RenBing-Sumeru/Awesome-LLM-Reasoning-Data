# 🌐 Environmental Agent, Tool, Web, and SWE Trajectory Data

> Tool calls, browser tasks, app worlds, OS environments, repository-level software engineering, and replayable state-action episodes.

## Why this category matters

Agent data turns reasoning from a static prompt-answer record into an interaction. A tool-using model chooses actions, receives observations, updates state, and eventually succeeds, fails, or asks for help. The environment is not decoration; it is the verifier-bearing substrate. In web tasks, it may be a browser state. In app and OS tasks, it may be a controllable software world. In repository-level SWE tasks, it may be a Git diff plus tests. The training record is often an episode, not a single completion.

This category collects the lineage from ReAct and Toolformer through ToolLLM, API-Bank, Gorilla, APIGen, BFCL, ToolSandbox, tau-bench, Mind2Web, WebLINX, BrowserGym, WebArena, VisualWebArena, WorkArena, OSWorld, AndroidWorld, AppWorld, OpenHands, SWE-bench, SWE-bench Verified, SWE-Gym, R2E-Gym, SWE-RL, SWE-smith, SWE-rebench, Terminal-Bench, and The Agent Company. The names vary, but the reusable questions are the same: what is the state, what actions are valid, what makes the task complete, and can the episode be replayed?

For practitioners, environmental data is attractive because it produces realistic feedback and naturally supports reinforcement learning. It is also expensive and fragile. Simulators drift, APIs change, hidden tests leak, browser pages mutate, and a successful trajectory may contain accidental shortcuts. Good papers document environment versions, task generation, action spaces, termination predicates, failure labels, and whether the same tasks are used for training and evaluation.

Read the full list with an engineering lens. A benchmark can become a training environment only if it supports reproducible rollouts and sufficiently cheap verification. A dataset of tool-call demonstrations may be useful for SFT but weak for RL if the environment cannot execute the calls. The category pages mark missing official URLs as `needs_search` to avoid inventing repository links for fast-moving agent systems.

## How to read this category

- Write down the episode schema: observation, model state, action, tool/environment response, reward, terminal predicate, and replay metadata.
- Check whether tasks are static demonstrations, executable benchmarks, live environments, or generated training worlds.
- Inspect decontamination and split policy carefully, especially for SWE tasks derived from public GitHub issues.
- Avoid assuming agent benchmark success transfers to training usefulness unless the environment can be reset, replayed, and instrumented.

## Must-read starter set

| Paper | Year | Why start here | Link status |
|---|---:|---|---|
| [SWE-Gym](https://arxiv.org/abs/2412.21139) (2025) · 🟡 partial | 2025 | Repository-scale training environment showing substrate as data. | linked |
| [R2E-Gym](https://arxiv.org/abs/2504.07164) (2025) · 🟡 partial | 2025 | Verifiable SWE environment for reasoning-to-edit tasks. | linked |
| Qwen3-Coder (2025) · 🟡 partial | 2025 | Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release. | linked |

## Promoted linked entries

This section only includes entries with at least one official artifact link and a non-seed local description. BibTeX-seeded records stay visible in the queue below until a curator checks primary sources and writes paper-specific metadata.

### 🛠️ Tool-use and API datasets

- **Qwen3-Coder**
  <sub>2025 · GitHub / project report · 🚀 model report · 🏗️ construction recipe · 🧮 programmatic · 🌐 environmental · 🪜 answer level, full episode · 🎯 sft, rlvr · 🟡 partial</sub>
  [🐙 Code](https://github.com/QwenLM/Qwen3-Coder) · [🌐 Project](https://qwenlm.github.io/blog/qwen3-coder/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Coding-agent recipe entry for studying how code data, tool-call tasks, verifiable execution, and agentic RL enter a frontier open model release.

### 💻 Software-engineering agents

- **[R2E-Gym](https://arxiv.org/abs/2504.07164)**
  <sub>2025 · arXiv · 🌐 agent environment · 🧰 benchmark · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2504.07164) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Verifiable SWE environment for reasoning-to-edit tasks.
- **[SWE-Gym](https://arxiv.org/abs/2412.21139)**
  <sub>2025 · arXiv · 📦 data release · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.21139) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Repository-scale training environment showing substrate as data.

## Needs-search / metadata queue

These records are intentionally separated from the starter set. They are useful bibliography leads, but the atlas should not promote them until official links and paper-specific notes are added.

- **[OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments](https://arxiv.org/abs/2404.07972)**
  <sub>2024 · NeurIPS · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2404.07972) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[WebArena: A realistic web environment for building autonomous agents](https://arxiv.org/abs/2307.13854)**
  <sub>2023 · ICLR · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.13854) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[BrowserGym: A gym environment for web agents](https://arxiv.org/abs/2412.05467)**
  <sub>2024 · arXiv · 🛠️ infrastructure · 🌐 agent environment · 🧰 benchmark · 🌐 environmental · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2412.05467) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **VisualWebArena: Evaluating multimodal agents on realistic visual web tasks**
  <sub>2024 · arXiv preprint · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode · 🎯 evaluation, agent training · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AndroidWorld: A dynamic benchmarking environment for autonomous agents](https://arxiv.org/abs/2405.14573)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2405.14573) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[AppWorld: A controllable world of apps and people for benchmarking interactive coding agents](https://arxiv.org/abs/2407.18901)**
  <sub>2024 · arXiv · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 full episode, state action level · 🎯 evaluation, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.18901) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://arxiv.org/abs/2407.16741)**
  <sub>2024 · ICLR · 🛠️ infrastructure · 🌐 agent environment · 🌐 environmental · 🔀 mixed · 🪜 full episode, state action level · 🎯 agent training, evaluation · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2407.16741) · [🐙 Code](https://github.com/All-Hands-AI/OpenHands) · [🌐 Project](https://www.openhands.dev/) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-Gym: Advancing software engineering agents with training and evaluation environments**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[ToolLLM: Facilitating large language models to master 16000+ real-world APIs](https://arxiv.org/abs/2307.16789)**
  <sub>2023 · ICLR · 📦 data release · 🧰 benchmark · 🌐 agent environment · 🌐 environmental · 🧮 programmatic · 🪜 state action level · 🎯 sft, agent training · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2307.16789) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **tau-bench: A benchmark for tool-agent-user interaction in real-world domains**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Mind2Web: Towards a generalist agent for the web**
  <sub>2023 · NeurIPS · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **R2E-Gym: Procedural training environments for repository-level code agents**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **WorkArena: How capable are web agents at solving common knowledge work tasks?**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **The Agent Company: Benchmarking and analyzing agent work in enterprise-like environments**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention](https://arxiv.org/abs/2506.13585)**
  <sub>2025 · arXiv preprint arXiv:2506.13585 · 🚀 model report · 📈 scaling study · 🏗️ construction recipe · 🔀 mixed · 🧮 programmatic · 🪜 answer level, full episode · 🎯 rlvr, test time compute · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2506.13585) · [🐙 Code](https://github.com/MiniMax-AI/MiniMax-M1) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **MCP-Universe: Tool and environment infrastructure for agent evaluation and training**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Terminal-Bench: A benchmark and task environment for terminal agents**
  <sub>2026 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents](https://arxiv.org/abs/2505.20411)**
  <sub>2025 · arXiv preprint arXiv:2505.20411 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2505.20411) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646)**
  <sub>2026 · arXiv preprint arXiv:2511.13646 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2511.13646) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training](https://arxiv.org/abs/2602.03411)**
  <sub>2026 · arXiv preprint arXiv:2602.03411 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2602.03411) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **API-Bank: A benchmark for tool-augmented LLMs**
  <sub>2023 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-bench: Can language models resolve real-world GitHub issues?**
  <sub>2023 · ICLR · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ToolSandbox: A stateful, conversational, interactive evaluation benchmark for tool use**
  <sub>2024 · arXiv preprint · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-RL: Advancing language agents for software engineering via reinforcement learning**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **SWE-smith: Scaling data construction for software engineering agents**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution](https://arxiv.org/abs/2502.18449)**
  <sub>2025 · Advances in Neural Information Processing Systems (NeurIPS) · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2502.18449) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **[Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence](https://arxiv.org/abs/2604.18292)**
  <sub>2026 · arXiv preprint arXiv:2604.18292 · 🧭 survey background · ❔ unknown · 🟡 partial</sub>
  [📄 arXiv](https://arxiv.org/abs/2604.18292) · [📚 BibTeX index](../reports/bib_index.md)
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Introducing SWE-bench Verified**
  <sub>2024 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **Why we no longer evaluate on SWE-bench Verified**
  <sub>2025 · unknown · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **ScienceWorld: Is your agent smarter than a 5th grader?**
  <sub>2022 · EMNLP · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **xLAM: A family of large action models to empower AI agent systems**
  <sub>2025 · NAACL · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.
- **HOList: An environment for machine learning of higher-order logic theorem proving**
  <sub>2019 · ICML · 🧭 survey background · ❔ unknown · 🔎 needs_search</sub>
  [📚 BibTeX index](../reports/bib_index.md) · `needs_search: official links not pinned locally`
  _Why it matters:_ Bibliography lead awaiting primary-source link and paper-specific metadata before promotion.

## Open questions

- What minimum replay metadata should every agent trajectory release include?
- How can benchmark maintainers refresh task pools without breaking comparability?
- When are generated environments realistic enough for post-training rather than merely curriculum pretraining?
- How should trajectories expose failed attempts so models learn recovery rather than just imitation of successful traces?

## Related docs

- [07_agent_trajectory_data.md](../docs/07_agent_trajectory_data.md)
- [03_reasoning_data_objects.md](../docs/03_reasoning_data_objects.md)
- [05_construction_cookbook.md](../docs/05_construction_cookbook.md)
- [09_audit_and_failure_modes.md](../docs/09_audit_and_failure_modes.md)

## Related cards

- [agent_environment_release_card.md](../cards/examples/agent_environment_release_card.md)
- [agent_trajectory_card_template.md](../cards/agent_trajectory_card_template.md)

## Back to map

- [📚 Paper atlas README](README.md)
- [🌟 Repository README](../README.md)
