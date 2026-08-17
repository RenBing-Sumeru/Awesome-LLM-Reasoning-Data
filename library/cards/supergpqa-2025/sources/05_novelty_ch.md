先前基线是 GPQA、MMLU-Pro 以及数学、医学、法律、科学等领域专门数据集。SuperGPQA 改变的是覆盖面和构造治理：扩展到 285 个 subfield，使用三阶段标注与质检流程，并报告层级化指标。

方向信号不只是“题更多”。论文记录了专家领域 benchmark 构造中的可操作机制：专家选源、统一转写成多选格式、用 LLM 辅助发现简单题或格式坏题、查重，以及专家复核可疑候选。

不新的部分包括多选 QA、答案键 accuracy、用 LLM 做过滤器、公共排行榜。复用前要检查 Hugging Face revision、引用数据集 lineage、ODC-BY 署名义务、第三方数据集 license、答案 parser、prompt 变体，以及是否存在公开/隐藏 split 或排行榜策略。
