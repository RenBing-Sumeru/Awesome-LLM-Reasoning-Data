# 🧮 Programmatically Verifiable Outcome Data

> Math answers, code execution, unit tests, proof checkers, symbolic predicates, answer extraction, and verifier robustness studies.

## 1. What This Track Studies

Use this track for the cleanest verifier-bearing reasoning records: final answers or artifacts checked by code, rules, tests, or formal systems.

Programmatic verification is central to post-training reasoning data because it can turn correctness into a relatively cheap feedback signal. Math answer checkers, code unit tests, compilers, and proof assistants make outcome supervision concrete enough for filtering, rejection sampling, RLVR, benchmark evaluation, and sometimes training rewards.

The clean surface is also dangerous. A model can learn answer-format shortcuts, leaked tests, brittle normalizers, proof-environment quirks, or benchmark-specific patterns. Good curation therefore records not just the dataset name but the verifier, false-positive risks, split policy, and whether the release exposes traces, failed attempts, or only accepted solutions.

This page is the natural assignment for contributors working on math, code, and proof papers, but many of those papers should also be tagged as construction recipes, scaling studies, benchmarks, or frontier disclosures when appropriate.

## 2. Why It Matters for Post-Training Reasoning Data

Read this page as a data map, not only a bibliography. For each paper, ask what record is being produced, what feedback contract makes it trainable or evaluable, how it could enter SFT/RM/PRM/RLVR/agent training, and which audit failure would make the claim misleading.

## 3. Subfield Navigator

| Subfield | What it helps you read | Key audit risk |
|---|---|---|
| 📐 Math answer-verifiable data | math problems, final answers, solution traces, and answer checkers | answer extraction and normalization inflate scores |
| 🧮 Math RLVR datasets | math records used for rejection sampling, SFT, PRMs, and RLVR | data reuse and contamination are not reported |
| 💻 Code execution / unit-test data | code problems, unit tests, generated tests, execution logs, and repair tasks | flaky or leaked tests become the reward |
| 🧾 Formal proof / Lean / theorem proving | Lean, proof scripts, tactic environments, theorem statements, and proof checkers | proof succeeds only under an undocumented environment |
| 🧪 Verifier robustness and answer extraction | false positives, false negatives, checker brittleness, and adversarial formats | model learns verifier quirks instead of task skill |
| 🧰 Programmatic benchmarks | evaluation sets whose scoring can become a post-training signal | benchmark scoring is reused as reward without audit |

### Contents

- [📐 Math answer-verifiable data](#math-answer-verifiable-data)
- [🧮 Math RLVR datasets](#math-rlvr-datasets)
- [💻 Code execution / unit-test data](#code-execution-unit-test-data)
- [🧾 Formal proof / Lean / theorem proving](#formal-proof-lean-theorem-proving)
- [🧪 Verifier robustness and answer extraction](#verifier-robustness-and-answer-extraction)
- [🧰 Programmatic benchmarks](#programmatic-benchmarks)

## 4. Read First

| Work | Year | Links | Data object | Feedback / verifier | Why it matters |
|---|---:|---|---|---|---|
| [LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks](https://arxiv.org/abs/2606.03303) | 2026 | [Paper](https://arxiv.org/abs/2606.03303) · [Code](https://github.com/google-deepmind/superhuman/tree/main/leap) · [Data](https://imobench.github.io/) · [Paper Card Source](../../paper_cards/library/cards/leap-formal-mathematics-2026/sources) | A Lean proof artifact plus the Lean checker acceptance or rejection outcome.; process: informal blueprint, AND-OR proof graph, candidate Lean code; The Lean proof environment, retrieval/search tools, and the released IMO-LeanProofBench task suite. | Lean compiler and kernel acceptance of formal proof code. | It makes the Lean compiler a reproducible terminal predicate for long-horizon mathematical agent traces instead of relying on natural-language plausibility. |
| [Not All Invariants Are Equal: Curating Training Data to Accelerate Program Verification with SLMs](https://arxiv.org/abs/2603.15510) | 2026 | [Paper](https://arxiv.org/abs/2603.15510) · [OpenReview](https://openreview.net/forum?id=fS28SOioQd) · [Code](https://github.com/idopinto/wonda) · [Paper Card Source](../../paper_cards/library/cards/wonda-invariant-curation-2026/sources) | A candidate loop invariant attached to a program location, with correctness and sufficiency verification outcomes.; process: verification query, raw invariant, normalized AST; UAutomizer-backed program-verification environment with enforced time/memory limits. | A sound verification oracle checks invariant induction/correctness and sufficiency for the program query. | It shows how to improve the pedagogical quality of verifier-backed data without silently replacing correctness with an LLM rewrite judgment. |
| [Faults in Our Formal Benchmarking: Dataset Defects and Evaluation Failures in Lean Theorem Proving](https://arxiv.org/abs/2606.29493) | 2026 | [Paper](https://arxiv.org/abs/2606.29493) · [Code](https://github.com/Shashi456/atp-checkers) · [Paper Card Source](../../paper_cards/library/cards/faults-formal-benchmarking-2026/sources) | A finding with its affected theorem, fault type, checker result, and—where applicable—a machine-checkable witness.; process: formal statement, Lean environment, static-check result; Pinned Lean 3/Lean 4 benchmark environments and the released audit checker suite. | Lean metaprogram/static checks and mechanically certified counterexample, vacuity, or unprovability evidence; semantic prompts are a separate non-deterministic audit layer. | It turns verifier robustness and statement fidelity into data fields that can be checked, rather than assuming every Lean pass is a trustworthy label. |

## 5. Full Paper List

### <a id="math-answer-verifiable-data"></a>📐 Math answer-verifiable data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="math-rlvr-datasets"></a>🧮 Math RLVR datasets

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="code-execution-unit-test-data"></a>💻 Code execution / unit-test data

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

### <a id="formal-proof-lean-theorem-proving"></a>🧾 Formal proof / Lean / theorem proving

- 🧯 **[Faults in Our Formal Benchmarking: Dataset Defects and Evaluation Failures in Lean Theorem Proving](https://arxiv.org/abs/2606.29493)**
  <sub>2026 · ICML 2026 · 🧯 audit failure · 🧰 benchmark · mixed · evaluation · audit · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2606.29493) · [Code](https://github.com/Shashi456/atp-checkers) · [Paper Card Source](../../paper_cards/library/cards/faults-formal-benchmarking-2026/sources)
  _Data object:_ A finding with its affected theorem, fault type, checker result, and—where applicable—a machine-checkable witness.; process: formal statement, Lean environment, static-check result; Pinned Lean 3/Lean 4 benchmark environments and the released audit checker suite.
  _Feedback / verifier:_ Lean metaprogram/static checks and mechanically certified counterexample, vacuity, or unprovability evidence; semantic prompts are a separate non-deterministic audit layer.
  _Recipe signal:_ teacher: Programmatic Lean audit checkers and certified witnesses, supplemented by human/LLM semantic review.; generator: Corpus-wide static analysis across benchmark versions and forks.
  _Audit focus:_ A Lean kernel proof certifies the encoded statement, not its informal fidelity., Static checking cannot decide every semantic mismatch., Results depend on the pinned Lean and dependency environment.
  _Why it matters:_ It turns verifier robustness and statement fidelity into data fields that can be checked, rather than assuming every Lean pass is a trustworthy label.
- 🧰 **[LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks](https://arxiv.org/abs/2606.03303)**
  <sub>2026 · arXiv · 🧰 benchmark · 📦 data release · programmatic · evaluation · agent training · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2606.03303) · [Code](https://github.com/google-deepmind/superhuman/tree/main/leap) · [Data](https://imobench.github.io/) · [Paper Card Source](../../paper_cards/library/cards/leap-formal-mathematics-2026/sources)
  _Data object:_ A Lean proof artifact plus the Lean checker acceptance or rejection outcome.; process: informal blueprint, AND-OR proof graph, candidate Lean code; The Lean proof environment, retrieval/search tools, and the released IMO-LeanProofBench task suite.
  _Feedback / verifier:_ Lean compiler and kernel acceptance of formal proof code.
  _Recipe signal:_ teacher: Deterministic Lean compiler feedback and kernel checking.; generator: The agent drafts direct proofs, blueprints, subgoals, sketches, revisions, and search actions.
  _Audit focus:_ Geometry remains materially harder than algebra, combinatorics, and number theory in the reported benchmark., A checker-accepted proof establishes formal correctness only relative to the encoded theorem statement and pinned Lean environment., Reported performance depends on the backend model, retrieval corpus, and inference-time search budget.
  _Why it matters:_ It makes the Lean compiler a reproducible terminal predicate for long-horizon mathematical agent traces instead of relying on natural-language plausibility.

### <a id="verifier-robustness-and-answer-extraction"></a>🧪 Verifier robustness and answer extraction

- 📦 **[Not All Invariants Are Equal: Curating Training Data to Accelerate Program Verification with SLMs](https://arxiv.org/abs/2603.15510)**
  <sub>2026 · ICML 2026 · 📦 data release · 🏗️ construction recipe · programmatic · sft · evaluation · L4_carded</sub>
  [Paper](https://arxiv.org/abs/2603.15510) · [OpenReview](https://openreview.net/forum?id=fS28SOioQd) · [Code](https://github.com/idopinto/wonda) · [Paper Card Source](../../paper_cards/library/cards/wonda-invariant-curation-2026/sources)
  _Data object:_ A candidate loop invariant attached to a program location, with correctness and sufficiency verification outcomes.; process: verification query, raw invariant, normalized AST; UAutomizer-backed program-verification environment with enforced time/memory limits.
  _Feedback / verifier:_ A sound verification oracle checks invariant induction/correctness and sufficiency for the program query.
  _Recipe signal:_ teacher: UAutomizer/formal verification outcomes after every potentially semantics-changing rewrite.; generator: AST normalization of raw symbolic invariants followed by LLM-driven rewriting and augmentation.
  _Audit focus:_ A verifier-valid invariant can be unreadable or overly specialized., LLM rewriting can introduce semantic drift unless every candidate is rechecked., Verification timeouts and UNKNOWN results need an explicit retention policy.
  _Why it matters:_ It shows how to improve the pedagogical quality of verifier-backed data without silently replacing correctness with an LLM rewrite judgment.

### <a id="programmatic-benchmarks"></a>🧰 Programmatic benchmarks

_No verified primary-source entries are assigned here yet. Add official paper links and metadata through the contribution workflow._

## 6. What to Audit

- Is the answer normalizer, unit-test harness, proof checker, or execution environment reproducible?
- Are false positives, false negatives, and formatting shortcuts discussed?
- Are train/test split and contamination checks visible?

## 7. Open Problems

- How should math releases expose answer normalizers and edge cases?
- Can public code benchmarks remain useful once they become training signals?
- What metadata is needed to replay proof-checking environments?
- How should accepted and rejected programmatic rollouts be released?

## 8. Related Paper-Card Sources

- [Faults in Our Formal Benchmarking: Dataset Defects and Evaluation Failures in Lean Theorem Proving](../../paper_cards/library/cards/faults-formal-benchmarking-2026/sources)
- [LEAP: Supercharging LLMs for Formal Mathematics with Agentic Frameworks](../../paper_cards/library/cards/leap-formal-mathematics-2026/sources)
- [Not All Invariants Are Equal: Curating Training Data to Accelerate Program Verification with SLMs](../../paper_cards/library/cards/wonda-invariant-curation-2026/sources)

## Back to Map

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
