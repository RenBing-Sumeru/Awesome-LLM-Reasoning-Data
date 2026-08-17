发布说明将 OLMo-Mix-1124 识别为一个 3.9T-token 预训练混合，来源包括 DCLM、Dolma、StarCoder 和 Proof Pile II。Dolmino 中训练被报告为 843B token，由经质量过滤并重新采样的 OLMo-Mix 文档、OLMo-Mix 未含的教育/数学/学术材料以及合成和人工生成的指令数据组成。已检查材料没有建立 32B 运行的记录级来源到阶段分配。

在后训练中，32B 会过滤提到合成生成日期截止点的 SFT instruction 和 chosen preference response。Persona MATH 和 Grade School Math 只保留五次 completion 中达到多数票的 prompt/completion 组。产生模型、prompt、采样设置、除此规则外的精确阈值以及保留/拒绝 trace 映射均为 unknown。

Ai2 表示其使用高质量 instruction 做 SFT、on-policy preference data 做 DPO，并对 GSM8K、IFEval 和 MATH prompt 使用 GRPO RLVR。已发布 RLVR mix 中的 ground-truth 与 constraint 字段支持一个答案/约束数据对象，但已检查发布材料没有建立 answer parser、任务 reward、reward 聚合、校准、GRPO rollout、环境/harness 配置或 checkpoint 选择程序。

