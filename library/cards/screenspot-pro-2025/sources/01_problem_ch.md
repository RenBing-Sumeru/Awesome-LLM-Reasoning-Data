ScreenSpot-Pro 问的是：多模态模型能否在高分辨率专业软件界面中，把自然语言 GUI instruction grounding 到正确 UI 元素。主来源是 arXiv 论文 https://arxiv.org/abs/2504.07981，公开 grounding leaderboard、GitHub 仓库和 Hugging Face 数据集提供 artifact。

收录边界是 professional computer use 的 GUI grounding。一个样本包含高分辨率 screenshot、target instruction、application/domain metadata，以及由 localization accuracy 验收的 target box 或 coordinate region。它不是 OSWorld 式端到端电脑使用 benchmark，也不是训练配方。它对 atlas 的价值在于：定位目标 UI 元素是 desktop agent 执行动作前的关键感知/动作前提。
