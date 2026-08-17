1. **Define task templates:** Write language templates, parameter intervals, and state validators for transfers, swaps, approvals, staking, and related actions.

2. **Instantiate dynamically:** Sample amounts, tokens, addresses, and workflow order each round to produce concrete instructions.

3. **Execute snapshots:** Run generated transaction code in isolated forked EVM states, capturing reverts, gas, and call traces.

4. **Validate and score:** Check terminal chain state; atomic tasks use correctness, while composite tasks add step-overhead decay. Reproduction must fix fork blocks, RPC providers, contract addresses, wallet permissions, and five-round seeds.
