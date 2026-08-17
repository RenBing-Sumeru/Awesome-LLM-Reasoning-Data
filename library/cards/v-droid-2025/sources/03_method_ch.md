可重建的流程为：

`公开任务或基于 App Store 描述生成任务指令 -> 人工检查指令 -> emulator rollout -> 逐步提取候选动作 -> 人类/当前 verifier 标注正确动作 -> 基于熵的人工纠错 -> 展开 P3 偏好对并抽样 reverse-action 对 -> Q-LoRA 训练 verifier -> 批量候选打分 -> Android 执行与 memory 更新 -> benchmark 终止评测`。

**输入与采集。** 任务指令来自论文引用的 *On the Effects of Data Scale on Computer Control Agents* 来源与 *Android in the Wild*，另有根据 App Store 描述由 LLM 合成的任务。合成指令经过人工验证，但合成模型、prompt、decoding、各来源数量与版本以及接受标准均为 unknown。任务在 Android emulator 集群上执行，覆盖七个类别的 90 余个 app。第一轮为纯人工 cold start：标注者在每步提取动作列表中选出正确动作，累计得到 9K 对。论文报告每个任务约四分钟、总计约五小时，但没有给出任务数或标注人数（论文第 5.2 节，第 8–9 页）。

**迭代标注与选择。** 后续轮次由上一轮 V-Droid checkpoint 执行相对于该模型为域外的任务。候选分数分布熵用于筛出可能的错误；人类检查并纠正错误区域，随后继续执行直至成功。累计偏好对规模依次达到 27K、55K 与 110K。训练排除 AndroidLab 和 MobileAgentBench 所含 app，但 AndroidWorld 被明确列为域内。实际 entropy threshold、人工审核规范、其他有效动作处理、重试、失败任务保留、去重及不可变 split 均未披露。仓库 preview 的随机 99/1 划分不能作为论文实验划分的证据。

**偏好对构造与反馈。** 对含 N 个候选的状态，一个标注动作分别与其他 N-1 个动作配对。`chosen` 与 `rejected` 保存的是完整 verifier prompt，而非动作 ID。logistic preference loss 拉大正确动作与备选动作的得分差。另有约 2.5% 的子集通过执行错误动作并学习其映射得到的 reverse action 构造；随机降采样用于避免作者观察到的“反复 back”坍缩。这构成 state-action-level 的成对过程监督与学习得到的标量分数，并非 trajectory-level RLVR reward。

**模型与执行。** verifier 为 Llama-3.1-8B-Instruct-4-bit 加 MLP score head，使用 Q-LoRA rank 16、学习率 1e-4、10 个 warm-up step、逐步降至 1e-6，最终轮训练 20 个 epoch。110K 对的最终训练据报在 16 张 Nvidia A100 40GB 上耗时约 90 小时。推理时通过 vLLM prefix caching 批量打分，每步平均评估 50.3 个动作；除非另有说明，论文 latency 使用两张 RTX 4090。公开的单 GPU `train.sh`、最大长度 2800、LoRA alpha 32 与 dropout 0.05 只描述 preview 或已发布 adapter，不能证明与全部报告设置完全一致（论文第 5.3–6.2 节；HF revision `4b2ed82d9f10486dd02376b1ccbad92842e3dc7a`）。

**输出与回放边界。** 最高分动作被执行并产生下一 UI 状态。GPT-4 将动作及 UI 变化总结进 working memory；open/type/answer 的具体内容由另一个未披露 LLM 完成。系统选择 `complete task` 后停止，再由 AndroidWorld、AndroidLab 或 MobileAgentBench 各自的成功契约评测。复现至少要固定 arXiv v5、GitHub commit `8d549027634abe65a5721fe6bc3b5e84475db2f6`、上述 HF revision，以及 Android/emulator/app 与 benchmark 版本、UI 序列化、GPT-4 snapshot/prompt/settings、动作补全模型、随机种子、batch/optimizer/scheduler 细节和完整数据 manifest；其中大部分目前不可获得。
