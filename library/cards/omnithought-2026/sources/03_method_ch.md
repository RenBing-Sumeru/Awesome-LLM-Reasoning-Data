ACL 论文描述了以下流水线。

1. **收集问题。** 数学来源为 OpenMathReasoning、MathInstruct、DeepMath-103K、NuminaMath-1.5 和 OpenThoughts2-1M；代码来源为 TACO、APPS、OpenThoughts2-1M 和 OpenCodeReasoning；科学来源为 StackExchange Physics、StackExchange Biology、camel-ai/chemistry 和 OpenThoughts2-1M。
2. **去重与重叠筛查。** 针对 AIME24、MATH500、LiveCodeBench V2 和 GPQA-Diamond 使用归一化 Indel 相似度与 10-gram 相似度。阈值、移除数量和决策日志未报告。
3. **生成候选。** DeepSeek-R1、DeepSeek-R1-0528 和 QwQ-32B 为每个问题生成多条 CoT。为减少简单题占比，部分 CoT 少于 3,000 token 的候选被随机移除。教师分配、每题请求数、解码设置、随机种子和重试规则均未知。
4. **分别验证两个结果。** 公开提示要求 judge 独立返回 `reasoning_valid` 与 `solution_valid` 两个布尔值。代码解答通过测试执行；数学和科学结合规则与 LLM 判断。只有最终答案错误才强制移除，因此答案正确但推理无效的轨迹可能保留。论文称每个保留问题至少有两条被接收候选。
5. **标注过程特征。** QwQ-32B 按 0–9 评分 RV 与 CD。最终 RV 为 `round(alpha * L_RV + (1-alpha) * L_norm)`，alpha=0.5，其中 `L_norm` 是对数归一化 token 长度。CD 评估理解并复现该推理方法所需的能力。发布中没有公开原始 judge RV、归一化长度分量、所用 tokenizer 或计算时的语料极值。
6. **面向学生模型选择。** 论文针对每个问题，依据 CD 是否处于目标能力 `mu_CD` 范围内及 CD-RV 间距给候选打分，再对两项归一化，并默认以 beta=0.5 混合。每题可以抽取多条高概率轨迹；公开模型所用的精确选择清单缺失。

论文评估三条复用路径。在匹配的 10K 问题集上，SFT 比较随机、仅 RV、仅 CD 和联合选择。DPO 把 RV 3–5 的轨迹设为 chosen，把同题最大 RV 轨迹设为 rejected；这形成的是冗长度偏好，而非正确性偏好。GRPO 训练 RV/CD reward model，把预测分数归一化到 [0,1]，并与格式奖励、准确性奖励相加；奖励权重和 rollout 生成设置未披露。

附录 D 给出训练 scaffold：研究问题中的 SFT、DPO 和 GRPO 使用 8 张 A800-80GB GPU，强模型的 7B/8B 与 32B SFT 使用 64 张 A800-80GB GPU。论文脚注指向 EasyDistill；当前仓库含 ThoughtX README、简单 RV/CD 过滤脚本和示例训练配置。在提交 `acbe49b5d9b16b3beb874528056e11dfdfac6d1c` 上，该示例面向 1.5B 学生且序列长度为 4K，因此只是部分 scaffold，不是论文构造过程和 7B/32B 运行的冻结复现。
