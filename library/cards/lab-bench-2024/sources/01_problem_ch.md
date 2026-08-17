LAB-Bench 的问题是：语言模型系统能否处理接近真实生物科研流程的任务，而不只是回答考试式科学题。主要来源是 Laurent 等 2024 年 7 月的 arXiv 预印本；FutureHouse 的官方 Hugging Face 数据卡把它定义为面向生物科研基础能力的评测数据集。

评测面是多选题记录，覆盖文献检索、数据库查询、补充材料、图表理解、实验 protocol troubleshooting、序列操作和 cloning scenarios。反馈契约是 answer-level：模型给出选项后，由官方答案或 evaluator 判定正确性；它不验证真实实验是否成功。

收录边界是 biology research reasoning 的 benchmark/evaluation surface，不是训练配方、湿实验 agent 环境，也不是生物安全 verifier。复用前要固定 public/private split、数据版本、评分脚本或 notebook、license 与更新记录。
