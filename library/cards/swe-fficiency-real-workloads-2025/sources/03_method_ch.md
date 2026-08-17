1. **筛选性能变更：** 从九个仓库抓取 PR，用性能关键词和静态 diff 识别可能减少运行时间的候选，排除纯重构和不可重放修改。

2. **提取 workload 与测试：** 还原 PR 中的 benchmark/性能脚本，在 base 上用 coverage 找到执行路径相关的单元测试，形成“要加速的 workload + 必须保持的行为”。

3. **稳定测量专家收益：** 在容器中多次运行 base 与 gold patch，固定 CPU/内存并过滤噪声、失败或无稳定 speedup 的任务，记录 expert speedup。

4. **评测 agent：** 提供完整仓库和 workload，限制 3 小时、最多 100 actions；补丁先过 correctness tests，再计算 SR。复现需固定 4 vCPU/16GB、硬件型号、热身、重复次数和聚合规则。
