核心贡献是一个更难、更新的 ARC benchmark：保留原始 input-output grid 格式，同时新增人工策划任务，用于更细粒度评估抽象推理。官方仓库说明 ARC-AGI-2 包含 1,000 个 public training tasks 和 120 个 public evaluation tasks，另有不在仓库中的 semi-private 与 fully-private test tiers。

反馈契约是 exact grid verification。只有所有 test outputs 都与期望输出完全一致，任务才算 solved。这让分数在 artifact 层面容易审计，但仍不能自动说明 solver 找到的是人类预期抽象，还是过拟合的搜索捷径。

相近比较对象包括 ARC-AGI-1、程序合成 benchmark、视觉类比任务、Raven-style matrix reasoning，以及混合多任务的一般 benchmark suite。ARC-AGI-2 范围更窄但信号更尖锐：每个 item 都是一个小型视觉规则归纳问题，依赖极少先验并用 exact output checking 验收。
