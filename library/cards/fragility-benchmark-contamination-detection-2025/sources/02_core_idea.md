The paper shows that contamination detectability is itself fragile under reasoning-model training. Its evaluation surface is a benchmark question, response, model score, and member/non-member label; AUROC measures whether a detector separates the two groups.

After contaminated SFT, brief PPO-style RL contracts the member–non-member signal, chiefly through clipping; with late CoT SFT on strong LRMs, most detectors are already near chance. The official repository releases an arena, but the paper does not establish a universal contamination oracle.
