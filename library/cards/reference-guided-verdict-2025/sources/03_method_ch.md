1. 生成候选。Mistral 7B、GPT-3.5、Llama-3.1 70B 回答 TruthfulQA、TriviaQA、HotpotQA 的样本。

2. 建立人工参照。人工标注者判断候选回答，以其多数投票作为比较目标。

3. 有参考判决。每个 LLM judge 接收 P={输入、候选答案、参考答案} 并输出 True/False；参考答案是核心约束。

4. 汇总比较。三个 LLM judge 的多数票与人工多数标签以 Cohen’s kappa 比较。方法没有训练阶段；复现须固定 prompt、judge 版本、每任务 100 样本切片和投票规则。
