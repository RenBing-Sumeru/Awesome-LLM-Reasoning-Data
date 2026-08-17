1. **Build the source pool:** Collect images, requests, and candidate model responses from visual QA, reasoning, description, generation, and evaluation tasks.

2. **Generate or reorganize feedback:** Design task-specific scoring or comparison criteria and use strong judges to generate scores, chosen/rejected labels, and natural-language rationales.

3. **Verify and filter:** Apply rule checks, format normalization, and quality filtering to unify pointwise and pairwise data as critic-instruction records.

4. **Train and evaluate:** Supervise a LLaVA-based model to obtain LLaVA-Critic, then use its scores or preferences to train other multimodal policies and evaluate it on judge benchmarks.
