可重建的构造管线如下：

1. **汇集来源任务。** 从 MATH 7.5K、DeepScaleR 40K、BigMath 251K 与 KodCode 40K 开始，合计约 339K 条记录。对 BigMath，仅保留报告 solve rate 低于 0.3 的问题。精确 source revision、record ID、deduplication 与逐来源 license 没有进入最终 schema。
2. **统一 Code CoT。** 对每个来源解答，以 temperature 0.6 调用一次 Qwen2.5-72B-Instruct，生成标准化可执行 Python。运行程序，并在存在 expected answer 时比较输出，最终得到 146K 个已验证 seed：122K math 与 24K code/algorithmic record。论文还在扩展对比中使用 109K 子集；Seed109K 与 146K pool 的逐行关系未发布。
3. **训练并采样 CodeGen。** 仅使用代码、不给原始问题，对 Qwen2.5-Coder-7B 做 fine-tuning。推理时 temperature 为 0.9，maximum length 为 1024。管线生成约 5.3M 个 candidate program；每个 seed 的采样分配、random seed、retry policy 与完整 training manifest 均为 unknown。
4. **过滤采样程序。** 拒绝 syntax/runtime failure 与执行超过 10 秒的程序；要求至少 6 行非注释代码，并用 AST analysis 确认 input dictionary 中每个变量都参与程序；在存在 ground truth 时做 exact output agreement。约 4.6M 个 candidate 通过，对应约 86.8% 的阶段接受率；由于输入与保留数均为四舍五入值，该比例并非精确统计。
5. **反向构造指令。** 将每个存活 code sample 与代表性 input-output example 交给 Qwen3-8B，关闭 thinking，设置 temperature 0.7、top-p 0.8、top-k 20、min-p 0，生成自然语言问题。随后在独立调用／配置阶段，为新问题生成 language CoT。
6. **执行最终检查。** 抽取 language final answer，并要求与 code execution result 一致。再让 Qwen3-32B 对 problem solvability、answer correctness 与 code/language-CoT consistency 回答二元问题，只保留接受的 pair。约 1.3M 条通过，当前文件精确包含 1,348,799 行。相对四舍五入的 4.6M 个 reversal input，最终保留率约 29.3%；相对 5.3M 个 sampled program，约为 25.4%。
7. **打包与训练。** 在单一 JSONL train split 中发布 `instruction`、`output`、`answer` 与 `code`。下游 evidence 使用 LLaMA-Factory，对 DeepSeekMath-7B、Qwen2.5-Math-7B 与 LLaMA3-8B 训练 3 个 epoch，采用 AdamW、learning rate `5e-6`、batch size 128、cosine decay、warm-up ratio 0.03、cutoff 4096 与 weight decay 0.1；zero-shot evaluation 使用 greedy decoding，maximum generation length 为 2048。

Table 5 报告在单台 8 张 A100 的机器上构造数据：Code-CoT unification 2 小时、scaling 8 小时、question reversal 5 小时、answer generation 40 小时，总计 55 小时。论文没有报告 token throughput、energy、失败运行成本、model-serving stack，也没有明确 judge 时间是否另行计算。

官方 repository 只提供部分复现表面。README 固定 LLaMA-Factory v0.9.1，并包含 execution/input-output extraction、answer filtering、CodeGen/downstream training script 与两套 evaluation toolkit；但没有发布完整 source conversion、5.3M sampling、Qwen3 reversal、最终 Qwen3-32B judging、rejection logging 或 release assembly pipeline。当前 CodeGen script 使用 1 个 epoch、learning rate `5e-6`、cutoff 2048；下游 `scripts/sft.sh` 使用 3 个 epoch、`5e-6` 与 cutoff 4096。这些脚本是当前仓库证据，不应被当成每个论文实验的 immutable manifest。
