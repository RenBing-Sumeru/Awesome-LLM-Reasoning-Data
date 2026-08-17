GSM8K 提供 8,792 道小学数学应用题，用最终数值答案检查，并研究 verifier models。 主来源是arXiv 2110.14168 和 openai/grade-school-math 仓库。

它回答的具体问题是：如何用最终答案反馈和 verifier-based selection 评测并改进多步小学数学推理。决策边界是数学应用题 benchmark 和 verifier 研究，不是形式化证明数据集或通用计算器环境。

数据对象或评测面是8.5K 道小学数学文字题，JSONL 字段为 question 和 answer；release split 为 7,473 train 和 1,319 test，最终数值答案跟在 #### 标记后。它对 atlas 的价值在于把反馈契约说清楚：答案抽取后的最终答案 exact match；verifier models 作为选择信号训练和评测。
