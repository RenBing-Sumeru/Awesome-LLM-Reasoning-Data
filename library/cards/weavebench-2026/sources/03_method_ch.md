**输入与准入。** 领域专家先定义 cooperation archetypes，再从公开 GitHub/GitLab issue 与 pull request、Stack Exchange、Reddit、论坛、文档、postmortem、design mock、bug tracker、YouTube 和 OpenClaw 用户请求中寻找候选工作流。候选项只有在 P1 要求至少一个 GUI atom 与一个 CLI atom 不可互相替代、P2 要求经历多个交错阶段、P3 要求跨应用状态相互关联时才被纳入。论文报告 174 个源 URL，来自 82 个 hostname；其中 94 个被标为 user-pain URL，114 个任务中有 91 个至少包含一个此类 URL（附录 A.4）。

**C1-C4 构造。** C1 用 archetype 与公开 artifact 提出真实工作流；C2 把每个工作流封装为自包含任务包，包含初始环境、seed data、必需资产、用户指令、预期交付物、专家参考轨迹和 verification anchors；C3 进行独立 blind review，检查清晰度、可复现性、P1-P3 合规性和 anchor fidelity；C4 用三个智能体 pilot 每个任务，若失败源于任务歧义或环境缺陷则修订。论文没有完整披露 pilot 智能体身份、数值采样设置或完整准入日志，因此这些信息保持 unknown，不作推测（论文第 3.2 节与图 2）。

**环境与交互。** 任务在容器化 Ubuntu/Linux 桌面 VM 中运行；VM 从冻结 qcow2 snapshot 恢复，并在 episode 后回滚。task-local network、输出限制与 wall-clock 限制约束执行。host runtime 提供 CLI、文件、代码和浏览器能力，PyAutoGUI 支撑的插件负责 GUI 感知与动作。论文描述一个截图 primitive 和九个 actuation primitives；当前代码则暴露带 batched aliases 和自动截图持久化的 `__computer__` 工具，因此精确工具枚举对版本敏感（论文第 4.1 节；官方 architecture 文档与 GUI plugin 实现）。

**Episode 归档与判断。** harness 记录任务和状态、截图与 shell/tool observation、GUI 及 CLI/代码/文件/浏览器动作、完整 `chat.jsonl`、交付物、日志和终止状态。被评测智能体与隐藏 anchors 隔离。运行结束后，隔离的 OpenClaw judge 主动重新获取轨迹和环境证据，对 requirement clauses 与八个维度评分，检查九类 shortcut pattern，并输出 hack 判断和 scalar score。某个已编目捷径若置信度至少为 0.85 且有逐字轨迹证据，就把分数置零；否则终分为 `min(mean_dimension_score, deliverable_correctness)`（论文公式 1；附录 B.2-B.5）。

**评测协议与输出。** 一个完整 condition 覆盖全部 114 个任务。fixed-runtime sweep 通过 OpenClaw 比较模型 API；harness sweep 则把强模型 API 分别接入 OpenClaw、Codex CLI、Claude Code 和 Hermes。输出记录支持 PassRate、score、interface ablation 和 failure coding。论文 v3 把 PassRate 阈值定义为 `τ = 0.8`，而当前 `docs/REPRODUCE.md` 写为至少 0.5。论文 v3 附录 B.1 指定固定 judge 为 GPT-5.5，但同一份当前复现文档称论文使用 Claude Opus 4.7；当前 setup 文档又描述 GPT-5.5 default。两处冲突都必须保留可见。

**复现 pin 与用途。** 官方复现文档把论文数据固定到 Hugging Face revision `cd887bf5ee0e70faa4b250f2cd192bcc1de164ea`，把 VM 固定到 SHA-256 `3c1caf41cb75b8482a30d1a251545393aee8175375ab405e0d6870f8a07fa3f8`。整理时观察到的当前 dataset main 为 `fcb478b0bdee19a7f01c1d3c2f648e3ed91abafa`；pin 之后的历史看起来只改动 README、项目与 arXiv 元数据，但复现论文仍应使用官方 pin。未核实到把论文表格、prompt、runtime 与 judge model 绑定起来的 GitHub commit。该方法仅用于 evaluation：论文没有报告在 WeaveBench 上进行 SFT、RL、preference 或 reward-model training。
