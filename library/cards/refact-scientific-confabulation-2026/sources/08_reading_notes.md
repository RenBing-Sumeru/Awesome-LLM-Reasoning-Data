1. **Positioning:** ReFACT evaluates detection, positional attribution, comparison, and correction of local scientific confabulations.
2. **Method handle:** It collects expert QA, marks minimal error spans, creates single-error variants, and evaluates four tasks.
3. **Data handle:** It includes 1,001 expert-verified QA pairs and 1,251 single-error variants with positions and correction targets.
4. **Evidence anchor:** Sixty-one percent of wrong predictions target unrelated salient spans, and GPT-4o pairwise F1 drops from 0.67 to 0.53.
5. **Reuse decision:** It fits scientific error localization; handle span granularity, multiple errors, and pairwise judge bias; evaluation should also be split by error position, discipline, answer length, and model scale; It is best for local scientific error localization and minimal repair. The main risk is selecting the most salient span rather than the true error, so order, position, answer length, and pairwise bias must be tested.
