代码 agent benchmark 主要检查功能是否修复，很少测量补丁是否真正加速生产代码；函数级 kernel benchmark 又给出明确目标位置，省略在大型仓库中定位性能瓶颈、选择相关测试和保持行为不变的过程。模型可能生成正确但更慢的代码，现有 Pass@1 无法区分。

SWE-Perf 从真实开源仓库的性能优化 PR 构建 140 个任务。每题给出完整代码库、目标函数或现实化问题描述、性能相关测试、专家补丁和可执行环境；agent 生成 patch 后先过正确性检查，再比较修改前后的运行时间。该 benchmark 用真实专家优化作为上限，评测 repository-level performance engineering。
