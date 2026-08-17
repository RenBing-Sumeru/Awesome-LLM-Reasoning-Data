训练与失败轨迹均未发布：没有 cold-start 记录、工具调用/响应、摘要、缓存 lemma 依赖、奖励记录、rubric 输出、失败证明树、权重、LooKeng、搜索索引、Python sandbox 或调度器。终止 `+1/-1` 没有披露过程 credit，学习式 sketch judge 还带来校准与相关误差风险。

基准洁净性未解决。Putnam-200 监控 1,200 个 step 并选择 checkpoint 1,055，之后再报告完整 PutnamBench，形成 selection adaptation。没有去污染覆盖公开/内部教材形式化与 PutnamBench、FATE；“2025 无泄漏”也缺少来源和 cutoff 账本。FATE 强依赖检索，CombiBench 和 Erdős 已承认的错形式化说明 Lean 有效不保证英文语义忠实。

尽管披露了 64K/28 calls、Pass@8×8、叶子 Pass@3×3、depth 4→8、每题 10 H20-days 及 Putnam 2025 最多 40 H20-days，算力比较仍缺总 token、调用、分支、并行宽度、利用率、超时和失败树数。官方 11 题 zip 是成功评测输出，不是训练或失败数据；`VerifyStmt` 也仅做类型相等检查。
