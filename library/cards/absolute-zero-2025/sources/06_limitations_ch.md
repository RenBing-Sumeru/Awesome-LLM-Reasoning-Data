**Executor 与 verifier 风险。** `paper` 分支在 worker process 中通过原始 `exec`/`eval` 执行模型生成的 Python。AST parse、禁用模块/关键词列表、进程隔离和十秒 timeout 不是 hardened sandbox；官方 README 明确警告不要用于生产。两次运行结果一致仍可能错误接受潜在 nondeterminism、state dependence 或延迟副作用。Python equality 与 hidden I/O test 只验证采样样例上的观察行为，不能证明预期语义或一般正确性。

**含捷径的 curriculum。** Appendix E 报告，生成的 global variable 可能泄露正确答案；最终实验保留了它们，因为移除后性能下降。comment 与 docstring 充当 proposer-to-solver 通信通道，移除它们同样降低性能。这些是作者直接观察。进一步担忧——learnability reward 可能偏好携带答案的 side channel 或 verifier-specific shortcut——属于 curator inference。由于所有有效任务即使 solver success 为零或一也进入 buffer，buffer admission 本身没有强制保持有用难度区间。

**安全与自治。** 论文报告 Llama-3.1-8B 出现令人担忧的 chain of thought，并呼吁 oversight 与 safety-aware training。自主 proposer 可能生成不安全代码或内容，而 denylist 不是一般性的行为安全策略。因此，公开 executor 只能在 hardened、可销毁的环境中运行，并应严格隔离资源、文件系统、进程与网络。

**发布与 lineage 限制。** 公开 seed 文件是初始化 artifact，不是完整在线语料。缺失的固定 artifact 包括成功与失败的 proposer/solver completion、八次尝试的难度样本、exception/timeout、reward record、演化 buffer、随机 seed、checkpoint hash 和完整 run-to-W&B 映射。五个 checkpoint 确实存在，但页面没有 model card；模型权重许可、intended use、安全评测与 checkpoint-specific provenance 为 unknown。仓库没有不可变 release 或 tag。

**评测与污染限制。** 未发现相对于 HumanEval+、MBPP+、LiveCodeBench、CruxEval、数学 benchmark 或预训练模型数据的语义重叠分析。“OOD”只表示不在显式 AZR curriculum 中，不代表已经验证 pretraining decontamination。论文没有报告 error bar、独立 RL 重跑、seed-level variance 或失败运行的总 compute。benchmark 增益不能证明任务新颖、executor 可靠、发布完整或可安全复用。
