正确性只相对于已声明契约成立：在 unit-test mode 下，生成测试必须在原始代码失败、修复后通过，且修复后不能有失败测试；指标包括 success rate 和 changed-line coverage。reproduction-script mode 更简化，不能和默认 unit-test integration 混写。生成测试可能过拟合补丁或缺少语义覆盖。

不要把论文解读成无限制软件智能体可靠性证明。公开 artifact 会进入后续训练语料，Docker 或依赖环境会漂移，评测器实现也可能随发布版本变化。
