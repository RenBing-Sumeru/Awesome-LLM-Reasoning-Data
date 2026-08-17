1. **Build the source pool:** Collect 204 difficult mathematical questions with gold answers and divide them into MATH and two AIME subsets.

2. **Generate or reorganize feedback:** Sample at least 64 responses per question from DeepSeek-R1, Qwen3-32B, QwQ-32B, and two R1-Distill models, covering both correct and incorrect outputs.

3. **Verify and filter:** Assign correctness labels through answer matching, strong-model verification, and human review; remove malformed CoT-only records and balance positive and negative examples by generator.

4. **Train and evaluate:** Form pointwise judging inputs from each question and response. Libra-RM training then applies label-consistent rejection sampling followed by RL with correctness reward and a length penalty.
