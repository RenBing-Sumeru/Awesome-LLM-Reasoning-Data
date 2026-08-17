规范主来源是修订于 2026-05-10 的 arXiv:2603.21357 v4；已验证的 OpenReview 记录不能证明论文已被某个会议接收。AgentHER 追问：当一次失败运行中记录的 action 与 observation 已经能构成另一个可达目标的有效示范时，是否仍应把整条运行丢弃。其决策边界是数据构造，而不是提出新的 WebArena 或 ToolBench benchmark：这两个 environment 提供源 episode 与终止 outcome，AgentHER 则把经筛选的失败 episode 转换为 post-training 记录。

输入对象是失败运行 `(g_i, tau_i, f_i)`。其中 trajectory `tau_i` 是有序的 thought、action、observation 三元组序列；公开 schema 还包含 `trajectory_id`、`original_prompt`、`final_answer`、`failure_reason` 与 metadata。构造过程随后加入 failure type、recoverability、severity、由 observation 支持的 achievement、hindsight prompt、两个 judge confidence、rationale 与输出格式字段。一条 accepted episode 可变成 SFT conversation、DPO chosen/rejected 记录或 ShareGPT 对话；AgentHER 不会重新生成底层 environment interaction。

具体缺口是：只保留成功示范的 pipeline 会浪费可恢复失败，但替代标签又不能奖励一项目测不到的目标。因此论文把 failure selection、outcome extraction、hindsight-goal synthesis、judge agreement 与 severity weighting 都纳入数据契约。原任务是否成功仍由具体 environment 决定，重标 pair 的接受则由 learned judge 根据已记录 observation 判断，而不是通过 live environment replay。

该工作属于 `environment_agent_trajectory_data`，因为可训练对象是完整的 web-navigation 或 API/tool-use episode。它同时是一套 construction recipe，但不是 RLVR 证据：论文报告的用途只有 SFT、DPO/preference learning 与 agent fine-tuning。公开 package 读取序列化 JSON/JSONL 轨迹，却没有发布实验语料、environment adapter、可执行 terminal predicate 或 replay manifest。

官方主链接与代码 artifact 已验证，但 accepted metadata 仍保持 `L3_summary_ready` 和 `partial`。正文深度足以进入双语 review，却不能据此升级 curation state：arXiv v4 与 GitHub commit `98072c34db5ee65a22e43f8621b5ec76a9c995e1` 对应项目中实质不同的时间点，发布完整性、数据权利、精确实验复现与 replay 均未解决。
