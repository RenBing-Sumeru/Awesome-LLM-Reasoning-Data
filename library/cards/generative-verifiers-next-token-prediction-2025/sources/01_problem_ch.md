ICLR 2025 官方论文研究 verifier 是否必须采用带独立标量头的判别式分类器。在 Best-of-N 推理中，生成器可以给出多份候选解，但最终选择依赖 reward model，而后者常把判断压缩成一个不透明分数。GenRM 改用语言模型的下一 token 分布表示正确性：输入问题与候选解后预测 `Yes` 或 `No`；GenRM-CoT 则先生成验证理由，再预测最终判决。这样一来，verifier target、理由教师、过滤规则与推理预算都成为可检查的推理数据设计选择，而不再只是未解释的奖励数值。（论文 Sections 1、3）

该工作属于 Data Construction and Open Release Recipes，因为论文具体说明了 query 与候选解如何生成、标注、平衡、配对验证理由、过滤，并与正确解 SFT 混合；作者还公开了 GSM8K 反馈记录。经检查，发布数据的四个物理字段为 `inputs`、`targets`、`question_id` 和 `model_output_id`。输入字符串包含任务指令、问题、候选解与验证 prompt；target 是直接的 `Yes`/`No` token，或以判决收尾的 critique。论文也研究程序化生成的算法任务数据，但官方仓库检查只确认了 GSM8K 发布。

这里的边界是 outcome verification，而不是独立监督的 process reward：验证理由可以讨论并标注各步骤，但被保留的训练样本与部署分数仍锚定候选答案的最终正确性。完整 ICLR 正文与附录、项目页及官方发布文件检查足以支持 L4 Card；但生成理由的许可证范围、去污染、不可变发布 manifest、代码与已训练 verifier checkpoint 仍未解决，因此不能据此宣布可安全训练复用。
