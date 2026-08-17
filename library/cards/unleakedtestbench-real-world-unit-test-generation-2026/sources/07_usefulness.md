1. **Evaluate test generators:** Run generated tests uniformly on ULT, reporting all four metrics and failure categories; use PLT to measure score gains caused by leakage.

2. **Build training data:** Save function–test–execution records that pass original tests and coverage/mutation filters for SFT or test rewards.

3. **Audit benchmark contamination:** Compare the same model on ULT and PLT. If dependencies cannot be reconstructed reliably or the target is repository-level integration testing, ULT scores should not be treated as sufficient evidence.
