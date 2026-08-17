核心贡献是一个轨迹池，其中答案接收、推理有效性判断、教师身份和两个过程描述量保持为不同变量。论文随后在 RV-CD 空间中为目标模型选择轨迹，而不是把所有答案正确的 CoT 视为可互换对象。

| 契约要素 | 公开或论文报告的对象 |
|---|---|
| 外层单位 | 一个 `question` 行 |
| 嵌套单位 | 该行 `reasoning` 列表中的一条记录 |
| 轨迹内容 | `thought`、`solution`，以及二者拼接的 `full_response` |
| 生成者元数据 | `teacher`；ACL 正式版列出 DeepSeek-R1、DeepSeek-R1-0528 和 QwQ-32B |
| 过程判断 | `thought_correctness_verify`，源自分别评估推理和解答的提示 |
| RV 对象 | 0–9 的 `level` 与 `judge`；论文中的最终 RV 以 alpha=0.5 混合 judge 分数和归一化 token 长度 |
| CD 对象 | 0–9 的 `level` 与 `judge`，描述复现该方法所需的认知能力 |
| 发布布局 | 708,009 个外层行、单一 `train` split、135 个 Parquet shard、Apache-2.0 仓库元数据 |
| 未提供 | 题源/领域、拒绝原因、验证轨迹、生成设置、运行 ID、`train` 之外的 split |

反馈契约有四层。第一，代码执行或数学/科学混合验证决定最终答案是否接收。第二，推理逻辑有效性另行记录，不控制保留。第三，QwQ-32B 给出整体 CD 和 judge 侧 RV 分数，最终 RV 还纳入长度。第四，下游实验把这些标注转换为选择概率、冗长度偏好对或学习得到的标量奖励项。

这种区分可避免若干类别错误：`thought_correctness_verify=true` 不是步骤级证明；RV/CD 差异不是正确性偏好；一个数据行不等于一条 CoT；Apache-2.0 仓库标签也不能补回缺失的上游来源。OmniThought-0528 是独立补充资产，不能默认视为每个主发布行的一部分。
