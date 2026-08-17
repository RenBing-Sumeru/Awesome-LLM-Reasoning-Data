核心贡献是一套专家标注的 iOS UI 数据集，以及一个 prompt-based benchmark，用来衡量多模态模型能否从手机截图中定位并分类可见 UI 元素。方法机制很直接：采集真实 app 页面，按受控 taxonomy 给元素画框和打标签，导出 JSON，再把模型生成的 JSON 与专家标注比对。

这里的数据对象不是问答文本，而是一组带坐标和语义类别的 UI 元素。反馈契约同时要求空间重合和类别一致：JSON 格式错误、重复预测、漏掉小元素、标签错、框不准都会影响 precision、recall、F1。论文中的模型使用是评测用途，没有把数据作为 RL reward、偏好数据或专门微调配方来报告。

最接近的比较对象包括 Rico、MobileViews、MUD、MONDAY、GUIOdyssey 和 UICrit。MUIAnno 的变化点是把真实 iOS 截图上的专家元素级抽取作为中心；导航数据更强调动作序列，大规模自动数据更强调覆盖面。方向标签是 mobile GUI grounding / agent perception，复用风险主要在标注一致性、公开数据污染、API 模型版本和许可证。
