报告没有发布 golden-answer queries、generated responses、step splits、MC continuations、answer extractions、critic analyses、consensus labels、rejected records 或 item-level lineage。原始来源、每来源权重、最终训练混合组成、来源权利、精确 checkpoint revisions、解码设置、阈值、按来源的保留率以及完整训练配置均缺失或未知。

反馈约定无法被独立校准。MC labels 依赖 completion-model 行为和未来答案可达性；critic 的 prompts 虽有部分记录，但其 inference settings、calibration、agreement analysis 和 false-accept/false-reject rates 没有发布。consensus 会移除不一致，却不能证明保留判断正确或具有代表性。

论文自身还指出一个使用风险：Best-of-N 能奖励最终答案正确但中间过程有缺陷的响应，使 PRMs 向 outcome-style assessment 漂移。其明确局限包括与 pass-at-eight upper bound 的差距、PRMs 在 reinforcement learning 中的最佳实践尚未探索，以及对高质量人工标注的利用仍不完整。
