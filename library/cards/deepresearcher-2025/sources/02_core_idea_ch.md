策略在带标签的 `think`、web search 与 browse 调用之间交替，最后输出带标签的短答案。搜索返回标题、URL 与摘要；并行 Reading Agents 处理不同网页结构，Synthesis Agent 形成工具观察。环境观察被 loss mask 排除，因此 GRPO 只优化 policy 生成的 token。

终局契约很窄：格式错误奖励为 -1，否则按参考答案计算词级 F1。该奖励不标注查询、来源选择、页面抽取、引文或推理步骤。更多工具使用和交叉核验是观察到的行为，不是独立监督的过程字段。

