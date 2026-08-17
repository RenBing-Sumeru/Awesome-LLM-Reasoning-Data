For an open generative judge, start with pairwise tasks that have trusted preference labels. Reuse the prompt diversification, answer swapping, teacher agreement filter, and SFT-to-DPO split to output an auditable judge dataset and then compare it with an instruction model on held-out preference benchmarks.

For RLAIF prototyping, use the released judge to rank multiple policy responses, construct best-versus-worst pairs, and measure the post-DPO policy with an independent evaluator. Do not directly adopt this recipe where answers are point-wise or highly open-ended, where source labels are weak, or where a proprietary-dialogue component cannot be replaced and documented.

Success checks should include target-domain human agreement, verdict flips after answer swapping, length correlation, and independent post-training scores. A high score from the judge itself does not establish that its reward signal is safe to reuse.
