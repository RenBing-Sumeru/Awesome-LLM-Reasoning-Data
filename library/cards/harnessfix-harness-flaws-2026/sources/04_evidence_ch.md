论文报告在四个 agent benchmark 上验证 HarnessFix，并在官方 GitHub 发布流程。真正支撑结论的是 instance-level 证据：失败轨迹被定位到某类 harness flaw，应用修复，再用原 benchmark 的 evaluator 或执行环境复查。

证据边界不能放大。缺陷数量和修复效果只对应作者采样到的失败、当时的 benchmark 版本、环境状态、工具/API 可用性和已实现 repair operator，不代表所有 agent benchmark 的普遍缺陷率。复用分数变化时必须同时保留修复 artifact 和 evaluator revision。
