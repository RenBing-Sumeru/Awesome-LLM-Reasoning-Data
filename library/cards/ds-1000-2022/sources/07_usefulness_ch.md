可把 DS-1000 作为可执行 data-science code evaluation 的 schema：保留 problem id、library、prompt、code context、reference code、generated solution、execution result、string-check result、package environment、进程隔离策略和 artifact format。

对 atlas 来说，它是 deterministic harness 可转化为 reward/evaluation 的清晰例子，但前提是 sandbox 和依赖控制写清楚。它适合比较模型的 API 语义和库使用能力，不适合直接宣称广义软件工程能力。
