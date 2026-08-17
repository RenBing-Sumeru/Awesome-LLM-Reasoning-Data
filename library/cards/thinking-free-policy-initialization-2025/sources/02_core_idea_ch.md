ThinkingFree 只改变格式化输入：在 assistant 的起始 think token 后直接追加一个空 thinking block 和闭合 think 控制标记，使 policy 不再生成通常的显式长思考段，而直接生成答案。问题的 ground-truth answer 不变。TFPI 在这些变换后的输入上用普通 RLVR objective 进行短期分阶段初始化，之后可切回标准 thinking-mode RLVR。

论文实例使用 DAPO 作为 optimizer scaffold，并采用 r(x,y)∈{0,1} 的 rule-based reward。每个 prompt 生成八条响应组成一组，组内相对答案级奖励为各 token 提供共享 advantage。TFPI 改变的是条件输入与 rollout 长度日程，而不是 verifier 或 reward function。相应数据对象包括变换前后 prompt、采样响应、二元奖励、组统计、长度以及 stage/checkpoint ID。相较 direct long-context RLVR、multistage RLVR 和依赖专门长度奖励的效率方法，其特定贡献是利用模型已有 chat-template 控制，先采集较短的可验证 rollout 完成初始化，再回到 slow-thinking 训练。
