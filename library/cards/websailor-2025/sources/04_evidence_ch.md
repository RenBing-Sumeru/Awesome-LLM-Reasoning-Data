Table 1 在同一 ReAct 实现下，用 BrowseComp-en、BrowseComp-zh、XBench-DeepSearch 和 GAIA text-only validation 的 103 个 case 评测 WebSailor。非零 temperature 的 pass@1 分数依次为：3B 的 3.3/9.7/27.7/33.0，7B 的 6.7/14.2/34.3/37.9，32B 的 10.5/25.5/53.3/53.2，72B 的 12.0/30.1/55.0/55.4。这些都是作者报告结果，不是独立复现。

Table 1 中最强的直接可比 open-source baseline 随 benchmark 不同。WebDancer-32B 为 2.5/14.1/38.7/40.7，WebDancer-QwQ 为 3.8/18.0/39.0/51.5；WebSailor-32B 与 72B 在四列都高于这些已列 baseline，但 3B/7B 并非对所有更大 baseline 都占优。专有 DeepResearch 在 BrowseComp-en 上仍是 51.5，远高于 WebSailor-72B 的 12.0，因此“缩小差距”不能解释为所有设置已达到全面 parity。

Table 2 检查未过滤 SailorFog-QA 的难度。o4-mini 的 pass@1 为 47.3，DeepSeek-R1 为 38.9；同一模型在 WebDancer-QA 上为 90.2/84.4，在 BrowseComp-en 上为 26.3/9.5。Figure 3 还显示其 tool-call 分布比 WebDancer 有更长尾部：许多过滤前正确 trajectory 超过五次调用，部分超过二十次。但 tool-call count 只是 difficulty proxy；作者也承认答案歧义和非唯一性会降低 SailorFog-QA accuracy（论文 §5.3）。

训练分析提供方向性支持，但仍不完整。Figure 5 报告 RL 相对 RFT 在四个 benchmark 都提升，BrowseComp 增益更大；Figure 6 显示 direct RL 虽能提升，却收敛在 cold-started 32B 之下且 tool call 更少。§4.2 称 DUPO 相比 DAPO 风格的顺序补 batch 约快 2–3 倍。论文没有提供完整 learning curve、多 training seed 方差、compute budget、judge agreement、trajectory-count ablation 或独立 replay。

发布证据比实验范围窄得多。官方仓库唯一 SailorFog 数据文件只有 20 行有效 UTF-8 JSONL，字段仅为 `question` 与 `answer`，没有 thought、action、observation、reward、success flag、failure、split 或 provenance。官方 3B、7B、32B 模型页面存在，但未确认官方 72B 页面。这些 artifact 支持模型推理与方法阅读，不支持重建论文训练集。
