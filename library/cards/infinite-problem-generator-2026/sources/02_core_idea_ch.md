IPG 把解题程序而不是 LLM 自信度作为验证对象。生成器可以改变叙事、变量和公式链，但记录只有在固定的 Formula-as-Code 库上成功执行、得到处于物理合理范围的有限数值，并且公式与目标变量签名不重复时才能保留。

Google Scholar 引用数：0（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Infinite+Problem+Generator%3A+Verifiably+Scaling+Physics+Reasoning+Data+with+Agentic+Workflows&author=Aditya+Sharan&hl=en）

开源数据：有。数据集名称：ClassicalMechanicsV1。官方地址：https://huggingface.co/datasets/erads/ClassicalMechanicsV1。规模：由 165 道专家教材题扩展得到 1,335 条本科经典力学记录，覆盖 102 个公式，平均每题使用 3.05 个公式。记录形式：题目、公式编号、变量赋值、可执行 Python 求解函数与数值结果；具体存储结构和数据集许可未确认。构造使用 Gemini 2.5 Flash 与预定义公式库，并通过执行、范围、签名检查及独立 Gemini 3 审计过滤。预期用途：物理 SFT、课程数据构造与可执行评测。
