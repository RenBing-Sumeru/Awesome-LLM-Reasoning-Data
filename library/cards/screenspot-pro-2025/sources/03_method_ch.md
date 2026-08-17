输入是专业 GUI screenshot 和自然语言 target instruction；模型输出是 coordinate、bounding box 或中间 search regions。benchmark 输出是相对于人工标注 target box 的 localization success。

作者收集专业应用的高分辨率截图，标注目标 UI 元素，并对 task validity 和 target-box precision 做质量控制。benchmark 包含英文 instruction，也包含由 GPT-4 翻译并由双语作者复核的中文 instruction 版本。评测覆盖端到端 GUI grounding models 和多轮搜索方法。ScreenSeekeR 使用 planner-guided area selection、candidate scoring 和 recursive search，并产生可解释 search trace。

复现必须固定 dataset revision、screenshot resolution、target boxes、instruction language、evaluator rule、model output parsing、leaderboard date，以及方法是 single-shot prediction、iterative zooming/narrowing、ReGround，还是 ScreenSeekeR 式 recursive search。
