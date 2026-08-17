The official publication venue is **COLM 2025**, confirmed by the camera-ready header, COLM accepted-paper list, and OpenReview publication record. The paper is arXiv:2502.03387 v3, dated 29 July 2025. There is no verified ICLR publication record for this work.

LIMO asks whether a knowledge-rich base model can acquire strong mathematical reasoning behavior from a very small but aggressively selected set of long reasoning demonstrations. The engineering problem is not simply how to fine-tune on 800 rows; it is how to reduce a tens-of-millions problem pool through model-based difficulty estimation, benchmark deduplication, multi-teacher solution generation, human examination, and lexical trace scoring.

One final LIMO-v2 row contains:

| Field | Released content |
|---|---|
| `question` | Mathematics problem |
| `solution` | Long natural-language reasoning chain selected for SFT |
| `answer` | Final answer |

The three-column row does not expose source dataset/item, source revision, teacher, difficulty pass counts, candidate solutions, quality-score components, selection rank, correctness-check result, deduplication decision, or release version.

Version identity is material. The final COLM/arXiv v3 recipe and official **LIMO-v2** dataset/model contain **800** training examples. The official legacy LIMO v1 dataset/model contain **817**. At checked GitHub commit `2284c6a0e6653aa8894bd12fdecc1212ba706c3a`, `train/data/limo.json` still packages the 817 v1 rows even though the README presents v2 as latest. The two releases are official but belong to different paper versions and must not be merged.

This belongs in **Data Construction & Open Release Recipes** because the main object is the hidden funnel from massive candidate pool to 2,125-question LIMO-Pool to 800 released triples. It is not process supervision or RLVR: the complete reasoning string is an answer-level SFT target with no independent step labels, process reward, preference pair, policy rollout group, or environment trajectory.

The Card reaches L4 through complete bilingual coverage of the paper, v1/v2 data/model revisions, pinned repository tree, training configuration, bundled data, and evaluation code. L4 does not make the construction reproducible: candidate ingestion, difficulty-filter code, teacher-generation jobs, final correctness checker, n-gram audit, lexical scorer, item lineage, and rejection records remain unavailable.
