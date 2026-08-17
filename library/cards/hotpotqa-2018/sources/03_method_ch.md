1. 输入：Wikipedia 文章对、众包问题、答案字符串和 supporting sentences。
2. 构造：标注者围绕两个实体或页面写问题，并把支持答案的句子标出来。
3. 任务设置：distractor 设置给少量段落，其中包含 gold 段落和干扰段落；full-wiki 设置需要从 Wikipedia 检索。
4. 输出：模型返回答案，也可以返回 supporting facts。
5. 评分：官方 evaluator 计算 answer EM/F1、supporting-fact EM/F1 和 joint EM/F1。

复现必须固定数据 split、Wikipedia snapshot 或检索语料、官方 evaluator、答案归一化规则，并注明分数来自 distractor 还是 full-wiki。
