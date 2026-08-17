一个 episode 以英文任务指令和初始截图开始，随后是截图以及与 PyAutoGUI 兼容的动作，例如点击、移动、拖拽、滚动、输入、快捷键、等待和成功或失败终止。标注者来自学生、众包平台和公司；论文称所有人都签署了同意书。论文偏好长任务，拒绝少于五步的演示，将 Windows/macOS 与 Ubuntu 的采集分开，并称 Ubuntu 任务与 OSWorld 不重叠。

原始记录可能包含数千个输入事件。基于规则的 Action Reduction 合并滚动、连续按键、快捷键、拖拽和双击，并在需要时插入鼠标移动前置动作。State-Action Matching 选择预移动之前的帧，而不是已包含最终光标位置的帧。处理后的语料含 22,625 个获接收任务，平均 18.6 步：约 12K 个 Windows、5K 个 macOS 和 5K 个 Ubuntu 任务。Table 2 另行报告 OpenCUA-7B/32B 使用 41,428 条训练轨迹，Qwen2-7B/A3B 使用 27,804 条，因此不能把任务数当作每种训练视图的精确数量。

反思流水线把每个先前动作标为正确或错误、冗余或必要；被判为错误或冗余的步骤不进入训练。已发布的轨迹 schema 包含任务标识与指令、完成度、对齐度、效率、难度、细化后的任务描述、domain，以及逐步的截图、observation、thought、动作描述、动作代码、正确性、冗余性、reflection、步骤标识和 marks。官方 HF 卡还说明了多图 chat 格式，并且 loss 只作用于当前 assistant response。

训练把规划轨迹与 GUI grounding 和通用 SFT 数据混合。来源包括 AgentNet、ShowUI、UGround、189K 个 accessibility-tree bounding boxes、Aguvis 风格的 agent 数据，以及 Kimi 通用文本/视觉 SFT。72B 配方另外使用了由 o3 与 Jedi 生成的 8K 条 Ubuntu rollouts。默认推理使用三张截图和 L2 反思式推理。CoT 解码参数、完整 split manifest、精确来源版本以及完整训练 launcher 仍为 unknown。
