# 🌐 Environment and Agent Trajectory Data

> Tool calls, web/browser tasks, app and OS agents, repository-level SWE episodes, replayable trajectories, and terminal predicates.

## 1. What This Track Studies

Use this track to understand how interactive environments become post-training data sources and feedback contracts.

Agent data turns reasoning from a static completion into an episode. The model observes state, chooses actions, calls tools, receives environment responses, and eventually succeeds, fails, or times out. The environment is therefore part of the verifier, not just a UI around the task.

This track covers tool-use data, browser and web agents, mobile/app tasks, desktop/OS tasks, SWE repository agents, terminal predicates, replay metadata, and agent benchmarks. It is designed for contributors who want to add papers without losing the crucial episode schema.

High-quality cards should state the state/action/observation format, tool schema, environment version, terminal predicate, failure preservation, and whether the same tasks are used for training and evaluation.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🛠️ Tool-use data | tool calls, function signatures, API banks, and tool-use traces | tool schemas change or hide execution failures |
| 🌍 Web/browser agents | web tasks, browser state, navigation traces, and page observations | web state is not replayable after collection |
| 📱 App/mobile agents | mobile apps, app-world tasks, UI actions, and user simulators | UI state and app versions are not pinned |
| 🖥️ OS/desktop agents | desktop/OS tasks, filesystem state, shell actions, and multi-app workflows | hidden environment state makes episodes non-reproducible |
| 🧑‍💻 SWE/repository agents | GitHub issues, code patches, tests, commits, and repository repair episodes | repository commit, tests, and scaffold are not pinned |
| 🔁 Replayable trajectory data | state-action-observation schemas, terminal predicates, and failure traces | success transcript cannot be replayed or audited |
| 🧰 Agent benchmarks and terminal predicates | agent evaluation suites, task resets, terminal predicates, and success/failure labels | score is reported without a replayable predicate |

### Contents

- [🛠️ Tool-use data](#tool-use-data)
- [🌍 Web/browser agents](#web-browser-agents)
- [📱 App/mobile agents](#app-mobile-agents)
- [🖥️ OS/desktop agents](#os-desktop-agents)
- [🧑‍💻 SWE/repository agents](#swe-repository-agents)
- [🔁 Replayable trajectory data](#replayable-trajectory-data)
- [🧰 Agent benchmarks and terminal predicates](#agent-benchmarks-and-terminal-predicates)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|

## 5. Full Paper List

### <a id="tool-use-data"></a>🛠️ Tool-use data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="web-browser-agents"></a>🌍 Web/browser agents

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="app-mobile-agents"></a>📱 App/mobile agents

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="os-desktop-agents"></a>🖥️ OS/desktop agents

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="swe-repository-agents"></a>🧑‍💻 SWE/repository agents

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="replayable-trajectory-data"></a>🔁 Replayable trajectory data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="agent-benchmarks-and-terminal-predicates"></a>🧰 Agent benchmarks and terminal predicates

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Can the state, observation stream, action schema, and terminal predicate be replayed?
- Are tool wrappers, browser state, repository commits, and time/token budgets pinned?
- Are failed and near-miss trajectories preserved?

## 7. Open Problems

- Which agent datasets are replayable enough for RL rather than only SFT?
- How should failed and near-miss trajectories be released?
- Can live web/app environments remain stable enough for benchmark claims?
- What is the minimum metadata for a SWE episode to be auditable?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
