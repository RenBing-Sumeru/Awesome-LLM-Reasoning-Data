动机中的 failure 有明确数值。在已知 non-member 博客上，传统 DI 随每篇文章序列上限从 5 增至 25，分别给出 0.002、0.001、0.001、0.001 和 0.001 的 p-value，五个 setting 全部误判为 member（表 1）。完整方法在单作者 member set 上得到 53.8/55.6 的 text-only/combined AUC 与 p=0.01；non-member set 则为 53.8/53.9 与 p=0.13，因此得到预期的 member/non-member 判断（表 3）。

在所测生成方法中，suffix completion 与自然文本最接近。表 2 中，ICL paraphrasing 的 BoW/GPT2 AUC 为 76.2/99.0，ICL text completion 为 79.2/99.2，preference optimization 为 50.2/58.9，suffix completion 为 50.0/52.2。这些 AUC 衡量自然文本与合成文本的可区分性；接近 50 并不能证明语义正确、没有 memorization 或拥有数据权利。

在 16 个 Pile subset 和 deduplicated Pythia-1B 上，所有展示的 member p-value 都不高于 0.04，所有 non-member 值都高于 0.05，因此表 4 的每一行都作出正确二元判断。但安全余量不均匀：StackExchange 的 non-member p-value 为 0.06，Github 与 EuroParl 为 0.07，FreeLaw 为 0.09。所以，正文所称“所有 non-member 都高于 0.1”并不受其表格支持。附录还在 Pythia 410M、1.4B、2.8B、6.9B，以及 OLMo-7B 的 Wikipedia 与 Common Crawl 上给出正确判断，但仍属于受控的已知 split 实验。

表 5 同时给出 false-negative 与 false-positive ablation。ICL paraphrasing、ICL completion、preference optimization、去掉 segment-and-shuffle、去掉 suffix comparison 时，member 与 non-member 的 p-value 都为 1.0，因而漏掉 membership。去掉 post-hoc calibration 时，member 与 non-member 都得到低于 0.001 的 p-value，对 non-member 形成 false positive。完整方法在该 Pile ablation 中对 member 给出低于 0.001，对 non-member 给出 1.0。去掉 weight constraint 后为 0.004 与 0.43，在这一汇总实验中仍判断正确，但弱于作者的约束设定。

图 5 报告：少于 1,000 次总 query 时，多数数据集已达到显著性；2,000 次总配对 query 时，所有评测 member set 的一致性最强。这是受论文数据集与 feature pipeline 约束的 power result，不是对任意模型都成立的 query budget 保证。代码和 JSONL archive 提高了可审计性，但所检查的官方 artifact 没有提供独立复现结果。
