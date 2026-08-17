1. **Run searchable evaluation.** Search-based agents answer HLE, SimpleQA, and GPQA items while their retrieved sources and reasoning logs are retained.

2. **Mark direct leakage.** Inspect whether a source contains the test question or near duplicate together with the ground-truth answer; retain the URL and trajectory as evidence.

3. **Localize sources.** Identify public dataset copies, including labeled Hugging Face repositories, among retrieved pages.

4. **Intervene.** Block Hugging Face and re-evaluate contaminated items; compare accuracy with the original search setting.

5. **Audit disclosure.** Release complete logs and report search configuration, blocked domains, timestamps, and the definition used to mark contamination. Other web sources remain a possible leakage path.
