官方论文和项目页描述 MMMU 为覆盖 30 个学科、183 个子领域的 11.5K 多模态问题。论文报告领先多模态模型与人类专家之间仍有大差距：frontier 系统大约在 mid-50% 区间，而专家人类表现报告接近 88.6%。

artifact 证据来自官方 GitHub evaluator、项目页、CVF 论文和 Hugging Face 数据集。逐行决定性证据是在固定图像和文本 prompt 后，模型最终规范化答案是否等于该题官方 target。

证据边界：aggregate accuracy 依赖图像可用性、预处理、prompt wording、答案抽取、split 可见性，以及 test answers 是隐藏还是释放。benchmark 分数不证明模型确实使用了视觉证据，而不是依靠数据先验或文本捷径。
