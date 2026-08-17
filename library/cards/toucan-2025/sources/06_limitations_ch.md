主要限制来自审计与回放边界，而不只是模型准确率。

- **没有通用成功谓词。**mixed 契约检查结构、部分工具响应有效性、目标工具遵从与模型评审质量。它可能保留工具输出或最终综合在事实层面错误、但外观合理的答案。目标工具匹配使用 substring，相似名称可能碰撞，也可能奖励对预设工具的遵从，而不是另一条有效 workflow。
- **失败谱系被截断。**只要至少一次调用成功，部分失败可以保留；irrelevance 样本则有意保留零调用。普通无工具、全部工具失败、assistant error marker、空 final、解析失败及其他拒绝样本都不在发布中，也没有 machine-readable rejection ledger 或逐阶段 yield。
- **Judge 不确定性。**Kimi-K2 与 GPT-OSS-120B 可能带来模型、风格和领域偏差。50 个样本、correlation 0.264 的任务 judge 对照没有给出逐维度一致性、false positive/false negative、对抗鲁棒性或 response judge 校准。
- **版本与 lineage 缺口。**论文是 2025-10-01 的 arXiv v1；核对的数据快照是 2025-10-04 的 HF revision `0df3cf3`；代码快照是 2025-12-16 的 GitHub commit `a1976de`，没有 tag 或 release。没有 manifest 绑定论文、代码、依赖、模型 endpoint、MCP 元数据、数据文件和 SFT checkpoint。逐行 generator、framework、解码、seed、重试、过滤、server/source commit、endpoint revision 与 timestamp 均未知。
- **回放缺口。**历史消息和 observation 可下载，但 495 个社区 MCP 服务、依赖、凭据/配置、可变 world state、reset semantics、endpoint version 与 response fixture 没有冻结。论文称数据在 2025-06 采集，HF card 则称 2025-06 至 2025-09；缺少逐行时间，无法消除该矛盾。
- **Split 与污染缺口。**所有 config 都只有 train split。没有公开针对 BFCL V3、tau-bench、tau2-bench、MCP-Universe、既有工具使用语料或模型预训练数据的系统性去污染、近重复核算或 overlap audit。
- **权利与隐私缺口。**HF 声明 Apache-2.0，代码仓库声明 MIT，但没有逐服务/工具许可证与归属 manifest 来证明社区 specification、真实工具输出、嵌入的第三方内容和生成轨迹的权利。HF card 报告 best-effort 的规则式 PII replacement，却没有公开 scanner rule、实测 recall/precision、consent 分析、redaction manifest 或残余内容审计。
- **计数解释。**HF 的 1,646,546 个存储行包含 119,287 行 SFT 子集。把所有存储行视为独立 episode，会恰好多算该子集；full trajectory 的正确总数是 1,527,259。

这些缺口不妨碍该发布用于 SFT 与历史离线研究，但阻止了精确环境回放、完整组件级权利清理、总体层面失败覆盖或无泄漏 benchmark 评测等更强结论。
