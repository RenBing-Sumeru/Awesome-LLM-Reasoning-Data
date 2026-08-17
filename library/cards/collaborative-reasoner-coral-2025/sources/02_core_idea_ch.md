Coral 把 same-model collaborative conversations 转为 next-turn supervision。两个对称 agents 在同一个 task-specific prompt 下交替发言，每一方都能看到完整 conversation prefix，并可提出 solution、质疑 partner、询问澄清、修改观点或给出 final answer。当双方最新有效 extracted beliefs 相同，或达到 **20 turns / 10 rounds** 时，conversation 结束。Agreement 仍可能错误；主要 success metric 还要求 shared belief 与 gold 匹配。

数据扩展机制是浅层 tree sampling，而不是完整 search。每个 turn 中，当前 agent 从同一 prefix 采样 **五个 sibling responses**。其中一个均匀随机选中并延续 active conversation，其他 siblings 保留用于 preference construction。Sibling nodes 不会递归扩展，因此该方法不是 MCTS。为增加 conversation-level coverage，Coral 对每个 problem 独立采样 **五棵 trees**。

Belief filtering 把 conversation text 转为监督。单独的 extraction prompt 询问 candidate 当前认为的 final answer，或返回 `not sure yet`。Task-specific matchers 归一化抽取结果并与 known answer 比较。Belief 匹配则为 positive，其他 candidates 都是 negative。Persuasion、assertion、persuasion quality 与 agreement 会被分析，但报告的 training data 并不按这些 social metrics 选择。

对 DPO，Coral 配对来自 **同一个 conversation prefix** 的 positive 与 negative sibling。Prompt 是 active agent 的 role instruction 加该 prefix；chosen 与 rejected targets 只在 next turn 上不同。这比任意配对 correct/incorrect turns 更能控制 conversational context。对 SFT，独立采样 conversations 中的 correct-belief next turns 作为 targets。论文在 SFT comparison 中每个 problem 使用 25 个 conversations。

该方法让每个模型在自身 synthetic interactions 上训练，而不是从更强 general teacher 蒸馏 conversations。Llama-3.1-405B-Instruct 只作为 MBPP-CR code candidates 的独立 upstream generator，这些 candidates 经执行被标成 binary correctness questions。公开仓库没有 MBPP-CR construction 与 task preset，因此论文的四任务 pipeline 不能完整运行。
