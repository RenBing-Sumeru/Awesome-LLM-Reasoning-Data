论文在 Mobile-Eval 的 simple、moderate、difficult 三组任务上报告结果。Mobile-Agent 的 success rate 分别为 0.91、0.82、0.82，同三组 completion rate 为 98.2、90.9、91.3。

逐样本证据是被执行的手机操作轨迹，并用任务完成、进度和效率指标判断。它比静态答案对比更强，因为动作序列必须和移动 UI 交互；但它弱于确定性 verifier，因为 app 状态、UI 版本和完成判断都可能漂移。

证据边界是 2024 年 Mobile-Eval 设置及其选定 app、难度分组、视觉工具和模型后端。不能把这些结果直接迁移到其他手机、app 版本或 2024 年之后变化过的 UI 上。
