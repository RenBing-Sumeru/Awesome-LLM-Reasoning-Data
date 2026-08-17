输入包括自然语言网页任务、当前网页观察、截图像素、可选的 HTML 结构或候选元素，以及浏览器动作历史。流程把高层推理和动作 grounding 分开：多模态模型理解页面和任务，提出意图动作，grounding 策略再选择可执行或可与标注比较的具体元素/动作。

输出是 grounded browser actions 和任务级轨迹。离线评测中的 artifact 是 Mind2Web/Multimodal-Mind2Web 风格记录，包含截图、页面上下文、人类动作轨迹和元素/动作标签。在线评测中的 artifact 是 live-browser run，其结果会受网站状态、登录状态、UI 漂移和 runner 依赖影响。

这里的 verifier 不是学习到的 reward model，而是标注动作匹配和环境成功检查的混合。复用前需要核验 arXiv 论文、项目页、GitHub 代码、HF 数据集、runner 说明、模型 prompt、动作预算、网站日期、split 定义和 license。若 grounding policy、浏览器/运行时版本和 live-site 假设不同，分数不应直接比较。
