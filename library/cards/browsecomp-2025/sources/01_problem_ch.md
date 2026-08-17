BrowseComp 研究的具体问题是：当常见事实问答和检索 benchmark 对可访问实时网页的系统已不够难时，如何评测浏览智能体。OpenAI 于 2025 年 4 月 10 日发布该 benchmark；arXiv 记录 *BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents*（arXiv:2504.12516）首次提交于 2025 年 4 月 16 日。本卡只讨论原版 BrowseComp。BrowseComp-Plus 和其他后续衍生工作是独立记录，其语料、证据、引用或回放属性均不得移植到本卡。

该 benchmark 含 1,266 道由人类编写、难以检索的事实问题，每题对应一个预期简短且稳定的答案。公开数据每行恰有四个字段：经混淆的 `problem`、经混淆的 `answer`、明文 `problem_topic` 与明文 `canary`。官方 CSV 有 1,266 行，但不包含浏览器动作、查询、页面 observation、来源 URL、引用、时间戳、置信度记录，也不包含成功或失败的运行日志。评测时，模型生成带 `Exact Answer` 与置信度的自由文本响应，再由 LLM judge 将响应与单一参考答案比较。

它归入 `environment_agent_trajectory_data`，因为其评测对象是在变化中的实时网页上交互的智能体，而且缺失的环境契约本身就是关键审计对象。它不是已发布的轨迹语料、引用 benchmark、可回放浏览器环境或训练 recipe。已核验的论文、附录、OpenAI 发布页、官方 CSV 与 `simple-evals` 代码足以支撑 L4 双语 Card；但论文 grader 未披露、运行轨迹缺失、网页 substrate 未固定以及当前 scorer 缺陷，要求保留 accepted metadata 的 `L3_summary_ready`，复用等级仅为评测/审计。
