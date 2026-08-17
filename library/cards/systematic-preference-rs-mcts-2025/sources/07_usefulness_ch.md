对指定的 Data Construction and Open-Release Recipes track 而言,本文提供了一套把 preference dataset 当作构造对象来审计的模板。受其启发的发布应识别 source prompt、生成后的 constrained prompt、constraint IDs 与 keyword arguments、全部 candidate responses、逐约束结果、aggregate score、chosen/rejected decision 和 pair reuse。MCTS 记录还需包含 parent 与 sibling identifiers、shared-prefix boundaries、actions、token log-probabilities、visits、Q-values、rollout rewards、self-evaluations、terminal reasons 和 selection history。

该研究也适合设计匹配消融:固定 pair count 与 unique-prompt count;把 score margin 与 absolute quality 分开改变;区分 prompt difficulty 与低 pair yield;在明确计算预算下比较独立 RS candidates 和共享前缀 MCTS siblings。应保留未选回答和不合格 sibling pairs,因为它们揭示 selection pressure,并支持替代配对规则。

其发现可作为未来构造的假设:中等 prompt 难度可能优于最大难度,mixed contrast 有时有益,RS 收益可能随 N 增加而饱和。没有新证据时,不应把这些结论推广到被测 8B 模型和可验证约束之外。若没有匹配数据量、prompt coverage、verifier contract 和 compute,也不应声称 MCTS 收益;下游 benchmark 提升不能证明 preference records 质量高。

由于未确认可复用制品,本卡片是一份配方和审计清单,而不是可直接执行的训练建议。实际复用需要新的实现,以及独立声明的上游条款、发布许可证、split manifests 和 provenance。
