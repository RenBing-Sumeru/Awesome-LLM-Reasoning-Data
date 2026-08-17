论文报告现有 GUI grounding 模型在专业高分辨率屏幕上表现很差：最佳被测模型在 ScreenSpot-Pro 上只有 18.9%。作者提出的 ScreenSeekeR 搜索方法在不额外训练的情况下达到 48.1%，说明缩小搜索空间有效，但仍远未解决。

行级证据是 screenshot、instruction、人工标注 target box、预测 coordinate 或 box，以及 localization-success check。数据集覆盖 23 个应用、五个行业和三个操作系统，支持它不只是 mobile 或 web UI grounding 的说法。证据边界包括 dataset revision、target-box precision、language variant、leaderboard model versions，以及方法是否使用额外 search calls 或 planner assistance。
