ReST-EM converts a policy's own successful rollouts into new demonstrations through a repeatable E-step/M-step contract: sample candidates, apply an external binary verifier, cap accepted outputs per prompt, and SFT the next policy. Compared with one-shot rejection-sampling fine-tuning, the new decision is to repeat generation after the policy changes and measure when additional rounds overfit.

Google Scholar citations: 282（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Beyond+Human+Data%3A+Scaling+Self-Training+for+Problem-Solving+with+Language+Models&author=Avi+Singh&hl=en）

Open dataset: no. The paper uses 7,500 MATH and 2,342 APPS Introductory training prompts and generates new solutions at each iteration, but no official ReST-EM generated dataset, record file, code repository, or license was confirmed. MATH and APPS are input benchmarks, not a released ReST-EM artifact.
