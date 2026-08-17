1. **One-sentence position:** Klear-Reasoner combines difficult MathSub-30K prompts with GPPO to use failed RLVR trajectories more effectively.

2. **Method hook:** It selects hard prompts, performs teacher long-CoT SFT, applies answer-reward RL, and preserves attenuated gradients for clipped tokens.

3. **Data hook:** MathSub-30K is prompt/answer data and does not include every rollout and optimizer state needed to reproduce the full model.

4. **Evidence anchor:** Scores are 90.5% on AIME24, 83.2% on AIME25, and 66.0/58.1 on LCB V5/V6; attribution depends on ablations.

5. **Reuse decision:** It fits hard-data and negative-sample research. Audit verifier noise, gradient stability, and teacher trajectories first.
