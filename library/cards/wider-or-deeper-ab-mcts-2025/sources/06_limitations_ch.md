**反馈错配与 verifier 范围。** 搜索看到公开代码测试、ARC demonstrations 或 MLE validation split，而最终成功由隐藏测试或 held-out output 判断。重复搜索可能过拟合这些可见 surface。高节点分数不证明隐藏正确性，任何 evaluator 也不验证中间推理、因果忠实性或语义质量。ARC-AGI-2 Pass@k 表示某个分支发现了精确解，却不证明可部署 selector 会选中它。

**未发布原始轨迹语料。** 论文运行的响应树没有公开。缺失对象包括精确任务—运行清单、每个生成回答、实际父子边、变宽/变深选择与生成顺序、evaluator payload、节点分数及回传、模型调用响应、token/价格用量和最终选择历史。未选分支尤其重要：已检查实现中没有发现显式剪枝/删除路径，因此可以在本地保留它们；但公共发布既不含全部分支，也不含被拒绝/未胜出的子集。汇总图与示例树无法支持记录级重放。

**模型与 API 漂移。** GPT-4o 固定为 `gpt-4o-2024-08-06`，主实验 DeepSeek-V3 却通过可变 `deepseek-chat` alias 调用。实际服务版本、provider-side 实现、重试行为及后续 endpoint 漂移均为 unknown。ARC-AGI-2 明确命名 `gemini-2.5-pro-preview-05-06`、`o4-mini-2025-04-16` 和 `deepseek-r1-0528`，但模型行为复现仍可能依赖 provider 基础设施与已下线的历史 endpoint。

**预算可比性。** 把一个生成节点计为一次 API call，会隐藏 completion 长度、修订链的 context 增长、evaluator 运行时间、并行度、重试、墙钟时间和金钱成本。MLE 候选还要在一张 H100 上运行，时限一小时。主结果最多使用 128 次调用，附录 ARC-AGI 可用 512 个节点，ARC-AGI-2 使用 250 次调用；将这些压缩成同一个“搜索预算”会错误描述协议。TreeQuest 还提示，大型异步 batch 可能让树偏向更宽形态。

**随机性与覆盖面。** temperature 非零，但重复次数不均：LiveCodeBench 五次，CodeContest 与 ARC-AGI 三次，MLE-Bench 一次。所用 benchmark 都能提供可执行或标量反馈；对开放式推理、主观判断、安全任务、长程 agent 或缺少廉价 evaluator 的设置能否迁移仍为 unknown。外部 evaluator 也可能不可用，或比生成更昂贵；论文自身承认这一假设限制。

**污染、切分与权利。** 将 LiveCodeBench 限定在 2024 年 8–11 月，是有记录的污染预防措施，而不是对模型训练重叠、benchmark 交叉重叠或生成轨迹的全面审计。代码搜索反馈使用公开测试，MLE 使用内部 80/20 切分，ARC 使用 demonstrations，因此复现时必须保持 partition integrity。TreeQuest 与 ARC-AGI-2 仓库采用 Apache-2.0，但该许可不授予 benchmark prompt、Kaggle-derived data、模型响应或 provider 日志的权利。NeurIPS supplemental experiment bundle 没有核验到根许可证，其复用条款为 unknown。

**发布与复现状态。** 条目保持 `partial`，不是因为引用证据薄弱，而是因为代码级能力远强于实例级披露。缺失原始树、论文运行日志、模型版本固定与 supplemental license，使直接轨迹复用、独立分数历史审计、稳定 API 复现和 supplemental 再分发仍受阻。
