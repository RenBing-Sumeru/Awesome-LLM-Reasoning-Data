- 从第 1 节与 Claude 4 引用边界开始。除非 Opus 4.1 addendum 明确重复或改变，否则所有家族级事实都标为 inherited context。

- 按对象类型阅读第 2、3 节：human/synthetic safety prompt、computer-use state/action、agentic-coding trajectory、environmental injection、专门 RL、instruction、detector、deployment intervention。不要合并这些控制层。

- 在第 4 节重建完整审计图：290 seeds → Opus 4-based auditor → 每个 target 1,160 条 transcript → 八个 alignment scorer/四个 welfare scorer → aggregate metric。Auditor 与 scorer 必须保留在评测侧。

- 阅读第 5 节时，把每个 hack rate 绑定 task origin、visible/hidden-test contract、anti-hack prompt 条件、environment 与报告版本。Training-distribution task 和两个未命名 training environment 都需要显式警告。

- 将 validity risk 与结果并列记录：极端场景分布、generator/scorer 家族依赖、evaluation awareness、checkpoint mismatch、automated-only RSP testing 与 corrected metric。
