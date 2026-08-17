《Justice or Prejudice?》是 2024 年 10 月 arXiv 预印本，研究 LLM-as-a-Judge 评测中的偏差。它要解决的问题是：LLM judge 已经被用于 benchmark 打分，甚至被当作 reward 来源，但它的判断可能因位置、措辞、展示方式或身份线索等与答案质量无关的因素而改变。

评测对象是一个 judge-evaluation item：任务上下文、候选输出或评分请求、有原则的 bias perturbation、judge 模型的评分或偏好，以及比较原始条件和扰动条件的 bias metric。收录边界是 judge reliability 的 meta-evaluation；它不是候选模型能力 benchmark，也不是经过人类公平性验证的真值数据集。对 atlas 的价值在于给出明确审计契约：什么时候 LLM judge 分数不应直接复用为 reward 或评测标签。
