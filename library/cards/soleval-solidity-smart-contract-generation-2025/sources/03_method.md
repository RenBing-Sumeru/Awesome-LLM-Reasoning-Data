1. **Collect real projects:** Select public Solidity repositories that can be built and tested with Foundry, organize them into six domains such as DeFi, and freeze dependencies, commits, and compiler versions.

2. **Construct generation tasks:** Locate contract functions or regions with repository-level calls, hide target implementations, and retain interfaces, related contracts, and natural-language or code context. Reference versions serve as gold implementations.

3. **Build three verifier types:** Insert model code into projects, compile it, and run Foundry tests. Measure gas only for functionally correct candidates and run Slither for vulnerability findings. Compilation or test failures are not counted as correct.

4. **Evaluate and train:** Compute Pass@k, Gas@k, and Vul@k under fixed sampling and fine-tune Qwen-7B on the training split. Reproduction requires fixed blockchain tools, hardware, gas measurement, Slither rules, and dataset snapshots.
