many-shot 数据源是 MATH training set。few-shot mixture 从 27 个 BBH 类别各取四例，共 108 例，另含四例 Game of 24 和四例 TheoremQA；微调时 few-shot 样本被八倍上采样。评估使用 MATH test、BBH/Game of 24/TheoremQA 的 test 或 hold-out 数据，以及 OOD 的 DeepMind Math、MMLU-Pro、StrategyQA 和 DROP。论文没有披露去污染或语义重叠检查流程。

搜索分别以 GPT-4o-mini、Llama-3-70B-Instruct 和 Llama-3-8B-Instruct 作为 task-solving model 执行。按照论文配置，搜索轮数为 \(K=2\)，每轮对每条有效候选执行 \(N_{\text{eval}}=4\) 次，保留集合大小依次为 \(N_1=8\) 与 \(N_2=3\)，温度为 \(T=0.4\)。因此，一条完整搜索样本在 GPT-4o 解释调用和可变 Self-Verification 重试之前，需要 \(12 \times 4 + 8 \times 4 = 80\) 次候选轨迹执行。Self-Verification 的最大重试次数未披露。

每次执行产生推理对话与抽取答案。真值检查给出二值成功信号；算法累计每条轨迹的成功率，逐轮保留更小的高分集合，并在并列时偏向更短轨迹。论文会排除因所有候选路径都成功或都失败而被视为信息量不足的样本，但没有发布具体的 easy/hard 阈值、被拒绝问题数量或保留清单。搜索为 GPT-4o-mini、Llama-3-70B-Instruct 和 Llama-3-8B-Instruct 分别得到 1,722、1,624 与 2,140 条 planner 样本，总计 5,486 条。这些是按 solver 统计的入选样本数，不是原始 trial 行数或数据 split 数量。

GPT-4o 为所选路径生成解释。external planner 使用 Llama-3-8B-Instruct，训练目标是解释和选中轨迹，solver 则是冻结的 GPT-4o-mini 或 Llama-3-70B-Instruct。internalized 版本让 Llama-3-8B-Instruct 同时承担 planner 与 solver，并以解释、轨迹、solver 推理过程和答案作为训练目标。论文报告采用 LitGPT 全参数 SFT，学习率为 \(2\times10^{-5}\)，global batch size 为 64，最大序列长度为 4096，训练四个 epochs。

公开 artifact 是顶层 JSON 列表文件 `math_collected_trajectory.json`，大小为 4,800,046,236 字节。已检查的记录包含 `meta info`，其中有来源 ID、问题、难度、类型、参考解、答案和 task-solving LLM；还包含 `trial result`，其中有 trial ID、四槽位轨迹、完整 role/content 推理对话、`pred_ans` 和二值 `score`。已检查字节范围中同时出现成功与失败 trial。这个单文件发布没有记录精确行数或 train/validation/test partitions，dataset viewer 也无法抽取 schema。

当前代码与论文参数并不一致。仓库在非 debug 模式下使用两次 evaluation，默认温度为 0.8，并执行 probing 加三个 exploration stages；训练配置则使用 batch size 32 和两个 epochs。此外，当前 `run_modules` 逻辑看起来会把非空结果对象计入累积搜索分数，而二值正确性另行保存。这些观察只描述已检查的代码版本，不能反推生成论文结果的未公开运行也采用了相同逻辑。
