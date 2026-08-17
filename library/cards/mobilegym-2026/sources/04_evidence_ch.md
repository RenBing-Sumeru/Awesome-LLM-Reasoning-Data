在 256 个测试模板上，九个 agent 的 Success Rate 为 9.4%–58.8%。Gemini 3.1 Pro 报告 58.8±1.4 SR、72.1 PR；Qwen3-VL-4B-Instruct 为 9.4±0.6 SR、20.1 PR。开源模型使用四次参数重采样 trial，多数闭源模型只有一次运行；闭源行中仅 Gemini 给出重复估计。Unexpected Side Effects 为 4.7%–14.5%，并不随 SR 单调下降，说明成功与非预期状态变更是不同测量对象（论文表 2、§5.1）。

GRPO 案例将 Qwen3-VL-4B-Instruct 在 Test256 上的 SR 从 9.4% 提高到 22.2%，增加 12.8 个百分点。各难度层的 SR 分别从 L1 的 71.2 提高到 92.5、L2 的 12.3 到 37.7、L3 的 0.6 到 11.7、L4 的 0.3 到 1.2。L4 几乎不变是重要负面边界：10 个训练 step 并未解决最难层（论文 §5.2）。

Sim-to-real 实验先根据 base/trained 模型各四次 simulator rollout 对任务分桶。Uplift、Stable-pass 和 Mid 三个 bucket 共 67 个任务，其中 8 个因无法等价或安全复现而排除，剩余 59 个在 Redmi Note 12 Turbo 上执行。在这一筛选后的 signal subset 上，simulation 从 33.9% 升至 76.7%（+42.8 点），真机从 32.2% 升至 72.9%（+40.7 点），即保留 95.1% 的模拟侧增益；另抽样 15 个 Stable-fail 任务，两种模型在真机均为 0/15。作者明确把它视作 existence proof，而不是覆盖完整 256 任务的广泛迁移研究（论文图 5、§5.2；附录 H.5）。

人工审计 118 条 signal-subset 真机轨迹时，Qwen3.6-Plus judge 出现 12 次错误（10.2%）；GPT-5.4 在部分不同的样本上同样出现 12 次错误。这支持模拟器内部采用 state-based verification 的动机，但不能证明每个手写状态检查器都正确（论文 §5.2、附录 J）。

效率测量报告每个浏览器实例约 400 MB 内存、50 MB 磁盘、约 3 秒冷启动；在作者服务器上，256 个并行实例约用 100 GB 内存、CPU 低于 10%，完整 256-task 评测约 6 分钟（论文表 1、§5.3）。这些系统测量和模型结果均为作者报告，本 Card 未独立复现。
