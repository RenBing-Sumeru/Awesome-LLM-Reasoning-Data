LEAP 研究的是：通用大模型如何生成长的形式化数学证明，并让正确性由机器检查，而不是由“看起来合理”的自然语言论证决定。主来源是 https://arxiv.org/abs/2606.03303，首次公开日期为 2026-06-02；官方项目页为 https://imobench.github.io/。

它属于 Programmatically Verifiable Outcome Data，因为每个结果都是 Lean 证明产物加上编译器/内核的通过或拒绝。它不是自然语言数学 benchmark，也不是主观的证明质量评价。评测对象包括 IMO 风格的形式化定理、agent 蓝图、证明修改、编译器反馈和最终证明状态。官方论文、项目页和 Google DeepMind 代码发布共同给出了任务与可执行终止契约，因此可直接纳入 L4。
