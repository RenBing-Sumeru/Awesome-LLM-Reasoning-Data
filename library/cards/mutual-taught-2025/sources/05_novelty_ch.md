既有工作基线是刷新策略生成数据、但把反馈来源保持固定的迭代偏好优化。Iterative DPO 更新策略与参照 checkpoint；SPPO 等 self-play 方法比较自行生成的响应；ReSTEM 也采用 EM/self-training 解释来改善策略。人类刷新式 RLHF 会收集当前策略新响应并支付新的偏好标注成本。Self-Rewarding 与 Meta-Rewarding 把生成和 LLM-as-a-judge 能力合并到同一模型。ReST-MCTS* 则从搜索与任务 ground truth 构造反馈。（论文 §2）

Mutual-Taught 真正改变的是同一闭环中的反馈模型身份。E-step 仍是可识别的 on-policy DPO：当前策略生成五个候选，由当前 RM 打分，再压缩为经长度控制的 pair。M-step 引入第二种动态数据对象：选中更新策略与其上一版本的比较，经过随迭代变化的 RM 分数离散阈值筛选，再与 self-training pair 混合后重训 RM。偏好数据因此成为两个 checkpoint 之间的接口，而不是单个优化器的固定输入。

这一新反馈接口有三个操作组件。第一，checkpoint 选择试图在构造伪 pair 前防止策略退化。第二，Low-Quality Data Filtering 会删除被现有 RM 判断为明显更差的更新策略响应，同时保留轻微负向样本作为正则。第三，每次刷新都从基础 checkpoint 重新初始化 RM，使策略衍生数据改变所学 RM，而不是简单延续上一 RM 的优化轨迹。这些选择共同定义构造配方，做对照实验时应完整保留。

多个组件来自既有工作而非本文新创：UltraFeedback 提供提示，Llama-3-8B-Instruct 与 FsfairX-Llama3-RM-v0.1 提供初始化，DPO 提供策略目标，Bradley–Terry 提供奖励建模，论文指定 Alignment Handbook 与 RLHF-Reward-Modeling 为训练框架，采样设置沿用 SimPO，评测依赖模型 judge。本文贡献是这些组件的耦合更新与稳定日程，不是新的偏好语义、人类标签来源、奖励架构、benchmark 或公开数据集。

“EM”标签应作窄义理解。附录 D 在 E/M 步精确优化且伪标签估计无偏的前提下，给出单调改进与驻点结论；实际神经网络实现采用近似 DPO/RM 优化，RM 衍生标签的无偏性也未建立。因此，该定理解释的是有条件的方法类比，不能独立验证实际伪 pair，也不能把当前 RM 升格为真实偏好估计器。

对 reasoning-data 研究而言，方向意义在于：反馈模型刷新本身就在生成并筛选数据。可复用谱系记录必须同时保存两个策略、RM checkpoint、全部候选及分数、选择集、筛选阈值、接受与拒绝 pair 和迭代身份。复用前还需用独立人类判断检查伪标签错误、RM 校准与 gaming、split 隔离、版本化配置和缺失实现。缺少这些检查时，Mutual-Taught 只能作为机制对照和审计案例，而不是可直接使用的动态偏好发布。
