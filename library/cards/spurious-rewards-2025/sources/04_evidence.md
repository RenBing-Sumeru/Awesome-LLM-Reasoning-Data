Claim: on Qwen2.5-Math-7B, large RLVR gains need not come from correct labels. With the same 300-step GRPO setup and DeepScaleR prompts, MATH-500 pass@1 rises by 29.1 points with ground truth, but also by 24.1 with an incorrect majority label and 21.4 with Bernoulli(0.5) random reward (Fig. 1–2).

Mechanism check: random-reward training gives consistent gains only when GRPO clipping is present; three variants that remove or neutralize clipping do not (Fig. 4). The authors connect this to Qwen2.5-Math-7B's code reasoning rising from 65% before RL to above 90% under spurious rewards (Fig. 6; Table 1).

The result supports a configuration-specific amplification account, not that random feedback teaches mathematics: the same spurious rewards are usually flat or harmful for Llama3 and OLMo2 (Fig. 3), and prompts also affect the Qwen starting point.

On the post-cutoff AIME 2025 check, ground truth has a clearer advantage, while other rewards yield only -0.4 to +4.5 points; this further narrows the claim.
