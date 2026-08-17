对 `data_construction_open_release_recipes` 而言,CREST 是一个紧凑的工作示例:如何把一个带标签的选择题转换为不止一种训练信号。一个来源标签同时监督原题答案、选项级行为向量、标量一致性计数、容忍度决策、正确/错误偏好池和一致性排序偏好池。虽然派生数据缺失,公开代码仍使这些转换可被检查。

可审计候选记录应保留上游数据集与 revision、split 与稳定 item ID、精确选项和标签、base checkpoint/tokenizer、instruction 与 few-shot 版本、解码参数和 seed、全部 16 条 rationale、每个原题预测以及 `z`。对每个 `z=1` 候选,还应加入完整的选项级输入、原始输出、解析后的 yes/no、parser 版本、预期标签、匹配向量和 `z_tilde`;只保存计数并不足够。

决策记录应分别保留 SFT 阈值 `F-t`、接受/拒绝状态与原因、所有潜在 `P_z` 和 `P_z_tilde` 偏好对、同分处理、来源池、`lambda`、采样 seed、chosen/rejected ID,以及实际消费该偏好对的 batch 或 epoch。模型记录应固定 LoRA/DPO 设置、软件、validation 选择和 checkpoint。这样的 lineage 能让策展者区分生成质量、探针可靠性、过滤行为与优化器效应。

该配方最适合答案选项和可信标签能够低成本生成选项级反事实探针的场景。扩展时,构建者应测试独立评价器,保留向量而不是只留计数,测量 parser 错误,为不确定探针设置全部拒绝路径,并在发布前审计去污染与权利。开放式任务需要一组等价的、可独立核验的推论;当前选项模板不能直接提供这种对象。

该仓库足以支持方法复现,却不能直接消费一个现成 CREST 语料。准备后的上游 JSONL 文件不应被描述为生成 rationale 数据。下游 benchmark 增益支持继续研究该配方,但不能认证缺失的 SFT 与 DPO 对象。
