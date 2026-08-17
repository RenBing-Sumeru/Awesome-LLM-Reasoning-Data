# Problem

Math instruction tuning often specializes on one benchmark or one rationale format, so strong in-domain gains can reduce out-of-domain performance and natural-language CoT cannot exploit computation reliably. Existing program-of-thought data are also too narrow to train open math generalists across fields.

MAmmoTH compiles MathInstruct, a 260k-record mixture of 13 math sources with both CoT and executable PoT targets, adds GPT-4 rationales to six subsets, filters generated programs against source answers, and uses the result for hybrid SFT.

**L4 facts:** Primary source: OpenReview `yLClGs770I`; venue/date: ICLR 2024 Spotlight Poster, official program 17422; decision boundary: public hybrid rationale records, not hybrid decoding alone; atlas object/evaluation: instruction + CoT/PoT + answer across math fields, tested on nine datasets; collection note: `L4_carded`, one Track 01 category.
