构造链可以拆成五个可审计阶段：

| 阶段 | 有证据支撑的 contract |
|---|---|
| Inputs | 来自自定义 College Physics/Chemistry pool、PubMedQA labeled subset 或已配置 negotiation instance 的 `(problem, answer)`；手工设计的 role prompt 与 directed graph |
| Interaction | 每个 role 根据任务与 predecessor message 生成；competitive role 还条件化于 prior round 与 game state |
| Feedback | QA 暴露解析后的 final-answer equality；失败 QA augmentation 增加 ground-truth-conditioned critic text；Actor-Critic 增加 learned Judgment 与 Critic feedback；game 暴露 terminal state 与确定性 role utility |
| Selection | 直接 terminal success 接纳所有参与 role message；失败 QA 只有在 final correctness 被恢复时，才接纳 regenerated selected role 与 rerun successor |
| Outputs | 每个 role、每个 iteration 的 SFT library，随后分别做标准 SFT 并再次 rollout；论文运行的精确 library 与训练后 model identifier 均未发布 |

College Physics/Chemistry 的 graph 为 Physicist/Chemist → Mathematician → Summarizer。PubMedQA problem solving 使用 Context Analyst → Problem Solver。Actor-Critic 使用 Actor、Judgment 与 Critic，被拒绝的 Actor response 经 feedback 和 regeneration 处理。Resource Exchange 与 Ultimatum 最多八轮交互，Seller-Buyer 最多十轮。自然语言 move 由 game code 解释，用于更新 state 并计算 role-specific utility。

Problem-solving verification 把 final answer 解析为 multiple-choice letter、number 或 yes/no label，再与 ground truth 比较。当前 physics/chemistry 实现在部分路径只搜索很短的 suffix，因此 formatting 可能改变 correctness。主要 inference temperature 为 0。明确列出的 backbone 是 `gpt-3.5-turbo-0125`、`gpt-4o-mini-2024-07-18`，以及 Table 3 与 Appendix D 中的 `Llama-3.2-3B-Instruct`。Role policy 通过 OpenAI Fine-tuning API 更新，而非 policy-gradient objective。

论文报告 physics 共有 212/107 个 train/test item：MMLU 68/34、GPQA 57/29、TheoremQA 87/44。Chemistry 为 128/65：MMLU 66/34、GPQA 62/31。PubMedQA 采用 500/500。精确 source row、upstream revision、ordering、split seed 与 duplicate/decontamination decision 均未公开。九个 QA task/backbone cell 中，Table 7 支持 1,446 个初始正确 episode 与 444 个成功修复失败，共 1,890 个 case-level episode。这不是 role-SFT-row count，因为一个 episode 可产生多条记录，而且 repair 可从不同 role 开始。

实现仍有关键控制量未解决。Algorithm 1 暴露 `epsilon`，Algorithm 2 暴露 `maxsol`、`maxf` 与 `maxre`，但数值没有披露。总迭代输入 `T` 已定义，却没有固定完整的 main-run iteration manifest。精确 epoch、learning rate、batch size、provider default、run seed、fine-tune ID、token/cost budget 与 compute inventory 均为 `unknown`。当前代码常使用 4,096-token response cap，但这不构成完整论文运行预算。

Artifact 与 version 清单：

| Artifact | 已核验状态 |
|---|---|
| NeurIPS final paper | 官方 30 页 Main Conference Track PDF |
| Proceedings supplement | 官方 ZIP，含三类 setting 实现；没有 README、environment file、license、sample data、trajectory、log 或 output |
| Current repository | 检查固定在 `16643cdc484b07d4d20419ba785a32a9845639b7`；80 个文件、13 次 commit，没有 tag 或 GitHub release |
| Code evolution | 当前仓库新增 documentation、environment、MIT license、sample data 与 helper；与 supplement 共有的 66 个文件中有 18 个不同 |
| Public data | 只有一个五行 `dataset/phy_train.jsonl`，字段为 `index`、`question`、`groundtruth`、`task`；全部是 MMLU physics input |
| Experience libraries | `null`；没有论文运行的 role record、完整 success/failure、critic feedback、reward 或 iteration manifest |
| Models/checkpoints | `null`；没有 SiriuS weight 或 provider fine-tune identifier |
| Logs/release/dataset card | `null`；没有论文运行 log、immutable release 或 dataset card |

因此，仓库是开放 recipe 与部分 implementation，而不是所报告数据生命周期的 executable archive。PubMed script 含未设置 path，competitive fine-tuning script 含省略的 path value，problem-solving 的路径约定在多个 script 间不一致。复现必须修复这些路径并构造缺失 manifest，不能把五行 sample 当成训练数据。
