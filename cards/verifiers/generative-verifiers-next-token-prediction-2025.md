<!-- entry_id: generative-verifiers-next-token-prediction-2025 -->
<!-- card_type: verifiers -->
# Paper Card: Generative Verifiers: Reward Modeling as Next-Token Prediction

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-verifiers-next-token-prediction-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-verifiers-next-token-prediction-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=generative-verifiers-next-token-prediction-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** Generative Verifiers turns correctness checking into rationale generation plus a Yes/No next-token reward, with released synthetic verification rationales but unresolved calibration, code, and checkpoint evidence.
> **Reading priority:** Essential
> **Paper type:** Generative reward modeling and verification-rationale data construction
> **Knowledge categories:** Instruction, Demonstration, and Rationale Data · Preference and Reward Feedback Data · Data Construction and Open Release Recipes · Training Usage and Optimization Objectives
> **Best for:** Researchers building reward models, verification-rationale datasets, and Best-of-N reasoning pipelines
> **Confidence:** Medium
> **Year / Venue:** 2025 · ICLR
> **Authors:** Lunjun Zhang, Arian Hosseini, Hritik Bansal, Seyed Mehran Kazemi, Aviral Kumar, Rishabh Agarwal
> **Institutions:** unknown
> **Links:** [Paper](https://arxiv.org/abs/2408.15240) · [Venue](https://proceedings.iclr.cc/paper_files/paper/2025/hash/214308a2d5e3f83ef9ad2739e1cbc46d-Abstract-Conference.html) · [Data](https://github.com/genrm-star/genrm-critiques) · [Project](https://sites.google.com/view/generative-reward-models)

---

## 1. Problem: What question does this work address?

Scalar reward models compress correctness assessment into a score without exposing why a candidate is accepted or rejected. The paper asks whether verification can instead be learned as next-token prediction: generate a verification rationale, end with a Yes/No verdict, and use the probability of Yes as the reward. This matters for reasoning-data construction because the verifier's language targets, teacher provenance, filtering, and sampling budget become part of the feedback contract.

## 2. Core idea: What is the main contribution?

The central contribution is a generative verifier whose input is a problem and candidate solution and whose output is either a direct Yes/No token or a verification rationale ending in a verdict. Its native scalar signal is the next-token probability of Yes, optionally aggregated across multiple sampled rationales. The work also releases synthetic verification-rationale data and describes a construction recipe spanning programmatic algorithmic tasks and reference-guided mathematical grading.

## 3. Method: How does it work?

For Last Letter and Word Sorting, programmatic oracle generators create tasks, candidate solutions, correctness labels, and verification rationales. For GSM8K, candidate solutions are generated from training problems and labeled against known answers; Gemini 1.0 Pro synthesizes reference-guided verification rationales. The pipeline balances labels, deduplicates algorithmic records, removes invalid responses, caps GSM8K candidates at 16 correct and 16 incorrect solutions per problem, and drops rationales whose final verdict conflicts with the known label.

Gemma-family models are trained with next-token SFT over verification targets, rationale targets, and correct-solution generation targets. At inference, a candidate can receive the direct Yes probability or an average across normally 32 sampled verification rationales. The intended uses are reward modeling, candidate ranking, evaluation, and test-time selection. The released repository contains MIT-licensed critique data; an official implementation and trained verifier checkpoints were not confirmed.

Verifier contract:

- **Input:** problem plus candidate solution; reference solutions are used during some synthesis but are not the stated deployed verifier input.
- **Output:** Yes/No token or a natural-language verification rationale ending in a verdict.
- **Native signal:** probability assigned to Yes, optionally averaged across sampled rationales.
- **Version surface:** paper, data-repository revision, teacher version, prompt template, Gemma base model, and rationale-sampling configuration must be pinned together; the current immutable release mapping is unresolved.

## 4. Evidence: Why should we believe it?

The experiments cover Last Letter, Word Sorting, and GSM8K, with length generalization on the algorithmic tasks and held-out evaluation on MATH500 and MMLU math. The reported construction scale is about 50K Last Letter records, 100K Word Sorting records, and GSM8K candidates generated at 50 solutions per training problem before class balancing and caps. Ablations compare direct verification with rationale-producing variants and study majority-style aggregation over sampled verification rationales.

Official ICLR, arXiv, project, and data-repository surfaces are available, and the released rationale data provides evidence that the construction object exists. The results support the usefulness of generated verification rationales for the evaluated models and tasks. They do not establish universal reward calibration, independence among sampled rationales, robustness outside the tested domains, or reproducibility of training without code and checkpoints.

## 5. Novelty: What is new relative to prior work?

Rather than treating reward modeling only as scalar regression or classification, the paper represents verification as language modeling. This makes the rationale itself a supervised data object and permits repeated rationale generation before score aggregation. The distinctive recipe combines programmatic oracle rationales for synthetic algorithmic tasks with teacher-generated, reference-guided rationales for school mathematics under one next-token verifier interface.

## 6. Limitations: What are the weaknesses or hidden assumptions?

False positives can occur when a fluent rationale overlooks an invalid step, when a wrong solution reaches the correct final answer, or when privileged-reference synthesis teaches superficial agreement with a reference rather than independent verification. False negatives can occur when the verifier rejects an alternative valid derivation, mishandles formatting, or propagates an error from a synthetic rationale.

Calibration is unresolved: a Yes-token probability is not automatically calibrated across task families, candidate lengths, base-model versions, or prompt templates. Averaging 32 samples reduces some variance but does not provide 32 independent judgments because all rationales share a model, prompt, and training distribution. The verifier is brittle to distribution shift between programmatic tasks, GSM8K, and harder held-out mathematics.

Gaming remains possible. A candidate generator can optimize for styles, phrases, or answer formats favored by the verifier without improving reasoning correctness. Reference-guided synthesis may also leak privileged structure into the verifier's training distribution. No decontamination procedure is reported, and no official code or trained checkpoints were confirmed. Exact data subsets and immutable revisions remain to be pinned, so verifier version drift cannot yet be audited end to end.

## 7. Uses: How can this work be used?

The released rationales can support experiments in generative reward modeling, verifier SFT, critique generation, and comparisons between direct labels and explanatory feedback. The verifier interface can rank Best-of-N solutions, provide a reward surface for post-training experiments, or audit how rationale aggregation changes candidate selection. For Track 8, the work is especially useful as a case study in how teacher-generated critiques, label balancing, verdict filtering, and release versioning determine the behavior of a downstream verifier.

Any reuse should preserve the distinction between the known label used during synthesis and the learned Yes probability used at deployment. Before using the score for RL or large-scale filtering, measure calibration, false-positive and false-negative rates by domain, adversarial gaming, and sensitivity to prompt and model versions.

## 8. Reading notes: What should readers remember?

- The reward is a next-token Yes probability; the rationale is both an explanation and a sampled latent path to that score.
- Programmatic algorithmic rationales and Gemini-generated GSM8K rationales have different provenance and failure modes.
- Reference-guided synthesis uses information unavailable to a deployed verifier and therefore deserves a separate leakage audit.
- Thirty-two rationale samples are correlated votes, not independent annotators.
- The data release is verified, but code, checkpoints, exact snapshots, decontamination, and cross-version calibration remain unresolved.

## 9. Citation

The proceedings BibTeX endpoint recorded in the metadata was unavailable during card drafting. The following citation is provisional and uses verified title, authors, year, venue, and arXiv identifier.

```bibtex
@inproceedings{zhang2025generativeverifiers,
  title = {Generative Verifiers: Reward Modeling as Next-Token Prediction},
  author = {Zhang, Lunjun and Hosseini, Arian and Bansal, Hritik and Kazemi, Seyed Mehran and Kumar, Aviral and Agarwal, Rishabh},
  booktitle = {International Conference on Learning Representations},
  year = {2025},
  eprint = {2408.15240},
  archivePrefix = {arXiv}
}
```
