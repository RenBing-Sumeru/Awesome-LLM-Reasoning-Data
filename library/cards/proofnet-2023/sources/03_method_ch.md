输入是本科数学问题，主要来自分析、线性代数、抽象代数、拓扑和 Putnam 题源。作者排除不适合自然形式化的题目，例如依赖特殊记号、多小问顺序依赖、只需计算未知量、或依赖 Lean mathlib 中不成熟领域的题目。

流程：
1. 选择自包含、适合形式化、且尽量降低与 mathlib 重叠风险的教材/考试问题。
2. 将题目陈述转写为 LaTeX。
3. 由熟悉 Lean 的标注者写 Lean 3 formal theorem statement 和需要的 source header。
4. 把自然语言陈述、自然语言证明、Lean 3 陈述组成样本。
5. 实验中用 Lean typecheck / LaTeX compile rate、BLEU 和专家判断来评测模型输出。

输出是可发布的数据行和复现实验代码。验收者不是单一指标：Lean 3 只能确认类型层面良构；语义等价仍靠专家判断。复现必须固定 Lean 3 / mathlib 环境、prompt、论文使用的 OpenAI endpoint、prompt retrieval 的 corpus，以及 GitHub/Hugging Face 版本。官方 GitHub README 还提示原仓库是 Lean 3 版本，Lean 3 已不再维护，新实验应考虑 Lean 4 port。
