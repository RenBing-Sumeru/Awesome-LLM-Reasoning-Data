对 `data_construction_open_release_recipes` 而言，Sol-Ver 是一个紧凑的数据构建循环案例，其中 verifier、filter 与 training-data generator 并非彼此独立。它展示一条 execution tuple 如何产生四类下游对象：Solver SFT、Verifier SFT、Solver preference 与 Verifier preference data，适合研究 self-play、verifier refresh、拒绝样本保留，以及二值 filter 如何成为隐式训练目标。

可审计 raw record 应保留 source snippet ID 与 license、template source、生成的问题与 signature、generator checkpoint、prompt、解码设置、code candidate、test input、reasoning、expected output、branch-coverage trace、output-diversity decision、执行环境、dependency version、timeout、stdout/stderr 与 pass fraction。Decision record 应加入 role、chosen/rejected ID、规则版本、备选候选和拒绝原因。Iteration ledger 应把每条保留记录绑定到来源 checkpoint、SFT/DPO split、optimizer state、下一 checkpoint 与下游评估。

复用者在把 full-pass pair 当作正向监督前，应通过 gold check 或 mutation-based check 独立验证生成测试；还应保留失败代码和 rejected expected output，报告每道门控删除多少记录，使用安全 sandbox，并审计 train/evaluation overlap。由于 Sol-Ver artifacts 未公开，论文可安全用于配方与审计参考；直接训练复用仍被阻断，需等待冻结发布、逐记录 provenance、split/overlap 证据与 license。

论文也提供一条重要反例：在 verifier 训练前，synthetic-test reranking 会降低代码准确率；扩大选择数据量也可能降低结果。这些观察支持显式质量门控，却不能认证最终合成语料。
