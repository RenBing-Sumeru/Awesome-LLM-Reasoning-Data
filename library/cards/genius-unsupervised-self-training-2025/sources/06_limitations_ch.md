首要建模限制是 likelihood 与正确性之间的缺口。Foresight score 衡量候选步骤之后的同策略 continuation 有多大概率。一个被模型自信重复的误解可能得到高分，而正确但陌生、需要分支探索的论证可能得到低分，因此会同时产生 false positive 和 false negative。论文给出了下游消融，但没有报告带标签的步骤排序准确率、calibration、abstention 或对抗分支研究。（基于反馈契约的 curator inference）

这些 continuation 是相关证据。它们共享同一个模型、前缀、tokenizer、解码代码和学习偏差；每个 beam 的四次 rollout 不是独立投票。局部分数决策可能丢弃全局有用路径，训练也可能把 policy 推向“让自己的未来输出更高概率”的前缀，而不是更正确的前缀。ACO 可以减弱 advantage 估计不一致样本的影响，却无法制造代理信号中不存在的正确性信息。排序能否跨 policy 或 checkpoint 迁移仍未测试。（curator inference；论文 §2.2–2.3）

发布实现存在尚未解决的复现风险。在本次检查的未固定 `main` 上，当 `num_foresight=4` 时，探索脚本为三个过程池创建五个槽位，却只为 `step_prob` 创建四个槽位；偏好构造器的长度相等检查会跳过这种记录。构造器还把 `prompt` 放在 `chosen`/`rejected` message list 之外，而展示的训练 encoder 只消费这两个 message list，不读取独立 prompt 字段。这些现象可能来自代码漂移或缺失的预处理步骤，因此复现前不应直接定性为最终缺陷。训练 shell 仍有空路径，也没有 tagged release 将代码绑定到论文实验。

数据与发布谱系不完整。HF collection 提供的是 150K Magpie 和 48K OpenHermes 源仓库，而非精确的 25K/32K 入选清单，也没有提供经核验的 100K/128K 偏好快照。源记录包含 response，采样器会把它复制到 `ground_truth`；虽然可见选择代码不使用该字段，仍需对固定版本做端到端审计才能排除标签泄漏。Rejected candidates、论文实验过程池、pair-level split、seed、log、代码/模型 hash 和保留策略均未知。模型与源数据仓库声明 Apache-2.0，但代码和生成偏好数据的许可证未知。

污染与实验边界也很窄。Appendix C 使用 embedding 可视化和平均距离，而不是精确重叠检测。主要证据集中在 LLaMA3.1-8B-Instruct、两种来源混合和具名公开 benchmark；Qwen 迁移结果在 HTML 页面中没有完整逐任务表。通用域结果包含小幅下降，scaling 研究也受算力限制。Benchmark 增益无法识别哪些 preference 正确，也不能证明方法在新 sampler、policy family、语言、领域或更大 rollout budget 下仍然稳定。
