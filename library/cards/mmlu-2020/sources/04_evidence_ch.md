arXiv 摘要报告该测试覆盖 57 个任务，包括初等数学、美国历史、计算机科学、法律等，并指出最大 GPT-3 模型虽然平均比随机高接近 20 个百分点，但仍远低于专家水平。官方 README 确认该工作为 ICLR 2021，并提供 OpenAI API 评测代码和测试包下载入口。

逐样本的决定性证据很简单：模型选项等于参考答案才算正确。average accuracy、subject accuracy 或 leaderboard 排名只在题面、答案键、split、prompt scaffold 和 evaluator 实现都固定时才可比较。

证据边界：公开 MMLU 很容易进入后续训练语料，后续工作也记录了题目质量问题；不同 harness 的 prompt、答案规范化、few-shot 示例和模型快照都可能改变分数。
