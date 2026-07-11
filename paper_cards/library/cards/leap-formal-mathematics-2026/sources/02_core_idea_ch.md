LEAP 的核心贡献是把形式化过程变成 verifier 引导的 agent loop，而不是一次性生成完整证明。它先尝试直接形式化；失败时生成非形式化蓝图和形式化 proof sketch，把目标分解为 AND-OR 图，并依据编译器反馈反复修改候选 Lean 代码。

它的数据面是一串证明状态与可执行结果。Lean 是反馈契约：通过的子目标可回写进证明图复用，被拒绝的候选则带有机器产生的诊断。应对比一次性 Lean 生成、专用 theorem prover、MiniF2F/Putnam 类形式化 benchmark 与其他 agentic prover。方向标签是“蓝图引导、确定性验收的形式化证明搜索”。
