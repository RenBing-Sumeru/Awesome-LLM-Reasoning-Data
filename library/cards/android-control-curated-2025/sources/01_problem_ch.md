本卡的首要论文记录是 arXiv:2510.18488，提交于 2025 年 10 月 21 日；可获得的只有 v1 和一份不含 appendix 或 supplement 的 10 页 PDF，也未确认正式会议或期刊收录。Card 对 artifact 的核验来自官方 GitHub 仓库、Hugging Face 数据集及重定向后的 Magma-R1 模型仓库。

AndroidControl 用一个标注动作评测 GUI agent，并以精确目标点评测 grounding。论文指出，即使动作触发了预期 UI element，这种设置仍可能判错；含糊 instruction、多个有效下一步动作或错误 ground truth 还会进一步混淆分数。因此，AndroidControl-Curated 把 benchmark 定义和标签本身——而不只是 agent——作为需要净化的对象（论文 §2.1，pp. 3–4；§3.4，pp. 6–8）。

发布对象是静态 state-action step，而不是已验证可回放的完整 episode。根据 JSON 视图不同，一条记录包含 image path、高层或低层 instruction/task、序列化的先前动作 history、目标 action、point 和/或 bounding box 目标、input text，以及可选的修订 task/history、候选替代动作、reviewer 结果或修订前后 action。官方发布了五种 JSON 视图和 screenshot archives；未验证到固定 emulator、app 版本 manifest、reset protocol 或 live terminal checker（官方数据集 `benchmark_resource/*.json`）。

该工作对应 `environment_agent_trajectory_data`，因为它公开 Android observation、action history 与 step-level 监督；其核心论点又说明评分几何和标签修订会实质改变 success，因此也对应 `benchmarks_evaluation_surfaces`。它没有建立完整环境 episode 发布，也不是通用移动 agent 训练语料。论文和已审计官方 artifact 支撑本卡达到双语 L4 内容深度，但 split、2.4K 训练 ID、license、replay 与 checkpoint mapping 仍明确为 unknown。
