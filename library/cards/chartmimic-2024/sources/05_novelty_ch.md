已有基线包括用 QA、captioning、table extraction 或合成 chart-to-text 做图表理解，也包括缺少视觉图表 grounding 的代码生成 benchmark。ChartMimic 把目标 artifact 改成可执行 plotting code，并把渲染图本身纳入评测证据。

方向信号是：multimodal reasoning benchmark 可以用 executable reconstruction 检验模型是否理解视觉编码，而不只是回答图表问题。质量信号来自 ICLR 2025 接收、官方项目页、GitHub 代码、Hugging Face 数据、规模、图表类型 taxonomy 和 multi-level metrics。不是新的部分包括 chart perception、plotting code generation 和自动图像指标。复用前要检查 license、源图表 provenance、代码沙箱安全、metric sensitivity、split contamination、渲染确定性，以及 reference code 是否暴露给模型。
