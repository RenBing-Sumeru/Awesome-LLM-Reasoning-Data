benchmark 覆盖 Bluecoins、Calendar、Cantook、Clock、Contacts、Maps.me、PiMusic、Settings 与 Zoom，共 138 个任务，其中 93 个 operation task、45 个 query task（论文 §3.2.1；Appendix A/Table 4）。正式运行从目标 app 内部开始，采用 25-step 上限、greedy decoding 和 3 秒 device interval（论文 §5.1）。因此结论范围是 in-app task completion，而不是从启动 app 开始的一般手机操作。

Table 1 报告，instruction tuning 使 3 个 LLM 的平均 success rate 从 4.59% 提升到 21.50%，使 3 个 VLM 从 1.93% 提升到 13.28%。各模型 SR 分别为 Llama-3.1-8B 2.17→23.91、Qwen2-7B 4.35→19.57、GLM-4-9B 7.25→21.01、CogVLM2 0.72→11.59、Llama-3.2-11B-Vision 1.45→10.14、Qwen2-VL-7B 3.62→18.12（论文 Table 1，第 8 页）。这些是作者报告的 benchmark result，并非对每条发布 trace 都正确、获得许可、无重叠或可复用的独立证据。

作者报告，使用约 500 条 positive/negative trajectory 训练的 reward model 具有超过 98% 的 completion-classification accuracy（Appendix C.3）。由于 model identity、evaluation split 与 size、class balance、calibration、false-positive/negative analysis 和 checkpoint 均未披露，该数字只能支持论文描述的 collection filter，不能证明 verifier 的外部可靠性。

Figure 5 显示，SoM 在 Pixel 3a 与 Pixel Fold 上的表现低于常见尺寸的 Pixel 7/8 Pro，说明 viewport 与 UI geometry 会实质影响结果。论文还报告 hard-coded task evaluator、XML quality 波动、Android-only 范围，以及固定 wait time 可能不适合所有 device。该 Card 未独立 replay 实验，data 与 environment bundle 也未完成 hash verification。
