如果已有数学题、编程题及可靠答案检查器，可复用 PRIME 代码，将当前策略生成的多条响应转为 outcome label，再在线学习 token 级过程奖励，输出经 RL 优化的推理模型。

若目标是训练离线 PRM，可直接使用 EurusPRM-Stage1-Data 的 response、label、instruction dataset 和 generator model 字段，训练响应级隐式奖励模型，并用 held-out 正负响应对测试判别准确率。使用前应检查原始数据来源、去重和 benchmark 污染。

它也可作为 outcome-only RL 的受控基线扩展：保持 prompt、rollout 数和 PPO 配置不变，仅增加在线隐式 PRM。任务缺少可信 verifier，或错误过程可能频繁获得正确结果时，不应直接沿用其监督契约。
