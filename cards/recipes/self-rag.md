<!-- entry_id: self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023 -->
<!-- card_type: recipes -->
# Self-RAG: Learning to retrieve, generate, and critique through self-reflection

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: construction_recipes_open_reasoning_data, environmental_agents_tools_web_swe, judgment_required_rubrics_safety_domain
> Links: [📄 Paper](https://arxiv.org/abs/2310.11511) · [🏛️ Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [🐙 Code](https://github.com/akariasai/self-rag) · [🗂️ Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [🤗 HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [🌐 Project](https://selfrag.github.io/)

## TL;DR

Self-RAG trains models to decide when to retrieve, generate with evidence, and critique outputs using reflection tokens.

It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.

## 1. What is this work?

- Year / venue: 2023 · ICLR.
- Atlas role: construction_recipe, data_release, agent_environment.
- Domains: retrieval, critique, factuality.
- Current status: verified.
- Why it belongs: Construction recipe entry for retrieval-on-demand, critique supervision, and factuality-oriented post-training data.

## 2. What data object does it expose?

- Prompt/source: instruction-following and knowledge-intensive tasks augmented with retrieval and critique supervision.
- Trace/action author: model emits reflection/control tokens, retrieves passages, generates text, and critiques support.
- Answer/artifact format: generation with retrieval decisions, critique signals, and final answer.
- Process fields:
- query, retrieval decision token, retrieved passage, support critique, utility critique, final answer.
- Environment or substrate: retriever plus generation model with special reflection tokens.
- Terminal predicate: model retrieves only when useful and produces supported, high-quality answers.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed, judgment_required.
- Recorded verifier/reward/environment: critique signals and task-specific factuality/answer-quality evaluation.
- Supervision granularity: step_level, answer_level.

## 4. How is the data constructed?

- Base model: Llama-2 style base models in the original release.
- Teacher: critic and retrieval-supervision signals derived from task data and evidence checks.
- Generator: model learns special reflection tokens for retrieval and critique behavior.
- Filtering rule: retrieval and critique labels identify when evidence helps or hurts.
- Sampling protocol: pin retriever, model checkpoint, task, and reflection-token policy.
- Inference budget: number of retrieval calls and critique steps changes latency and quality.
- Optimizer/scaffold: SFT over data with reflection tokens plus retrieval-augmented inference.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, evaluation, agent_training, audit.

Use it as a recipe for training retrieval-aware reasoning data with explicit critique/control fields.

## 6. What should readers audit?

- Which tasks provide retrieval/critique supervision?
- Are retrieval corpora and evaluation queries separated?
- Could retrieved passages contain benchmark answers?
- Which critic model produced support/utility labels?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- A model can retrieve irrelevant passages confidently.
- Critique tokens can become style markers without true verification.
- Retriever choice changes benchmark conclusions.

## 8. Why it matters for post-training reasoning data

It is a key retrieval-augmented reasoning recipe where the data object includes control tokens, retrieved passages, critiques, and final generations.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2310.11511) · [🏛️ Venue](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) · [🐙 Code](https://github.com/akariasai/self-rag) · [🗂️ Data](https://huggingface.co/datasets/selfrag/selfrag_train_data) · [🤗 HF](https://huggingface.co/selfrag/selfrag_llama2_7b) · [🌐 Project](https://selfrag.github.io/)

- Data ID: `self-rag-learning-to-retrieve-generate-and-critique-through-self-reflection-2023`
- Citation status: verified
- Confidence: high
