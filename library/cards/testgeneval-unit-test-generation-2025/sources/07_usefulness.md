1. **Evaluate test generation:** Compare models on full test-file generation and completion in fixed Docker environments, jointly reporting execution pass rate, coverage improvement, and mutation improvement.

2. **Construct training data:** Mask segments of human tests to create SFT examples, or sample model-written tests and filter them through the three-layer verifier to obtain code–test–execution-metric records.

3. **Study verifiers for coding agents:** Use generated tests as additional rewards for repair candidates, but only after establishing that mutation results correlate with real bug detection. Languages without stable project builds or mutation tooling cannot directly reuse the protocol.
