核心思路是建立一条从真实人类桌面行为到多模态监督轨迹的开放流水线。AgentNetTool 在标注者自己的设备上同步采集屏幕视频、鼠标与键盘事件以及 accessibility tree。人工上传和复核后，Action Reduction 压缩冗余的底层事件；State-Action Matching 则选择鼠标预移动之前、视觉上有区分度的帧，避免截图泄漏未来光标位置。每个 episode 最后附加成功或失败的终止动作。

OpenCUA 随后加入三个监督层级：L1 是可执行动作，L2 是反思式推理，L3 是对观察的描述。reflector 根据动作前后截图和动作代码判断上一步；generator 结合任务历史、反思、目标动作代码、红色坐标标记和局部放大图生成 observation-thought-action 文本；summarizer 细化任务，并为完成度、对齐度、效率和难度打分。三个角色均使用公开注明的 `claude-3-7-sonnet-20250219`。

由此可以明确区分反馈边界：人类编写动作，前沿模型编写并判断反思文本，离线 AgentNetBench 将预测动作与人工整理的有效动作匹配，在线 OSWorld-Verified 使用任务特定的环境检查。训练本身是基于人类和模型轨迹的监督微调与蒸馏，而不是利用环境 reward 的强化学习。
