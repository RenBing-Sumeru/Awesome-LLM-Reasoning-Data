1. **One-sentence position:** FACTORY combines model-based difficulty filtering and human verification for long-tail long-form prompts with claim-level evidence annotations.


2. **Method takeaway:** Wikipedia seeds, LLM expansion, difficulty filtering, human refinement, and human evidence search form the pipeline.


3. **Data takeaway:** JSONL `all`, `hard`, and `fact_checking` splits use Factual, NonFactual, Inconclusive, and No Verifiable Fact labels.


4. **Evidence anchor:** About 40% of claims from strong retrieval systems lack reliable support on FACTORY, versus about 10% on other datasets.


5. **Reuse decision:** Best for long-form factuality and judge calibration; preserve evidence snapshots and control contamination.
