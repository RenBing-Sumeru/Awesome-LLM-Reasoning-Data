任务构建从 358 个 Python 仓库中抽取的 64,689 个 issue/PR 实例开始。对其中 11 个仓库，根据仓库文件、CI、requirements 与文档半人工配置 version 和 dependency。只有当人工 gold patch 比原始状态通过更多单元测试时，候选环境才被保留，最终得到 2,438 个验证任务。环境构建的拒绝账本未公开。

主数据行保存 issue text、repo、base_commit、version、gold patch、test patch，以及 pass-to-pass/fail-to-pass 列表。PMLR 论文与当前 Hugging Face Lite card 都是 230 个任务；顶层 README 写 234，属于文档漂移，不是第二个有证据支持的 split。Main 与 Lite 都是 train-style 数据，不是 held-out SWE-Gym evaluation split。

OpenHands teacher trajectory 来自 gpt-4o-2024-08-06 与 claude-3-5-sonnet-20241022，混合多个 temperature 和 30/50-turn budget。通过测试的 episode 生成 491 条 SFT 对话。单独的 sampled trajectory repository 公开 6,055 条，包含 messages、tools、patch、test output、flags 与 outcome：491 个成功、5,564 个失败。

OpenHands policy 使用 Qwen2.5-Coder-Instruct 7B/14B/32B 做 full SFT。论文报告把 on-policy self-improvement 数据与 491 个 off-policy success 混合后，held-out performance 下降，因此不能把自提升描述为普遍有效。Moatless 在两次迭代中，每个 Lite task 以 temperature 1.0 采样 30 条轨迹，保留成功，单题最多两条，并偏好更少轮次。

OpenHands outcome verifier 接收 problem statement、交错 observation/action 和 current diff，预测 YES/NO，并把归一化 YES probability 作为 scalar reward。当前 mixture 有 1,318 个正例与 1,318 个负例。推理时最多采样 16 条 OpenHands 或 8 条 Moatless 候选，由最高 verifier score 选择 Best@k。

Task image 使用可变 `latest` tag。GitHub 仓库没有 tag/release，也没有 manifest 将全部 2,438 行绑定到 image digest、harness/scaffold commit、dependency、test bundle、trajectory ID、subset membership、model checkpoint 与工件许可。
