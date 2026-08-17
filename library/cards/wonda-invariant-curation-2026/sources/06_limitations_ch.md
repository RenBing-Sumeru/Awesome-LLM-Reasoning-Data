**方法与 verifier。** UAutomizer 是唯一不变量来源和接受 oracle。判定为 sound 并不代表 complete：timeout 与 `UNKNOWN` 可能丢弃有用候选，solver heuristic 改变也可能同时改变 grade 和运行时间。grade 2/3 只能证明候选对所编码 32-bit `unreach-call` 查询归纳且充分，不能证明与原始不变量语义等价、可读、最小，也不能保证对其他 verifier 有用。论文承认去 cast 可能不保持语义；重新验证保护被接收候选，但不能解释被拒变换是否本来有价值。

**数据与发布。** raw 表、curated-full 表、evaluation data、模型和代码均公开，但必须区分发布边界。curated-full 有 7,763 行，可能包含 grade-1 候选；论文 7,284 条 V2 实验集还要求 grade >= 2 和 1,024-token 限制。SFT-ready cache 按模型族在本地构建，旧 Hub cache 仍可用。把这些 artifact 当成同一个可互换数据集会静默改变目标分布。被拒 grade-0 候选和完整 API generation trace 没有作为一等发布物提供。

**Split、provenance 与权利。** 论文报告 80/20 sample split，但没有说明同一程序的全部变体是否留在同一 partition。exact-match 候选去重无法处理语义重复或相关程序族。训练与评测均来自 InvBench/SV-COMP 相关来源，却没有公开 item-level overlap/decontamination manifest。仓库采用 MIT，但这不能证明上游程序、Hub 表、模型输出或 benchmark 衍生物的再分发/训练权利；未找到经核验的逐来源 dataset-license manifest。

**测量与归因。** grade 3 和 Easy/Hard 边界依赖硬件、UAutomizer 版本、并发、timeout 和 baseline timing。VBP 是按 instance 选择最优项的虚拟 oracle portfolio；VBP-E2E 只对合格 instance 加入模型 latency，不等同于真实部署调度策略。模型比较也没有固定 correctness——Qwen3-14B-V2 的 VBP-E2E 接近 GPT-5.2，但 correctness 明显更低。三次运行均值不能覆盖全部采样与 solver 方差。

**复现与漂移。** 核验的官方 `master` commit 没有 release tag；当前训练默认值不能完整复现论文所述 Qwen3-8B LoRA 与 Qwen3-14B full tuning 分配，因此必须固定 commit/config。Together 提供的 Kimi K2 Thinking revision、API 非确定性、随机种子，以及训练/评测 artifact 的精确 hash 均未披露。这些是 curator 识别的复现风险，并不表示论文结果错误。
