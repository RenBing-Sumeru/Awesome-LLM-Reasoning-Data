TRAJECT-Bench 于 2025 年 10 月首次以 arXiv:2510.04550 公开，并作为 ICLR 2026 conference paper 发表；本卡片采用 ICLR 官方 poster、OpenReview 记录、arXiv 全文及附录、作者维护的 GitHub 仓库与官方 Hugging Face dataset 作为一手来源。entry 年份遵循已核验的正式 venue。accepted metadata 仍为 `L3_summary_ready`：双语正文提供 L4 深度的阅读材料，但不会把尚未解决的发布证据转化为更高 curation 决策。

论文研究如何评测必须选择、填写参数并协调多个工具的 agent，而不只是调用单个 API 或生成最终答案。既有工具使用分数可能掩盖模型是否选对工具、参数是否正确、是否遵守依赖关系，以及最终回答是否与执行一致。TRAJECT-Bench 因此直接评测轨迹，并同时覆盖彼此独立的 parallel call 与带依赖关系的 sequential call（论文第 1–4 节）。

一条托管 benchmark record 包含自然语言 `query`、参考 `tool_list`、`trajectory_type`、`final_answer`、`task_name`、`task_description` 与 `tool_count`。参考调用记录 tool identity 与 description、required/optional parameter 的名称和值、parent/API/domain metadata；sequential 情况还包含 output-to-input binding 或 placeholder。action space 是覆盖 travel、mapping、finance、weather、e-commerce、news/media、gaming、email、education 与 music 的 1,228 个 RapidAPI 派生工具目录。因此它属于 `environment_agent_trajectory_data`：tool schema、action、dependency、live observation 与 final answer 共同构成评测面。

收录边界必须保持狭窄。TRAJECT-Bench 是 benchmark、data release、construction recipe 与 agent-environment artifact，论文实际用途是 evaluation 和 failure diagnosis。它不构成 SFT、distillation、preference optimization、reward-model training、RLVR、process supervision 或 agent training 的证据。参考调用提供 state/action-level target 与 trajectory-level score，但没有 step reward 或 token-level process label。由于公开划分只有 `test`、API 可变且发布缺少不可变 replay manifest，本卡片将其限定为仅供 evaluation/audit。

发布中的核心矛盾必须保留。第 3.2 节声称共有 5,670 个 query，而 Appendix Table 9 列出 2,000 个 simple parallel、2,000 个 hard parallel 与 1,870 个 sequential item，合计 5,870。当前 Hugging Face raw tree 缺少 sequential Email；Viewer 还缺少 parallel Mapping，且仅列出 28 个 configuration。这些事实不妨碍它用于研究 trajectory-aware evaluation，却阻止把当前 artifact 无条件称为完整且数量确定的 canonical corpus。
