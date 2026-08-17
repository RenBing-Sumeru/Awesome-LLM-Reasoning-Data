**任务来源与 gold 抽取。** CodeScout 从 SWE-Smith 的 issue-resolution 实例出发。论文报告经过筛选的任务池约含 39K 个 Python issue，覆盖 128 个仓库；固定版本的官方预处理任务 artifact 实有 39,287 行。处理流程排除会创建或删除文件的 pull request，删除空 issue 描述，并忽略非 Python target。gold patch 被解析为修改过的文件、module/class 与 function/method。作者扩展了 LocAgent 风格的解析逻辑，以覆盖新增成员和 class attribute、import 与全局变量，并忽略只修改 docstring 的情况。

**环境与 agent 接口。** 每个任务提供修复 pull request 之前的故障仓库状态；SWE-Smith 预处理构建路径会应用 bug-inducing patch。随后 OpenHands-Bash 在已知仓库路径上提供 Unix terminal。agent 使用常规命令行工具搜索，论文报告的 ripgrep 版本为 15.1.0。流程不安装项目依赖，也不运行测试。结构化 `LocalizationFinish` 工具提交一个或多个文件位置，并可细化到 class 与 function 名称。

**有效性与奖励。** 预测必须恰好包含一次可解析的 finish 动作，并通过路径/位置 sanity check。verifier 在三个粒度上计算集合 precision 和 recall，再转为 F1；空提交或无效提交得零分。文件、module 与 entity F1 之和位于 [0,3]。CodeScout-14B 对恰好四轮的轨迹额外加 1，这与定位正确性相互独立。该辅助项鼓励特定交互长度，但不会把终点定位标签变成 process-level supervision。

**直接 4B 与 14B rollout 生成。** CodeScout-4B 从 Qwen3-4B-Instruct-2507 开始；CodeScout-14B 从关闭 thinking 并修改 chat template 的 Qwen3-14B 开始。二者都在异步 SkyRL/OpenHands 流程中以温度 1.0 采样。论文侧 4B 训练使用 200 步、batch size 8、每实例八条 rollout、40K context 和六轮；14B 训练使用 300 步、batch size 32、每实例四条 rollout、带 YaRN 的 50K context 和四轮。

**优化 scaffold。** 方法使用修改后的异步 GSPO 和 sequence-level importance ratio，允许 rollout policy 最多落后四个优化步。它不使用 KL 项、entropy loss，也不进行 advantage 标准差归一化。共同设置包括 AdamW、恒定学习率 \(10^{-6}\)、\(3\times10^{-4}\) 与 \(4\times10^{-4}\) 的 clipping bounds、每批一个 update epoch，以及八张 H100。权重同步后会终止仍在进行的 inference；达到最大步数但没有 finish 的 rollout，其 policy-loss mask 被设为零。

**独立的 1.7B RFT/RL 路径。** CodeScout-14B 在随机选择的 7.7K 个训练实例上采样，只保留文件、module、entity 三层 F1 均为 1 的轨迹，得到 4K 条 RFT 样本。Qwen3-1.7B 先 fine-tune 一个 epoch，再在 800 个不重叠实例上进行 RL，配置为 100 步、batch size 8、八条 rollout、32K context 和四轮。已检查的公开训练 rollout 发布不包含这些 1.7B 轨迹。

**公开布局。** 官方 Hugging Face artifact 包含两个 configuration 与两个单文件 `train` split：`CodeScout_14B/train-00000-of-00001.parquet` 有 39,040 行，`CodeScout_4B/train-00000-of-00001.parquet` 有 15,805 行。顶层字段为 `instance_id`、`reward_dict`、`chat_messages`、`step` 和 `rollout_number`。对话包含 role/content block、tool call 与 ID，以及 tool schema。逐行数据没有仓库 URL、精确 commit、应用的 patch、gold target、checkpoint SHA、随机种子、token 数、停止原因、loss mask、logprob 或错误类别。

**版本与配置审计。** 已检查代码固定在 commit `34789dcb21cc9e6595c2d27ad832f69ab146006f`，rollout 发布固定在 commit `65a3599683b901be691621f9eab7cd932a9a2c5f`。当前脚本不能直接复现论文设置：14B 脚本默认八条 rollout 与六轮，而论文为四条/四轮；4B 脚本默认十轮，而论文为六轮。尽管 Hydra override 可以改变部分参数，论文实验的精确启动命令仍未发布。
