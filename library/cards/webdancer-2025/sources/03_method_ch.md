输入包括 60,000 条 CRAWLQA、40,000 条 E2HQA，以及一个独立的 open-only mixture；后者从 MuSiQue、Bamboogle、PopQA、2Wiki 与 HotpotQA 中取题，并用简单 RAG filter 删除容易问题。CRAWLQA 让 GPT-4o 基于递归抓取的网页内容生成问答。E2HQA 围绕实体反复搜索并重写原问题，使模型必须先解决新增子问题，才能恢复保持不变的简短答案。

轨迹生成运行在带 search 与 visit 的 Qwen-Agents ReAct 中。GPT-4o 生成 Short-CoT 轨迹；QwQ-Plus 根据历史 action 与 observation 生成 Long-CoT thought/action，其下一次调用不接收先前 thought，但当前 `reasoning_content` 会保留为监督。每条 QA 最多采样 5 次。论文的多阶段漏斗先丢弃格式错误的 ReAct 输出，再由 GPT-4o 保留正确答案，最后应用重复/幻觉规则及信息非冗余、目标对齐、逻辑推理与准确性 prompt criteria。Appendix D 还把同一 10-gram 的重复限制为最多 4 次。正文声称过滤“超过两个 action”的轨迹，但 Table 4 的平均 action count 高于 2，两者冲突，因此无法重建该阈值的准确方向。

保留记录被转换为 multi-turn ChatML：Thought 使用 `think` 标签，JSON action 使用 `tool_call` 标签，observation 使用 `tool_response` 标签，最终回答使用 `answer` 标签。Table 4 报告 7,678 条 Short-CoT 轨迹，平均 action count 为 4.56、平均 thought length 为 510.03 tokens；另有 6,550 条 Long-CoT 轨迹，平均 action count 为 2.31、平均 thought length 为 1,599.39 tokens。SFT 使用 Short-CoT 训练 Qwen2.5-7B/32B，使用 Long-CoT 训练 QwQ-32B，并屏蔽 observation token 的 loss。

RL 阶段由未用于 SFT 的 QA 发起 live-web rollout。DAPO 每题采样 16 条 execution，只优化模型生成 token，并动态排除全对或全错的 group。格式有效性与 Qwen-72B-Instruct 判定的答案正确性均为二元信号；奖励为 `0.1 * score_format + 0.9 * score_answer`。非 RL inference 使用 temperature 0.6、top-p 0.95；RL rollout 使用 temperature 1.0、top-p 1.0。论文报告使用 32 个 node、每个 node 配置 8 张 H20 96GB GPU，并指出受成本和稳定性限制，RL 只能利用较小子集，例如 5,000 条 QA。

输出是 SFT policy 与经 DAPO 优化的 web agent，并在 GAIA、WebWalkerQA 及后续 BrowseComp 分析中评测。公开材料允许检查 200 条 QA 样例、200 条冷启动轨迹样例、demo/inference 代码和 WebDancer-32B，但不能重建完整训练 split、拒绝样本、judge 决策、on-policy reward、修改版 verl 配置或历史网页 observation。复现时必须固定仓库/模型 revision、工具服务、搜索与页面状态、prompt、judge snapshot、依赖、seed 和 episode budget。（论文 §§2–4；Appendices A、D、E；官方仓库。）
