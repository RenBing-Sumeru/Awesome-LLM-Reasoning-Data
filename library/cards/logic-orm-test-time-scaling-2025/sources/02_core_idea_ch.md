核心干预是 Echo-CoT hard-negative 构造。普通 CoT prompt 要求模型逐步推理，并给出 boxed A/B/C 答案；Echo prompt 则预先声明 A/True、B/False 或 C/Uncertain 中的一个答案，再要求模型生成支持该答案的推理。当预设答案与 benchmark 金标准不一致时，模型可能产生流畅的负样本，其推理围绕错误结论组织，而不是随机的格式错误输出。

这里存在三层不能混为一谈的 feedback contract。第一，程序化 checker 解析 boxed label；与金标准完全一致时赋 reward 1，否则为 0。第二，GPT-4o judgment prompt 检查错误的 Echo rationale；judge 能识别的错误被丢弃，未被其发现的错误轨迹作为较难负样本保留。第三，在完整轨迹之后，Qwen2.5-7B-Instruct ORM 学习预测最终 token 为 `+` 而非 `-` 的概率。推理时负责排列独立采样解答的是这一学习得到的标量，而不是 gold checker 或 Echo judge。

公开 FOLIO 文件暴露了构造结果，但没有保留完整 provenance。普通文件含 10,009 条 CoT 记录；合并后的 Echo-CoT 文件包含全部这些记录，另加恰好 9,096 条 Echo 记录，新增记录全部为 reward 0，总计 19,105 条。由于合并 schema 没有 CoT/Echo 来源标志、candidate ID、judge verdict 或 filter-decision 字段，只能通过比较两个文件恢复增强部分，无法直接按记录审计其原生 lineage。

相较于普通 outcome labeling，本文贡献是一种定向扩充负类的方法：先生成围绕指定答案组织的 rationale，再把这些数据连接到 Best-of-N 测试时选择。它不是 step-level process supervision；中间陈述没有 correctness label，只要最终 A/B/C 与金标准一致，即使推理过程无效，整条轨迹仍可能被标为正样本。
