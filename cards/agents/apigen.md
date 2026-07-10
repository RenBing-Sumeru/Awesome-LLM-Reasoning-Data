<!-- entry_id: apigen-automated-pipeline-for-generating-verifiable-and-diverse-function-calling-2024 -->
<!-- card_type: agents -->
# 🌐 APIGen: Automated Pipeline for Generating Verifiable and Diverse Function-Calling Datasets

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=apigen-automated-pipeline-for-generating-verifiable-and-diverse-function-calling-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=apigen-automated-pipeline-for-generating-verifiable-and-diverse-function-calling-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=apigen-automated-pipeline-for-generating-verifiable-and-diverse-function-calling-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🌐 Environment & Agent Trajectories (Track 06) -->
> Subfield: 🛠️ Tool-use data

## One-line takeaway

APIGen is a verifier-heavy construction recipe for function-calling data: generate candidate calls, then keep examples that pass schema, execution, and semantic checks.

## Why this matters

This agent trajectory card is included because it helps readers connect a citation to an engineering decision. Read it through three linked questions: what is the data object, what verifies it, and what would fail if the verifier or metadata were wrong?

Local role metadata: `data_release, construction_recipe, agent_environment`. Local verification contract: `programmatic`. Local training/evaluation use: `sft, agent_training, evaluation`. The current atlas status is `verified`, while citation/artifact status is `verified`. That separation is intentional: a working official link does not mean the source mixture, split, license, lineage, and verifier internals are fully curated.

## What is the data object?

| Field | Local value |
|---|---|
| Atlas type | Agent trajectory card |
| Domains | tool-use, function-calling, agents |
| Prompt/source | function/API specifications used to synthesize function-calling tasks |
| Trace/action author | automated APIGen pipeline plus verification stages |
| Answer/artifact format | function name, arguments, expected execution behavior, and verification label |
| Process fields | function schema, user intent, generated call, execution result, semantic verification result |
| Environment/substrate | executable API/function pool across multiple categories |
| Verifier/reward | hierarchical format checking, actual function execution, and semantic verification |
| Terminal predicate | generated function call satisfies schema, execution, and semantic checks |

## Verification contract

- Check parser behavior, schema validation, execution harness, semantic verifier strength, and verifier false negatives.
- Check function pool versioning, hidden dependencies, rejected examples, and terminal predicate.

A reusable reasoning-data artifact should make the accept/reject or scoring signal reproducible. If the signal depends on a hidden judge prompt, moving service, undocumented code execution environment, missing unit tests, or unclear rubric, keep the entry `partial` until the gap is resolved.

## Supervision granularity

- Recorded granularity: `state_action_level`.
- Recorded training/evaluation use: `sft, agent_training, evaluation`.
- Construction layer: `prompt_sourcing, trace_writing, reward_verifier_layer, release_audit`.

Granularity controls reuse. Answer-level records, step labels, scalar rewards, preference pairs, and full environment episodes are not interchangeable. Match your training or evaluation objective to the feedback level that the source actually exposes.

## Construction recipe

| Recipe field | Local value |
|---|---|
| Base model | unknown |
| Teacher | automated generator and verification filters |
| Generator | APIGen pipeline for synthesizing diverse function-calling datasets |
| Filtering rule | keep examples that pass format, execution, and semantic verification stages |
| Sampling protocol | unknown |
| Rollout count | unknown |
| Temperature | unknown |
| Inference budget | unknown |
| Optimizer/scaffold | APIGen pipeline and released xLAM function-calling dataset scaffold |

When reproducing this environment or trajectory artifact, fill these recipe fields before training. The missing knobs often matter more than the headline number of examples.

## How it can be used

- Reading map: compare it with neighboring entries in the same paper-category page.
- Engineering map: decide whether it supports SFT, distillation, RLVR, process supervision, reward modeling, agent training, evaluation, or audit.
- Audit map: open an issue for every `unknown` field that affects reproducibility, safety, or benchmark comparison.
- Teaching map: use it to show how reasoning data differs from plain instruction data.

## Audit checklist

- [ ] Official paper, code, data, project, and dataset links are checked.
- [ ] Source mixture, split policy, license, and lineage are recorded.
- [ ] Verifier, reward, judge, rubric, environment, or test suite is reproducible.
- [ ] Rejected/failed/ambiguous candidates are considered, not only successful examples.
- [ ] Contamination, benchmark leakage, false positives, false negatives, and reward hacking are documented.
- [ ] Training use is not broader than what the source supports.

## Known limitations / failure modes

- Source mixture: synthetic function-calling examples; source APIs and function categories should be pinned.
- Split: unknown in local metadata.
- Decontamination: unknown.
- License: unknown in local metadata.
- Lineage: official project page, arXiv paper, and Salesforce Hugging Face dataset.
- Known failure modes: overly clean synthetic APIs, semantic-verifier false positives, schema-pattern overfitting, and benchmark overlap with downstream evaluation.

Local audit note: Official paper, project, and dataset links are verified; rejected-generation distribution and license boundaries still need explicit downstream review.

## Links

- arXiv: [https://arxiv.org/abs/2406.18518](https://arxiv.org/abs/2406.18518)
- Project: [https://apigen-pipeline.github.io/](https://apigen-pipeline.github.io/)
- Dataset: [https://huggingface.co/datasets/Salesforce/xlam-function-calling-60k](https://huggingface.co/datasets/Salesforce/xlam-function-calling-60k)

## Citation

- Title: APIGen: Automated Pipeline for Generating Verifiable and Diverse Function-Calling Datasets
- Year/source: 2024 · NeurIPS
- Authors in local data: Zuxin Liu, Thai Hoang, Jianguo Zhang, Ming Zhu, Tian Lan, Shirley Kokane, Juntao Tan, Weiran Yao, Zhiwei Liu, Yihao Feng, Rithesh Murthy, Liangwei Yang, Silvio Savarese, Juan Carlos Niebles, Huan Wang, Shelby Heinecke, Caiming Xiong
- Institutions in source: Salesforce AI Research, USA
- Local status: `verified`
- Citation status: `verified` · metadata status: `L4_carded`
