1. **Build the SFT corpus:** Aggregate mathematical problems, generate multiple long solutions, and apply answer verification, quality rules, and deduplication to retain 719K question–CoT–answer records.

2. **Select RL prompts:** Choose 62K difficult problems with normalizable answers, avoiding prompts that are already solved by every rollout and provide little learning signal.

3. **Optimize with length progression:** Train first under shorter contexts and budgets, then increase allowed reasoning length across stages so the policy adapts gradually rather than paying maximum-context cost from the start.

4. **Penalize repetition and evaluate:** Apply an adaptive penalty to repeated spans while using rule-based answer correctness as reward, then compare SFT and RL stages on fixed AIME and MATH evaluations.
