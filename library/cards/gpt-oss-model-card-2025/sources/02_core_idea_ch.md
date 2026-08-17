官方记录将 gpt-oss-120b 和 gpt-oss-20b 描述为使用大规模蒸馏与强化学习训练的 mixture-of-experts 推理模型。它最可复用的披露属于接口层：Harmony 对话区分 System、Developer、User、Assistant 和 Tool 角色，并使用彼此分离的 analysis、commentary 与 final 通道；公开发布还包含参考推理实现和工具环境。

本 Card 的核心解读刻意比模型性能结论更窄。报告已足以识别可能的后训练数据对象——对话轮次、推理文本、工具调用、工具观测和最终回答——但没有发布相应的 prompts、轨迹、奖励、过滤规则或来源。因此，本条目的研究对象是披露边界本身。
