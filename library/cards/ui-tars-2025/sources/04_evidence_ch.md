在 OSWorld 的 369 个 Ubuntu/Windows/macOS 任务上，三次运行平均，UI-TARS 在 50 step 报告 24.6、15 step 报告 22.7；Claude 分别为 22.0 和 14.9。这些结果属于论文的 screenshot-only scaffold 与 step budget，不是脱离上下文的 checkpoint 属性。

AndroidWorld 含 20 个 app、116 个随机参数任务；UI-TARS 报告 46.6，GPT-4o 为 34.5。论文称 AndroidWorld 为 out-of-domain，因为没有相应训练数据，但没有 item hash 或语义去污染。Mind2Web、AndroidControl、GUI-Odyssey 则因相关数据进入训练而明确属于 in-domain。

System 2 在 Best-of-1 可略差于 System 1，因为 thought 可能无关、幻觉或固着；在 Best-of-16/64 下则通过候选多样性和选择获得更大增益。这是测试时算力结论，不能证明 thought 轨迹普遍是更优监督。
