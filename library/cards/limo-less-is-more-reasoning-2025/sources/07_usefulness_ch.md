对于 **Data Construction & Open Release Recipes** track，LIMO 适合作为“小最终数据集”的 curation 案例、base-dependence 实验和 release-audit 示例；它不适合作为可直接复现的构造包。

- **有条件的 SFT 复用：** 固定 LIMO-v2 dataset revision `ef8bf143f8cc56ca8634795835b55083a3ae3061` 和 model revision `9510d41a1f5aca4bc86bbb52d63d0ab13da52ab1`，确认 800 行与三个字段，对目标 benchmark 去重，解决上游权利，并且不要用 817-row GitHub/v1 文件替代。
- **Difficulty-filter 研究：** 使用固定模型、prompt、解码设置、answer checker 和 seed，重现四次与 32 次 solve-rate 区间。保留逐尝试结果和 rejected problem，以分析 difficulty calibration 和错误决策。
- **Trace-score 消融：** 把论文 30/20/25/25 词法 proxy 与 length-matched random selection、step verification、answer-only selection、human ranking 和 semantic quality model 比较。发布完整 keyword list 与 score component。
- **隐藏成本核算：** 报告 candidate row 总数、inference token、teacher call、hardware、GPU-hours、wall time、人工检查工作量和接收率，使“800 examples”成为可测的端到端效率主张。
- **Lineage schema：** 为每个保留或拒绝 candidate 附加 source dataset/split/item/revision、source rights、teacher/checkpoint、candidate-group ID、solve count、component score、selection rank、correctness outcome、dedup result 和 rejection reason。
- **Base-dependence baseline：** 在固定 optimizer 和 token budget 时，跨 base family 与模型规模训练相同 trace，区分“已存在的知识”与“demonstration elicitation 的推理”。
- **修复 release：** 替换或明确标注 bundled 817-row file，在 `dataset_info.json` 中注册 800-row v2 dataset，替换示例 dataset placeholder，并发布准确命令和能恢复 global batch 64 的 hardware/world-size manifest。
- **License 审计：** 协调 root MIT 声明、缺失的 root LICENSE、Apache-2.0 training subtree 和 Apache-2.0 HF data/model；把每个上游 contest/exam 来源映射到 attribution 与 redistribution requirement。

复用等级：完成 source-rights、overlap 和逐条质量审查后，可有条件用于 answer-level mathematical SFT；适合作为阅读、受控消融设计和 release audit；在代码、参数、lineage 与 reject 未发布前，不能忠实复现构造 pipeline。它不能直接支持 PRM、preference learning、RLVR replay 或 agent training。
