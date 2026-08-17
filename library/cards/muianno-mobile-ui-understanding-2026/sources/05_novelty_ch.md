已有基线分散在大规模自动 UI 数据、Android view hierarchy 资源、screen caption 数据、导航轨迹和设计反馈数据中。这些资源各有价值，但并不都提供真实 iOS 截图上的专家验证、密集元素级 bounding box，以及直接面向 JSON element extraction 的评测契约。

MUIAnno 的新意在对象和反馈契约。对象是一张截图上的可见 UI 组件集合，带专家框和语义类别；契约足够自动化，模型必须输出结构化元素，只有定位和类别同时匹配才算通过。质量信号来自多阶段标注/验证流程、公开数据与工具声明，以及在统一 prompt 和评测设置下比较多个模型。

不新的是 IoU、object detection 指标、UI 截图数据、prompt-based 多模态评测和 JSON schema 约束。复用前应检查 HF 数据文件与许可证、类别 taxonomy、坐标约定、是否有 split、app 截图权利、prompt/evaluator 代码，以及公开截图是否可能污染被评测模型训练集。
