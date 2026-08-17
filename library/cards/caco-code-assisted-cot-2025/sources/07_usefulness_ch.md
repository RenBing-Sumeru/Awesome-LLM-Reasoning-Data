对 `data_construction_open_release_recipes` 而言，Caco 展示了如何在渲染为自然语言前，用可执行中间表示扩展 reasoning pattern。复现实验可以直接比较三类设计：prompt-conditioned rewriting 与 unconditional program sampling、rule/execution filter 与 model-only filtering、从 code reversal 与直接 teacher question generation。

公开记录可支持 supervised fine-tuning 与 synthetic-distillation 研究。`instruction`/`output` 是论文使用的 SFT pair；`answer` 支持最终答案抽取与一致性检查；`code` 支持 code-language alignment analysis、程序聚类、受控 re-execution 与替代 renderer 实验。复用者应保留全部四个字段，并增加 immutable row ID，而不是立刻丢弃 executable provenance。

该 release 也适用于 verifier research，但不能把其 label 当作 ground truth。审计者可以抽样进行独立数学复核，比较 program execution 与 extracted answer，测试 representative input 是否足以确定生成 instruction，测量 Qwen3 judge false accept，并按 source family、program structure 或 reversal complexity 对错误分层。可见的矛盾 geometry row 说明此类审计是现实需要，而非纯理论担忧。

对 construction study，报告的 funnel 提供了有用 operating point：约 339K 条来源、146K 个 verified seed program、5.3M 个 sample、4.6M 个 execution/structure survivor，以及 1,348,799 个 release pair；报告成本为 8 张 A100 上 55 小时。复现者应记录精确数量而非四舍五入总数，并保留每个 rejection reason、execution trace、prompt/model revision、random seed 与 parent link；还应使用明确限制 filesystem/network/resource 的 sandbox。

复用等级：经过独立过滤后，可用于 `sft`、synthetic `distillation`、data-scaling study、program-language consistency research 与 verifier/audit benchmark。逐行 source/license 重建与 evaluation-set decontamination 完成前，只能条件复用。由于 pipeline stage 与 manifest 缺失，完整端到端再生成仍受阻。公开 evidence 不支持 RLVR；若要派生 RL reward，必须另行定义并独立验证新的契约。
