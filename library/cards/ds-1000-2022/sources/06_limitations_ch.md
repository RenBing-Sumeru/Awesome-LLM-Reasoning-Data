正确性受官方 tests 和 string constraints 限制；通过不证明对所有输入语义等价。有些任务存在状态性，特别是 TensorFlow 和 Matplotlib，所以顺序执行或共享进程可能污染结果。

2024 simplified release 改了打包方式，移除 infilling mode，升级到 Python 3.10，并减少外部文件读写，但官方称内容未变。论文 original format 和 simplified format 的分数不应混用，除非明确说明 evaluator 变化。数据 license 和再分发约束需要从当前 artifact 重新检查。
