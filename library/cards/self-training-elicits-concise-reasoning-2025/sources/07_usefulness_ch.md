对rollout-search track，该配方展示训练时best-of-N如何构造答案验证的简洁轨迹，并把搜索成本摊销到后续greedy decoding。它适合研究候选预算、逐问题保留、长度目标，以及程序化反馈与模型反馈的边界。

可复用发布应保留来源数据集/版本和行ID、目标checkpoint/tokenizer/chat template/prompt、每个候选文本与token数、parser版本/规范化答案/决策、选中候选ID、问题丢弃原因、可选few-shot示例集、GPT-4o/人工决策记录、生成seed/设置、SFT成员和文件hash。

评估应报告按难度/类别的保留率、parser误接受/误拒绝、步骤有效性审计、训练数据长度分布、生成与训练计算、greedy准确率/长度、延迟和部署break-even次数，避免脱离构造成本解释更短输出。

已发布代码可以从原始GSM8K/MATH复现流程，但不能把论文关联的微调模型当作缺失训练轨迹语料的替代。更换目标模型后必须重新生成候选，因为self-training和选择均受checkpoint约束。

