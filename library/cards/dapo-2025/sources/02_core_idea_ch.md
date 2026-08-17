DAPO 的核心贡献，是把“哪些在线 RL 记录进入更新”与“这些记录中的 token 如何加权”联合设计。在 GRPO 的组内归一化 outcome advantage 基础上，它组合四项变化：Clip-Higher 分离 importance ratio 的上下裁剪边界；Dynamic Sampling 持续采样，直到更新 batch 中只保留正确率不退化的题组；Token-Level Policy Gradient Loss 跨有效 token 聚合，而不是先让每条回答等权；Soft Overlong Punishment 则在 20,480-token 上限前的最后 4,096 个 token 区间施加线性负向调整（论文 §3，公式 8-13）。

论文意图中的一条公开记录是处理后的 prompt 加整数 ground truth。当前 Hub schema 实际提供 `data_source`、单消息 `prompt`、`ability`、`reward_model.ground_truth`、`reward_model.style` 和 `extra_info.index`。训练时，一条记录扩展为 16 条 rollout：结果规则只能看到提取出的最终答案，长度塑形只能看到回答长度，Dynamic Sampling 只能看到题组内奖励是否有变化；这些信号都不验证中间推理步骤。

与 naive GRPO 相比，DAPO 的数据侧变化很明确：已经生成的全对题组和全错题组不会进入更新 buffer。与 DeepSeek-R1-Zero-Qwen-32B 相比，DAPO 公开了更完整的算法与产物入口，但实验证据仍限于论文报告的 AIME 2024 设置。因此，其方向价值是把数据流、奖励和优化耦合成可审计对象，而不是证明公开行已经洁净，也不能用 benchmark 准确率替代数据质量审计。
