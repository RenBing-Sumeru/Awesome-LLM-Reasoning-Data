在使用 LLaMA3-8B 的 Baize 上，MDS 在十二项 MT-Eval、ConsistentChat 和 TopDial 指标上获得最佳平均排名 1.25；所列次强平均排名是 CC-Score 的 4.58。使用 Qwen3-8B 时，它再次得到 1.25，领先 DialScore 的 4.67。MDS 还避免了全数据训练导致的 TopDial 下降：对 LLaMA3-8B，全数据将 LLM-EVAL 从 7.12 降至 6.61，而 MDS 保持 7.12 并报告最高实体 F1 0.173。

在 Banking 语料上，MDS 在领域内测试达到 6.72 的 G-EVAL，在域外 ConsistentChat 达到 7.30，均为报告最高值，实体 F1 接近或高于竞争选择。去掉全局覆盖或局部结构都会降低 MT-Eval 和 TopDial 表现；关闭语义分桶或形式过滤尤其降低 TopDial 实体 F1。论文还报告长轮次实体 F1 中 MDS 为 0.554、ZIP 为 0.538，且仅 MDS 子集含有更少主题漂移和无支持对话。这些是在 LLM 裁判和实体指标下的证据，而非人工临床或安全评估。
