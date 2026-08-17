核心贡献是一个 chart-to-code benchmark：4,800 个人工整理的 figure-instruction-code 三元组，覆盖科学领域中的图表，包含 18 类 regular charts、4 类 advanced charts 和 201 个子类。关键机制是让 LMM 根据图像和指令生成可执行绘图代码，再同时评测代码和渲染图。

与 ChartQA、图表 captioning、数据抽取和 text-to-code benchmark 相比，ChartMimic 把输出对象从答案或描述换成 executable reconstruction。反馈契约结合 execution validity、code-level properties 和 visual/chart quality metrics。方向标签是 multimodal executable evaluation for chart reasoning。
