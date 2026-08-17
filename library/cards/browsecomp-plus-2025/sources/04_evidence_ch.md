论文结果表明，在其报告的 setup 中，fixed retriever 会明显改变 end-to-end answer accuracy。GPT-5 使用 BM25 时 answer accuracy 为 55.90%、retrieval recall 为 61.70；使用 Qwen3-Embedding-8B 时分别为 70.12% 与 78.98。GPT-4.1 从 BM25 的 14.58% 提高到 Qwen3-Embedding-8B 的 35.42%；SearchR1-32B 则从 3.86% 提高到 10.36%。这些都是论文报告的 evaluation result，本次整理没有独立复跑，也不能证明公开数据适合训练。

retrieval-only result 揭示了 final score 背后的差距。对 evidence qrels，BM25 的 R@5/R@1000/nDCG@10 为 1.2/13.7/1.6，Qwen3-Embedding-8B 为 14.5/76.7/20.3；对 gold-document qrels，相应数值是 1.4/17.3/1.7 与 18.5/83.5/19.5。由于 qrels 不完整，尤其是在加入新文档后，这些 metric 可能把真实相关结果计为 false negative。

若干 controlled check 定位了其他 bottleneck。向 GPT-4.1 提供全部已标注 positive document 后，accuracy 达到 93.49%；作者人工检查剩余 6.51%，确认这些问题仍可回答。在报告的 setting 中，启用 `get_document` 后 GPT-4.1 从 35.42% 提高到 43.61%，Qwen3-32B 从 10.36% 提高到 11.69%。对 Qwen3-Embedding-8B 的 top 20 做 reranking 后，evidence R@5 从 14.5 提高到 23.3，GPT-4.1 end-to-end accuracy 从 35.42% 提高到 47.11%。在 Qwen retriever 下，提高 reasoning effort 使 gpt-oss-20B 从 13.37% 提高到 34.58%，gpt-oss-120B 从 24.94% 提高到 42.89%。这些比较区分了 retrieval、document access、reranking 与 inference effort，并未建立 training recipe。

扩展到 9,771,311 篇 FineWeb-Edu 文档的实验是对 scale 与 qrel coverage 的审计。Qwen3-32B answer accuracy 从 10.36% 降到 7.11%；neural retrieval 的 measured recall 也下降，部分原因是新增语料中的相关文档尚未被 judgment。该结果支持论文关于 corpus expansion 与 incomplete qrels 相互混杂的警告，不能据此证明更大的 corpus 本身更差。

judge choice 也会移动分数。GPT-5 搭配 Qwen3 retriever 时，substring matching、GPT-4.1 judgment 与 Qwen3 judgment 分别得到 65.18%、70.12% 与 71.69%。citation recall 低于 overall retrieval recall，但 citation scorer 只检查引用的 numeric document ID 是否出现在 evidence qrels 中，并不验证被引用句子是否蕴含 claim。论文报告 o3 与 GPT-5 的 parametric-only accuracy 约为 20% 与 26%，并讨论了可能的 BrowseComp exposure。fixed corpus 只能控制 search-time drift，不能清除模型权重中已有的知识。
