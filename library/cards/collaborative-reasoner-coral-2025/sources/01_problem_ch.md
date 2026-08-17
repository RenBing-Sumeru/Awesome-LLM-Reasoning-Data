权威论文是 **Collaborative Reasoner: Self-Improving Social Agents with Synthetic Conversations**，发表于 **NeurIPS 2025 Main Conference Track**。它处理 single-turn reasoning training 与 collaborative problem solving 之间的差距：agent 不仅要解题，还要检查 partner reasoning、质疑错误、在正确时说服对方、在错误时修正，并通过 free-form conversation 收敛到 shared answer。

Coral 把 task 表示为由两个交替 generalist agents 讨论的问题与 gold answer。在主要 self-play setting 中，双方都是同一个 instruction-tuned model 的实例，使用同一 collaboration prompt。代码把它们称为 `teacher` 和 `student`，但这些名称只区分哪一方开始或先响应，并不表示 expert teacher 与 novice student。

Raw training object 比最终 preference row 更丰富：

| 层级 | 信息 |
|---|---|
| Task | Problem、gold answer、task type、prepared split |
| Conversation state | System prompt、完整 alternating prefix、active agent |
| Search | 从同一 prefix 采样五个 candidate next turns，随机选择一个继续 |
| Rollout | 每个 problem 独立采样五棵 conversation trees，最多 20 turns |
| Feedback | LLM-extracted belief 或 `not sure yet`，以及按 task 归一化的 gold match |
| Output | SFT 的 correct next turn，或 DPO 的 same-prefix correct/incorrect siblings |

每个 candidate turn 之后，另一个单独 prompt 驱动的 same-family model 会抽取 agent 当前 final-answer belief。Task-specific matcher 再将该 belief 与 gold 比较。这是 **mixed judge-plus-programmatic contract**：belief extraction 依赖判断且可能失败；一旦获得有效 belief，gold comparison 是 rule-based。标签属于 answer-level，不是 process supervision。一个产生有用进展但没有明确给出正确 final belief 的 turn，会和完全错误的 turn 一样被标为 negative。

论文报告的数据规模很大，但并未公开。Table 9 报告 Llama-3.1-8B 有 **379.6K accepted training turns**，Llama-3.1-70B 有 **311.3K**。这些是作者报告的 accepted-turn counts，不是可下载 row counts。官方 artifacts 公开 generation、filtering、evaluation、training 与 Matrix infrastructure 代码，却没有 paper-run conversations、SFT rows、DPO pairs、rejected turns、beliefs、failures、prepared splits、logs 或 trained Coral checkpoints。

本 Card 归入 **Data Construction & Open Release Recipes**，因为主要贡献是具体的 conversation-sampling、belief-labeling、preference-pairing 与 training pipeline。它不应被描述为开放 synthetic-conversation dataset 或开放 model release。
