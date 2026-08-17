1. **Collect multimodal science problems:** Select mathematics, physics, chemistry, and biology tasks containing images, formulas, and multi-step solutions, then sample candidate reasoning processes.
2. **Build the human benchmark:** Experts annotate correctness, error type, and explanation for each step, producing 2,400 adjudicated cases with 50,118 labels.
3. **Expand training data:** Generate and filter about 173K instruction-tuning records with the same input–output structure while keeping the test set isolated.
4. **Train in two phases:** First teach explicit solution analysis, then train step judgments and diagnosis; reproduction must fix source data and test deduplication.
