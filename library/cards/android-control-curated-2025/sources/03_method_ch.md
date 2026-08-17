构造从 AndroidControl human demonstration 开始；上游官方 publication 报告 15,283 条 demonstration、14,548 个 unique task 和 833 个 app。当前发布使用的 AndroidControl 精确 revision 未披露。

Purification pipeline 如下：

1. 把 exact-point grounding 改为 intent-aligned box scoring：预测点落在包含标注 ground-truth point 的 UI element bounding box 内即接受（论文 §2.1.1，Eq. 4–5，p. 3）。
2. 在 task 上运行 Qwen3-VL-235B、InfiGUI-R1 与 GUI-R1，并把 consensus failure 送入修订阶段（论文 §2.1.2，Eq. 6，p. 3）。运行次数、prompt 和 decoding 设置均为 unknown。
3. 让未披露的 LLM reviewer 输出 deficiency category、task revision、ground-truth revision 与 rationale；human expert 核验 proposal 后再应用接受的修订（论文 Eq. 7，pp. 3–4；Algorithm 1，p. 5）。panel size、抽样比例、agreement 与 acceptance threshold 均为 unknown。
4. 发布 high/low point、box 视图及 `android_control_high_task-improved.json`。后者可以在静态 screenshot、history 与 action target 旁保留 `revised_task`、`revised_memory`、`candidate_predictions`、`candidate_actions`、`candidate_review_result`、`org_gt_action` 和 `gpt_corrected`（官方数据集 JSON）。

评测时，模型文本从 XML 风格的 `answer` 和 `action` tag 解析；代码会归一化 action name，对 click/long-press 使用 predicted-box-center containment 或 point-distance threshold，对 input text 以 0.5 的 substring/token-F1 条件判定，并允许 improved task 匹配任一保留 candidate action。评测脚本使用 vLLM，temperature 0.0、top-p 0.001、repetition penalty 1.05、maximum tokens 512；这些是评测设置，不能视为 GRPO rollout 设置（`src/eval/utils.py`；`src/inference/vllm_inference_Qwen2_5_VL_7B_SFT_batch.py`）。

Magma-R1 post-training 选择 2,400 条 curated sample，使用带 PPO-style clipped ratio 与组内 reward normalization 的 GRPO；grounding reward 是 predicted-box center 到 ground-truth point 距离的连续 Gaussian reward，并通过 action-stratified sampling 增加罕见 type/scroll action（论文 §2.2，Eq. 1–3，p. 4；Algorithm 1，p. 5；§3.1，p. 5）。group size、Gaussian sigma、clip epsilon、optimizer、learning rate、epoch、目标 action proportion、random seed 与 2.4K ID 均为 unknown；官方仓库中也未发现 GRPO trainer/config。

复现必须固定五个 JSON 的 hash 与 screenshot archive、GitHub commit、dataset revision、scorer 与 prompt code、model revision 和精确 checkpoint；如声称 terminal success，还必须补齐 Easy/Hard mapping、训练/评测 overlap audit 与 live environment。README 的评测命令/路径和发布的 entry point 不能构成完整 Tables 1–2 reproduction workflow；当前 model repository 还混合了论文时期的 3B root config 与较新的 4B material。
