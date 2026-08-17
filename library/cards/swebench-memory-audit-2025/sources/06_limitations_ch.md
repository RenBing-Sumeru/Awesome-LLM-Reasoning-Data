核心因果主张没有被充分识别。SWE-Bench-Verified 上的大幅差距与任务记忆相符，但实验无法观察 Claude 的专有训练语料，也不能证明某个具体 issue 被收录。issue 难度、文件名线索、仓库组成、对公开项目的熟悉度，以及不同 benchmark 来源之间的时间变化，都是替代解释。论文提到偶然命中、issue 中的提示、文件名语义和开源熟悉度，却没有提供难度匹配或仓库匹配对照。

论文的主验证器只奖励覆盖，不惩罚 false positive。预测大量路径可以同时提高 `gold ⊆ predicted` 和非空交集，即使定位并不精确。虽然代码也计算 precision/F1，表 1–4 重点报告二元 complete/partial coverage，且没有消融输出列表长度。回答提取器还可能丢弃 `setup.py` 这类有效根目录路径，从而产生与模型能力无关的解析器 false negative。

file-structure 提示不是确定性的。文件树超过 500 条路径时，脚本在不固定种子的情况下采样；instance commit 检出失败时会退回仓库默认分支。发布中没有一份清单把每个 instance 与 commit、路径列表哈希、提示、模型回答和表格单元绑定起来。已提交脚本的默认模型还写成 Claude 3.7 Haiku，而不是实际评测的 Claude 3.7 Sonnet，因此直接运行原脚本不会复现论文模型组合。

数据构造仍有选择与 lineage 风险。BeetleBox 的模糊性筛选由一位作者完成，没有报告一致性研究；辅助脚本依赖 OSF 根目录中缺失的 `vagueness_results.json`。SWE-rebench 转换器硬编码为 2025 年 1 月划分，9 月划分的精确生成命令和版本未提供；被剔除的模糊 issue 也没有作为可审计负例保留。

实验不确定性没有量化。论文报告百分比，但没有置信区间、假设检验、重复解码、API 失败统计，或对 temperature、解析器选择、路径上限和随机路径采样的敏感性分析。加入 file structure 后，1 月 SWE-rebench 的 partial coverage 反而高于 SWE-Bench-Verified，这也说明单一摘要倍数不能替代逐条件分析。

发布复用还受到治理和环境元数据缺失的阻碍。OSF 节点为 view-only/private 且未注册，没有不可变快照、tag、README、依赖锁、容器或发布清单。论文的 CC BY-NC-SA 4.0 许可证不能自动覆盖 OSF 代码、衍生 benchmark rows、原始模型日志或缓存仓库路径；工件许可和上游权利均为 unknown。模型 cutoff 表述、Anthropic API/SDK 版本、解码参数、重试影响和污染状态同样 unknown。
