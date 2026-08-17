主要贡献是构造一个更难的 MMMU 后继评测：通过对文本可解题进行过滤，并引入 vision-only 设置，减少模型靠文本捷径或选项先验拿分的空间。它的新意不在模型，而在 benchmark 构造和评测协议改变了模型可见的信息。

评测对象是多学科多模态 QA 条目，包含学科元数据、视觉上下文和官方目标答案。反馈契约是用发布的评测器或答案键做 answer-level 评分，再按模型和子集汇总准确率。

最接近的对比是 MMMU，以及 MathVista 等多模态学术 QA benchmark。方向标签是 robust multimodal benchmark auditing：它适合判断模型是否真的使用视觉证据，而不是只看最终是否选对。
