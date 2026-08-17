π² 把答案构造与推理轨迹构造分开。表格使多跳问题和答案可以执行验证；验证后，网页把同一任务变成真实长上下文阅读，教师模型在看不到隐藏表格的情况下编写推理轨迹。这样，教师模型不会自行定义 ground truth，但仍能产出与模型风格匹配的推理监督。

开源数据：有。名称：π² 训练数据与 π²-Bench。官方代码与项目：https://github.com/vt-pi-squared/pi-squared。官方数据：https://drive.google.com/drive/folders/1ISRgLijDFvwFpHzV4tmHix6MIwIGG2gd?usp=sharing。规模：1,174 条已验证 QA 轨迹，其中 922 条用于训练；π²-Bench 含 228 条人工复核记录，划分为 178 条测试和 50 条验证。记录形式：长非结构化上下文、分析问题、结构化推理轨迹、短答案与构造元数据；仓库链接 JSONL 数据。构造使用 Wikipedia 表格与页面、每题约 10 篇网页搜索文章、SQL 与 Python 一致答案、质量评分以及匹配模型家族的反向生成。许可：未确认。预期用途：长上下文 SFT、自蒸馏与评测。
