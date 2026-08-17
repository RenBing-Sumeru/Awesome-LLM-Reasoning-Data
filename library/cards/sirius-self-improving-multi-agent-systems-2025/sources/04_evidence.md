The paper's abstract and Introduction report an overall **2.86%–21.88%** improvement on reasoning and biomedical QA. The auditable task-level evidence is in Section 4.3.1 and Table 3 (final PDF pp. 5–6), where the metric is test accuracy in percent. The problem-solving baselines are Single-Agent, STaR, the prompted multi-agent system CoMM/COMM, TextGrad, and DSPy/MIPROv2. The following table preserves the Single-Agent result, the strongest applicable non-SiriuS result in that cell, and SiriuS:

| Backbone | Test set | Single-Agent accuracy | Strongest reported non-SiriuS comparator | SiriuS accuracy |
|---|---:|---:|---:|---:|
| GPT-3.5-turbo | College Physics | 25.55 ± 1.08 | TextGrad 32.09 ± 1.08 | **33.96 ± 1.43** |
| GPT-3.5-turbo | College Chemistry | 40.00 ± 3.95 | CoMM/COMM 47.69 ± 3.95 | **55.90 ± 3.11** |
| GPT-3.5-turbo | PubMedQA | 57.53 ± 0.99 | CoMM/COMM 72.27 ± 0.81 | **75.33 ± 0.70** |
| GPT-4o-mini | College Physics | 38.63 ± 1.95 | DSPy 46.11 ± 1.95 | **47.35 ± 1.95** |
| GPT-4o-mini | College Chemistry | 40.00 ± 2.59 | TextGrad 49.74 ± 7.36 | **56.41 ± 3.11** |
| GPT-4o-mini | PubMedQA | 63.87 ± 0.12 | CoMM/COMM 70.27 ± 0.42 | **73.67 ± 0.31** |
| Llama-3.2-3B-Instruct | College Physics | 26.79 ± 1.95 | CoMM/COMM 27.73 ± 1.43 | **29.60 ± 1.43** |
| Llama-3.2-3B-Instruct | College Chemistry | 34.46 ± 2.28 | STaR 38.46 ± 1.49 | **42.56 ± 2.28** |
| Llama-3.2-3B-Instruct | PubMedQA | 54.07 ± 0.31 | CoMM/COMM 65.80 ± 0.87 | **68.27 ± 1.03** |

Table 3 reports SiriuS as the highest value in all nine cells. It also contains an important negative result: TextGrad with GPT-3.5-turbo is `NA` on PubMedQA because its optimizer could not parse instructions under the model/long-context setting; GPT-4o-mini TextGrad required manual answer extraction because of output-format failures (Section 4.3.1). TextGrad and DSPy are not reported for the Llama rows. The `±` terms are not defined as standard deviation versus standard error, and the paper does not disclose the number of runs or factors varied; the NeurIPS checklist explicitly acknowledges that omission (checklist item 7, final PDF p. 16).

The named dated backbones in Section 4.2 are `gpt-3.5-turbo-0125` and `gpt-4o-mini-2024-07-18`; Table 3 and Appendix D additionally report `Llama-3.2-3B-Instruct`. Inference temperature is 0 and the OpenAI Fine-tuning API supplies role-specific SFT. College Physics has 212 train and 107 test items (MMLU 68/34, GPQA 57/29, TheoremQA 87/44); College Chemistry has 128/65 (MMLU 66/34, GPQA 62/31); PubMedQA uses 500/500. Exact row IDs, split seed, source revisions, top-p, numeric `epsilon`, retry maxima, SFT epochs/learning rate/batch size, run seeds, provider fine-tune IDs, total tokens, cost, runtime, hardware, and memory are `unknown`. Current code often uses a 4,096-token cap, but the paper does not bind that cap to a complete experiment budget; checklist item 8 states that compute-resource details are unclear.

Section 4.3.2 and Table 4 (final PDF pp. 6–7) give PubMedQA ablations. These are a separate result table, so their SiriuS anchors (74.20 for GPT-3.5-turbo and 73.40 for GPT-4o-mini) should not be substituted for Table 3:

| PubMedQA ablation | GPT-3.5-turbo | GPT-4o-mini |
|---|---:|---:|
| SiriuS | 74.20 | 73.40 |
| SiriuS Analyst + base Solver | 72.00 | 72.80 |
| Base Analyst + SiriuS Solver | 73.20 | 71.60 |
| Fine-tune one shared base LLM on combined roles | 70.40 | 72.00 |
| SiriuS without augmentation | 73.40 | 72.20 |
| One additional fine-tuning iteration | 75.00 | 73.60 |

The ablations support role specialization and joint optimization, but the augmentation and extra-iteration effects are modest in this table. Removing augmentation lowers accuracy by 0.80 points for GPT-3.5-turbo and 1.20 for GPT-4o-mini. One additional iteration raises it by 0.80 and 0.20 points, respectively. Replacing one trained role with its base version lowers the anchor by 0.60–2.20 points depending on role/model, while training one shared base LLM lowers it by 3.80 and 1.40 points. These are author-reported single table values without disclosed confidence intervals for the ablations.

Actor-Critic uses different metrics and baselines. Section 4.4 and Table 5 (final PDF pp. 7–8) report **TP Accuracy**—the share of Actor answers that are correct and also accepted as correct by Judgment—and **Overall Accuracy** after possible feedback/regeneration. Self-Correct and Prompt are the comparators:

| Method | GPT-3.5 TP / overall | GPT-4o-mini TP / overall |
|---|---:|---:|
| Self-Correct | 11.80 / 16.40 | 24.60 / 28.80 |
| Prompt | 18.40 / 47.60 | 51.60 / 58.20 |
| SiriuS | **35.00 / 50.60** | **59.80 / 66.80** |

This setting exposes a negative result rather than hiding it: an untrained self-correction loop often modifies already-correct answers, producing very low TP Accuracy. SiriuS also remains sensitive to Judgment quality. Replacing Judgment with its base version changes GPT-3.5 TP/overall from 35.00/50.60 to 20.20/40.20 and GPT-4o-mini from 59.80/66.80 to 53.00/59.40. Replacing the Critic leaves TP unchanged but lowers overall accuracy to 50.40 and 64.20; fine-tuning one shared base LLM yields 33.80/43.60 and 56.00/59.60. The paper explicitly identifies false rejection of correct answers and false acceptance of wrong answers as failure modes.

Appendix D.2, Table 7 (final PDF pp. 22–23) expands the **32.28%–74.70%** augmentation-success range into all nine task/backbone cells. “Correct” and “Wrong” are initial case-level outcomes; “Augmented” counts initially wrong episodes successfully rewritten into terminally correct episodes:

| Dataset | Backbone | Initial correct | Initial wrong | Successfully augmented | Augmented / wrong |
|---|---|---:|---:|---:|---:|
| College Physics | GPT-3.5-turbo | 56 | 156 | 61 | 39.10% |
| College Physics | GPT-4o-mini | 106 | 106 | 42 | 39.62% |
| College Physics | Llama-3.2-3B-Instruct | 51 | 161 | 69 | 42.86% |
| College Chemistry | GPT-3.5-turbo | 45 | 83 | 62 | **74.70%** |
| College Chemistry | GPT-4o-mini | 58 | 70 | 31 | 44.29% |
| College Chemistry | Llama-3.2-3B-Instruct | 48 | 80 | 32 | 40.00% |
| PubMedQA | GPT-3.5-turbo | 382 | 118 | 50 | 42.37% |
| PubMedQA | GPT-4o-mini | 358 | 142 | 46 | 32.39% |
| PubMedQA | Llama-3.2-3B-Instruct | 342 | 158 | 51 | **32.28%** |

Summed across those cells, the table contains 1,446 initial successes, 1,074 initial failures, and 444 successfully repaired failures, giving 1,890 successful-or-repaired **case episodes**. It does not reveal the number of role SFT records, because direct successes yield multiple role messages and repaired episodes start at different selected roles. The table also shows that most initial failures remain unrepaired in every cell; even the best 74.70% cell leaves 21 of 83 wrong chemistry cases unrepaired, and the lowest cells repair only about one third.

Section 4.5 and Figures 2–7 provide robustness checks for competitive environments using win rate, payoff, or final selling price rather than QA accuracy. The authors report that gains persist when Resource Exchange initial resources change from 25/5 versus 5/25 to 35/15 versus 15/35 (Figure 5), when Ultimatum resource changes from 100 to 1,000 (Figure 7), and when Seller-Buyer valuations change from 40/60 to 30/70 (Figure 6). In the original 40/60 Seller-Buyer setting, most base pairs settle below 50, while the fine-tuned SiriuS seller is reported to sell at 50. These are figure-based, author-reported environment outcomes; comparable trajectory counts, uncertainty estimates, and immutable game logs are not released.

The evidence supports system-level accuracy/utility improvement and measurable repair coverage, not correctness of every retained reasoning step. Terminal success labels all upstream role messages as useful, no role-level causal verifier tests that assumption, and benchmark results do not establish experience-library quality. Independent audit is blocked because the official release contains only five MMLU-physics input rows—not the 212-row physics split—and no paper-run role libraries, full successful or failed episodes, feedback, regenerated trajectories, rewards, fine-tuned model artifacts, result logs, split manifest, or immutable release.
