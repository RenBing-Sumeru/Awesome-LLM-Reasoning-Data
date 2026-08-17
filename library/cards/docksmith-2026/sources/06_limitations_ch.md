只保留成功轨迹会直接造成选择偏差。失败终止的 rollout 没有被记录为 SFT 样本，因此公开训练视图缺少失败终点、未解决仓库和许多恢复路径。evaluation script、环境激活、patch protocol、exit-code 处理或测试覆盖存在缺陷时，构建/测试成功信号也可能误判。论文记录了若干这类 protocol error，但没有报告 terminal verifier 的整体 false-positive 或 false-negative rate。

公开数据对象不能完整重放。39,719 条记录是关联 2,876 个实例的 per-agent chat fragment，不是 39,719 条完整 episode。官方没有发布确定性的 episode assembler、不可变的 row-to-repository/task manifest、container image digest、dependency lock、repository/evaluator/test-patch hash、host architecture、network/cache policy、timeout/reset policy 或完整 terminal-predicate manifest。因此，即便文本 fragment 不变，仓库漂移和可变依赖也可能改变执行结果。Hugging Face Dataset Viewer 还会因为 conversation shard 与 index shard schema 不兼容而触发 `DatasetGenerationCastError`，增加标准加载与自动审计难度。

许可与安全都有多层边界。dataset card 声明 Apache-2.0，但源仓库、PR、test patch、依赖与生成产物的权利没有逐项列出。model page 既没有 model card，也没有 license tag，因此不能把 dataset license 自动套用到模型。论文也没有披露 secret/credential scan、恶意仓库隔离、network-egress rule、privacy/consent 分析或 supply-chain threat model；而构建任意仓库会执行第三方代码与包安装路径。

论文报告的去污染停留在仓库层级。benchmark 快照、时间戳、哈希、匹配代码，以及 PR、issue、测试或 patch 的语义重叠均为 unknown。GPT-5.1 错误标签可能存在 judge bias、相关事件重复计数或 rubric mistake，且没有人工一致性结果。实验上，Context Retrieval 错误增加 10.9%，shell/environment 恢复变差，过高 Docker 混合比例还会降低多项 SWE 指标，因此不能主张所有维度都稳定改善。

版本边界必须显式记录。ICML 最终版有 11 位作者；arXiv v2 有 13 位作者，并且最终版把 `Luck Ma` 改为 `Lu Ma`、新增 Yanhao Li 与 Yingwei Ma、删去四位 arXiv-v2 作者。dataset content commit、当前 dataset revision 与 model revision 是三个独立版本标识。完整 episode 数、token 数、发布模型数据混合比例、generator 配置、optimizer/scheduler 和 seed 仍为 unknown。
