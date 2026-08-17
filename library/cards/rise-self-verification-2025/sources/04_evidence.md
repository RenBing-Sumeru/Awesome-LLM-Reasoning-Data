The accepted NeurIPS paper reports that RISE improves both reasoning and verification measurements across its math experiments. It gives the example that RISE-3B exceeds Qwen2.5-3B-Instruct by 3.7 average reasoning-accuracy points and 33.4 self-verification-accuracy points. It also reports test-time comparisons using majority and verification-weighted voting, and analyzes online versus offline verification.

These are experimental claims from the paper, not a released audit of every training item or verifier failure mode. The measured verification target is agreement with the outcome label. It is therefore evidence about score calibration under this contract, not direct evidence that every generated critique correctly explains a solution.

