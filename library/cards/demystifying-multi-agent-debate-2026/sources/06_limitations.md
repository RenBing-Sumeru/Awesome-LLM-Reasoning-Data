Distinct-answer selection can choose superficial variants or multiple wrong hypotheses and is not an optimal diversity objective. The paper and repository documentation differ on unique-answer versus embedding-based selection, so exact implementation lineage must be recorded. Sampling 10 candidates also adds test-time cost relative to five-agent baselines.

Self-consistency targets are model-derived rather than human probabilities. Confidence can remain miscalibrated or amplify confidently wrong agents. The engagement reward was introduced because agents learned to output only final answers; rewarding words such as `agent`, `agree`, or `skeptical` can encourage lexical gaming without substantive engagement. The theory assumes homogeneous agents and simplified updates; experiments use fully connected five-agent English QA.

Complete pools, rejected candidates, item manifests, seeds, per-turn reward vectors, adapters, and debate trajectories are not released as a quality-audited corpus. The paper says licences were checked, but reusable code/dialogue terms were not verified from the repository. Benchmark gains do not establish provenance or dialogue quality.

