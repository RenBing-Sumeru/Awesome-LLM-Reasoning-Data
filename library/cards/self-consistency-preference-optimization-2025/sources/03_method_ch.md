SCPO 从基础模型和无标签 seed query 开始。GSM8K 与 MATH 使用 Llama-3 Base 8B 作为 seed model；ZebraLogic 使用 Llama-3 Instruct 8B。Llama-3 Instruct 8B 根据四个训练示例为数学任务生成新问题，或通过 one-shot 改写与扰动生成 ZebraLogic 问题。回答与新问题均以 temperature 0.7、top-p 0.9 采样。

GSM8K 与 MATH 首先采样 k=8 个回答。如果后续模型过于一致而无法产生 rejected 回答，则再生成 8 个回答。初始生成问题和偏好对过滤使用 tau=0.5k；第二 iteration 的数据在 GSM8K 上提高到 0.7k，在 MATH 上提高到 0.6k。ZebraLogic 的表格答案较难精确重复，因此使用 k=16；M1 使用 tau=2，M2 使用 tau=0.5k。主循环用加权 DPO 加 NLL loss 训练 M1，再训练 M2。带 gold label 的半监督偏好对按正确性构造，权重为一。

论文评测 GSM8K、MATH 和只有 test set 的 ZebraLogic，并为数学任务保留 dev split 做模型选择。报告训练十个 epoch，learning rate 为 5e-6，使用 cosine scheduling；完整复现仍需提示、parser 与等价规则、簇内随机抽样、alpha/beta 设置、seed、生成问题、全部 rollouts 和准确 checkpoint。Appendix D 给出提示，但未确认官方代码、偏好对文件或版本化 rollout 发布。
