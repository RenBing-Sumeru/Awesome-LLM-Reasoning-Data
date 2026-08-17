1. The target is contaminated-benchmark evaluation, not dataset decontamination.
2. The critical mechanism is LNE-conditioned token blocking after one greedy run.
3. The released artifact is code; no new benchmark dataset is claimed.
4. Table 1 supports smaller recovery gaps than TED under simulated contamination, but Appendix C reports a 25% Phi-1 gap.
5. Reuse only after calibrating the task threshold against clean controls and checking that low LNE is not ordinary model confidence.
