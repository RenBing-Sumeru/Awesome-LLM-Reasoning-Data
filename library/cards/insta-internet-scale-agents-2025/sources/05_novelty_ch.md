Mind2Web、WebLINX、WebVoyager 等已有 web-agent dataset/benchmark 主要在相对较小、经过整理的 website set 上收集人工 task 或 demonstration。已有 synthetic-agent pipeline 已经用 LLM 生成行为，LLM-as-judge 工作也已用模型评分进行筛选。InSTA 并非 Playwright、task proposal、synthetic trajectory 或 learned judge 的起点。

它真正改变的是规模以及连接这些组件的 interface。URL-only proposer 在 Common Crawl 排名前 100 万个 host 上同时执行初始 safety decision 并编写 candidate task；一次 live exploration loop 再把通用 proposal 转为基于当前站点的 task；learned judge 对完整 browser trajectory 打分，exact-success filter 把该分数转成 SFT selection decision。

这形成了一个重要的 data object 边界。公开可复用对象是 website-disjoint task row；论文描述的训练对象则是包含 reasoning、action、screenshot、HTML/DOM state 与 terminal judge output 的 multimodal、environment-grounded episode。必须把二者视为不同 release unit：task dataset 可支持重新收集，但不是论文声称的 reasoning corpus。

AgentTrek 是 Atlas 中最接近的比较，因为它也创建 live-browser trajectory，并使用 LLM judge 筛选。AgentTrek 通过外部挖掘的程序化 tutorial 对行为进行 grounding；InSTA 从 ranked site 出发，让 LLM 在探索后提出并 refine task。两者都依赖动态站点和 learned success judgment，也都缺少 failed-trajectory release。

其方向性价值在于展示 host-scale task sourcing 与 live execution 可以训练小型 web agent；对应的审计教训则是，站点数量增加也会放大 safety、side effect、privacy、copyright 与 version-control 责任。复用前应检查精确 data unit、公开 release surface、action safeguard、judge calibration、website snapshot、rights 与 row-to-run lineage，而不能只看 150K 标签。
