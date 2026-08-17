FTRL 的核心贡献是合成逐条定制、可在本地执行的 tool environment，并把 current-policy 与这些 environment 的交互转化为供 GRPO 或 Reinforce++ 使用的 deterministic environment feedback。

该机制连接两类对象。公开的 **environment row** 包含 task prompt、final answer、分解后的隐藏 subanswer、tool document、Python implementation 与 progress field。生成的 **interaction state** 包含持续增长的 `messages` history、assistant tool call、tool observation、更新后的未解决 subanswer 集合与 solve rate，以及附着在最后一个有效 response token 上的 scalar reward。公开 raw train/test data 只有第一类对象；第二类对象由 `Code/data_sample/data_sample.py` 产生，论文运行时的输出没有进入 repository。

feedback contract 同时是 programmatic 与 environmental 的。对于含 `p` 次 tool call、并新解决 `q` 个 subquestion 的 response，reward 为 `2q/(p+1)`。blank response 得 `-0.5`，malformed tool markup 得 `-0.3`；当仍有 `t` 个 subquestion 时，包含最终 reference answer 的 response 得 `1/(1+t)`；全部 subquestion 已解决后的 no-tool response 得 `0.5`；其他 response 得 `0`。reward manager 把该 scalar 写到最后一个有效 response token。这是 state/action-level scalar supervision，不是公开的 semantic step-label sequence。

verifier 能观察本地 function 是否执行、返回了什么 text 或 error、预期 subanswer 是否以忽略大小写的 substring 出现、还剩多少 subquestion，以及 final-answer text 是否包含 reference。它不能确认 semantic equivalence、合成 function 之外的 factual truth、某个 tool call 是否因果必要、代码是否安全，或隐藏 reasoning 是否正确。substring containment 既可能奖励泄露或碰撞的字符串，也可能拒绝格式不同但语义等价的答案。

论文中最接近的比较面包括 ToolHop、tau-bench、RoTBench 等 tool-use evaluation suite，以及 GRPO 与 Reinforce++ 两种 optimizer。FTRL 用前者做 out-of-domain evaluation，并采用后者作为 training scaffold。其差异点不是新的 optimizer 或 semantic judge，而是把五阶段 synthetic local-environment construction、stateful progress tracking 与兼顾效率和完成度的 reward 结合起来。

对 reasoning-data 研究而言，方向信号是从 environment definition 到 sampled state、tool observation、verifier update 和 policy reward 的显式连接。同一连接也揭示了审计边界：executable consistency 与 benchmark improvement 本身不能证明 trajectory 完整、data quality、安全或复用权利。
