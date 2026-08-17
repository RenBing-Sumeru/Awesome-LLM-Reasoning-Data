已有工作的基线是以截图为中心的 GUI 评测、web/desktop/mobile 任务完成评测，或把 audio/video 当作参考材料而非同步决策信号的 benchmark。OmniGUI 的新意不在 tap、坐标 grounding 或 teacher-forced action matching，这些在 GUI-agent 评测里已经存在。

真正变化的是观测契约：每一步都可能需要静态截图、时间视频、同步音频、任务指令和历史动作，才能决定下一个可执行动作。dependency 标签也是质量信号，因为它基于物理信息可得性，而不是模型表现后的主观解释。

复用前要检查过滤版数字差异、媒体 license 和 app 内容再分发权、轨迹是否包含个人或受版权保护的应用内容、模型接口是否真的支持 interleaved raw audio/video，以及坐标容忍度、bounding box、任务语言和 JSON prompt schema 是否和官方 evaluator 一致。
