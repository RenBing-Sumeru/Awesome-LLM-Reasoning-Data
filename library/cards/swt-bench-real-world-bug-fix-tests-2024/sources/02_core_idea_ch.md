一句话贡献：SWT-Bench: Testing and Validating Real-World Bug-Fixes with Code Agents 把一个任务包含真实 bug-fix issue、仓库状态、生成的 test patch 或 reproduction script、原始和修复后代码状态、fail/pass 转移标签，以及 coverage 或成功指标。绑定到具体反馈契约，形成可复用对象。

核心机制：基准把真实 bug fixes 转成任务，让智能体生成能验证 bug 和 repair 的测试。反馈契约：在 unit-test mode 下，生成测试必须在原始代码失败、修复后通过，且修复后不能有失败测试；指标包括 success rate 和 changed-line coverage。最接近的对比对象是：SWE-bench 补丁修复任务，以及没有真实 bug-fix 验证的测试生成数据集。方向标签是 verifier-anchored software-agent evaluation。
