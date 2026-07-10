# 🧱 Instruction, Demonstration, and Rationale Data

> Instruction-response examples, human demonstrations, synthetic instructions, rationales, chain-of-thought traces, and teacher-written reasoning targets.

## 1. What This Track Studies

Use this track to understand how reasoning behavior is serialized before preference, verifier, or environment feedback is added.

Many reasoning-data systems still begin with demonstrations: a task, a target answer, and sometimes a rationale or chain-of-thought trace. This track collects the papers that teach how those targets are sourced, generated, filtered, distilled, and reused for SFT or bootstrapped reasoning improvement.

The key distinction is fidelity. A rationale can be a useful teaching artifact, but it can also be a style target that merely looks like reasoning. For every paper, readers should ask who authored the trace, whether the final answer was checked, whether rejected traces are visible, and whether the training objective consumes the trace or only the final answer.

This track gives contributors a clear home for instruction tuning, self-instruction, CoT, STaR, long/short reasoning traces, and teacher-distilled demonstration releases without mixing them into preference rewards or programmatic-verifier work.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 🧱 Instruction tuning / SFT data | instruction-response examples, demonstrations, and target behavior records | prompt sources and mixture weights are hidden |
| 🧑‍🏫 Human demonstrations | human-written solutions, explanations, rationales, and expert demonstrations | human trace policy and expertise are unclear |
| 🤖 Synthetic instruction data | self-instruct, teacher-generated tasks, and synthetic instruction mixtures | synthetic prompts collapse diversity or inherit teacher artifacts |
| 🧠 Chain-of-thought / rationale data | rationales, CoT traces, self-consistency, and reasoning-style supervision | trace style is mistaken for faithful reasoning |
| 🔁 Self-training / STaR | bootstrapped traces, self-training, critique loops, and filtered self-improvement | feedback loop repeats hidden errors or shortcuts |
| ✂️ Long/short CoT distillation | teacher long traces, distilled short traces, and reasoning compression | distillation loses uncertainty and failed attempts |

### Contents

- [🧱 Instruction tuning / SFT data](#instruction-tuning-sft-data)
- [🧑‍🏫 Human demonstrations](#human-demonstrations)
- [🤖 Synthetic instruction data](#synthetic-instruction-data)
- [🧠 Chain-of-thought / rationale data](#chain-of-thought-rationale-data)
- [🔁 Self-training / STaR](#self-training-star)
- [✂️ Long/short CoT distillation](#long-short-cot-distillation)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|

## 5. Full Paper List

### <a id="instruction-tuning-sft-data"></a>🧱 Instruction tuning / SFT data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="human-demonstrations"></a>🧑‍🏫 Human demonstrations

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="synthetic-instruction-data"></a>🤖 Synthetic instruction data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="chain-of-thought-rationale-data"></a>🧠 Chain-of-thought / rationale data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="self-training-star"></a>🔁 Self-training / STaR

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="long-short-cot-distillation"></a>✂️ Long/short CoT distillation

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- What exactly is serialized: instruction, answer, rationale, long-CoT trace, critique, or distilled target?
- Who wrote the target behavior: human, teacher model, self-generated policy, or frontier model?
- Can trace style be separated from faithful reasoning and final correctness?

## 7. Open Problems

- When does training on rationales teach transferable reasoning rather than trace style?
- How much teacher identity and sampling metadata should an open rationale release disclose?
- Can long-CoT distillation preserve useful uncertainty and failed attempts?
- What should a paper card record when the demonstration source is partially hidden?

## 8. Related Paper-Card Sources

- No paper-card sources are linked for this category yet.

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
