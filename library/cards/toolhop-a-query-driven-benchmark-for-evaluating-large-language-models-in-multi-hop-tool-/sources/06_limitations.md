1. **Synthetic boundary:** Queries and tools are produced by a construction pipeline and do not fully represent real API permissions, latency, and failure modes; deployment requires tests with actual services.

2. **Answer-level scoring:** Final-answer matching can hide inefficient or accidentally correct call chains. Call count, invalid calls, and intermediate evidence should also be reported.

3. **Scale and contamination:** The 995 items support diagnosis but cannot cover all domains, and public release creates training-leakage risk. Long-term evaluation needs newly generated or hidden items.
