1. **Positioning:** Uses token-confidence changes to determine reasoning-step boundaries automatically.

2. **Method handle:** Probability logging, change detection, prefix rollouts, and PRM training.

3. **Data handle:** ASPRM contains roughly 100K training records and 215K rollouts.

4. **Evidence anchor:** Adaptive segmentation outperforms newline or sentence segmentation.

5. **Reuse decision:** Best for granularity research; recompute boundaries after changing the base model.
