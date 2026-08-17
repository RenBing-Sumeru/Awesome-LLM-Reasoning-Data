论文与官方 dataset tree 共同支持 release scale。Train 包含 13,750 条成功 trajectory、105,368 个 step；GUI-360-Bench/test 包含 3,439 条 trajectory、26,284 个 step，合计 17,189 条成功 trajectory、131,652 个 step。论文另报 62,170 条失败 trajectory、1,093,525 个 step，官方发布中有独立 `fail/` tree。把报告数相加可得 79,359 条 trajectory 与 1,225,177 个 step；Hugging Face 显示体量约 574 GB。本卡没有下载完整 corpus 并独立复点。

Grounding 方面，Table 7 报告 Qwen2.5-VL-7B 从 35.78% zero-shot 提高到 SFT 后的 82.30%，UI-TARS-1.5-7B 从 62.27% 提高到 82.49%。Action prediction 方面，Tables 9–10 报告 Qwen2.5-VL-7B 的 visual-only step success 从 17.52% 提高到 50.08%，visual+A11y 从 14.18% 提高到 25.78%。后者仍远低于 visual-only SFT，因此 accessibility context 在该 setup 下并非总是有益。

Screen parsing 方面，Table 8 报告 OmniParser-v2 的 overall F1 为 0.408、mean IoU 为 0.735；所列最强 general model o3 的 F1 为 0.128、mean IoU 为 0.578。发布代码在 IoU ≥ 0.5 时进行 greedy one-to-one matching，并计算 text similarity。代码中另有 recall ≥ 0.1 的通用 per-sample `success` flag，它不等于论文的 macro F1/IoU，也不表示 task completion。

EvaAgent 唯一报告的 calibration，是在随机抽取的 100 条 trajectory 上与 human annotator 达到 86% 一致率。论文没有给出人工人数或资质、inter-annotator agreement、confusion matrix、false-positive/false-negative rate 或 adversarial robustness。以上 benchmark 数字均是作者报告的静态结果，没有 uncertainty 或 independent reproduction。它们说明发布的 SFT view 与 scorer 能产生可测变化，却不能认证逐记录 data quality、environment replay 或 RL reward contract。
