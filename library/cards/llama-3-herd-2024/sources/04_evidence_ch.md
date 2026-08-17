论文给出明确规模锚点：405B 使用 15.6T token、约 3.8×10^25 FLOPs，逐步扩展到 128K，上报超过 25M 合成 fine-tuning 样本并进行六轮后训练。官方 model card 报告 405B Instruct 的 MMLU 87.3、GPQA 50.7、HumanEval 89.0、MATH 73.8、API-Bank 92.0、BFCL 88.5；这些是最终模型结果，不能归因于单一数据阶段。

安全 artifact 有实质开放：Llama Guard 3 权重、Prompt Guard、Code Shield、模型工具以及 8B/70B/405B PT/IT 权重均发布。论文报告 Llama Guard 3 平均违规率相对下降约 65%；完整英语 guard 设置为违规 -86%、误拒 +102%，显示安全—有用性权衡。

污染分析估计 AGIEval 98%、BBH 95%、BoolQ 96%、HellaSwag 85%、QuaC 99%、Natural Questions 52% 存在重叠。所选 8-gram 方法无法有效评估 HumanEval、MBPP、MMLU、MMLU-Pro。因此解读 headline benchmark 必须带污染 caveat。
