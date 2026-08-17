# Usefulness

- **Scientific data builder:** use reference-answer problems to implement generate, judge, reflect, answer-hint, and quality-rank stages; emit question/worked-solution/subject records with stage and source provenance added.
- **Dataset auditor:** sample correctness by domain and reflection stage, compare final-answer validity with step validity, and measure how the quality cutoff changes source/language composition.
- **Do not use when:** intermediate reasoning must be formally verified or per-record lineage is mandatory; the public schema and model-based checks do not meet those contracts without augmentation.
