# ⚖️ Judgment, Rubric, and Domain-Expert Data

> LLM-as-judge data, human/expert judgment, medical and safety rubrics, factuality, legal and financial reasoning, and rubric reward models.

> 🤖 **Ask about this track:** [Open Ask the Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?track=judgment_rubric_domain_expert_data&mode=find_papers)
> Try: `What should I read first for ⚖️ Judgment / Rubric / Domain Expert?`
> Try: `Compare the data objects and verifier types in ⚖️ Judgment / Rubric / Domain Expert.`
> Try: `Generate an audit checklist for ⚖️ Judgment / Rubric / Domain Expert.`

## 1. What This Track Studies

Use this track when correctness needs a rubric, expert judgment, grounding evidence, or calibrated evaluator rather than a cheap programmatic checker.

Many important reasoning tasks cannot be checked by exact answers or unit tests. They require domain rubrics, experts, factual grounding, safety judgments, legal or medical caution, or LLM judges. This track collects the data where the feedback contract is judgment-required.

Judgment data can be highly valuable for post-training, but it is also easy to over-trust. A judge prompt can be attacked; a rubric can encode hidden values; an expert label can be expensive and inconsistent; a domain benchmark can leak templates. Paper cards should therefore make the judge, rubric, disagreement policy, and failure modes explicit.

This track gives researchers a place to compare high-stakes and rubric-driven reasoning data without mixing it into programmatic-verifier claims.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| ⚖️ LLM-as-judge data | model judges, preference judgments, judge prompts, and evaluator models | judge is sensitive to style, position, or prompt attacks |
| 🧑‍⚖️ Human/expert judgment | human labels, expert adjudication, disagreement handling, and rubric design | expertise and adjudication policy are not disclosed |
| 🩺 Medical reasoning / health rubrics | health, biomedical, scientific, and evidence-grounded reasoning tasks | rubrics are not calibrated for high-stakes error |
| 🛡️ Safety reasoning data | safety reasoning, refusals, jailbreaks, harmfulness, and guardrail data | safe-looking refusals replace correct domain reasoning |
| 🧾 Factuality / grounding | claims, citations, retrieval grounding, fact checking, and evidence quality | citation style masks unsupported claims |
| ⚖️ Legal reasoning | legal QA, statutes, case reasoning, contracts, and expert legal rubrics | splits leak templates or jurisdiction assumptions |
| 🏦 Financial reasoning | financial QA, tabular/text numerical reasoning, filings, and analyst-style judgments | splits leak templates or memorized company facts |
| 🧪 Rubric reward models | rubrics as trainable rewards and domain-conditioned reward models | rubric scores are optimized without semantic robustness |

### Contents

- [⚖️ LLM-as-judge data](#llm-as-judge-data)
- [🧑‍⚖️ Human/expert judgment](#human-expert-judgment)
- [🩺 Medical reasoning / health rubrics](#medical-reasoning-health-rubrics)
- [🛡️ Safety reasoning data](#safety-reasoning-data)
- [🧾 Factuality / grounding](#factuality-grounding)
- [⚖️ Legal reasoning](#legal-reasoning)
- [🏦 Financial reasoning](#financial-reasoning)
- [🧪 Rubric reward models](#rubric-reward-models)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653) | 2026 | [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026) | Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams. | Benchmark answer checking over curated geometric reasoning problems. | It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified. |
| [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) | 2025 | [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025) | candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack | small LLM verifier augmenting rules | Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training. |

## 5. Full Paper List

### <a id="llm-as-judge-data"></a>⚖️ LLM-as-judge data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="human-expert-judgment"></a>🧑‍⚖️ Human/expert judgment

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="medical-reasoning-health-rubrics"></a>🩺 Medical reasoning / health rubrics

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="safety-reasoning-data"></a>🛡️ Safety reasoning data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="factuality-grounding"></a>🧾 Factuality / grounding

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="legal-reasoning"></a>⚖️ Legal reasoning

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="financial-reasoning"></a>🏦 Financial reasoning

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="rubric-reward-models"></a>🧪 Rubric reward models

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="other-related-work"></a>Other related work

- 🧰 **[GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653)**
  <sub>2026 · ICLR 2026 · 🧰 benchmark · 📦 data release · programmatic · judgment required · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.17653) · [DOI](https://doi.org/10.48550/arXiv.2505.17653) · [Code](https://github.com/LiAuto-DSR/GeoGramBench) · [Data](https://huggingface.co/datasets/LiAuto-DSR/GeoGramBench) · [Paper Card Source](../../paper_cards/sources/geogrambench-2026)
  _Data object:_ Procedural drawing code, geometry question, model answer, and benchmark score.; process: drawing program, geometry abstraction level, question; Programmatic drawing-code representation of geometric diagrams.
  _Feedback / verifier:_ Benchmark answer checking over curated geometric reasoning problems.
  _Recipe signal:_ teacher: Curated geometric program reasoning tasks and taxonomy.; generator: Benchmark construction pipeline creates program-to-geometry problems.
  _Audit focus:_ Answer checking may hide ambiguity in spatial interpretation., Procedural code can encode visual assumptions not captured by text., Sampling and long-response settings affect reported pass rates.
  _Why it matters:_ It broadens Track 03 beyond text math and code execution into symbolic-to-spatial reasoning where programs define the object being verified.
- 🧪 **[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625)**
  <sub>2025 · arXiv · 🧪 verifier reward · 🧯 audit failure · programmatic · judgment required · rlvr · reward modeling · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2505.14625) · [Code](https://github.com/uw-nsl/TinyV) · [Paper Card Source](../../paper_cards/sources/tinyv-2025)
  _Data object:_ candidate answer with recovered reward decision; process: original verifier verdict, TinyV verdict, reward correction; offline math verifier stack
  _Feedback / verifier:_ small LLM verifier augmenting rules
  _Recipe signal:_ reward verifier layer; release audit; rlvr
  _Audit focus:_ check links, lineage, verifier, split, and contamination
  _Why it matters:_ Lightweight verifier aimed at recovering false negatives from rule-based math verifiers during RL training.

## 6. What to Audit

- Who wrote the rubric and who adjudicates disagreements?
- Is the judge prompt/model/version/domain expertise disclosed?
- Does the benchmark test judge brittleness, style sensitivity, and unsafe shortcuts?

## 7. Open Problems

- How can open projects audit LLM judges without exposing proprietary evaluation prompts?
- What makes a medical or legal reasoning rubric reusable across datasets?
- Can factuality and grounding scores be turned into robust post-training rewards?
- How should paper cards report expert disagreement?

## 8. Related Paper-Card Sources

- [GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](../../paper_cards/sources/geogrambench-2026)
- [TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](../../paper_cards/sources/tinyv-2025)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
