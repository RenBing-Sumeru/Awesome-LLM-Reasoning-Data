ChartMimic 是 2024 年 arXiv、2025 年修订并被 ICLR 2025 接收的 benchmark，用来评测 large multimodal models 的 chart-to-code generation 能力。它要补的缺口是：很多 chart benchmark 做 QA 或描述，而视觉 grounded 的代码生成要求模型从图像和指令中恢复图表结构、数据编码、视觉样式和可执行绘图逻辑。

数据对象是人工整理的三元组：chart figure、textual instruction 和 reference code，来源于科学论文中的真实图表使用场景。评测面是生成的 plotting code 及其渲染出的图。收录边界是 multimodal reasoning 与 executable reconstruction；它不是 chart QA、不是自由图像描述，也不是纯代码生成 benchmark。对 atlas 的价值在于 mixed feedback contract：代码执行加多层级图表渲染相似度。
