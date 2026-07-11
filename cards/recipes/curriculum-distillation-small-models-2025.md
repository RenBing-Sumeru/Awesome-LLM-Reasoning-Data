<!-- entry_id: curriculum-distillation-small-models-2025 -->
<!-- card_type: recipes -->
# Paper Card: Teach Small Models to Reason by Curriculum Distillation

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=curriculum-distillation-small-models-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=curriculum-distillation-small-models-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=curriculum-distillation-small-models-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** This EMNLP recipe jointly filters four teacher-response modes and schedules concise-to-explicit supervision across two stages, but it does not release the 6,445-problem constructed corpus or its lineage manifest.
> **Reading priority:** Recommended
> **Paper type:** Difficulty-aware reasoning-distillation construction recipe
> **Knowledge categories:** Data construction and open-release recipes; instruction demonstrations and rationales; training-use optimization
> **Best for:** Researchers building small-model reasoning curricula from heterogeneous teacher traces
> **Confidence:** High
> **Year / Venue:** 2025 / EMNLP
> **Authors:** Wangyi Jiang, Yaojie Lu, Hongyu Lin, Xianpei Han, Le Sun
> **Institutions:** Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
> **Links:** [Paper](https://aclanthology.org/2025.emnlp-main.376/) · [DOI](https://doi.org/10.18653/v1/2025.emnlp-main.376)

---

## 1. Problem: What question does this work address?

Small language models often fail when directly trained on a large reasoning model's longest explicit traces. Yet training only on compressed answers can remove the intermediate structure needed for difficult problems. The paper asks how teacher identity, response mode, task difficulty, and training order can be coordinated so a 3B student first acquires useful problem-solving heuristics and then learns to express them as reasoning.

The construction problem is therefore temporal as well as selective: which form of teacher output should supervise each difficulty band, and at which stage of student training?

## 2. Core idea: What is the main contribution?

The paper builds a multi-view teacher pool over MATH and uses a two-stage curriculum. Qwen2.5-32B-Instruct provides standard instruction-following solutions. DeepSeek-R1-Distill-Qwen-32B supplies three behavioral modes:

- **Think:** full explicit long reasoning with reconsideration.
- **NoRethink:** explicit reasoning without extended reconsideration.
- **NoThink:** concise solution behavior with reasoning suppressed or compressed.

Stage 1 teaches a foundation with ordinary Instruct traces on Levels 1-4 and NoThink outputs on Level 5. Stage 2 shifts to NoThink on Levels 1-4 and NoRethink on Level 5, aiming to move from implicit heuristics toward controlled explicit reasoning.

## 3. Method: How does it work?

The source pool is all 7,500 MATH training problems divided into five difficulty levels. For each problem, the pipeline queries Qwen2.5-32B-Instruct and DeepSeek-R1-Distill-Qwen-32B under Think, NoRethink, and NoThink prompting. It also retains the LRM's condensed Think solution for comparison.

Generation uses temperature 0.6, top-p 0.95, maximum sequence length 16,384, and up to four attempts for each problem and required mode. Math-Verify checks final-answer correctness. A problem enters the constructed pool only when every required prompting mode produces a correct solution; 6,445 of the original 7,500 problems survive this intersection filter.

The curriculum is then assembled by MATH difficulty:

1. **Stage 1:** Instruct outputs for Levels 1-4; NoThink outputs for Level 5.
2. **Stage 2:** NoThink outputs for Levels 1-4; NoRethink outputs for Level 5.

Qwen2.5-3B and Qwen2.5-Math-3B students train for two epochs per reported setup with LlamaFactory, cosine learning-rate scheduling, and maximum learning rate `1e-5`. The pipeline is offline SFT; no online reward updates occur during the student curriculum.

## 4. Evidence: Why should we believe it?

The paper first compares Think, NoRethink, NoThink, and Instruct behavior across 7B, 14B, and 32B Qwen-derived models on MATH difficulty levels. It then evaluates curriculum-trained 3B students on AIME 2024, AIME 2025, AMC 2023, MATH-500, Minerva, and OlympiadBench.

Reported comparisons include single-mode distillation, Mix-Long, Stage 1 followed by NoThink-only Stage 2, and variants that introduce Think or NoRethink. The two-stage NoThink-plus-NoRethink curriculum gives the strongest reported average among these configurations, supporting the claim that supervision order and reasoning mode matter in the tested setup.

The paper discloses teachers, prompting modes, sampling parameters, filter tool, retained count, difficulty mapping, student training framework, and benchmark protocol. It does not provide an official generated dataset, construction repository, project page, model release, retained-index file, or immutable teacher snapshot.

## 5. Novelty: What is new relative to prior work?

Rather than mixing long and short traces randomly, the recipe assigns response modes by both difficulty and training stage. It treats concise LRM behavior as foundational supervision for the hardest problems, then introduces explicit but restrained NoRethink traces only after the student has received that foundation.

The work also constructs a matched multi-mode pool: every retained prompt has a correct response under all required modes. This reduces prompt-selection differences between mode comparisons, although it introduces its own intersection-selection bias.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- **Answer-only verification:** Math-Verify validates final answers, not the correctness or faithfulness of intermediate Think and NoRethink steps.
- **Intersection bias:** Requiring every mode to be correct removes 1,055 problems and may favor examples that are relatively easy or robust across teacher behaviors.
- **Prompt-defined modes:** Think, NoRethink, and NoThink are behavioral prompt conditions, not guaranteed clean separations of internal reasoning mechanisms.
- **Difficulty dependence:** The curriculum relies on MATH's five-level labels. Its boundaries may not transfer to other domains or unlabeled prompt pools.
- **Limited student scope:** The core curriculum evidence centers on 3B Qwen-derived students; effects may change with architecture, pretraining, or capacity.
- **Release gap:** The 6,445-problem multi-mode corpus, retained indices, prompts, scripts, teacher revisions, and row-level lineage are not officially released.
- **Audit gap:** Generated-data licensing and decontamination are unknown.

## 7. Uses: How can this work be used?

Use this paper as a baseline for curriculum-aware trace selection. A replication can generate several response styles for the same prompts, verify terminal answers, preserve mode and teacher identity per row, and schedule trace types according to difficulty or an independently measured student-readiness score.

For Track 8 auditing, the important object is not a single response but the complete matched tuple: problem, difficulty, teacher checkpoint, mode prompt, sampling attempt, trace, answer, Math-Verify result, retention decision, curriculum stage, and student checkpoint. Publishing only the selected SFT text would hide the counterfactual modes and the intersection filter.

Future work can compare the fixed two-stage schedule with learned curricula, student-conditioned selectors, process verifiers, or continuous difficulty scores. Any reuse should independently validate intermediate reasoning and document licenses for generated outputs.

## 8. Reading notes: What should readers remember?

- The final pool contains 6,445 prompts correct under all required teacher modes.
- Think, NoRethink, and NoThink are distinct data objects, not interchangeable labels for “reasoning.”
- Stage 1 uses Instruct for Levels 1-4 and NoThink for Level 5.
- Stage 2 uses NoThink for Levels 1-4 and NoRethink for Level 5.
- The construction recipe is documented, but the generated corpus and row-level lineage are not officially released.

## 9. Citation

Official ACL Anthology BibTeX:

```bibtex
@inproceedings{jiang-etal-2025-teach,
  title = {Teach Small Models to Reason by Curriculum Distillation},
  author = {Jiang, Wangyi and Lu, Yaojie and Lin, Hongyu and Han, Xianpei and Sun, Le},
  booktitle = {Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing},
  month = nov,
  year = {2025},
  address = {Suzhou, China},
  publisher = {Association for Computational Linguistics},
  pages = {7412--7422},
  doi = {10.18653/v1/2025.emnlp-main.376},
  url = {https://aclanthology.org/2025.emnlp-main.376/}
}
```
