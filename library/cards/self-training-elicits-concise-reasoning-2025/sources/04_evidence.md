ACL Anthology verifies the paper, authors, venue, pages, DOI 10.18653/v1/2025.findings-acl.1289, and official BibTeX. The paper and repository verify the construction recipe and runnable components; the repository also links fine-tuned models.

Across five main model families and GSM8K/MATH, the paper reports about 30% average output-token reduction for the combined few-shot-conditioned BoN approach while maintaining average accuracy. It evaluates the fine-tuned models greedily, so the result demonstrates movement of sampling effort from inference to construction/training.

The paper also reports cross-task length reductions of roughly 10-12% with small accuracy changes, a Llama scaling study from 1B to 8B, and latency/memory measurements on two models. These are model- and setup-specific behavior measurements.

An important ablation compares question-wise and global shortest selection: average relative accuracy is 99.03% versus 96.03%, while relative length is 70.54% versus 64.33%. This supports the choice to preserve one candidate per solvable question rather than globally optimizing length.

None of these downstream results proves step-level rationale validity, absence of parser exploits, fair coverage of questions that had no correct candidate, or quality of an unreleased trace corpus. Benchmark accuracy and shorter outputs are evidence for the recipe's effect, not per-row data certification.

