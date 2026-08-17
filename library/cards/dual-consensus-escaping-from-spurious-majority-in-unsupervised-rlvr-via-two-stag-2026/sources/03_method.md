1. **Sample an anchor.** The current policy draws (G) ordinary rollouts for a prompt and records its majority answer and consensus rate.

2. **Make an explorer.** A copy takes one clipped unlearning gradient step that suppresses high-probability anchor tokens; the original policy is unchanged. The explorer draws another (G) rollouts.

3. **Elect a pseudo-label.** For every candidate final answer, compute the harmonic mean of its anchor and explorer frequencies; select the maximum.

4. **Assign rewards.** A trajectory matching the elected answer receives 1; one matching only the anchor majority receives 0.5; all others receive 0.

5. **Update adaptively.** GRPO always uses anchor samples; explorer samples join the gradient only when the moving consensus rate exceeds one half. The main runs train Llama-3.2-3B-Instruct, Qwen3-4B-Base, and Qwen3-8B-Base for two epochs on DAPO-Math-14K.
