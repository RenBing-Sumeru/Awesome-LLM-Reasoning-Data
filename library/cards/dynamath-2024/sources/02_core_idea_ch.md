DynaMath 的一句话贡献是：把每个 seed visual-math problem 编成 Python generator，使一个问题族能自动实例化多个具体变体。核心机制是 program-based question generation：采样或改变视觉/文本参数，生成新的 image/question/answer，同时保持目标推理模板。

相对 MathVista、MATH-V、MMMU 式 visual-math 评测或静态多模态 QA，DynaMath 把对象从固定题改成可复现的 variant family。反馈契约是与生成 ground truth 做答案正确性比较；鲁棒性看模型是否能答对同一个 seed 的所有采样变体，而不只看均值分数。方向标签是 dynamic multimodal math robustness benchmark。
