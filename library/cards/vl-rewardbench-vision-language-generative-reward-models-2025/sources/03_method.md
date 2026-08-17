1. **Build the source pool:** Collect candidates from multiple vision-language tasks and model-response pools, using automatic scores or rules to prioritize confusing hard response pairs.

2. **Generate or reorganize feedback:** Organize general-question, hallucination, and complex-reasoning subsets while controlling pair differences so length or formatting alone is insufficient.

3. **Verify and filter:** Have humans verify the image, question, candidate responses, and preference label against visual evidence; discard cases without reliable adjudication.

4. **Train and evaluate:** Evaluate 16 LVLMs with order-randomized pairwise judging and validate the benchmark through accuracy and correlation with downstream Best-of-N results.
