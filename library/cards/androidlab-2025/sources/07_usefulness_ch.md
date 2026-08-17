对 `environment_agent_trajectory_data` 而言，AndroidLab 提供了把 interactive mobile episode 映射为可审计 post-training field 的具体蓝图：task source、XML 或 marked-screenshot observation、history、analysis/action target、environment state、completion judgment 与 provenance。重建者可以在保持 action vocabulary 与 benchmark task 不变的情况下，用两种 observation mode 比较 representation effect。

operation/query 拆分适合 verifier 设计研究。构建者可以分别测试 UI-tree/device predicate 对 alternate valid state 与 XML drift 的稳健性，审计 GPT-4o/GLM-4 semantic judgment 在 paraphrase 和错误判定上的表现，并把 agent-selected Finish 与 evaluator completion 分开记录。fresh AVD/container reset、固定 time/location、25-step budget 与直接从 app 内启动构成一个 evaluation baseline；其缺失的 image/APK hash 应成为明确的审计项。

对 SFT 而言，可辩护的数据 recipe 是 human physical-device execution，随后进行 second-annotator/reward-model cross-verification、privacy filtering、self-exploration exclusion 与 XML-to-SoM conversion。不得把更大的 10.5K-trace pool 表述成 SFT corpus。dataset license、archive inspection/hash、split 与 overlap disclosure、failure retention 以及 3-vs-5 epoch recipe 冲突解决之前，training reuse 仍被阻塞。

复用等级：当 repository、environment、judge 与 task config 被固定后，可作为论文/代码支撑的 evaluation 与 audit reference；也可作为 SFT recipe reference，但尚不能作为 unrestricted training data。accepted `training_use` 仅为 `sft` 和 `evaluation`；现有公开证据不支持 RLVR、preference optimization、reward-model reuse 或 general agent-RL claim。
