**奖励有效性。** 目标模型 likelihood 是概率/流畅度信号，不是中间逻辑正确性的 verifier。流畅但无效的步骤可能得到有利塑形，不常见但正确的步骤则可能受罚。节点 hidden state 与中间奖励来自同一目标模型，因此表示误差与奖励误差可能相关。终点比较或 outcome reward model 可以判断最终答案，却不能修复不忠实的中间路径。该 mixed 契约不能改写为完全程序化验证。

**策略、生成器与预算纠缠。** 学习式控制器并不是从独立定义的推理状态集合中选择。扩展会先让目标 LLM 生成受宽度限制的同级集合，再按 action log-probability 排序。生成器质量、采样、同级顺序、动作成本、深度、宽度和最大搜索步数都会影响策略可到达的状态及其 return。报告的准确率与 token 比率无法把控制器质量同这些耦合因素分离。逐样本生成 token、调用次数、延迟、费用、重试与停止原因均未发布。

**论文—代码终止漂移。** 论文设置显式 terminate 动作，并描述 \(D+2\) 动作空间；审计代码只暴露 `depth_limit + 1` 个动作，分别用于 continue、branch 和按深度索引的 backtrack，且仅在生成的任务状态 terminal 或步数预算耗尽时停止。这同时改变了行为策略与 terminal transition 的含义。缺少与论文匹配的配置或解释时，不能假设公开实现复现了论文表述的终止策略。

**原始搜索记录缺失。** 运行时对象可保留 root、全部挂接子节点、访问次数、trace、reward 及被选策略轨迹；也可表示零访问的已生成子节点和后来被放弃的已访问路径。然而，发布物不含论文运行的原始树、序列化 `outputs.pth`/`auxiliary.pth`/`metrics.pth`、replay buffer 或稳定 record ID，也没有清单区分 selected、rejected、abandoned、unvisited 与 visualization-pruned 节点。因此无法审计分支覆盖、回溯行为、无效探索、奖励归因或逐样本计算。

**策略监督不完整。** 保存的轨迹只有被选导航动作的 log-probability 与 value prediction，没有被选和未选动作的完整 policy logits/probabilities。这阻止了 off-policy 重评估、动作校准分析和反事实 replay。训练后的 GPS checkpoint 缺失，learning rate、batch size、update 数、每次 update 的 rollout 数、随机种子和完整论文精确 task/PPO 配置也未发布。

**数据谱系与切分缺口。** 论文描述了 benchmark 特定切分，但精确策略训练 ID、StrategyQA 采样种子、GPQA 完整设置和统一逐条清单均为 unknown。仓库打包了部分 Blocksworld、MATH 与 PrOntoQA 材料，但它们不是完整来源混合或转换账本。公开材料没有 exact/semantic deduplication、benchmark overlap check 或去污染分析。Benchmark 增益无法消除这些风险。

**发布权利。** 固定版本仓库中未发现根目录 `LICENSE` 或项目许可声明，也没有 dataset card 或上游权利清单覆盖打包任务输入与生成输出。代码公开可见并不等于允许再分发、商业使用、checkpoint 训练或衍生轨迹发布。论文与 arXiv 的访问条款不能替代代码/数据许可。

**泛化与证据限制。** 实验使用 LLaMA 3.1 8B/70B，覆盖数学、常识、逻辑演绎、科学问题和 Blocksworld 规划。对其他模型家族、开放式生成、工具、带外部环境的 agent、形式化证明或安全关键场景的迁移仍为 unknown。结果由作者报告，审计到的 artifact 没有提供独立复现。

状态保持 `partial`。引文、论文、附录、官方代码归属、运行时 schema、预算披露和聚合结果已经核验；原始 trace、完整策略分布、分支清单、checkpoint、精确配置、许可证与去污染仍然缺失。
