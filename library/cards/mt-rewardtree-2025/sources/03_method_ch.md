输入是 WMT17–WMT20 test set 与 FLORES development/test set 中 DE–EN、EN–DE、RU–EN、EN–RU、ZH–EN 和 EN–ZH 六个方向的源句；确切上游版本、record ID 和分配 manifest 未披露。generator 为 TowerInstruct-7B-v0.2，temperature 为 0.95。论文将翻译建模为 deterministic token MDP：已生成前缀是 state，token 是 action，EOS 终止 rollout。

对每个选中的前缀，approximate MCTS 按模型 logits 扩展 top-2 下一 token，并从每个兄弟分支采样三条到 EOS 的完整翻译。COMETKiwi 为每条补全打分，三次得分均值作为该 sibling node 的 value；value 更高的兄弟分支成为下一循环的前缀。数据保留阶段从较优和较劣 sibling 各选一条 rollout，仅当二者 COMETKiwi score gap 位于 0.04 到 0.4 之间时才保留 pair。被过滤 candidate 的数量与身份、search depth 分布、最大长度、top-p、seed、retry policy 和总计算量均未知（论文 §3.1、§4.1、Figure 2）。

最终 training release 含六个方向共 8,652 条记录。prefixed 与 arbitrary repository 均只暴露一个名为 `train` 的 split，字段为 `instruction`、`input`、`chosen`、`rejected`、`chosen_score` 和 `rejected_score`。MT-PRMBench 含 1,200 条记录，每个方向 200 条；其 prefixed 与 arbitrary repository 同样只有一个名为 `train` 的 split，字段相同但没有 `input`。公开 schema 没有说明两个标量 score 是保留 rollout 的 COMETKiwi 分数、三次 rollout 的 node mean，还是其他导出值（Table 2；官方 Hugging Face viewer）。

作者使用 DPO 或 KTO 及 `beta=0.1` 训练 implicit PRM，backbone 为 LLaMA-3.2-3B-Instruct 和 Qwen-2.5-3B-Instruct。论文公式从 policy/reference log-probability ratio 导出 per-token process reward，并以加权 token reward 汇总 sequence score。之后，Qwen2.5-14B-Instruct 与训练后的 PRM 组合用于 reward-guided test-time decoding；这是 inference-time 应用，并非 RL 集成的证据（§3.2、§4.1、§5.3）。

复现时需要固定 generator、PRM backbone、COMETKiwi checkpoint、paper/code/data/model revision 和 WMT/FLORES 版本，并补齐缺失的 decoding、optimizer、split 与 decontamination 设置。已确认官方链接指向 GitHub repository，但整理环境未能验证其内容与许可，因此本 Card 不声称可以端到端执行 replay。
