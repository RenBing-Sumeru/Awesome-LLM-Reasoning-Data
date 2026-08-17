表 2 报告了两阶段 purification 对 Hard subset 的影响。Qwen3-VL-235B 的 success rate 从原始 AndroidControl 的 61.2，提高到 Curated-Box 的 71.7，再到完整 curated benchmark 的 76.5；Magma-R1 在同一序列中从 57.6 提高到 69.1 和 75.3（论文 Table 2，p. 6）。这些差值说明 metric 和 label 选择会改变报告的评测结果，但不能单独证明每条修订记录都具有高质量。

在作者的完整 curated setting 下，表 1 报告 Magma-R1 在 Hard 上的 type accuracy / grounding accuracy / success rate 为 84.2 / 84.8 / 75.3；Qwen3-VL-235B 为 88.2 / 83.6 / 76.5。Easy 上，Magma-R1 的 success rate 为 88.0，Infi-GUI-R1 为 87.2（论文 Table 1，p. 6）。这些均为作者报告结果，本卡未进行独立复现。

论文把受检 high-risk case 中超过 70% 归因于三类缺陷：unclear task 24.13%、multiple valid action 8.12%、wrong ground truth 37.63%（论文 §3.4.1 与 Figure 4，pp. 7–8）。抽样 denominator、panel size、逐条 decision 与 agreement statistics 未单独发布，因此这些比例只刻画论文报告的 audit，不能认证完整数据集。

论文报告使用 2,400 条选中 sample 对 3B Magma-R1 post-train，消耗 60 H20 GPU-hours，约 60 美元（abstract；§3.1，p. 5）。官方 release audit 得到五种 JSON 视图：high-box 8,435 条、high-point 7,708 条、low-box 8,377 条、low-point 7,708 条、task-improved 8,377 条。在 task-improved 文件中，527 条包含 revised task，573 条保留非空 candidate action、合计 1,233 个 alternative，86 条保留原始与 GPT-corrected ground-truth action（官方 HF dataset revision `62aeecdcafa4097d340c5a4389690a5f14e938ed`；文件 hash 见 evidence ledger）。各视图记录数不相等且缺少 split manifest，这些发布事实必须保留，不能静默归一化。
