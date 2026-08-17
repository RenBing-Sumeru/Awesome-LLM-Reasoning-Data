DeepSeek-V3.2、GLM-4.7、GPT-5.1 与 Qwen3-32B 分别承担 schema、database、code、test、debug、dependency 和 task agent。ScaleEnv 生成 16 个领域基础与 2,560 个任务。Scaling 实验固定 1,024 个任务，将训练领域数设为 2、4、8、16；另一个稳定性检查比较两个互不重叠的 4 领域集合，每组仍含 1,024 个任务。

整个合成循环保持可执行。数据库测试检查完整性约束，工具测试使用匹配实例与预期状态转移。Seed chain 表示为代码，使前序输出进入后续参数。状态构建实际运行 chain、注入干扰项、导出 ground-truth 终态，再扩展依赖子图。意外错误调用 debug agent，直到采样测试通过。

Qwen3-8B 与 Qwen3-32B 使用 Zero-RL GRPO 训练 48 步，Qwen2.5-72B-Instruct 模拟用户。两者 rollout batch size 分别为 1,024 和 2,048，体现大批量采集；但论文未披露单任务 group size、并发度、worker 数、硬件、统一 horizon、解码、种子，且公开渲染文本未显示数值学习率。

回放一个任务需要初始状态、工具/数据库代码与依赖、simulator 设置、agent checkpoint、完整对话/工具 trace、终态 checker 和随机种子。概念上的任务对象支持恢复初始数据库，但论文没有发布 reset API、隔离保证、snapshot 格式或可运行包。
