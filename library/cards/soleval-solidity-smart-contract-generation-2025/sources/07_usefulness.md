1. **Evaluate smart-contract models:** Run all 1,507 tasks in fixed Foundry, solc, and Slither environments and jointly report Pass@k, Gas@k for correct candidates, and Vul@k rather than compilation rate alone.

2. **Multi-objective RLVR:** Use tests as a correctness gate and assign secondary rewards for gas and security findings, preventing superficial gas reductions through removed checks or changed interfaces.

3. **Build security training data:** Combine gold contracts, model candidates, tests, gas, and Slither outputs into reward records. Contracts involving real funds or uncovered economic attacks must not be deployed solely because they pass the benchmark; professional audits remain necessary.
