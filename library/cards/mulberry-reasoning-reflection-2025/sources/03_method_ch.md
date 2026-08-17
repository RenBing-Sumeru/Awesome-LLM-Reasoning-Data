# 方法

1. **Step 1 - 汇集源问题。** Input（输入）：来自数学、图形理解、应用题、医学、科学和自然场景 VQA 的 26 万条公开图像、问题与答案记录。Operation（操作）：保留每条记录的图像、任务指令和参考答案，把它们整理为搜索问题。Output and transition（输出与转移）：一个多模态问题成为 CoMCTS 的根节点。Check / stop rule（检查与停止规则）：附录 A 的六组来源合计必须为 26 万，每个根节点都要有可用参考答案。
2. **Step 2 - 集体扩展。** Input（输入）：选中的根节点或未完成推理前缀，以及四个策略模型。Operation（操作）：GPT-4o、Qwen2-VL-7B、Llama-3.2-11B-Vision-Instruct 和 Qwen2-VL-72B 各生成一条延伸至终止答案的候选续写。Output and transition（输出与转移）：多样的子路径被加入同一棵问题专属推理树。Check / stop rule（检查与停止规则）：若选中节点已经终止，则不再扩展。
3. **Step 3 - 评分、剪枝并选择。** Input（输入）：新增候选节点、它们的前缀，以及充当评审的同一组四模型。Operation（操作）：对模型判断取平均，剪去低于阈值 `t=0` 的节点及其后代，反向更新价值与访问次数，再选择 UCB 最高的存活叶节点。Output and transition（输出与转移）：该叶节点成为下一轮起点。Check / stop rule（检查与停止规则）：找到答案正确的路径或达到 20 轮时停止，否则继续扩展。
4. **Step 4 - 序列化有效与反思路径。** Input（输入）：成功路径 `Y`，以及同时含正、负兄弟节点的搜索树。Operation（操作）：保留 `Y`；构造反思数据时，采样一个正节点，选择其 UCB 更低的负兄弟节点，并插入负节点、重新思考提示和纠正后的正节点。Output and transition（输出与转移）：`{Q,Y,S}` 或 `{Q,Y,Y_reflect,S}` 成为 SFT 目标，仅有 1.5 万个问题贡献反思目标。Check / stop rule（检查与停止规则）：反思记录必须保留最终正确路径，未成功的搜索不得进入数据集。
5. **Step 5 - 训练并评估消费模型。** Input（输入）：Mulberry-260K 与 Qwen2-VL、LLaVA-NeXT 或 Llama-3.2-Vision 基座模型。Operation（操作）：用有效和反思目标进行两轮集体 SFT，再在八个视觉推理基准上评测。Output and transition（输出与转移）：得到 Mulberry 检查点和基准结果。Check / stop rule（检查与停止规则）：由固定任务评分器判断最终正确性，论文没有增加 RL 阶段。

**可复现性：**需要核验 NeurIPS/arXiv 论文、GitHub 搜索与训练代码、采用 Apache-2.0 的 Hugging Face JSON/图像文件和已发布检查点。复现时应固定四个 teacher 版本、提示、阈值、UCB 常数、最多 20 轮搜索、来源清单、反思采样随机性和 SFT 超参数。生成温度、UCB 常数、完整 token/成本账本、语义去污染流程及可复用训练/验证划分均未披露。
