公开训练源为 CodeContests_train，当前包含 4,529 行。每条记录包含来源数据集、题目描述、任务标识、stdio 执行方式、时间限制、公开的 `example_input`/`example_output`，以及私有的 `test_input`/`test_output`。论文说明其选择约 4.5K 道难度不高于 2 的 CodeContests 任务。MBPP 以及部分 LiveBench、LiveCodeBench 的函数式任务会在评测时转换为 stdio 格式。

对于每个采样任务，策略按固定文本格式生成 Python 解答与测试。Tester 必须输出测试输入、期望输出和解释。16 个代码 rollout 与 16 个测试 rollout 的交叉执行本身就产生每任务 256 个结果；随后加入私有 gold tests，用于代码评分，并构造 tester 奖励所需的正确/错误代码划分。在该估计器中，只有通过全部可用 gold tests 的代码才被视为正确；当测试套件不完整时，这个判定可能出错。

7B 和 14B 实验分别从 Qwen2.5-7B-Instruct 与 Qwen2.5-14B-Instruct 开始，采样温度为 1.0、top-p 为 1.0。论文报告学习率 1e-6、KL 系数 0.01、350 个优化步骤和 8 张 A100。Long-CoT 变体从 Qwen3-4B 开始，温度为 0.8，训练 50 步，使用回答长度变换，并在训练时截断超过 8K token 的回答。

更新采用带标准化组奖励和 KL 正则的 PPO/GRPO 风格裁剪目标。每次迭代内依次更新 coder 与 tester，而不是训练两个固定模型。当前仓库默认配置公开了采样、执行、奖励和训练模块，但默认 `total_steps` 为 120；复现论文结果需要修改默认值，并固定确切提交与配置。

主要 Best-of-N 评测采样 16 个程序和 16 个测试，再按通过生成测试的数量排序程序。最终 benchmark 正确性由 gold/private tests 衡量，而不是直接把生成测试投票当作真值。
