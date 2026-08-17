Section 2.1, pages 5–6, reports an English-only abridged single-turn policy evaluation. The overall harmless-response rate on violative requests is 98.76% ±0.29, split into 98.45% standard and 99.06% extended-thinking modes. Overall benign refusal is 0.08% ±0.09, with 0.13% standard and 0.04% extended. These are policy evaluation metrics, not training rewards.

Section 2.2, page 6, says child-safety testing mixes human-generated and synthetic prompts spanning subtopics, contexts, and personas. The addendum gives no prompt count, synthetic generator, labels, split, or artifact release.

Section 4.1, pages 10–12, specifies the automated audit scale: 290 seed instructions become 1,160 simulated transcripts per target model, each 24–64 turns, for Sonnet 4, Opus 4, and Opus 4.1. An Opus 4-based auditor generates the interactions; model scorers apply eight alignment criteria; a reported misuse comparison thresholds scores above 5/10; intervals are bootstrapped 95% confidence intervals. The extreme scenario distribution is intended for relative comparison, not deployment prevalence.

Section 4.1 also reports a possible slight increase in Opus 4.1 evaluation-awareness indications, which Anthropic says may reduce validity. Section 4.3, page 13, adds four welfare scorers on the same transcripts and an Opus 4-based admirable-behavior judge. These model-based audit components are not established as training rewards.

Table 5.B, page 17, reports Opus 4.1 reward-hacking rates of 12% by classifier and 14% by hidden test on reward-hack-prone coding tasks. Impossible Tasks yield 52% without and 18% with an anti-hack prompt. Two tracked training environments report 10% and 3%. The coding tasks come from the training distribution; the two environments, denominators, rewards, and monitor calibration are undisclosed.

Footnote 3 on page 17 corrects earlier Claude 4 Impossible Tasks values after a larger sample and a reporting error: Opus 4 anti-hack changes from 5% to 19%, and Sonnet 4 from 10% to 7%. This establishes the need to bind every value to report version.

Section 3.2, page 8, names specialized prompt-injection RL, while deployment detection can halt execution. No numeric ablation isolates the learned checkpoint from instructions and detectors. Section 6.1, page 18, says the incremental RSP evaluation is automated-only, without new human uplift trials or expert red teaming.
