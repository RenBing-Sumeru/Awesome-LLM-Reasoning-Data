一句话概括，InSTA 把按排名选择的 internet host 转为 synthetic 但基于 live-site 的 web task，让 LLM agent 通过 Playwright 执行任务，再用 LLM judge 筛选用于 SFT 的 trajectory。

该机制区分三个由模型实现的 contract。第一，task proposer 只接收 URL，输出任务或 `N/A`；它同时承担 task generation 与生产环境 safety gate。第二，agent 探索通过筛选的站点，观察由 HTML 压缩得到的 Markdown，并输出 reasoning 与 Playwright call；一条近期 trajectory 会返回给 proposer，以生成基于当前站点内容的、更难的 instruction、steps 和 criteria。第三，judge 读取 task 与近期 trajectory，写出 rationale，并为 success、efficiency、self-correction 分别给出 0 到 1 的分数。

SFT selection signal 附着在完整 episode 的 judge success 上。在论文展示的 20K 条 Qwen3-235B rollout pool 中，保留 10.5K 条 `Judge(Success) = 1` 的记录训练 Qwen3-1.7B。efficiency 与 self-correction 是描述性输出，不参与该实验的筛选。agent 的 stop call 并不能证明任务完成，而任意 live-web task 也没有确定性的 ground-truth terminal predicate。

judge 可以观察近期经过处理的 state 与 action，但不能恢复 archived website state、验证隐藏的服务器端副作用，也不能替代 deterministic oracle。最高 82.6% 的 binary judgment accuracy 只来自 100 条人工标注 trajectory。safety proposer 同样不能保证 corpus purity；独立的人工 feasibility experiment 也不是每条 row 的 feasibility label 或生产 judge。

与从 web tutorial 出发并 replay 程序化步骤的 AgentTrek 相比，InSTA 从 ranked hosts 出发，在直接探索站点后合成任务。与 Mind2Web、WebLINX、WebVoyager 等 benchmark 相比，其核心对象是覆盖广泛动态网站的 construction/training recipe，而非固定 evaluation surface。其具体变化是把 URL-scale proposal、live grounding、learned terminal judgment 与 filtered SFT 组合为一条 pipeline；这些组件单独看并非首次提出。
