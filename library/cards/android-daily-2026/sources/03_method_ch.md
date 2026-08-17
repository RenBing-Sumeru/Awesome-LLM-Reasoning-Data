输入首先来自高频闭源 Android 应用，这些应用据称根据应用商店下载排名与公开 active-user 统计选出。任务按使用频率加权分配：高频应用获得更多任务，低频应用获得 essential-use 任务。最终 94 个应用共有 350 项任务，其中 Information & Decision 173 项、Creation & Communication 99 项、Execution & Operations 78 项；124 项任务最多含 2 个约束，226 项含 3 个或更多约束。精确排名来源、日期、阈值、任务作者、分配公式、去重与质量控制规则均为 unknown（论文第 3.1 节；Figure 3）。

Benchmark 为每项任务配有自然语言指令和三层 guideline；逐记录作者身份为 unknown。Rollout 前在实体 Android 设备上准备已登录账号、预载内容及所需应用状态。12 个模型通过 ADB 操作，其中 5 个为通用 VLM、7 个为 GUI 专用 agent。每个 model-task 运行采用 pass@1，最多 60 个交互步骤、40 分钟 wall-clock；有官方推理协议时沿用，否则调参至最佳表现。Human monitor 可处理意外设备/系统状态，或在运行逼近边界时中止，但干预日志和精确 reset recipe 未发布（论文第 3.2 节与第 4.1 节）。

每条完整 chain-of-action trajectory 都有唯一 session ID，可写为任务 `x`、guideline `G` 与轨迹 `tau = {(o_t, a_t)}`；每个 observation 包括截图和可用 accessibility metadata。GRADE 的 Evidence Layer 压缩轨迹、过滤无信息步骤、更新 working memory 并构造 evidence bundle。Verdict Layer 检查 obligations、质量标准、negative constraints 与 blocker，经 arbitration 输出 Boolean completion verdict 及过程诊断（论文第 3.3 节；Algorithm 1）。

输出是带步骤级诊断证据与完整 episode pass/fail 标签的评测记录。论文只将其用于 benchmark 评测和 evaluator 分析，没有报告 SFT、preference optimization、reward-model 训练、RLVR 或其他 agent 训练目标。Benchmark train/dev/test 划分与污染控制均未披露；原始轨迹不发布。当前 350-task 定义、guideline、evaluator prompt/configuration、app/APK manifest、session manifest、代码 URL、数据 URL、许可与不可变发布版本仍未核实（论文第 4-5 节）。
