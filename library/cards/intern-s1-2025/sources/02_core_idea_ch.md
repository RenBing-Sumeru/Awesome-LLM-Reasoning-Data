报告把两套构造系统连接起来。预训练侧采用 page-level PDF parsing：多数页面先由 MinerU 处理，含较多公式或符号的页面再路由给成本更高的 VLM parser；domain-centric web pipeline 让 LLM agent 按站点域名决定丢弃、改写或保留页面；scientific recall 则用强 LLM 生成 silver label，再训练成本较低的 fastText 或 1.5B classifier。其产物是科学数据占比较高的 CPT 混合，而不是一个具名、可复用的数据集。

后训练侧把 best-of-N 指令微调称为“offline reinforcement learning”，理由是保留的响应已经按准确性、流畅性或安全性等奖励标准筛过。在线 RL 随后通过 Mixture-of-Rewards 把不同任务的反馈映射为统一标量：可验证任务可以使用 CompassVerifier、规则或环境反馈，开放式对话则使用 POLAR-7B。最终数据对象是带标量奖励的文本或多模态 prompt-response 轨迹，部分样本还带二元正确性信号。

因此，这项工作应归为前沿流水线中的混合验证 SFT 与 RLVR。官方发布提供模型权重和推理工具，却没有开放训练语料、完整 Internbootcamp 任务集或可回放奖励层。
