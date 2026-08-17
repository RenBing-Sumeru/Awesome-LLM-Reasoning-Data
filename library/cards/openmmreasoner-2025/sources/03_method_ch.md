该构造过程可拆成 5 个可审计阶段。

1. **来源与教师研究。** SFT 流程从 LLaVA-CoT、OpenVLThinker 和 WeMath2.0 的约 10.3 万个问答对开始。候选教师轨迹经过格式检查与最终答案验证。论文报告 Qwen3-VL-235B-Instruct 在所测教师中最好,单次采样阶段保留约 5.9 万条轨迹;但精确 endpoint 版本、生成 seed 和逐条验证 ledger 均为 unknown。
2. **SFT 扩展与混合。** 选定教师为每题生成最多 8 个经验证答案,得到约 58.3 万条通用推理轨迹。长度过滤和难度过滤在实验中都降低了所报告的下游平均结果,因此最终配方不对这批通用数据采用二者。再加入 MMR1 图像数学与 MiroMind-M1 文本数学数据,形成 87.4 万行。LMMs-Engine 对 Qwen2.5-VL-7B-Instruct 进行 online packing SFT,packing length 为 61,440 token,使用 AdamW、cosine scheduler、5e-5 学习率和论文报告的 4,300 个训练 step。
3. **RL prompt 准备。** 论文列出的来源族包括 MMEureka、ViRL、TQA、We-Math、PuzzleVQA、AlgoPuzzleVQA 和 ThinkLiteVL。流程抽取并验证最终答案,再用图像与文本 embedding 去除相似问题。公开去重实现执行跨来源近邻移除,默认阈值为 0.99,但论文运行的精确阈值与被移除 ID 均为 unknown。
4. **在线生成与奖励。** 最终公开示例从 `OpenMMReasoner-ColdStart` 出发,在温度 1.0 下为每个 prompt 采样 16 条回答,prompt 上限为 4,096 token,回答上限为 28,696 token,全局 batch size 为 128。正确性先经过答案抽取、选择题或宽松精确匹配以及 `math_verify`;若这些检查失败且启用学习式裁判,代码才请求独立部署的 judge。格式遵循权重为 0.1,答案正确性权重为 0.9。16 条回答文本、抽取答案、裁判调用和逐回答奖励都是训练时临时对象,不在 RL-74K 中。
5. **GSPO 优化与评估。** verl 与 vLLM 提供在线环境;选定配方使用 GSPO、论文报告的 1,232 个 RL step、1e-6 恒定学习率、0.1 weight decay 和 overlength 策略。论文比较 GSPO、GRPO 与 DAPO,并在最终配置中使用 16 条 rollout。评估阶段另行采用先规则、后学习式裁判的答案流程;其温度和生成预算不能与 RL 采样设置混为一谈。

该仓库是可运行脚手架,而不是不可变实验包。路径与服务地址仍需编辑,没有 GitHub release 固定论文状态,实时 Hub schema 也没有与启动脚本列出的 8 个训练文件完全对应。因此,复现时必须记录 commit、数据集版本、模型版本、judge endpoint、全部环境变量以及生成的 rollout 日志。
