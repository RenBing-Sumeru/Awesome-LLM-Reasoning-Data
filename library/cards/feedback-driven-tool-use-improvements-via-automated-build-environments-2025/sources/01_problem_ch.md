论文研究的是：当有效监督必须来自可执行环境交互，而不是仅来自静态答案时，如何改进具备工具使用能力的语言模型。其正式发表记录为 **Findings of the Association for Computational Linguistics: ACL 2026**，DOI 为 `10.18653/v1/2026.findings-acl.109`。目录 slug 以 `2025` 结尾，是因为 arXiv:2508.08791 首次提交于 2025 年 8 月 12 日；这一日期不能与正式 venue 年份 2026 混淆。

公开数据的基本单位是本地工具 environment，而不是冻结的 trajectory。每条 raw JSONL row 以一条 user message 开始，并携带序列化的 JSON tool schema、逐条定制的 Python implementation、tool name 到尚未解决的隐藏 subanswer 的映射、`solve_rate`、scenario/source label、split 与最终 reference answer。论文报告 **2,215 个 train environment 和 200 个自建 in-domain test environment**。这些数字是 environment/task definition 的数量，不是采样 training episode、完整 command-observation history 或保留 trajectory file 的数量。

采样时，Qwen2.5 或 Qwen3 policy 把初始 row 扩展为有状态的 `messages` history。tool call 执行本地 Python function，返回的文本或 error string 成为 observation，deterministic check 更新 `unsolved_set` 与 `solve_rate`。sampler 保存 initial state 以及每次 tool-calling response 之后的 state。默认在 policy 生成 no-tool response 或达到 20 turn 时停止，但 terminal no-tool response 本身不会追加到保存结果。official repository 不包含论文运行时生成的 trajectory corpus。

该对象归入 `environment_agent_trajectory_data`，因为 environment 定义了可观察 state、tool action、text observation、progress update、termination 与供 agent RL 使用的 scalar feedback。它并不构成通用 process-supervision corpus 的证据：论文所称 step-level signal 是依据 tool outcome 与字符串匹配得到的 response/state reward，而不是对每个 reasoning step 的 semantic correctness label。

论文与审计过的 repository 足以按 L4 深度说明 environment row、五阶段构造概念、sampler、verifier、reward、optimizer scaffold、evaluation 与 failure boundary。canonical metadata 仍保持 `L3_summary_ready` 和 `partial`：公开内容缺少 paper-run trajectory、端到端五阶段 construction script、准确 checkpoint 与 checkpoint-to-result mapping、不可变 paper tag、完整 replay environment、明确 data license，以及更广泛的 contamination audit。
