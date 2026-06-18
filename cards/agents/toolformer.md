<!-- entry_id: toolformer-language-models-can-teach-themselves-to-use-tools-2023 -->
<!-- card_type: agents -->
# Toolformer: Language models can teach themselves to use tools

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolformer-language-models-can-teach-themselves-to-use-tools-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolformer-language-models-can-teach-themselves-to-use-tools-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=toolformer-language-models-can-teach-themselves-to-use-tools-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: environmental_agents_tools_web_swe, construction_recipes_open_reasoning_data
> Links: [📄 Paper](https://arxiv.org/abs/2302.04761) · [🏛️ OpenReview](https://openreview.net/forum?id=Yacmpz84TH)

## TL;DR

Toolformer creates self-supervised tool-use data by inserting API calls only when tool results improve language-model likelihood.

It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.

## 1. What is this work?

- Year / venue: 2023 · NeurIPS.
- Atlas role: construction_recipe, agent_environment.
- Domains: tools, api-calls, self-supervision.
- Current status: verified.
- Why it belongs: Tool-use data recipe entry for API-call annotation, likelihood filtering, and tool-augmented language modeling.

## 2. What data object does it expose?

- Prompt/source: raw text augmented with candidate API-call positions for tools such as calculator, search, translation, calendar, and QA.
- Trace/action author: language model proposes API calls and receives tool outputs.
- Answer/artifact format: text sequence with inserted API call and tool result markup.
- Process fields:
- candidate call location, API name, arguments, tool output, likelihood improvement, retained annotation.
- Environment or substrate: external tool APIs used during data construction and evaluation.
- Terminal predicate: API annotation is retained when it improves prediction enough under filtering thresholds.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: language-model likelihood improvement after including tool result.
- Supervision granularity: step_level, answer_level.

## 4. How is the data constructed?

- Base model: pretrained language model used to propose and score tool calls.
- Teacher: small hand-written demonstrations per tool seed the API-call format.
- Generator: model samples candidate tool calls over raw text.
- Filtering rule: keep calls whose returned result improves likelihood relative to no-tool text.
- Sampling protocol: tool set, call syntax, threshold, and candidate locations must be reported.
- Inference budget: number of candidate calls per passage affects retained dataset size.
- Optimizer/scaffold: self-supervised annotation loop plus LM fine-tuning.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, agent_training, evaluation.

Use it as a recipe for constructing tool-call SFT data and auditing whether tool results genuinely help.

## 6. What should readers audit?

- Which raw corpus and tools produce the annotations?
- Are examples split before or after tool-call insertion?
- Could tool outputs leak evaluation facts?
- Are failed or filtered candidate calls retained for analysis?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Likelihood improvement may not equal truthful tool use.
- Tools can return stale or wrong outputs.
- The model can learn call syntax without robust tool-selection judgment.

## 8. Why it matters for post-training reasoning data

It is a classic construction recipe for tool-call supervision: models learn when to call tools, what arguments to pass, and how to fold observations back into text.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2302.04761) · [🏛️ OpenReview](https://openreview.net/forum?id=Yacmpz84TH)

- Data ID: `toolformer-language-models-can-teach-themselves-to-use-tools-2023`
- Citation status: verified
- Confidence: high
