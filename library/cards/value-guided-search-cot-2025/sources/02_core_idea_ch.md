一句话贡献是：把从长 CoT 随机截断位置继续生成所得的低成本最终答案结果，转化为密集的 token-level value target，再用训练出的 value model 选择 4,096-token 搜索块并为最终答案投票加权。

在数据构造阶段，四种规模的 DeepSeek-R1-Distill-Qwen 负责生成多样 roll-in，DeepSeek-R1-Distill-Qwen-1.5B 则固定为 rollout policy。每个提示生成 14 个 roll-in，每个 roll-in 取四个随机截断点，共得到 56 个续写。token-level 交叉熵目标把完整回答的三分类结果传播到该 rollout 的每个 token。这样可让每个 rollout prefix 获得 trajectory-value target，但并不声称标签定位了第一处错误。

反馈契约有两层。`math-verify` 将解析出的最终 `\boxed{}` 答案与参考答案比较；只有正常结束且正确的回答 reward 为 1，错误回答或达到 16,384-token 上限的回答 reward 为 0。随后，DeepSeek-VM-1.5B 预测从当前前缀继续时，固定 1.5B 策略最终答对的概率。第一层只能观察最终答案等价性，不能验证证明过程；第二层近似的是条件于特定策略的成功率，对更强 generator 或细微推理错误可能失准。

推理时，VGS 采样分块，用 value model 对前缀打分，以宽度 2 保留 beam，可通过 DVTS 重复搜索，最后对候选答案做加权多数投票。相对多数投票和 best-of-N，选择可以在完整答案耗尽预算之前介入；相对按步骤切分的传统 PRM 监督，数据接口是“随机前缀续写 + 终点结果”，而非逐步标注。其方向是**面向预算受限长 CoT 搜索的结果监督轨迹价值**，而不是声称学习式 value 能普遍取代语义过程验证。
