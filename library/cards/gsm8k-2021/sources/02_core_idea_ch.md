一句话贡献是：一个紧凑数学 benchmark，并展示 verifier-guided sampling 能改进解答选择。

核心机制是人工文字题、逐步解答、最终答案抽取、模型采样、verifier scoring 和选择后评测。被评分对象是8.5K 道小学数学文字题，JSONL 字段为 question 和 answer；release split 为 7,473 train 和 1,319 test，最终数值答案跟在 #### 标记后，反馈契约是答案抽取后的最终答案 exact match；verifier models 作为选择信号训练和评测。

最近对比对象是MATH、算术 QA 和后来改变污染控制或答案归一化的 GSM8K 变体。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
