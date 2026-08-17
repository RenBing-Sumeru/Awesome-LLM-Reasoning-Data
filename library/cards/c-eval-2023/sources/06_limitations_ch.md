正确性表示匹配官方多选答案，不表示模型给出了忠实推理过程。有些题可能奖励记忆化考试知识或应试技巧，answer-only accuracy 也无法诊断推理在哪一步失败。

这是静态且公开的 benchmark，污染风险会随时间增加。prompt 语言、few-shot 示例、chain-of-thought 政策、答案抽取和 refusal 处理都会改变分数。当前公开 artifact 包含测试标签，而这并不等同于所有历史评测设置；比较时必须写清 artifact 日期和 split 政策。数据和代码 license 分开，重新分发前要分别检查。
