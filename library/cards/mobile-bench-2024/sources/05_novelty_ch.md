已有基线通常是静态截图、UI-only Android 环境，或面向单应用任务的终态成功率。Mobile-Bench 改变的是评测对象：任务从 HOME 页面开始，可能跨多个应用，动作空间同时包含 UI 操作和 API 调用，并为过程关键点提供显式 CheckPoint。

新意不在于 Android 自动化、ADB、Appium 或 API 调用本身。这些组件都不是新概念。方向信号在于把 query、APP/API 上下文和可机器检查的过程谓词包装成 benchmark row，让移动 agent 的规划路径可以被审计。质量信号包括真实语音助手 query、GPT-4 扩增复杂任务、人工复核、抽样质量验证、baseline 对比，以及带环境说明和数据的公开仓库。

复用前要检查：公开数据是否对应 ACL 论文版本，代码和数据 license 是否允许目标用途，所需应用和手机预置数据是否可获得，CheckPoint 定义是否完整，以及 GPT-4 PassRate 是否与 CheckPoint-l1/l2 分开解释。公开 artifact 不等于可以安全加入训练集，仍有污染后续评测的风险。
