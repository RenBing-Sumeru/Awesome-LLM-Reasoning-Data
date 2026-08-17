既有基线是把正确性编码进分类 logit 或独立标量头的 outcome reward model。LLM-as-a-Judge 能生成文字 critique，但通常只经 prompt 调用，没有针对任务的 verifier 训练；DPO 则通过偏好目标与 reference policy 连接生成和评分。已有 CoT 与 self-consistency 方法也会采样推理路径并聚合答案，这些组件并非 GenRM 首创。

真正变化的是反馈接口及其训练对象。正确性被表示成普通词表判决，因此同一种 SFT 格式可以同时容纳直接判决 target、critique 加判决 target，以及正确解生成 target。由于 GenRM-CoT 在判决前生成自己的理由，采样得到的 verifier rationale 也成为推理时对象，可通过平均条件 `Yes` 概率进行边缘化。构建 recipe 还把干净算法任务上的程序化理由与 Gemini 1.0 Pro 为 GSM8K 生成的 reference-guided rationale 放入同一接口，再按最终判决是否一致过滤。

对推理数据研究而言，这是一项方向信号，因为奖励已不能只用一个标量列描述：教师身份、理由 prompt、特权参考解、理由保留/拒绝规则、候选标签平衡、模型版本与投票预算都可能改变学习到的反馈表面。官方发布让 GSM8K 的直接 target 与理由 target 可以被检查，比只有论文描述的 reward-model 主张更可操作；但它仍未公开训练代码、checkpoint、被拒理由日志，也未独立澄清生成 critique 的许可证。

论文的 Best-of-N 增益是完整 verifier pipeline 的证据，不证明语言生成普遍优于其他接口，也不证明公开记录逐条独立正确。复用前应在同一候选集合上比较 direct 与 CoT target，审计 reference guidance 泄漏，测量校准与相关错误，并固定确切仓库快照。
