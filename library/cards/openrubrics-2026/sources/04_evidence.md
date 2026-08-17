**Claim.** Preference-consistent synthetic rubrics yield stronger, smaller reward models than direct judging or comparable white-box baselines.

**Controlled evidence.** On ten reward and instruction-following metrics, Table 1 compares Qwen3-4B/8B RUBRIC-RM with 7B white-box judges, a direct Qwen-3-8B rubric-plus-judge pipeline, and reference API/14B systems. RUBRIC-RM-8B averages 70.1, versus 57.7 for direct Qwen-3-8B; voting@5 reaches 73.0. On HealthBench, the 8B model scores 68.3 and voting@5 72.9, while direct prompting scores 51.8 (Figure 5).

The comparison supports the configured data construction and two-stage model, but it does not isolate every contribution of source mixture, filtering, model capacity, or voting; online RLHF remains untested.
