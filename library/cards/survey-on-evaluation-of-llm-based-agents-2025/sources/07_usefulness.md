For a benchmark designer, begin with the target agent and user goal, choose the paper's curation/environment/interface/metric/safety fields, then specify a terminal check such as unit tests, state matching, or answer matching. The output is a benchmark design sheet; success is that every action space and verifier is explicit. Do not use only final success rate for long-horizon diagnosis.

For an agent developer, log trajectories and evaluate final response, steps, and full trajectories separately; use reference paths only where they are feasible, and calibrate any reference-free LLM judge. The output is a failure report that localizes planning, tool, or execution errors. Do not compare runs whose model, harness, retry policy, or budget differs.

For literature discovery, use the GitHub index to locate current work, then verify each primary artifact and pin its version/date.
