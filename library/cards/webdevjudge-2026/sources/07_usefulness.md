Use the released benchmark to audit a web-code critic: deploy each pair, provide both code and render, predict the preference, and report agreement separately for intention, static, and dynamic checks. Use WebDevJudge-Unit when a system claims to verify whether a requested feature is feasible.

For reward-model work, keep the rubric tree and execution trace with every label and compare pairwise decisions against experts. Do not use it unchanged for non-web tasks or for static-only datasets; success requires agreement and error rates after a reproducible deployment.
