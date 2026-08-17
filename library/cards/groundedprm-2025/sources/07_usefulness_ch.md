对 `rollout_search_test_time_trace_data` 而言，GroundedPRM 提供了双信号记录规格：保留局部 tool query/response 与全局 trajectory outcome，而不是把两者压成一个无解释标签。它可用于 PRM 数据设计、verifier 覆盖研究、信用分配消融与 reward-guided 步骤选择。

可复用实现应保存 MATH source ID/split、policy checkpoint、每个 node/action、K/R/c/beta/gamma、visit、seed、tool query/response/parser 结果、最终答案抽取、局部与聚合 reward、filter 原因、保留 rationale 及代码/环境 revision。被接受和被拒分支应一并发布；评测应按步骤类型报告 verifier 一致性，并采用等预算 selector 比较。

