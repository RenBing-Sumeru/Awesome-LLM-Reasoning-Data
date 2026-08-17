**反馈与建模限制。** `math-verify` 判断的是解析后的最终答案，不验证中间 CoT 的有效性、相关性或忠实性。token-level target 把一个终点类别重复施加到全部 rollout prefix，因此，后来出现决定性错误的路径可能让较早的正常 prefix 获得负标签；有缺陷但最终答对的路径也可能获得正标签。把这些 value 当作语义步骤质量属于 curator 误读。一个含关键错误的 beam 仍得到 0.337，也直接说明学习式 value 会失准。

**选择偏差与缺失失败。** 全失败提示组因在 1.5B rollout policy 下没有正学习信号而被删除。这使 OpenR1-VM 条件化于“该 policy 至少能成功一次”的任务，可能低估困难或系统性失败案例。错误和未完成 trace 只在入选组内部保留。预过滤拒绝项、全失败组、完整拒绝原因以及推理期全部丢弃分支均未作为独立 audit artifact 发布。

**分布与泛化。** DeepSeek-VM-1.5B 估计的是固定 rollout policy 下的成功率；将其用于 7B 或 14B generator 会改变 prefix 分布，论文报告的优势在 14B 上缩小。研究仅覆盖以 boxed final answer 表示结果的竞赛数学；对代码、证明、开放式推理或不同答案检查器的迁移尚未证明。论文也没有系统性压力测试通过答案格式或 checker 边界情况进行 reward hacking。

**归因与复现。** 作者报告了 8-gram overlap 检查，并使用晚于底层模型/数据的 2025 test set，但 OpenR1-Math 上游的全面去污染仍为 unknown。14 个 roll-in 在不同模型规模间的精确分配、数据生成 decoding 参数、随机种子、来源 snapshot pin，以及 500 个样本的 value-model validation split 对应哪个公开工件，均未披露。已核查仓库没有端到端过滤/采集流水线，128 张 H100 的训练运行与 benchmark curve 也未被独立复现。

**治理与打包。** OpenR1-VM 声明 Apache-2.0，OpenR1-Cleaned 声明 CC-BY-NC-4.0；这些条款与所有上游记录之间的关系仍需审查。代码和 DeepSeek-VM-1.5B 权重均未核验到许可证。model repo 缺少 tokenizer 文件和自定义 classifier 源码，因此加载依赖 GitHub 实现与上游 tokenizer。未完成额外权利和版本核验前，不适合直接用于商业或政策敏感的训练复用。
