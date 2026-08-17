输入是从 Apple App Store 类别中选出的真实 iOS 应用页面、固定 iPhone 11 分辨率截图，以及 36 类 UI 元素 taxonomy。论文报告的数据规模为 38 个应用、1,000 张截图、8 个高层应用类别、6 名 UI/UX 标注者和 27,367 个元素实例。

流程：
1. 通过 App Store 元数据和 iTunes Search API 选取应用，再人工探索 onboarding、首页、导航、内容浏览、搜索、表单等代表性状态。
2. 将截图上传到自定义网页标注工具。
3. 标注者为可见 UI 元素画紧 bounding box，并分配 taxonomy 标签；嵌套组件在需要时单独标注。
4. 经过验证阶段修正漏标、框不准、标签歧义、重复和 taxonomy 不一致。
5. 导出结构化 JSON 标注。
6. 评测时给多模态模型完整截图和固定 prompt，要求输出符合 schema 的 JSON 元素列表。

输出是截图级标注记录和模型预测记录，字段核心是元素类别与 bounding box。验收器是确定性的匹配协议：预测框与专家框一对一匹配，IoU 至少 0.5，且类别必须一致，最终统计 precision、recall、F1；论文在完整 1,000 张截图上评测。

复现时必须固定数据集 revision、标签 schema、prompt template、API 模型 ID、调用日期、低温/确定性生成设置、n8n/Docker workflow、图像分辨率和评测脚本。闭源 API 后端会变化，所以分数只有在服务版本和时间被记录时才可比较。
