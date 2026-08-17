1. **Collect candidate problems:** Aggregate questions and answers from Orca-Math, cn_k12, olympiad sources, MATH, GSM8K, Omni-MATH, and other open resources while preserving provenance and mathematical domain.

2. **Clean and decontaminate:** Apply exact and semantic deduplication, check overlap with MATH-500 and Omni-MATH evaluation sets, and remove non-English, hyperlink-containing, true/false, multi-part, and proof-request items.

3. **Filter for verifiability:** Retain problems with a single closed-form, parseable answer suitable for rule comparison. For selected sources, multi-sample solving by strong and smaller models is also used to remove suspicious or unsolvable records.

4. **Reformulate and recheck:** Convert selected multiple-choice questions through information extraction, open-ended rewriting, integrity judgment, and answer verification, then store solve rate as a difficulty signal.
