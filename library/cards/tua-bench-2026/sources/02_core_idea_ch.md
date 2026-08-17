核心贡献是一个覆盖五类任务、共 120 题的 terminal-use agent benchmark。TUA-Bench 把很多通常通过 GUI 完成的电脑使用任务改写成 terminal-first workflow，同时包含由博士级领域专家共同设计的科学和工程任务。

核心机制是标准化任务封装：每题都有具体 terminal environment、setup procedure、期望 artifact 或状态，以及 verifier。反馈契约是 execution-based scoring，而不是主观答案判断。最接近的对比是 Terminal-Bench、OSWorld、SWE-agent 式 repo 任务和 GUI computer-use benchmark。方向标签是 general-purpose CLI environment evaluation with executable artifact checking。
