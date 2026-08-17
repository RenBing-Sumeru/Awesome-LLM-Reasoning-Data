1. Enumerate grounded-answer failure modes and criteria, including relevance, completeness, usefulness, faithfulness, positive acceptance, and negative rejection.

2. Create controlled unit tests by holding a question fixed while varying documents or the candidate answer; the expected criterion scores form the oracle.

3. Assemble 144 manually curated tests across 16 situations, then run automated frameworks and closed or open judges on identical inputs.

4. Score calibration and error detection against the unit-test labels. The proposed GPT-4 pipeline follows the multi-criterion rubric rather than a single overall preference.

5. Distil GPT-4 reasoning traces into Llama-3 and re-evaluate it. Verify repository revision, prompt templates, and test annotations before comparing judge results.
