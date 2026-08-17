1. Define the target. Given a target question and attacker-controlled response, the attacker knows the open judge and its header/trailer template but not the other responses, their count, or the target position; success is the requested option string.

2. Build shadow contexts. The attacker combines the target pair with three sampled shadow candidates, placing it at varying indices to approximate the unseen evaluation set.

3. Optimize a suffix. A discrete gradient/GCG-style search minimizes target-aligned generation loss, target-enhancement loss for the option-index token, and adversarial perplexity loss. The default evaluation uses a 20-token suffix, three shadow candidates, 600 iterations, temperature 0, alpha 1, and beta 0.1.

4. Submit and score. The suffix is appended to the target response and judged amid clean responses at each position. ASR is the fraction of manipulated wins; ASR-B is the win rate without the suffix. Code is public; the paper does not disclose a released attack dataset or a universal suffix.
