**函数基底 → 路径。** 收集 StableToolBench 源代码函数及 BFCL-v3 多轮实现；改写 BFCL-v3 名称/描述，以免模型看到实现。保留带参数且通过模拟调用的 StableToolBench 函数，得到跨 49 个清理后类别的 5,011 个 API。对每个 API，从同类别/同 class 抽取 30 个候选，由 Gemini-1.5-pro-002 判断输出到输入的依赖是否形成图边。随机游走产生初始 function-signature path。（论文 §3.4）

**路径操作 → query/reference 序列。** Merge 合并相邻路径轮次；Insert 加入隐式或在后续复用的函数；Split 将一轮标为 `miss params` 或 `miss func`。back-translation 从每个 signature 生成用户 query；forth-translation 利用 query 和前面输出生成可执行调用。文档化 prompt 将一轮并行调用上限设为 3 个。执行 reference call 得到下一条 observation。路径长度、图判断、精确操作采样、服务版本和回放日志均未发布。（论文 §3.3-3.4；附录 A）

**参考调用 → 轨迹。** Gemini-1.5-pro-002 接收正确调用 hint 后生成正轨迹。为构造负轨迹，每个实例先从 SFT 模型收集 10 条轨迹；Gemini 将每轮与参考比较，并把不正确的调用/摘要归为 nested、short-dependency、long-dependency、wrong-summary 或 missing-function/parameter 错误；被选中的错误调用作为错误 hint 来采样负轨迹。随后打乱函数顺序，并删除包含 `Bad request` 或 `does not match` 等字符串的轨迹。（论文 §3.5-3.6；附录 A）

**训练。** 在 34,000 条正轨迹上训练 Qwen2.5-Coder 7B/14B，随后对 4,556 个正/负对应用 mDPO 加 MLE。报告的 SFT 设置包括 peak LR 1e-5、batch 64、warmup 与 linear decay。mDPO 阶段，7B 以 5e-7/batch 32 全量训练，14B 以 1e-6 的 LoRA 训练。附录 B 报告 16 张 A100、最大长度 8,172、Adam、0.1 warmup 和选定的一轮 SFT。没有公开配置、模型 revision、数据记录或环境可支持精确重建。
