1. **Decision.** A held-out test can leak at retrieval time without entering model training.

2. **Mechanism.** Preserve search trajectories, identify answer-bearing pages, then compare runs with the source blocked.

3. **Artifact.** The authors release complete experiment logs, not a new benchmark dataset.

4. **Evidence.** About 3% of audited questions directly found labeled datasets; blocking Hugging Face cut contaminated-subset accuracy by about 15%.

5. **Reuse.** Report URLs, timestamps, and blocklists; web search cannot be presumed clean from one negative check.
