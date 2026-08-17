构造从APIGen-MT对话开始。GPT-4.1推导用户specification和ground-truth tool call；在零售任务中，合成指令与难化改写版本各以50%概率选用。最终训练集包含约3,000个零售任务。mixed-task RL还选用中等难度、整数答案的DeepScaleR题目；作者此前比较过GSM8K、DeepScaleR与DAPO-MATH-17K。精确任务ID、各构造阶段保留数量和DeepScaleR样本数均为unknown（论文§3.1、§4.1；附录“Training Data”）。

sandbox以tau-bench seed data为起点，使用包含`Products`、`Orders`和`Users`的SQLite backend。REST endpoint注册为MCP tool。GPT-4 ReAct user simulator生成文本轮次；语音episode中，SeedTTS把这些回复转换为audio。agent在推理/tool-call序列与用户或工具observation之间交替，直到出现`##STOP##`或达到30轮上限（论文§2.1、Fig. 2；§2.2）。

规则式terminal verifier检查成功的写操作，并将tool-call参数与ground-truth annotation比较。完全匹配时`R(tau)=1`，任何不匹配均为0。随后TARL让GPT-4.1依据policy、任务指令、ground-truth call和完整带标签对话为每轮评分。terminal success使用10×权重，唯一的重大`-1`使用5×权重，其余turn score按`1/T`归一化，使正向process贡献上限为5。论文把总分划为perfect 15、good 10–15、good-attempt 0–5和failed -5–0（论文§3.2；附录judge prompt）。

文本policy为Qwen3-8B，文本训练在零售任务与DeepScaleR数学任务之间交替。语音policy为Qwen2.5-Omni-7B；它不先做SFT，而是在指令更明确的简化任务上进行30步GRPO warm-up，然后在数学、纯文本零售及语音用户零售batch间交替。batch size为128，由32个任务、每个任务4条rollout组成。报告设置还包括temperature 0.7、top-p 0.95、prompt length 4096、response length 1024、actor learning rate `1e-6`、critic learning rate `1e-5`，训练通常在200–300步后plateau（论文§4.1、§4.3；附录“Training Details”，表`tab:hyperparameters`）。

训练使用`verl`与`RL-Factory`，并比较GRPO、PPO和RLOO。把turn reward直接放到每轮最后一个token会使PPO不稳定；最佳版本将TARL求和为trajectory reward，在policy token上分配，并mask environment token。复现必须固定SQLite seed/database状态、REST与MCP schema、GPT-4/GPT-4.1和SeedTTS版本、prompt、split manifest、随机seed与rollout保留规则。当前没有链接任何对应的论文专属实现artifact（论文§2.2、§3.2、§5.1；`paper.tex`中被注释的artifact placeholder）。
