1. **One-sentence positioning:** Answer imitation does not directly teach a model to identify and correct errors in an existing reasoning trace; it uses creating incorrect or low-quality responses and asking GPT-4o to locate errors and explain improvements.
2. **Method handle:** The pipeline covers source preparation, record generation, verification, filtering, and release.
3. **Data handle:** WebInstruct-CFT contains about 654K question–noisy-response–critique records, with 50K used in the main experiments and centers on questions, noisy responses, and natural-language critiques.
4. **Evidence anchor:** 50k critique examples outperform equal-sized sft by about 4%–10% across six mathematical benchmarks, with conclusions limited to the reported setup.
5. **Reuse decision:** It is most suitable for mathematical and STEM critique, correction, and filtering; incorrect teacher critiques, answer leakage, and benchmark contamination must be checked before reuse.
