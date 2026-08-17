最接近的 baseline 是通过 live-web browsing 与 final-answer judgment 评测的 BrowseComp。BrowseComp-Plus 并未声称另行发布一个独立的 1,266-item benchmark；它从 parent questions 中保留通过 evidence collection、scraping 与人工审核的 830 条，再附加固定的 100,195-document substrate、evidence/gold qrels、挖掘的 negative、公开 index、retrieval/citation metric、可执行 client，以及四组 frontier-agent trajectory archive。

具体变化是 diagnostic separation。一个 run 现在可能因为 terminal status 不完整、retriever 漏掉已标注 evidence、citation 没有覆盖已检索 evidence，或 synthesized answer 未通过 semantic-equivalence judgment 而失败。由此 environment 与 feedback contract 可以在多个层面被检查，而不再把 final-answer accuracy 当作 agent behavior 的完整解释。

对 reasoning-data curation 的方向信号是：web-agent benchmark 应把 retrieval substrate、document supervision、action/observation schema、terminal predicate、grader version 与 failed-run retention 一起打包。fixed corpus、人类 label protocol、构建链的 aggregate attrition、可执行 client 与部分 episode release 是质量信号，因为它们暴露了可审计对象；高 benchmark score 本身不是质量信号。

各个组件并不是新的 verifier class。fixed corpus、BM25 与 neural retrieval、人类 qrels、LLM semantic judge、document-ID citation check 与 tool-call trace 都早于本工作。贡献在于围绕 BrowseComp question 整合这些组件，使研究者能在 controlled substrate 上分解 retrieval 与 answer synthesis。

复用前仍需完成 release 尚未闭合的检查：统计并审核四个 trajectory archive 的记录与 status；用一个 manifest 绑定 artifact revision；固定 proprietary model/judge snapshot、seed 与 retry；测量 qrel incompleteness；保留 exception failure；澄清 license 与 source-page rights。在这些问题解决前，该资源是 evaluation benchmark 与 audit case，而不是已经核验的 training corpus。
