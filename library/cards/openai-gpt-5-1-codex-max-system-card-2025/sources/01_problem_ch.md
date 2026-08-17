官方 *GPT-5.1-Codex-Max System Card* 是 OpenAI 的第一方报告，报告日期为 2025 年 11 月 18 日，配套 OpenAI 索引页日期为 11 月 19 日。它讨论前沿编码代理如何面向长程软件工程任务和安全敏感行为进行训练与评测，但它不是常规论文、开放数据发布或完整后训练配方。因此，它在 Atlas 中的角色是披露账本：只记录官方明确点名的后训练数据对象与反馈接口，其余内容保持为 unknown。

报告给出三类部分可观察的训练对象。第一，合成恶意软件流水线生成 prompt、代码片段和环境配置，并加入边界样例与对抗样例，用于训练拒绝、高质量上下文或防御性帮助，以及对双重用途请求的校准处理（PDF §4.1.2.1，第 7 页）。第二，遵循 Instruction Hierarchy 框架的新 prompt-injection 安全数据训练模型忽略编码环境中的攻击（§4.2.2.1，第 7–8 页）。第三，destructive-action RL episode 包含一个编码 rollout，其中独立的 user model 作出冲突编辑；目标行为是保留而不是回退这些改动，成功不回退会获得正向强化（§4.3.2.1，第 8 页）。

在不超出披露边界的前提下，一条 episode 可描述为：任务 prompt、代码或环境上下文、user-model 编辑、代理 action 或 response、生成的 patch 或 artifact、policy 或环境结果、改动保留判断以及 reward。报告没有发布序列化记录、数量、prompt 来源、代码仓库版本、生成器、失败尝试或 record lineage。CTF、CVE-Bench、Cyber Range、SWE-Lancer、MLE-bench、内部 pre-PR 任务和 OpenAI-Proof 等评测对象是重要证据面，但未被认定为训练数据。

本报告属于 `frontier_reports_data_disclosure_ledger`，因为其主要研究价值在于：机制层披露相对具体，而语料层证据仍大量缺失。它不能确立开放编码代理数据集、可复用 verifier 或全局 benchmark decontamination。这里的 L4 表示官方 HTML 与 27 页 PDF 足以支撑一张双语、可定位来源的审计 Card，不表示隐藏训练流水线已经可以独立复现。
