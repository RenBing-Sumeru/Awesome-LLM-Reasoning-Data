1. 输入：2025 年 4 月 1 日到 10 月 7 日的 GH Archive 公共 GitHub 事件、agent 特定签名或链接、公开仓库、commit hash 或 PR base/head hash，以及 agent 写出的自然语言说明。
2. 识别：Claude Code 主要通过 co-author 签名识别；Codex 通过 PR 描述中指向 Codex task 的链接识别；Cursor Agent 通过 commit author 签名识别；作者对小规模随机样本做人工检查以确认归因。
3. 收集：对识别到活动的仓库做 shallow clone，获取 git patch，并把代码变更内容与事件元数据合并。
4. 过滤/格式化：移除 node_modules 等依赖来源变更；把 patch 解析成旧/新文件内容或用省略号连接的 hunks；去掉超过 token 预算的训练样本；构造 prompt/completion 对。
5. 输出：代码编辑数据记录、按 agent/语言/任务类型的统计、任务类别分类样本，以及 Python 和 JavaScript 微调子集。

verifier 层是混合的：provenance 检查和人工抽查支持归因；公开 merge/commit 历史是隐式人类过滤；HumanEvalFix 和 CanItEdit pass@1 检验下游有用性。论文没有披露每个 mined edit 都有逐项执行 oracle。
