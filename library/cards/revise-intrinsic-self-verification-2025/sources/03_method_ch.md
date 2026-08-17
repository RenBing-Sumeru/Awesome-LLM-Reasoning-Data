基座模型从监督 prompt/label pair 采样多条推理路径。答案提取与任务专用结果检查把路径分成正确、错误两组。Stage 1 据此构造 `D_verify`，chosen/rejected continuation 由 `eos` 与 `refine` 定义；Stage 2 从 Stage 1 初始化并构造 `D_correct`，让错误前缀之后连接 `refine` 与监督 gold reasoning target。

两个阶段都把 chosen sequence 上的 SFT 与 pair 上的 DPO 结合。论文研究 Llama-3.2-1B、Llama-3.1-8B 与 Llama-3.2-1B-Instruct 变体，训练/评测来源包括 GSM8K、MATH、MetaMath 50K 子集及 3K validation。精确数据版本、分来源 path/pair 数、采样温度、随机种子与拒绝路径清单未在公开卡片元数据中给出。

MBPP 使用外部模型生成中间推理，每题保留 16 条通过单元测试的路径。这形成独立的 teacher 加执行谱系：通过现有测试只验证代码结果契约，中间解释仍由 teacher 生成，并没有逐步证明。官方仓库公开代码，但未确认公开 pair 语料、完整生成日志或训练 checkpoint。
