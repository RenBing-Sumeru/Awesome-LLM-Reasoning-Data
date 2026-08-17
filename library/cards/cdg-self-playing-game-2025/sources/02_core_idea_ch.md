CDG 让同一模型家族分别扮演 Prover、Helpful Critic 和 Misleading Critic。Prover 先解题；若抽取出的答案错误，Helpful Critic 需要指出并解释第一个错误，但不能直接给完整解答；若答案正确，Misleading Critic 则编造一个看似可信的错误。Prover 看到 Critic 内容，却不知道其真实意图，只能自行决定修订或拒绝。

环境反馈很简洁：正则表达式抽取最终答案，SymPy grader 与标准答案做等价比较。Helpful Critic 在错误答案被改正确时成功；Misleading Critic 在正确答案被改错时成功。Prover 的成功条件则是接受有效反馈并纠错，或面对误导反馈仍保持正确；形式化奖励中，后者由 `eta` 加权。

主方法使用 ReST：每条 critique 先采样多次 revision，再用阈值把成功行为转成 Prover、Helpful Critic 和 Misleading Critic 的 SFT 数据。DPO 与 PPO 只是消融。这里的反馈契约属于 mixed：答案比较可程序化执行，但 critique 与 revision 是模型动作，其过程是否合理只通过最终答案和一个固定拒绝短语间接判断。
