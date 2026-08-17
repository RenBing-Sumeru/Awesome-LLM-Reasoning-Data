可重建流程如下：

1. **收集。** 载入 InvBench 训练程序，运行 UAutomizer，只保留 baseline 为 `TRUE` 且至少提取到一个循环不变量的记录。公开 raw 表包含来源文件名、原始/改写程序视图、baseline 判定、时间、easy/hard 标签和 invariant 列表。
2. **规范化。** 把每个原始不变量解析为 AST，自底向上应用重言式/矛盾式规则、括号最小化和去 cast；排除 `TRUE`、`FALSE`、`0`、`1` 等退化目标。
3. **生成。** 若规范化不变量至少 20 字符，则通过 Together 调用 Kimi K2 Thinking，并提供完整 simplification prompt。所核验官方配置使用 temperature 1.0、`max_tokens=16384`、`n=4`；按空白规范化后的精确字符串去重。紧凑不变量不经过 LLM。
4. **验证与分级。** 把每个候选解析为无副作用 C 布尔表达式；UAutomizer 并行检查归纳正确性与目标充分性，以两次运行的最大值和该记录的直接验证 median time 比较。所有 LLM 变体失败时，再检查规范化 fallback。
5. **发布与选择。** 深拷贝来源记录并加入 `gt_invariant`：marker、raw/pretty/simplified/target 形式、rationale、正确性/充分性/加速布尔字段、数值 speedup、grade 和两项验证时间。Hub 上 curated-full 表有 7,763 行，并非直接 SFT-ready；论文 V2 实验再筛 grade >= 2 且 chat-template 序列长度 <= 1,024，得到 7,284 条，并按 5,827/1,457 划分。
6. **训练与评测。** 把一个带 marker 的程序和一个 JSON invariant 目标序列化用于 SFT。论文对 Qwen3-0.6B/4B/14B、Llama-3.1-8B、Mistral-7B 报告 full fine-tuning，Qwen3-8B 使用 LoRA。InvBench 上每个模型为指定循环输出一个不变量，再由同一形式化检查计算 validity、correctness、speedup、VBP 和含 latency 的 VBP-E2E，共运行三次。

与论文匹配的验证环境是 UAutomizer 0.3.0-dev-d790fec（SV-COMP 2025）、Java 21、32-bit `unreach-call`、runlim 限制 16 GB、单项 600 秒 timeout，硬件为 AMD EPYC 9354/L40S 节点。复现还应固定 code commit、上游程序、模型 revision、tokenizer/chat template、Together 提供的 Kimi revision、随机种子、baseline timing runs，以及候选/并发次序。核验的 `master` commit `678ab76b3db3ffb5cd21a726b9036cf4d8d5329b` 没有 release tag，当前 Qwen3-8B/14B 默认配置与论文 LoRA 分配也不完全一致；在漂移被解释前，应以论文设置为准。
