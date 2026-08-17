可重建的 pipeline 如下：

1. **图收集。** 从 seed entity 出发，用网络工具寻找相关实体和事实，主动连接已有节点以构造更稠密、含环的 component，并在内部保留 discovery query、source URL 和 entity statistic。seed list、crawl date、source manifest 和生成模型均未披露（论文 §3.1）。
2. **子图与 QA 合成。** 用 random walk 提取 connected subgraph，以 Weisfeiler-Leman 检查非同构，平衡不同 orbit-node 角色的提问焦点，再用 semantic ambiguity、distractor 或 structural constraint 生成问题。最终稿报告 3 万余条 instruction-tuning pair；确切数量、schema、split、重复项和逐条 provenance 未知（§§3.2–3.4）。
3. **SFT 轨迹收集。** 未具名的高性能开源模型求解合成任务，rejection sampling 保留成功轨迹；candidate 数、接受规则、retry budget、decoding 和失败轨迹保留情况均未报告。Qwen3-30B-A3B-Thinking-2507 接受 cold-start SFT（§4.1）。
4. **双环境。** 将生成器适配到离线 Wikipedia corpus，构造 simulation train/test task 并快速迭代算法；最终真实网络训练则通过调度层管理多个搜索源、页面 parser 和 Python，提供 QPS 限制、cache、retry、degradation 和 backup（§4.2）。
5. **On-policy RL。** 生成当前策略的 episode group，用 token-level policy gradient 和 leave-one-out advantage 优化定制 GRPO。部分 negative trajectory 被排除，例如超长且没有 Final Answer 的 run；不使用 dynamic sampling。`R_i`、group size、clip 值和完整排除规则未知（§4.2）。
6. **训练配置。** Megatron SFT 使用 batch 64、learning rate 从 5e-6 衰减到 1e-10、cosine decay、weight decay 0.1；rLLM RL 使用 batch 128、learning rate 1e-6、temperature 1.0、top-p 1.0。推理允许 128k context 和最多 100 轮 ReAct（Appendix B；§5.4）。

复现还需要 SailorFog-QA/V2/IterBench 的阶段混合比例、graph/prompt lineage、reward 实现、Wikipedia snapshot、真实 provider/parser 版本、cache/retry 记录、sandbox image、dependency commit、seed，以及全部保留/排除 rollout。V2 项目目录没有发布这些内容。
