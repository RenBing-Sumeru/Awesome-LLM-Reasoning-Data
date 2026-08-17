一句话贡献是：AgentBeats 把 task、tool、environment、stopping、metric 与 result reporting 封装进 A2A/MCP 背后的 judge agent，使独立托管的 subject agent 无需共享同一内部 harness，也能生成协议层可比较的 evaluation episode。

该机制由三种角色定义。delegator 选择参与方，发送 kick-off request、role-to-endpoint mapping 与 configuration。judge 获取或生成任务，准备 data、environment 与 tool，通过 A2A 下发 instruction，接收 subject message 或 completion update，观察被暴露的 MCP/environment effect，最后输出预定义 metric 与 result report。一个或多个 subject agent 通过自身的 A2A response 和 judge 暴露的 MCP capability 完成任务。agent construction、registration 与 execution 是不同 lifecycle stage；local、remote、hosted、proxy 与 CI mode 把这些阶段放在不同基础设施上。

feedback contract 有意允许异构实现。程序化 test 与 environment predicate 可以检查可执行 artifact 或 final state；semantic judge 可以通过 prompt 或 LLM scoring 检查 response；同一 judge 也可以混合两者。在 coding case 中，completion 或 timeout 结束交互，随后 benchmark evaluation script 对收集的 artifact 与 environment state 评分。反馈只能观察 judge 暴露并记录的内容，不能证明 predicate 完整、LLM judge 已校准、remote log/reset 足以复现，也不能证明不同 judge 的 score 共享同一种 reward 含义。因此，“judge agent”不等于“LLM-as-judge”。

相较传统 benchmark wrapper，AAA 把 assessment ownership 放到标准 agent interface 后面，而不再要求每个 subject 适配 benchmark 专用 orchestration。相较 tau2-bench 这类可执行 environment benchmark，AgentBeats 标准化的是跨异构 assessment 的外层参与方与 transport contract，而不是发布一个固定的 task/episode schema。该对象适合接口与反馈审计，但协议标准化本身不会产生已有明确许可的 trajectory corpus 或准确 replay package。

对 reasoning-data 研究而言，关键链路是：delegator configuration -> judge task/data/environment -> subject A2A/MCP episode -> response/artifact/final state -> judge metric/result。full-episode 与 state/action-level 字段描述可观察的 evaluation surface。论文只将其用于 evaluation 与 comparative audit；文中讨论的潜在 RL integration 不是 agent_training 或 rlvr 的证据。
