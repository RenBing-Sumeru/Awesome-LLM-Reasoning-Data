FVQA-auto-vc 从 MetaCLIP 元数据长尾头部和尾部随机抽取 1 万个视觉概念。对每个概念，网页搜索提供图像及关联页面；GPT-4o 生成简洁的事实型视觉问答并分类知识类型。按类别平衡后得到 6000 条，其中 5400 条作为训练候选、600 条作为测试候选。另一条路线把 InfoSeek 训练问题映射到同一分类体系，并选择 7000 条。人工标注者另增 800 条：选择知识类别、寻找图像、搜索支撑信息并写出简洁答案。

搜索平衡阶段使用在收集池上训练的 Qwen2.5-VL-7B，每题生成 8 条 rollout；若 8 条全部失败，则因训练信号不足而丢弃。只有使用对应搜索行为时才能答对的题被标为图像、文本或混合搜索必需；只要存在无需搜索的正确 rollout，就标为 search-free。最终 FVQA-train 含 5000 条，约 3400 条 search-required、1600 条 search-free。FVQA-test 含 1800 条人工核验或人工撰写样本：600 条留出的 auto-vc、600 条重新标注答案的 InfoSeek Human Split，以及 600 条人工样本。

强化学习以 Qwen2.5-VL-7B-Instruct 和修改后的 GRPO 为基础。每个训练步抽取 512 个问题，每题 8 条 rollout；episode 最多三轮对话和两次搜索，图像搜索只允许在第一轮。图像搜索返回最多 5 个网页缩略图—标题结果；文本搜索通过 SerpApi、Jina Reader 和 Qwen3-32B 摘要返回最多 5 个页面。模型动作使用命名的 reason、image-search、text-search 和 answer 区段；返回证据放入命名的 information 区段，并从策略损失中排除。Exact Match 正确性为二值；答对但使用搜索时应用 0.1 的惩罚因子，格式项权重为 0.1。
