1. **One-sentence position:** SWE-fficiency provides 498 real workloads across nine repositories, requiring autonomous localization and scoring optimization through expert-relative Speedup Ratio.

2. **Method takeaway:** Pull-request filtering, static and coverage localization, stable expert-speedup measurement, correctness gating, and SR aggregation form the pipeline.

3. **Data takeaway:** Each task contains a full repository, workload, relevant tests, expert patch, and container, concentrated in Python scientific computing.

4. **Evidence anchor:** All 11 paper systems average below 0.15 times expert performance; later leaderboard leaders reach about 0.225 times but remain far behind.

5. **Reuse decision:** It suits investigative performance engineering. Timing noise and workload overfitting require fixed hardware, repeated measurement, and broader tests.
