verifier 完全由 LLM 驱动：GPT-4o 生成并验证预期输出，搜索模型模拟执行而不真正运行代码。共享模型偏差、算术错误、语言支持不足、畸形测试和错误预期输出都可能变成自我确认的 reward。要求全部抽样测试通过虽具有不对称性，但当测试遗漏 bug 时仍不能消除 false positive。对部分 BigCodeBench 任务，方法退回 simulated discussion，使原本就不可执行的判定更弱。

APPS 实验随机使用 100 道 competition 子集，但未确认不可变 item list 与随机种子。搜索成本依赖 prompt、专有 GPT-4o 行为及八次 rollout 的随机性。论文承认对 GPT-4o 的依赖，并承诺在接收后发布代码、test-case data flywheel 与文档；目前未确认官方发布。原始搜索树、失败 case、reward 记录、reference-use 标记、精确模型 endpoint、生成 artifact 许可证和污染控制均未知。由 LLM panel 给出的轨迹评分只是增加了一层 judge，并非人工 ground truth。
