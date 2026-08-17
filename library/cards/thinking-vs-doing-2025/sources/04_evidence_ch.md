论文证据覆盖受控的 interaction studies 和完整 TTI training，但没有独立证明公开数据构成完整语料。WebVoyager evaluation 包含 13 个 domains 上的 427 个 tasks，完整 WebArena 包含 812 个 tasks。初步 WebArena interaction study 报告随机抽取 62 个 tasks 作为 analysis/test subset，并将其余 750 个用于 online training；该 split 的确切 IDs 和 seed 没有作为 manifest 发布。

在论文的受控研究中，增加交互机会可以优于把同类干预用于重复的 per-step reasoning，因为新的 actions 会带来新的 observations。但收益并非对所有机制都单调：反复提示 agent 再检查一次可能把正确回答改成错误回答，而固定 long horizon 可能导致无目标探索和 noisy credit assignment。这些 negative results 为 curriculum 提供了动机，却不能证明更长 episodes 天然就是更高质量的数据。

在完整比较中，Table 3 报告 TTI Gemma 3 12B agent 的 WebVoyager average success 为 64.8%。作者将其描述为比较范围内、使用 open-source synthetic data 训练的 open-weight agents 中最强的 aggregate result。该数字是论文特定比较范围内的 model/benchmark result；本次整理没有独立复现，也不能证明 trajectory correctness、split cleanliness、judge calibration、licensing 或 corpus completeness。

论文还报告：将 prompted WebVoyager judge 与 WebArena ground truth 对照时，success-detector accuracy 为 88.9%。这一结果支持在所报告实验中使用该 detector，但只有 aggregate accuracy、缺少 class balance、confusion counts、calibration 和 adversarial tests，无法量化对失败 trajectories 的 false acceptance，或对成功 trajectories 的 false rejection。WebArena 的 programmatic ground-truth evaluators 不依赖这一 learned judge，但仍只提供 terminal outcome feedback，也可能受到 environment 或 task-specification brittleness 的影响。

官方发布为数据流程提供了可检查的 implementation evidence：可以审计 runtime transition fields、positive filtering、state-action flattening、replay selection、scripts/configs 和两个 trained checkpoints；但训练实际使用的成功与失败 rollouts 没有发布。因此，最强的受支持结论是机制性的：TTI 展示了一条具体闭环，其中 interaction budget 改变了可用于 BC 的 successful on-policy behavior pool。benchmark performance 不能作为所选数据具有普遍高质量或可安全复用的证据。
