<!-- entry_id: caco-code-assisted-cot-2025 -->
<!-- card_type: releases -->
# Paper Card: Scaling Code-Assisted Chain-of-Thoughts and Instructions for Model Reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=caco-code-assisted-cot-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=caco-code-assisted-cot-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=caco-code-assisted-cot-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** Caco releases 1.3M instruction-CoT pairs derived through executable program synthesis and consistency filtering, but missing rejected programs, incomplete row lineage, and unreported decontamination limit auditability.
> **Reading priority:** Essential
> **Paper type:** Executable reasoning-data release and synthetic construction pipeline
> **Knowledge categories:** Programmatically Verifiable Outcome Data · Process Trace Supervision Data · Data Construction & Open Release Recipes
> **Best for:** Researchers building verifiable synthetic reasoning corpora, code-mediated CoT pipelines, or data-lineage audits
> **Confidence:** High
> **Year / Venue:** 2025 · NeurIPS 2025
> **Authors:** Honglin Lin, Qizhi Pei, Zhuoshi Pan, Yu Li, Xin Gao, Juntao Li, Conghui He, Lijun Wu
> **Institutions:** Shanghai Jiao Tong University; Shanghai Artificial Intelligence Laboratory; Tsinghua University; Renmin University of China; Soochow University
> **Links:** [Paper](https://proceedings.neurips.cc/paper_files/paper/2025/hash/3267aa172c31ae3641c32ecc6e42e5cd-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2510.04081) · [Code](https://github.com/LHL3341/Caco) · [Data](https://huggingface.co/datasets/LHL3341/Caco-1.3M)

---

## 1. Problem: What question does this work address?

Natural-language chains of thought are difficult to verify at scale. A correct final answer can hide invalid intermediate steps, and a fluent derivation may contain arithmetic or logical errors that automatic text filters miss. Existing program-aided reasoning improves verifiability, but commonly starts from a fixed pool of questions and therefore scales solutions more readily than it scales underlying reasoning patterns and instructions.

Caco asks whether executable programs can serve as an intermediate data language for the entire construction loop. The goal is to learn a distribution of code reasoning patterns, sample new executable programs without conditioning on existing questions, reverse those programs into new instructions, and then translate the executable logic back into natural-language reasoning traces suitable for supervised post-training.

## 2. Core idea: What is the main contribution?

Caco introduces a bidirectional pipeline between natural-language tasks and executable Code CoTs. It first standardizes math and algorithmic solutions as Python programs, trains an unconditional code generator on verified programs, samples millions of new programs, and reverse-engineers the survivors into paired natural-language questions and solutions.

The official Caco-1.3M release contains roughly 1.35M instruction-output records and is labeled Apache-2.0 on Hugging Face. Its construction funnel is central to interpreting the release:

1. 146K verified seed Code CoTs;
2. approximately 5.3M sampled programs;
3. approximately 4.6M executable and structurally valid programs;
4. approximately 1.3M final instruction-answer pairs after reversal and dual consistency checks.

## 3. Method: How does it work?

### Unified executable seeds

The source pool combines 7.5K MATH problems, 40K DeepScaleR problems, 251K BigMath problems, and 40K KodCode algorithmic tasks. Qwen2.5-72B-Instruct converts their solutions to a shared Python representation. Seed programs must execute, produce the expected output, and conform to the template. BigMath is additionally restricted to records with reported solve rate below 0.3. This leaves 146K Code CoTs: 122K mathematics and 24K code.

### Program scaling

An unconditional CodeGen model is fine-tuned from Qwen2.5-Coder-7B using only Code CoTs, without original question contexts. At inference it samples at temperature 0.9 with a maximum length of 1,024 tokens. The design targets two forms of expansion: new surface problems around known program patterns and new executable patterns beyond the seed set.

The generator produces about 5.3M programs. Execution and rule filters retain about 4.6M programs that are syntactically valid, run successfully, satisfy structural constraints, and avoid selected inefficiency, triviality, inconsistency, and length failures. Because these sampled programs have no original gold answer, this stage verifies behavior and structure rather than matching an externally supplied solution.

### Problem reversal and language-CoT generation

Qwen3-8B receives a program plus representative input-output examples and generates a natural-language problem. In a separate call, it receives the new problem and generates the language CoT. Separation is intended to prevent the model from lazily copying the supplied code into a superficially plausible answer.

Final selection uses two checks. First, the language solution's extracted answer must match the program's execution output. Second, Qwen3-32B judges whether the language CoT is consistent with the Code CoT. Qwen3-8B reversal uses temperature 0.7, top-p 0.8, top-k 20, min-p 0, and thinking disabled.

## 4. Evidence: Why should we believe it?

The paper fine-tunes DeepSeekMath-7B, Qwen2.5-Math-7B, and Llama-3-8B on Caco subsets and evaluates MATH, GSM8K, CollegeMath, DeepMind Mathematics, OlympiadBench-Math, and TheoremQA. Reported performance generally rises from the 109K seed subset to 596K and then 1.3M records, supporting a useful scaling signal across specialized and general base models.

Analysis compares problem embeddings and topic clusters with the seed corpora and reports broader coverage. Additional ablations examine executable validation and data scale. These results show that the final release is effective as SFT data; they do not prove that every reversed instruction is well posed or every natural-language derivation is correct.

The reproducibility surface is material: the paper links an official code repository and downloadable Hugging Face dataset, and the appendix discloses the main generators, evaluators, prompts, decoding parameters, and filtering stages. However, the full candidate and rejection history is not part of the release.

## 5. Novelty: What is new relative to prior work?

Caco does not merely attach Python snippets to existing questions. Its unconditional CodeGen models the space of executable reasoning programs, allowing program patterns to be sampled before a natural-language question exists. Instruction reversal then makes those programs usable as conventional instruction-tuning records.

This establishes code as a construction-time lineage anchor connecting a generated instruction, natural-language rationale, executable process, and output. The combination of pattern-level program generation, two-stage reversal, execution-answer agreement, and model-judged code-language alignment distinguishes Caco from question-conditioned rejection sampling and ordinary program-aided solution generation.

## 6. Limitations: What are the weaknesses or hidden assumptions?

Executability is necessary but not sufficient. A program may run while encoding incorrect assumptions, solving only its sampled examples, or failing to match the generalized natural-language instruction. Representative input-output pairs can underspecify program behavior.

The final alignment check is model based. Qwen3-8B creates the question and language trace, while Qwen3-32B judges consistency. Shared model-family biases can lead both systems to accept the same semantic error. The paper does not report independently measured false-positive or false-negative rates for this judge.

The public release does not preserve the complete 5.3M candidate pool, rejected programs, stage-specific failure labels, or every failed reversal. Without these objects, users cannot reconstruct acceptance rates by failure type or analyze how the filters shape difficulty and diversity.

Record-level lineage is incomplete. The final dataset needs persistent links to the upstream source record, seed Code CoT or generated-program identifier, execution environment, reversal calls, judge decision, and exact software/model revisions. It is also unclear whether every released row exposes the underlying Code CoT needed for independent verification.

Finally, the HF dataset is labeled Apache-2.0, while the corpus derives from MATH, DeepScaleR, BigMath, and KodCode. The aggregate label does not by itself demonstrate compatibility with every upstream record. The paper reports embedding diversity but no systematic exact or semantic decontamination against its evaluation benchmarks.

## 7. Uses: How can this work be used?

Caco-1.3M can be used as supervised reasoning data for mathematical and algorithmic post-training. The codebase and disclosed prompts also provide a recipe for constructing domain-specific instruction data when problems can be represented as executable programs.

For Track 8, Caco is valuable as a lineage design pattern: retain an executable intermediate object, validate it before verbalization, generate instruction and explanation separately, and require both output agreement and process alignment. Future pipelines can strengthen this pattern with property-based tests, formal solvers, independent judges, and preservation of rejected artifacts.

Auditors should pin both code and dataset revisions, inspect whether Code CoTs are available per row, reconstruct upstream licenses, sample independently generated tests, and perform benchmark overlap checks before reuse.

## 8. Reading notes: What should readers remember?

- The key funnel is 146K verified seeds → 5.3M sampled programs → 4.6M executable survivors → 1.3M final pairs.
- CodeGen is unconditional: programs are sampled before their natural-language problems are written.
- Execution checks behavior; Qwen3-32B separately judges code-language reasoning consistency.
- The released data is useful SFT material, but the rejected pool and full construction ledger are missing.
- Apache-2.0 on the final dataset does not replace an upstream record-level license audit.
- Embedding diversity is not evaluation-set decontamination.

## 9. Citation

```bibtex
@inproceedings{lin2025caco,
  title     = {Scaling Code-Assisted Chain-of-Thoughts and Instructions for Model Reasoning},
  author    = {Lin, Honglin and Pei, Qizhi and Pan, Zhuoshi and Li, Yu and Gao, Xin and Li, Juntao and He, Conghui and Wu, Lijun},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {38},
  year      = {2025},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2025/hash/3267aa172c31ae3641c32ecc6e42e5cd-Abstract-Conference.html}
}
```
