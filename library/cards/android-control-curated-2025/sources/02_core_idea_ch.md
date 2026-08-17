AndroidControl-Curated 组合了两种 benchmark purification：一是 intent-aligned grounding，只要预测点落入相应 UI element 的 bounding box 就判为正确；二是修订三个指定 expert agent 全部失败案例中的 task 或 label（论文 §2.1.1–2.1.2，p. 3）。

修订管线使用 Qwen3-VL-235B、InfiGUI-R1 和 GUI-R1 进行 consensus-failure 筛选。随后，一个未披露的 LLM reviewer 对缺陷分类，提出 task revision 和/或 ground-truth revision，并给出 rationale；human expert 在接受修订进入 curated benchmark 前核验 proposal（论文 Eq. 6–7 与 Algorithm 1，pp. 3–5）。论文没有披露 reviewer 的模型/版本、prompt 或 decoding，也没有披露每个 expert 的运行次数及完整人工 rubric 与一致性记录。

反馈契约分为两层。论文中，grounding accuracy 使用 box containment，而 success rate 被描述为所有 step 正确且到达预期 final screen（论文 §3.1，p. 5）。发布的静态 scorer 中，`Step_Success_Rate` 对 click/long-press 要求 action type 与 grounding 同时正确，对其他 action 只检查 type；input text 使用 substring/token-F1 逻辑，improved task 可以匹配任一保留 candidate action（`src/eval/utils.py`；`src/eval/evaluate_actions_androidControl_vllm.py`，lines 205–273）。该 scorer 能观察解析后的 action 和静态标签，却不能观察 live Android terminal state。

最接近的参照是上游 AndroidControl，它提供 human demonstration lineage 与 point-based evaluation。本文的具体变化，是把 evaluator geometry、alternative valid action 及修订后的 task/ground-truth 字段纳入可审计 data object。Magma-R1 随后使用 2,400 条选中 curated step 进行 GRPO post-training，但 selection manifest 与训练/评测隔离均为 unknown（论文 abstract；§3.1，p. 5）。
