AndroidDaily 的核心贡献是面向闭源移动 episode 的判断契约：以任务特定的外部 guideline 配合两层 VLM judge，用对可见动作轨迹的 process-aware 评估替代特权应用状态断言。

Guideline 分为三个不同层次。Operational obligations 规定必须满足的动作或条件；output-quality criteria 判断产出质量；negative constraints 约束不安全、不可逆或其他禁止行为。GRADE 的 Evidence Layer 遍历截图/accessibility/动作序列，过滤无信息步骤，维护 working memory，并汇总动作历史、已确认事实、目标绑定、比较状态与 blocker 信号。Verdict Layer 逐层检查、综合裁决，输出最终 pass/fail，并保留 obligation coverage、边界违规与 failure tag 等诊断（论文第 3.2-3.3 节；Algorithm 1）。

该反馈能观察像素、可用 accessibility metadata、动作及轨迹记录的时间变化；它不能直接读取应用后端状态、隐藏业务逻辑、未呈现的后果或 episode 中缺失的事实。因此，GRADE 是需要判断的 learned verifier，而不是确定性状态 oracle；其最终 Boolean 在本文中是评测标签，不是训练 reward。

相对 AndroidWorld 与 OSWorld，变化在于无需特权内部状态断言即可覆盖真实闭源应用；相对一次性 terminal VLM judgment，变化在于 Evidence/Verdict 分层与显式任务 guideline。2025 年的 235-task AndroidDaily 发布早于本文的 350-task、94-app 基准，不能证明当前 GRADE 任务或代码已经发布。
