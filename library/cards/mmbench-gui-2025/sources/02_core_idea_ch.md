核心贡献是一个统一的多平台 GUI-agent benchmark，用层级结构把感知、grounding、执行和协作分开评测。机制不是把 GUI 能力压成单一成功率，而是在交互程度逐步增加的层级上分别打分。

最近对比对象包括 ScreenSpot/GUI grounding 数据集、mobile-agent benchmark、OSWorld 类桌面任务和 web-agent benchmark。反馈契约是混合的：低层级用静态 QA/grounding 分数，高层级用环境或 evaluator 的成功/效率分数。
