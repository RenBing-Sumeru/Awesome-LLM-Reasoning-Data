OmniGUI 可作为全模态 GUI agent 的评测 schema，也可作为智能手机轨迹数据审计清单。可复用记录应保留任务目标、app 身份、语言、dependency 标签、step index、截图、视频片段、音频片段、历史动作、动作原语、动作参数、目标 bounding box 或字符串、预测 JSON，以及 TM/EM/SR/GP 结果。

它适合测试模型能否把瞬时声音、视频状态和视觉 UI 布局转成可执行动作。它还帮助拆开三个常被混在一起的 claim：是否理解多模态上下文，是否选对动作原语，是否在正确坐标或字符串上完成 grounding。

对 atlas 来说，它应被看作 environment/agent trajectory data，带确定性标签。它适合评测、回归测试、消融设计、prompt/interface 审计和污染检查。若要用于训练或 reward，必须另行审计 license、隐私、媒体来源，以及“匹配专家动作”是否适合作为奖励。
