1. 输入：参考图表图像、文本指令、direct/customized mimic 等任务变体，以及可接收视觉输入并输出代码的 LMM。
2. 生成：模型写出 plotting code，用于复现或按指令改造图表。
3. 执行：benchmark 环境运行生成代码，得到渲染图或执行失败。
4. 评测：自动 multi-level metrics 评估代码是否可执行、代码相似性或结构属性，以及渲染图相对参考图和指令的保真度。
5. 输出：逐样本代码、渲染图、执行状态、指标分数和 aggregate model scores。

Verifier 是 mixed 的：程序执行筛掉无效代码，图表相似性指标评估视觉和结构保真度。复现要固定数据版本、代码沙箱、Python/library 版本、渲染后端、metric implementation、prompt 模板、模型版本、图像分辨率、timeout，以及 unsafe 或不可执行代码的处理。
