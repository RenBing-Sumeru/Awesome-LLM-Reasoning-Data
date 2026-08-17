MMMU 等已有工作已经把多模态学术 QA 做成标准 benchmark。MMMU-Pro 的变化在于审计 shortcut solvability，过滤或重构题目，并加入强调视觉证据使用的 vision-only 条件。

方向信号是 benchmark robustness，而不是某个模型提升：它问的是当文本捷径和选项先验被削弱后，高分是否还能成立。质量信号是官方同时发布论文、代码/评测器、项目页和带答案修正说明的数据集卡。

不新的部分包括 answer-level accuracy、多选/问答评测和学科覆盖。复用前要检查数据集 license、split/revision、答案修正记录、prompt 格式，以及公开样本是否进入后续模型训练。
