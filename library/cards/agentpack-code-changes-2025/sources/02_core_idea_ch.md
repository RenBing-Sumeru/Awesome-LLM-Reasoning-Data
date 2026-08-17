一句话贡献：AgentPack 是一个由三类明确命名的 coding agents 与人类共同产生的大规模真实代码编辑语料，并给出抽取流程和微调后提升代码编辑 benchmark 的证据。核心机制是扫描 GH Archive 公共事件，通过签名或 PR 链接识别 agent 活动，抓取仓库和 patch，过滤 node_modules 等会造成误归因的依赖代码，并把 edits 格式化为训练样本。

最接近的对照是 CommitPackFT、CanItEdit、HumanEvalFix 式编辑评测，以及合成 code-instruction 语料。AgentPack 改变的是数据来源：它不依赖短的人类 commit message 或合成 prompt，而使用 agent 写出的较长 rationale 和已经进入公开仓库的多文件 edits。它的反馈契约弱于逐样本单元测试 verifier，但强于未过滤网页代码，因为公开项目接受和下游 pass@1 评测提供外部证据。
