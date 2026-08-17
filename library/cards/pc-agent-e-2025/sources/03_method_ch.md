**输入与人工采集。** 研究者先人工编写覆盖多种 Windows 应用的任务集合，再用未披露的 LLM 扩大任务池。两名标注者在各自 Windows 电脑上执行任务，PC Tracker 记录屏幕 observation 和键鼠 action。标注者可以丢弃不满意的运行或修改任务描述。最终保留 312 条完整轨迹：74 条含 2–5 步、139 条含 6–10 步、73 条含 11–15 步、26 条含 16–30 步。规则清洗删除以失败结束和 action 为空的记录，以及冗余或无意义 action，将坐标与 screenshot 缩放到 1280×720，并保证最后保留步骤为 `finish`。

**污染过滤。** 每项保留任务与 WindowsAgentArena-V2 的每项测试任务都必须满足：13-gram overlap 为 0、3-gram overlap 低于 0.7、语义 cosine similarity 低于 0.85。阈值已经披露，但语义 encoder、扩充任务的模型与 prompt，以及 decontamination 实现均为 unknown。

**Thought completion 与 Trajectory Boost。** 发布代码使用 `claude-3-7-sonnet-20250219`。Claude 根据任务、当前 screenshot、当前人工 action，以及最多 30 条此前人工主干 thought/action 记录，为人工 action 重建 thought。随后，它为每个人工步骤分别采样九个替代 thought-action response，设置 `max_tokens=1000` 并使用 18 个并发 worker。代码没有设置 temperature 或 top-p，因此两者为 unknown。替代动作不会在环境中执行。过滤会删除空响应、无法解析的响应和字面 `(x, y)` placeholder；若人工节点为 `finish`，合成响应也必须包含 `finish`。普通合成 action 不经过环境 transition、reward 或语义正确性 verifier。

**展平与输出。** `prepare.py` 把每个人工节点和保留的合成节点转换成独立 LLaMA-Factory 样本。输入包含一张当前 screenshot、任务和此前人工主干的文本历史；target 是 thought 加一个统一词表 action，包括 click、right click、double click、drag、scroll、press key、hotkey、type text、wait、finish 或 fail。最终从 312 条增强 episode 派生约 27K 条 action-level 样本。公开的 1.57 GB `data.zip` 是 episode 包，包含 312 个 JSONL、312 个配套任务文件和 4,503 张 PNG screenshot；它不是现成的 27K JSON，也不是带 VM snapshot、动作后 observation、reward 或 evaluator 输出的 replay bundle。

**训练与评测。** Qwen2.5-VL-72B-Instruct 在 LLaMA-Factory 中进行 full-parameter SFT，冻结 visual tower，cutoff 为 8192，batch size 为 128，learning rate 为 2e-6，使用 cosine schedule、0.05 warmup ratio、2 个 epoch 和 32 块 GPU；论文报告约 5 小时，但 GPU 型号和固定 container 为 unknown。评测使用 1280×720、仅输入 screenshot 的 PC Agent-E scaffold。WindowsAgentArena-V2 包含 11 个 Windows 应用中的 141 项可行任务，会恢复 VM snapshot，并在交互结束后用任务特定 evaluator 判定成功；agent 通过 `finish`、`fail` 或默认 30-step cap 终止。OSWorld 提供独立的 Linux transfer 评测。

复现时应固定代码仓库 commit、LLaMA-Factory submodule commit `f96c0858574c4d465301b2446b59c808326b10fd`、Qwen 基座、Claude snapshot、Hugging Face 模型与数据 blob、benchmark 任务和 evaluator 版本、VM image、屏幕分辨率、step budget 与 action parser。还应保留原始 Claude response、拒绝记录、人工任务文件和清洗日志；这些材料是区分生成候选与已执行 episode、审计 selection loss 的必要条件。
