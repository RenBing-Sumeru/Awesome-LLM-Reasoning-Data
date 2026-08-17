典型输入包括用户目标、当前 GUI/OS/移动端状态和可用动作。流程是初始化环境，让智能体观察状态，执行点击、输入、导航、工具调用或脚本动作，记录中间状态，并用 WindowsAgentArena task validators and Windows VM evaluation harness 判定结果。

输出包括任务结果、轨迹、状态转移、动作日志、评分记录和复现实验所需工件。工件入口：论文： https://arxiv.org/abs/2409.08264; 项目： https://microsoft.github.io/WindowsAgentArena; 代码： https://github.com/microsoft/WindowsAgentArena; 数据： https://github.com/microsoft/WindowsAgentArena。

复现时需要固定 发布、设备/系统/模拟器、依赖、数据 划分、评测脚本和 裁判/评分器 版本。
