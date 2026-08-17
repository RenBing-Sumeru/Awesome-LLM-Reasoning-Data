已有基线是静态 visual-math benchmarks，一次只评估固定题面。DynaMath 的变化是把评测对象改成 programmatic variant family，从而能在受控视觉和文本变化下检查鲁棒性。

方向信号是面向多模态数学推理的动态 benchmark generation，worst-case accuracy 能暴露均值分数掩盖的失败。质量信号是筛选 seed、program-based generation、主题/来源统计、Docker 生成说明，以及集成到 VLMEvalKit。不新的是 visual math QA、答案匹配和 accuracy metric。复用检查应覆盖 seed license、program 是否忠实表达题意、parser 容忍度、random seed、生成图像渲染和公开样本污染。
