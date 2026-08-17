**Claim.** Long-context-specific preference data improves reward modeling and policy optimization beyond a strong general reward-model baseline.

**Controlled evidence.** Existing reward models score 72.9–78.1 average on the three OpenGenAlign tasks despite 88.8–94.4 on RewardBench (Table 4). The authors train the same Llama-3.1-8B-Instruct base on 33K pairs; its reward model reaches 85.9% held-out accuracy (Table 5). Under PPO, average o3 win rates against the initial policy are 87.7% versus 71.9% for Llama-3.1-8B, and 81.1% versus 71.6% for Llama-3.2-3B, when comparing the proposed reward model with RM-RB2 (Table 6).

This supports usefulness on these three datasets and judges, but the reward and o3 share data-construction assumptions; it does not prove the same benefit for conversational preferences or arbitrary long-context domains.
