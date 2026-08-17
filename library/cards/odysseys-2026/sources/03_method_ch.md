构造从参与者 journey 标签开始，而非从公开浏览历史开始。LLM 按标签准确性、可行性、登录要求和质量筛选，作者再人工复核，最终从 2,380 条 journey 中保留 696 条，即 29.2%。标签用 `text-embedding-3-small` 嵌入，经 UMAP 降维和 HDBSCAN 聚类后连接成主题图。组合任务会随机选一个种子簇，沿广度优先搜索走 1–2 跳，收集 3–6 个相关簇及每簇 3–4 条代表 journey，再由 GPT-5.4 选择并排序子集。

最终 QA 会移除需登录或低质量任务，要求至少涉及两个站点、rubric 完整、连贯性至少 2/5、证据可观察、computer-use 表述自然、无 PII，并由作者裁决标记问题。每条来源 journey 最多复用三次。精确随机种子、聚类参数、簇分配、来源到任务映射和拒绝清单均未公开。

评测时，computer-use 智能体在带实时互联网的 Ubuntu OSWorld2 VM 中操作 Chrome 及其他能力。默认实验上限为 100 个环境步，部分扩展实验使用 200 步。运行目录预期包含 `steps.jsonl` 或 `traj.jsonl`、引用的截图，通常还需数值型 `result.txt`。评分器提取时序动作和截图，逐 rubric 调用 Gemini，再写出逐项结果和汇总。

公开配置启动 Chrome 与 `socat`，设置 `proxy=false`、`fixed_ip=false`，并标记 `possibility_of_env_change=high`。OSWorld 精确提交、VM 镜像、浏览器版本、依赖、API 快照、网络区域、凭据、重置语义及站点状态均未固定。构造附录虽提到 rubric 权重，公开任务却不含权重，评分器实际采用无权平均。
