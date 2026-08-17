**Claim.** Verifiable agents improve a preference RM where factuality and hard instruction compliance matter.

**Controlled setup.** Table 1 compares REWARDAGENT MINI with its GPT-4o-mini backbone and reward RMs on RM-Bench, JudgeBench, and the authors’ 444-instance IFBench; the aggregate changes both the workflow and verifier calls, so it is not an isolated model-scale comparison.

**Result.** MINI reaches 72.5 overall versus 56.5 for ArmoRM and 45.9 for GPT-4o mini; on IFBench-hard it reaches 78.0 versus ArmoRM’s 56.5. Table 2 removes each verifier: omitting the factuality verifier drops RM-Bench from 73.1 to 54.0, while omitting instruction following drops IFBench from 75.5 to 60.4.

**Boundary.** These results support this workflow on selected pairwise benchmarks, not correctness of every verifier or causal attribution solely to one module; oracle routing scores are higher, showing router error remains material.
