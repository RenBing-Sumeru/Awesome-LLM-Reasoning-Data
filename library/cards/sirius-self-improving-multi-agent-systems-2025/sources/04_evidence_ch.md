论文 Abstract 与 Introduction 报告 reasoning 和 biomedical QA 的总体提升为 **2.86%–21.88%**。可审计的逐任务证据位于 Section 4.3.1 与 Table 3（正式 PDF 第 5–6 页），metric 是百分比 test accuracy。Problem-solving baseline 包括 Single-Agent、STaR、prompted multi-agent system CoMM/COMM、TextGrad 与 DSPy/MIPROv2。下表保留每个 cell 的 Single-Agent、最强适用非 SiriuS comparator 和 SiriuS：

| Backbone | Test set | Single-Agent accuracy | 最强的已报告非 SiriuS comparator | SiriuS accuracy |
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

Table 3 中 SiriuS 在九个 cell 都是最高值。它也包含一个重要 negative result：GPT-3.5-turbo 的 TextGrad 在 PubMedQA 上为 `NA`，因为 optimizer 在模型能力/长上下文设置下无法解析 instruction；GPT-4o-mini TextGrad 则因输出格式失败而需要人工抽取答案（Section 4.3.1）。Llama row 没有报告 TextGrad 与 DSPy。`±` 项没有被定义为 standard deviation 还是 standard error，论文也未披露 run 数与变化因素；NeurIPS checklist item 7（正式 PDF 第 16 页）明确承认该缺口。

Section 4.2 明确命名的 dated backbone 是 `gpt-3.5-turbo-0125` 与 `gpt-4o-mini-2024-07-18`；Table 3 与 Appendix D 另报告 `Llama-3.2-3B-Instruct`。Inference temperature 为 0，role-specific SFT 使用 OpenAI Fine-tuning API。College Physics 有 212/107 个 train/test item（MMLU 68/34、GPQA 57/29、TheoremQA 87/44）；College Chemistry 有 128/65（MMLU 66/34、GPQA 62/31）；PubMedQA 使用 500/500。精确 row ID、split seed、source revision、top-p、数值 `epsilon`、retry maximum、SFT epoch/learning rate/batch size、run seed、provider fine-tune ID、total token、cost、runtime、hardware 与 memory 均为 `unknown`。当前代码常使用 4,096-token cap，但论文没有把它固定为完整实验 budget；checklist item 8 明确说明 compute-resource detail 不清楚。

Section 4.3.2 与 Table 4（正式 PDF 第 6–7 页）给出 PubMedQA ablation。它是独立结果表，因此其中 SiriuS anchor（GPT-3.5-turbo 为 74.20，GPT-4o-mini 为 73.40）不能替代 Table 3：

| PubMedQA ablation | GPT-3.5-turbo | GPT-4o-mini |
|---|---:|---:|
| SiriuS | 74.20 | 73.40 |
| SiriuS Analyst + base Solver | 72.00 | 72.80 |
| Base Analyst + SiriuS Solver | 73.20 | 71.60 |
| 在 combined role 上 fine-tune 一个 shared base LLM | 70.40 | 72.00 |
| SiriuS without augmentation | 73.40 | 72.20 |
| 额外一次 fine-tuning iteration | 75.00 | 73.60 |

Ablation 支持 role specialization 与 joint optimization，但 augmentation 和 extra-iteration effect 在该表中较小。移除 augmentation 后，GPT-3.5-turbo accuracy 下降 0.80 point，GPT-4o-mini 下降 1.20 point。额外一次 iteration 分别提升 0.80 与 0.20 point。根据 role/model 不同，用 base version 替换一个 trained role 会比 anchor 下降 0.60–2.20 point；训练一个 shared base LLM 则下降 3.80 与 1.40 point。这些都是作者报告的单表数值，ablation 没有披露 confidence interval。

Actor-Critic 使用不同 metric 与 baseline。Section 4.4 与 Table 5（正式 PDF 第 7–8 页）报告 **TP Accuracy**——Actor answer 正确且被 Judgment 正确接受的比例——以及可能经过 feedback/regeneration 后的 **Overall Accuracy**。Comparator 是 Self-Correct 与 Prompt：

| Method | GPT-3.5 TP / overall | GPT-4o-mini TP / overall |
|---|---:|---:|
| Self-Correct | 11.80 / 16.40 | 24.60 / 28.80 |
| Prompt | 18.40 / 47.60 | 51.60 / 58.20 |
| SiriuS | **35.00 / 50.60** | **59.80 / 66.80** |

该 setting 没有隐藏 negative result：未训练的 self-correction loop 经常修改原本正确的回答，导致 TP Accuracy 很低。SiriuS 同样对 Judgment quality 敏感。把 Judgment 替换为 base version 后，GPT-3.5 TP/overall 从 35.00/50.60 变为 20.20/40.20，GPT-4o-mini 从 59.80/66.80 变为 53.00/59.40。替换 Critic 时 TP 不变，但 overall accuracy 降为 50.40 与 64.20；fine-tune 一个 shared base LLM 则得到 33.80/43.60 与 56.00/59.60。论文明确把错误拒绝正确答案和错误接受错误答案列为 failure mode。

Appendix D.2 的 Table 7（正式 PDF 第 22–23 页）把 **32.28%–74.70%** augmentation-success range 展开为九个 task/backbone cell。“Correct”与“Wrong”是初始 case-level outcome，“Augmented”统计从初始错误成功重写为终局正确的 episode：

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

九个 cell 合计包含 1,446 个初始成功、1,074 个初始失败与 444 个成功修复失败，因此得到 1,890 个 successful-or-repaired **case episode**。它没有给出 role SFT record 数量，因为直接成功会产生多条 role message，repair 也从不同 selected role 开始。该表还显示每个 cell 的大部分初始失败仍未修复：即使最好的 74.70% cell，也有 83 个错误 chemistry case 中的 21 个没有修复；最低 cell 只修复约三分之一。

Section 4.5 与 Figures 2–7 使用 win rate、payoff 或 final selling price，而不是 QA accuracy，为 competitive environment 提供 robustness check。作者报告，当 Resource Exchange 初始资源从 25/5 对 5/25 改为 35/15 对 15/35（Figure 5）、Ultimatum resource 从 100 改为 1,000（Figure 7）、Seller-Buyer valuation 从 40/60 改为 30/70（Figure 6）时，gain 仍然存在。在原始 40/60 Seller-Buyer 设置中，多数 base pair 的成交价低于 50，而 fine-tuned SiriuS seller 被报告以 50 成交。这些是基于 figure 的作者报告 environment outcome；可比 trajectory count、uncertainty estimate 与 immutable game log 均未发布。

现有证据支持 system-level accuracy/utility improvement 与可测量的 repair coverage，却不支持每条保留 reasoning step 都正确。Terminal success 会把所有 upstream role message 标为 useful，没有 role-level causal verifier 检查这个假设，benchmark result 也不能证明 experience-library quality。独立审计受到 release 缺口阻断：官方发布只有五条 MMLU-physics input，而不是 212 行 physics split；论文运行的 role library、完整 success/failure episode、feedback、regenerated trajectory、reward、fine-tuned model artifact、result log、split manifest 与 immutable release 均不存在。
