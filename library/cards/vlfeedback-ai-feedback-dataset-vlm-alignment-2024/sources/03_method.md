1. Curate general, academic, robustness, domain-specific, and red-teaming image instructions from source training splits.
2. Randomly sample at least four responses per instruction from a 12-LVLM pool.
3. Ask GPT-4V to rate each response on helpfulness, visual faithfulness, and ethics with a rationale.
4. Derive pairwise DPO labels from average score and remove ties.
5. Train Qwen-VL-Chat with DPO to make Silkie. Reproduce using the official data revision, model pool, prompts, score aggregation, and source-image rights audit.
