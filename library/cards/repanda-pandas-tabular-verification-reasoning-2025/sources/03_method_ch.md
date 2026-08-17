1. **整理原始表格任务：** 从 TabFact 获取表格、caption、断言与真假标签；从 WikiTableQuestions 获取表格、问题与参考答案，并统一为 DataFrame 可读格式。

2. **生成 pandas 查询：** 使用 DeepSeek-Chat 根据表格与文本生成筛选、比较、排序或聚合代码，使查询返回布尔判断或目标值。

3. **执行与自动修复：** 实际运行代码，利用语法错误、列名错误和结果不一致反馈迭代修正；只有能执行并与标签或答案一致的查询进入数据集。

4. **训练与外推：** 在 PanTabFact 上微调 7B code model 做事实核验，在 PanWiki 上训练答案检索，并用未微调的 WikiFact 测试分布外泛化。
