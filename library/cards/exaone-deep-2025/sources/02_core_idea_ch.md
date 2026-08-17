EXAONE Deep 是一组从对应 EXAONE 3.5 Instruct 检查点微调而来的推理专用模型，规模为 2.4B、7.8B 和 32B。报告列出三种后训练方法：监督微调、使用 SimPER 的 DPO，以及使用自研 GRPO 变体的 Online RL。官方材料报告 1.6M 条 SFT 样本、20K 条 DPO 偏好样本、10K 条 Online-RL 实例，SFT 数据约含 12B token。

被披露的训练对象是一种过程格式响应：查询后先输出 thought-tag 推理区段，再输出用于自包含总结推理的最终答案。论文把 thought 区段描述为承载逐步推进、反思、自检和纠正。SFT 只给出 Math、Code、Science 与 Others 等宽泛分组，没有说明来源数据集或轨迹作者。

因此，这是一项“权重可下载、仅限研究用途”的模型发布，而不是开放数据发布。DPO 偏好关系和 Online-RL 反馈只披露到算法名称；标签者、奖励来源、验证器、环境、rollout 与验收规则仍为 `unknown`。

