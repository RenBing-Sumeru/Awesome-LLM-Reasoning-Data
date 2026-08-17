主要局限是环境不稳定。真实网站会变化、阻止自动化、要求账号、改变页面布局，或按地区和日期展示不同内容。因此复现实验中的在线分数下降，可能是环境变了，而不是模型或 grounding 方法变差。

第二个局限是归因困难。web-agent 分数混合了模型推理、prompt 设计、候选生成、grounding policy、动作预算、浏览器工具行为和 success checking。人工或 oracle grounding 能揭示 planning 潜力，但它不是自主 agent 的完整契约。离线动作匹配更稳定，却可能奖励“匹配历史人类轨迹”，而不是完成当前真实任务。

数据复用的 unknown 包括各 artifact 的精确再分发条款、公开任务是否已进入未来模型训练数据，以及第三方 live services 是否能在相同条件下访问。应把 SeeAct 当作强环境/grounding 审计卡，而不是长期完全受控的 benchmark snapshot。
