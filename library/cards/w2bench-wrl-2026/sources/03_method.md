1. **Collect and vary prompts.** Filter writing instructions into five task categories, then express content, style, format, and length requirements.

2. **Construct WEval rankings.** For each prompt with n requirements, generate one answer to the complete prompt and n-1 answers after progressively dropping requirements. More dropped requirements define the golden partial order; rank correlation, instruction-level, and prompt-level metrics score a reward model.

3. **Train the reward.** Treat the full-prompt answer as chosen and dropped-prompt answers as rejected. Optimize Qwen2.5-7B-Instruct with Bradley--Terry loss to assign higher reward to requirement-adherent output.

4. **Train and test policies.** Filter 13,221 WildChat-1M writing instructions, sample policy rollouts, reward them with the trained model, and update with GRPO. Pin the teacher, dropout seed, requirement extraction, prompt set, reward checkpoint, and rollout budget; several generation settings are unknown.
