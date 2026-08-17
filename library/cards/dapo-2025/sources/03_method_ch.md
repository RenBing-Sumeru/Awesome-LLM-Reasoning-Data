输入 -> DAPO 从网页和官方竞赛主页抓取数学题与答案，并结合人工标注。由于原始答案可能是表达式或公式，作者先选择题目，再要求一个身份未披露的 LLM 把问题改写为需要整数结果的形式。附录 A 给出四步框架：识别答案形式、改写题目、求解改写题、输出整数，并为各步提供 few-shot 示例或详细指导。公开行没有保留来源 URL、原答案、改写 trace 或验收决定。

构造与发布 -> 论文称筛选和改写后得到含 17K 个 prompt—整数答案对的 DAPO-Math-17K（论文 §3.5）。但在 Hub revision `65877096c24ffa7abc4e4fa5edb95cf3413a5674` 上，Dataset Viewer 的单一 `train` split 显示 1,791,700 行，字段见 §02；第 0 行又出现在 offset 17,917 和 179,170。复用者不能把可见行数当成 179 万个独立任务。

在线 rollout 与反馈 -> Qwen2.5-32B 为每题采样 16 条回答。论文规定：`is_equivalent` 接受预测最终答案时奖励为 +1，否则为 -1。Dynamic Sampling 过采样并过滤 accuracy 为 0 或 1 的题组，直到 512 个合格题组填满更新 batch。Soft Overlong Punishment 在 16,384 token 以内为 0，随后 4,096 token 线性下降，并在 20,480-token 上限处达到 -1，再与正确性奖励相加。

优化与输出 -> DAPO 移除 KL 项，使用组内归一化 advantage、0.2/0.28 的 Clip-Higher 边界和 token-mean policy-gradient loss。论文报告 AdamW 常数学习率 1e-6、20 个 rollout step 的线性 warm-up、512 个 prompt 的训练 mini-batch，以及每个 rollout step 进行 16 次梯度更新。输出是更新后的策略，而不是经过整理的 rollout 发布。AIME 2024 评估把集合重复 32 次，使用 temperature 1.0、top-p 0.7；这些评估参数不能当作论文训练采样参数。

复现边界 -> 当前官方 verl-recipe 将论文复现固定到 verl commit `4f80e465c2ec79ab9c3c30ec74b9745de61d0490`，并记录 128 张 H800、容器镜像，以及 training temperature 1.0、top-p 1.0 的脚本。论文没有把其报告运行与该产物逐项绑定，而 DAPO 仓库当前 README 仍指向已删除的 `gm-tyx/puffin` branch。因此精确复用必须同时固定数据集、verifier、recipe commit、容器、硬件与随机种子。
