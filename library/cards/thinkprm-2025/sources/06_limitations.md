- Boxed-label agreement is not rationale verification. A chain can emit every expected label while containing incorrect, post-hoc, irrelevant, or unfaithful explanations.

- PRM800K/MATH prefixes and human labels carry their own ambiguity and annotation error. The release does not provide adjudication confidence or alternative labels for disputed steps.

- Step labels are 92.3% positive despite roughly balanced prefix outcomes. Prefix F1, scalar scores, and search ranking operate at different granularities and should not be treated as interchangeable quality measures.

- The dataset has only one 1,000-row train split. It omits upstream PRM800K row IDs, teacher seeds, four-candidate group IDs, raw rejected chains, rejection reasons, and deterministic joins back to source revisions.

- Exact-match, near-duplicate, and semantic decontamination are unknown for PRM800K/MATH-derived training prompts versus ProcessBench, MATH-500, AIME 2024, GPQA-Diamond, and LiveCodeBench evaluations.

- The Hugging Face dataset repository added an MIT LICENSE, but its copyright-holder placeholder is unfilled and the notice does not establish coverage or compatibility for PRM800K/MATH-derived inputs and QwQ outputs. A code license and record-level upstream rights ledger remain unavailable.

- Generative scores can be overconfident and cluster near zero or one. The paper does not establish calibration under changing domains, candidate generators, model revisions, or verifier-compute budgets.

- Autoregressive verification can prematurely commit. The paper reports step-label interference, where an early incorrect judgment makes later steps more likely to receive the same negative judgment.

- Verification chains add substantial latency and can loop, overthink, or end without a parseable label. Finetuning reduces these failures but does not eliminate them, and parallel/sequential scaling can plateau.

- The 65K process-filtered and 128K outcome-filtered expansions are analyzed but were not verified in the public 1K release. More math data improves some in-domain curves while degrading some out-of-domain results.

- Several sampling, optimization, search, and environment details are missing or incompletely rendered, including data-generation temperature, seeds, some learning rates and LoRA settings, and complete run manifests.

- Results use selected task subsets and generators. Downstream benchmark improvements do not prove item-level critique correctness, data quality, licensing, contamination safety, or reliable use as an RL reward.
