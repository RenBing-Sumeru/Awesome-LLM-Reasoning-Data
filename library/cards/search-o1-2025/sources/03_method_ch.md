报告使用 QwQ-32B-Preview；生成上限为 32,768 token，temperature 0.7、top-p 0.8、top-k 20、repetition penalty 1.05。检索调用 US-EN 区域的 Bing Web Search 并取前 10 个结果，Jina Reader 抓取可读页面。批处理循环让各序列生成到 EOS 或查询定界符，批量完成检索与精炼，再插回结果继续生成；若没有最终答案，评测会回退到直接推理。

可复用记录应分别保存指令、问题、推理前缀、查询、排序结果 ID、原始摘要/页面、Reason-in-Documents 分析、精炼知识、续写推理、终局答案以及回退/工具错误状态。论文未报告最大搜索次数、随机种子、保留 rollout 数、网页快照或语料级筛选规则。

