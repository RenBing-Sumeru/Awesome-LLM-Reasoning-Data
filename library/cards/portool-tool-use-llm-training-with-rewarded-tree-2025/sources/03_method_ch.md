流程从 8 个领域的 3,607 条去标识化生产查询开始，并划分为 3,072 条训练项与 535 条评测项。私有 sandbox 提供 21 个生产式搜索、上下文、计算、转换、排序与终止工具。运行时输出或显式错误被追加到策略上下文。对时间敏感评测，地点固定为加州 Cupertino，并以秒级精度记录时间戳。

Qwen-2.5-7B-Instruct 与 Qwen-3-1.7B 先接受 5 个 epoch 的监督微调，再进行 15 个 epoch 的 PORTool RL，论文报告为 90 个更新步骤。每个训练查询生成 8 条随机 rollout，最多 6 个工具调用步骤；每个推理步骤上限为 2,048 token。训练解码使用温度 1.0、top-p 1.0 和 top-k -1。实现使用 VeRL、VLLM、LoRA rank 16、batch size 512、PPO 式 minibatch 128、学习率 1e-6、不使用 KL loss、最大 prompt 长度 30,720、单次 response 上限 1,024，以及 8 张 H100。

在一个分叉处，PORTool 从折扣后的后代终局结果和有界格式/执行反馈得到子节点暂定值。若 sibling 可区分，自适应聚合强调最佳分支；若最佳情况打平，则平均后代，使可靠子节点优于偶然成功子节点。步骤重要度随后归一化为分叉相对 advantage，并经缩放后与轨迹相对 advantage 混合。

复现需要精确查询、SFT 初始化、模型 checkpoint、解码种子、完整 8 分支树、工具 schema 与后端版本、运行时响应、时间/地点上下文、全部 5 个原始 judge 投票及 optimizer 状态。公开附录给出 schema、prompt、设置和示例，却没有提供这套可执行 bundle。
