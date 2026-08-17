1. **规格可能过弱或错误：** 从测试自动推广 theorem 容易产生只覆盖局部行为、恒真或与题意不完全对应的命题；作者也指出 theorem desirability 仍需判断。应优先使用 curated 子集，并人工/反例审计规格。

2. **`sorry` 与可编译性：** 原文件可因 `sorry` 编译，不代表模型完成了证明；评测必须禁用或扫描 `sorry`、`admit` 和不安全公理，并确认目标 theorem 真正关闭。

3. **翻译分布：** APPS 的 Python/I/O 题被转换为 Lean 数据结构，性能约束和真实运行语义可能丢失；4,715 条也来自公开 APPS，存在预训练污染。复用应固定 Lean 4.12.0、按原题去重并分别报告 program/proof success。
