**输入与预处理。** Countdown 提供算术表达式训练任务和官方测试集。DAPO-Math 提供训练问题；论文人工划分出 1,024 条 validation set，MATH-500、AMC-2023 和 Olympiad-Bench 则用于外部评估。部分原始答案不是整数的数学问题，通过 few-shot Gemini-2.5-Pro 提示被改写为整数答案任务。转换输入、输出、被拒绝的改写和验证日志均未发布。公开数据由 `countdown-base/train.parquet`、`countdown-base/test.parquet`、`math-base/train.parquet` 和 `math-base/test.parquet` 组成；精确来源快照、逐文件行数、去重和重叠控制均为 unknown。

**策略与分组预算。** 主要实验以 Qwen2.5-3B Base 初始化，进行 500 步在线 RL。每个提示请求 \(k=8\) 个回答。论文报告的训练采样参数为 temperature 1.0、top-k \(-1\)、top-p 1.0；评估参数为 temperature 0.6、top-k 20、top-p 0.95。Countdown 的最大回答长度为 1,024 token，数学任务为 8,192 token。额外的泛化实验使用 Qwen2.5-7B 和 Qwen3-1.7B-Base。

**分支。** 对每条活跃序列，最高概率 token 延续父分支。非首选 token 只有在其概率超过 \(\tau_{\mathrm{abs}}\)，且与首选候选的概率差低于 \(\tau_{\mathrm{rel}}\) 时，才可在目标树宽范围内产生子分支。论文主配置报告 \(\tau_{\mathrm{abs}}=0.25\)、\(\tau_{\mathrm{rel}}=0.15\)。公开脚本还把每个 token 位置纳入考虑的分支候选上限设为两个。

**前瞻与剪枝。** 新出生的分支在 20、30 和 50 token 的窗口中继续模拟。论文用归一化 token-ID 编辑距离形式化父子分支差异，并报告阈值 \(\tau_{\mathrm{ed}}=0.4\)；持续过于相似的分支会连同其后代一起删除。因此，方法依据未来轨迹证据而不是单个分支 token 判断是否继续分配 rollout 预算。随机分支、取消或随机化剪枝、token-level 前瞻是论文考察的较弱替代方案。

**完成与混合。** 达到目标宽度或受控树阶段结束后，普通随机解码完成各序列。剪枝可能使存活分支少于八条；`fill_return_sequences` 可复制存活序列以满足所需分组大小，因此返回八行不等于得到八条不同路径。训练混合 LATR 组与标准随机组，以减轻 train–test mismatch。论文规定 LATR 占比按指数衰减，Countdown 的 \(\gamma=0.985\)，数学任务的 \(\gamma=0.995\)。

**验证与更新。** Countdown 提取任务所规定答案标签内的表达式，检查格式、确认每个给定数字恰好使用一次、执行表达式并与目标比较；仅格式正确得 0.1，完全正确得 1.0。数学任务提取 `Answer:` 结果，并按整数答案协议进行二值精确正确性判断。这些终点标量奖励进入组内相对的 GRPO 或 DAPO 更新，不生成步骤级标签。实验使用 VeRL 0.5.0、AdamW、恒定学习率 \(10^{-6}\)、全局 batch/minibatch 256 和八张 NVIDIA H200；DAPO 还使用分组过滤与 384 的生成 batch。

**公开脚本漂移。** Countdown 脚本与论文的 0.25/0.15/0.4 阈值一致；公开数学脚本却把绝对阈值设为 0.15、相对阈值设为 0.25，关闭编辑距离剪枝，并开启阈值 0.2 的 suffix-match 和阈值 0.5 的 ROUGE-L。脚本还使用按任务定义的分段 `mix_ratio_schedule` 字典，而不是论文的指数调度。严格复现必须固定论文/arXiv v3、Git commit `2adb0edf24cc9a9342ac021892897adcec1a2738`、HF commit `082e3b599960ef8341d1f00be8ae474d994345cf`、VeRL 0.5.0、任务数据快照、奖励提取、全部树参数、调度、随机种子和硬件；同时必须明确报告采用论文配置还是公开数学脚本配置。

**输出与用途。** 运行时输出是以提示为条件、包含存活回答及终点奖励的 rollout 组，并立即用于 RLVR。原始 token 分布、分支父节点与出生步、前瞻片段、保留或剪枝决定、被拒绝和已完成路径、奖励判定、分组成员关系及策略更新记录均未发布。HF 文件可提供复现实验所需的 prompt/reward 一侧，却无法重放或审计论文的在线树生成过程。
