# 🧭 Foundations and Primers

> Surveys, primers, classic post-training lineages, data documentation, and evaluation background for readers entering the field.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=foundations_and_primers&mode=find_papers)
> Try: `What should I read first for 🧭 Foundations & Primers?`
> Try: `Compare the data objects and verifier types in 🧭 Foundations & Primers.`
> Try: `Generate an audit checklist for 🧭 Foundations & Primers.`

## 1. What This Track Studies

Use this track when you need the map before the terrain: vocabulary, taxonomies, historical lineages, and recurring audit questions.

This track is the front door of the atlas. It gives new readers a controlled way to understand post-training reasoning data before opening dozens of specialized papers. The goal is not to flatten the field into a generic survey list; it is to teach the reader which objects repeat across the repo: prompts, traces, answers, verifiers, rewards, judges, environments, metadata, and audit evidence.

The track combines field surveys with foundational alignment-data papers because modern reasoning-data work inherits older habits from instruction tuning, RLHF, preference optimization, chain-of-thought prompting, self-training, and data documentation. Those lineages explain why a reasoning-data release is more than a prompt-answer table and why every useful entry needs source, label, verifier, split, license, and contamination context.

Readers should treat this page as a routing layer. Extract the taxonomy first, then jump into the data-type tracks once you know whether you are studying demonstrations, preference pairs, programmatically verified outcomes, process labels, rollout traces, agent episodes, or rubric judgments.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧭 Post-training surveys | field-level maps of post-training, reasoning models, and data-centric LLM practice | survey taxonomy hides concrete data objects |
| 🧠 Reasoning LLM surveys | reasoning-model lineages, claims, and recurring evaluation patterns | model-centric framing obscures data and verifier details |
| 📦 Data documentation / datasheets | datasheets, data statements, lineage, license, and release metadata | reusable data lacks provenance or consent context |
| 🧪 RLHF / reward-model surveys | background linking preference data, reward models, and reasoning rewards | generic alignment lessons are over-applied to verifiable reasoning |
| 🌐 Agent data / tool-use surveys | orientation for tools, web tasks, OS tasks, and repository agents | agent traces are treated as transcripts rather than replayable episodes |
| 🧯 Contamination / evaluation surveys | reproducibility, contamination, model collapse, and benchmark refresh | benchmark deltas are accepted without overlap checks |

### Contents

- [🧭 Post-training surveys](#post-training-surveys)
- [🧠 Reasoning LLM surveys](#reasoning-llm-surveys)
- [📦 Data documentation / datasheets](#data-documentation-datasheets)
- [🧪 RLHF / reward-model surveys](#rlhf-reward-model-surveys)
- [🌐 Agent data / tool-use surveys](#agent-data-tool-use-surveys)
- [🧯 Contamination / evaluation surveys](#contamination-evaluation-surveys)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|

## 5. Full Paper List

### <a id="post-training-surveys"></a>🧭 Post-training surveys

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="reasoning-llm-surveys"></a>🧠 Reasoning LLM surveys

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="data-documentation-datasheets"></a>📦 Data documentation / datasheets

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rlhf-reward-model-surveys"></a>🧪 RLHF / reward-model surveys

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="agent-data-tool-use-surveys"></a>🌐 Agent data / tool-use surveys

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="contamination-evaluation-surveys"></a>🧯 Contamination / evaluation surveys

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Does the taxonomy separate data objects, verifier contracts, and training uses?
- Does the survey cite primary sources rather than only secondary summaries?
- Are missing metadata fields called out instead of smoothed over?

## 7. Open Problems

- Which taxonomy best predicts what a downstream builder should do next?
- How should surveys represent partially disclosed frontier-model data recipes?
- What metadata fields are essential for a living Awesome list to stay reproducible?
- How can Chinese and English learning routes stay aligned as the field changes?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
