正确性受代码沙箱和图表指标限制。渲染图可以视觉上接近，却使用错误数据、错误尺度、遗漏不确定性信息或误导性标签。反过来，语义合理的图表也可能因为样式不同而低分。

科学论文图表可能有版权或 license 约束，reference-code provenance 在重新分发或训练前必须检查。分数依赖 plotting libraries、字体、后端 rasterization、图像分辨率、timeout、package 版本和 prompt 格式。公开 figures、reference code 和渲染输出都可能污染未来 multimodal training。
