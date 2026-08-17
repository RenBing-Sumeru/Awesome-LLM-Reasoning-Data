最强 artifact 证据来自官方 `arcprize/ARC-AGI-2` 仓库。README 定义了 dataset composition、task schema、grid constraints、exact success criterion、public/private tiering 和 human-baseline statement。GitHub metadata 显示该仓库是 public，并使用 Apache-2.0 license。

arXiv 论文核实了 benchmark 的目标：ARC-AGI-2 保留 ARC input-output pair 格式，同时扩展任务难度和粒度，用于评估 frontier reasoning systems。arXiv 记录列出它是 cs.AI preprint，作者为 Francois Chollet、Mike Knoop、Gregory Kamradt、Bryan Landers 和 Henry Pinkard。

证据边界很重要。public evaluation JSON 一旦公开，就无法防止重复反馈或训练污染。semi-private 与 fully-private 结果需要 hosted evaluation 或 competition 证据。exact match 只证明 released task 的输出相等，不证明 solver 内部使用了预期抽象。
