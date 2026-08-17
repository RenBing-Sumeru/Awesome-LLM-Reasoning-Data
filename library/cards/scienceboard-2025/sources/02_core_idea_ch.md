ScienceBoard 的核心设计是让专业科学软件既可操作又可验证。它在 VM 中预装 ChimeraX、KAlgebra、Lean 4、GRASS GIS、Celestia 和 TeXstudio 等工具，并支持鼠标/键盘 GUI 控制、Ubuntu 命令、应用特定脚本、答案提交和预定义 API 调用。

视觉上看似成功并不足够。轻量服务器或经修改的应用构建通过 HTTP 暴露内部状态；initializer 配置地图、蛋白质序列等任务上下文；episode 结束后，evaluator 模板用精确匹配、范围、数值容差、文件比较和应用特定谓词对照期望值与实际值。因此，终止结果扎根于环境状态，而非 LLM judge。

数据对象分为两层。基准层包括任务 JSON、资产、initializer、evaluator 规格和 VM snapshot；轨迹层包括模型生成的观察—动作序列及结果状态。Hugging Face 列出 5 个 ZIP 压缩包，总计约 9.42 GB，但没有规范化的逐记录 manifest 来说明 episode 数量、任务覆盖、失败、不完整运行或 evaluator 对应关系。
