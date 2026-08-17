1. **Evaluation:** Train an open multimodal judge that returns scores, preferences, and rationales.

2. **Training:** Generate rewards for visual DPO or Best-of-N while periodically checking bias against human preferences.

3. **Transfer or deployment:** Study pointwise versus pairwise supervision with the 113K data; add task-specific verifiers when pixel or executable correctness matters.
