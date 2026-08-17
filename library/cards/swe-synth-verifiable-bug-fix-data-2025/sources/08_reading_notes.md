1. **One-sentence position:** SWE-Synth jointly synthesizes repository bugs and verified repair trajectories, reporting 9,459 faulty variants and 3,018 successful patches.

2. **Method takeaway:** Coverage-based target selection, LLM reimplementation, failing-test filtering, multi-round agent repair, and terminal tests form the loop.

3. **Data takeaway:** Records may include repositories, logs, actions, patches, and test results; public snapshot size must be checked by revision rather than copied from the paper.

4. **Evidence anchor:** The 32B model reaches 22.2% on Verified, above 18.2% for real data and 16.4% for the base; the Lite advantage is smaller.

5. **Reuse decision:** It fits process-aware SWE training. Success bias and local-test overfitting require failed trajectories and full hidden regression tests.
