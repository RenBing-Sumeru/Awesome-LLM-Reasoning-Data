官方 [arXiv v2 论文](https://ar5iv.labs.arxiv.org/html/2508.15763v2)支持所披露的 CPT 规模、PDF/网页构造流水线、指令过滤与标注、Internbootcamp 任务生成、Mixture-of-Rewards 路由、8-rollout 过滤和优化设置。论文还报告了 domain recall、混合 RL 过滤和熵控制的消融或训练曲线，以及通用与科学基准评测。这些实验说明模型在作者协议下的行为，却不能证明底层记录准确、无污染、可合法复用或已经发布。

官方 [Intern-S1 仓库](https://github.com/InternLM/Intern-S1)与 [Hugging Face 模型卡](https://huggingface.co/internlm/Intern-S1)确认 Intern-S1 权重、配置和推理示例以 Apache-2.0 发布，并确认其起始组件为 Qwen3 235B MoE 与 InternViT-6B。报告称训练基础设施将通过 XTuner 发布，但已核查的发布中没有 5T-token 语料、离线指令记录、Internbootcamp 完整任务/样本清单、在线轨迹、Mixture-of-Rewards 实现或完整 verifier 映射。

因此，证据支持的是一个不对称结论：模型产物可用于推理复用，数据与反馈流水线则只达到 recipe 级披露。基准性能不能弥补这一审计缺口。
