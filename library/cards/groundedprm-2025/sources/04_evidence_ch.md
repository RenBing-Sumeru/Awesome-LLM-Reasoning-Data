官方 arXiv PDF 直接给出 MATH 来源、Wolfram Alpha verifier、二元 v/F 信号、K=3 expansion、hybrid 公式、过滤规则、生成式 rationale 目标、约 40K 实例、Qwen2.5-7B-Instruct PRM 基座，以及 N=8、温度 1 的 reward-guided decoding。附录 B 给出生成与验证 prompt 模板，附录 C 报告训练基础设施和超参数。

ProcessBench 与 reward-guided search 结果说明该方法在所报告模型和候选分布下有用，但不能独立验证全部 40K 记录、Wolfram Alpha query 转换、被过滤失败或树重放。由于没有核验到官方产物，论文声称的 row 结构和数量也无法对文件检查。论文中的“verified samples”应理解为受工具条件约束的验证，而不是每个自然语言步骤的专家证明。

