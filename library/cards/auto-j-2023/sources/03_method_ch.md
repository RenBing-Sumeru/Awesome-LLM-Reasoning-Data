1. 输入：公开偏好/聊天数据中的 user query 和模型回答、场景定义、手写 scenario criteria 和评测 prompt。
2. Pairwise 构造：GPT-4 根据场景 criteria 比较两个回答；与已有人工标签冲突或无法格式化的输出被丢弃；论文报告 pairwise 训练集为 3,436 条。
3. Single-response 构造：从 Chatbot Arena 选取 960 个 query-response 对，分别用带/不带 criteria 的 GPT-4 critique，再合并成综合 critique 和 rating。
4. 训练：基于 LLaMA-2-Chat-13B 训练，交换 pair 顺序做增强，并统一输出格式。
5. 输出：pairwise preference、single-response rating 和 critique。复现依赖源数据版本、GPT-4 版本、criteria prompt、过滤规则、checkpoint 和输出解析器。
