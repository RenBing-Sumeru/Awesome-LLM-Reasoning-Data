MMBench-GUI 是 OpenCompass/OpenGVLab 生态在 2025 年发布的 GUI agent arXiv benchmark，问题是如何跨移动端、桌面端和网页端评测 agent，从屏幕理解一直覆盖到多步自动化任务。

评测面是分层的：L1 视觉/内容理解，L2 元素 grounding，L3 任务自动化，L4 任务协作；对象包括 GUI 状态、指令、动作和成功/效率分数。它在 atlas 中同时是评测面和环境/轨迹基底，不只是截图问答数据集。
