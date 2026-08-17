预训练只披露到阶段层面。多格式原始来源依次经过 URL 级过滤与去重、块级裁剪、主题分类、文本抽取、面向 STEM 与代码的领域抽取、启发式过滤、critique 模型评分、混合建模和全局语义去重。报告称基础预训练使用 16T token。随后的 annealing 阶段使用 300B token，来源包括高质量预训练数据、代码、数学、STEM、含长推理轨迹的指令遵循数据和其他合成样本；上下文扩展阶段再分别在 32K 和 256K 长度使用 30B 与 20B token，短上下文与长上下文比例为 3:1。来源名称、混合权重、记录数、时间与权利均为 unknown。

SFT 包含 300 万条推理和非推理样本。数学来自教育资料，并使用生成式奖励模型与 verifier；代码把开源代码转成指令，并经过 critic 过滤与沙箱执行；逻辑混合公开或许可来源、自动合成以及分层的模型或专家验证；科学使用参考答案匹配 verifier；多语言数据通过文档增强、instruction evolution、回译与人工专家构造。其他领域包括创意写作、复杂指令、角色扮演、知识问答、多轮对话、金融、法律、医疗，以及近 1,000 个安全类别。领域占比、精确来源、许可和被接受或拒绝的记录均未发布。

自适应长短推理数据生成会保留 Hunyuan-Base 的正确短回答。失败回答交给 Hunyuan-T1 反复续写，直到出现正确答案；全部失败尝试与正确回答共同构成 teacher target。自适应 RL 采样不同推理深度，通过在线拒绝采样估计难度，并使用长度惩罚，使同样正确的较短轨迹获得更高奖励。候选数、停止上限、正确性 verifier 和解码设置均为 unknown。

deliberation learning 在精选训练 split 上比较多个 Hunyuan 模型，聚合基于 Hunyuan-TurboS 的多维 judge 评分，再由人类专家定义弱点画像并增加针对性 SFT 批次。GRM 训练从多个 Hunyuan-TurboS checkpoint 采样成对回答；人工标注约 20 万对高置信偏好，报告称标注者一致率超过 93%，并交换候选顺序以降低位置偏差。标注规范、采样框、裁决流程与标注对本身均未发布。

General Reward System 包括参考答案条件下的 GRM、可选 GRM-CoT、Answer Consistency Model、可调用工具的 critic、部署在分布式 CPU 集群上的 36 语言沙箱、领域规则和分数融合。报告称构造了超过 80 万条可执行、带单元测试的代码样本；六种主流语言各贡献 10 万条，长尾语言各贡献 1 万条。这些代码样本与 SFT 记录、奖励训练和 RL 提示之间的对应关系没有完整映射。

Stage I GRPO 使用 30 万条推理记录，Code:Mathematics:Logic-and-Science 的比例为 2:2:1。Stage II 使用 16 万条通用 RL 指令，并保留 10% 的 Stage I 推理数据。实现采用 token 级 GRPO、裁剪到 [0,10] 的近似 K3 KL、仅对正 advantage 样本启用的 Best-of-N loss、动态采样、温度 1.0、删除始终成功或失败的提示与零 advantage 样本，以及 group reward adjustment。学习率、group size、完整 rollout 数、奖励权重和 checkpoint 调度均为 unknown。
