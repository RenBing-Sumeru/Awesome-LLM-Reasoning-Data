核心贡献不是一个新的独立语料库，而是一套随模型状态变化的数据日程。预训练阶段先把每个候选来源压缩为代表子集：FineWeb-Edu classifier 保留 educational-quality score 大于 4 的样本；Ask-LLM 按推理相关性排序并保留前 10%；面向 code、math、knowledge 的专用 Ask-LLM 判断进一步细分能力域；semantic deduplication 再把每个来源子集缩减到约 10,000 条。合并后的子集形成 Code、Math、Knowledge 三类 capability-probing distribution。

随后配方扩展 AutoMixer：三个能力域的独立模型与十个 checkpoint 提供 self-influence 和 cross-capability influence estimate，后期 checkpoint 权重更高，聚合后的 influence 决定数据集级采样比例。中训练阶段让反馈随模型共同演化：保留 estimated influence 大于零的样本，重新计算数据集权重，训练模型，再进入下一阶段；论文实际采用两个阶段。

该 feedback contract 是混合且启发式的。FineWeb-Edu 预测教育价值，Ask-LLM 判断感知到的推理相关性，probe NLL 与 AutoMixer 近似衡量对指定能力的迁移贡献。这些信号可以排序和筛选记录，却不能验证事实真伪、中间推理或最终答案正确性。相较于 uniform mixing、普通 Dolmino 中训练或只做后训练蒸馏，方向上的关键差别是把 capability probe 与演化中的模型状态连接到全训练栈的数据来源权重。（论文 §§2-3，Figures 3-6。）
