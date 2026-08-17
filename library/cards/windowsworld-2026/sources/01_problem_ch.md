WindowsWorld发表于 *Findings of the Association for Computational Linguistics: ACL 2026*，页码15262–15280，DOI为`10.18653/v1/2026.findings-acl.750`。本Card还以arXiv:2604.27776v1、完整附录和官方仓库commit `fbccd464…`为primary sources。论文关注的问题是：如何在需要多个Windows应用、长规划链、条件判断，并且包含不可完成指令的专业工作流中评测GUI智能体。

基准同时针对两个缺口。现有桌面环境中单应用或短任务占比高，而二值terminal success会把已经完成的大量中间工作统一压成零分。WindowsWorld因此提供覆盖17个应用的181项任务，并在任务定义中加入基于状态的中间checkpoint。四级难度分别是L1单应用原子任务、L2多应用线性流程、L3动态推理和L4不可行任务；论文报告77.9%的任务涉及多应用，平均每项任务4.97个checkpoint（论文§§1、3.2–3.5，Table 1）。

一条公开benchmark instance不是已经执行好的训练轨迹。固定版本的`benchmark.json`中，每行包含中英文指令、persona、难度、涉及应用、前置条件、`environment_setup`请求、含中间检查和最终标准的`evaluation_metrics`，以及有效性、重复、时间戳和review字段。实际运行后可以产生observation、action、截图、本地环境信号、checkpoint判断和最终成功标签，但这些episode由使用者的agent与runner现场生成。

该工作属于`environment_agent_trajectory_data`，因为任务记录、VM状态、观察/动作轨迹、终止行为和evaluator共同构成研究对象。它并不等于SFT/RL轨迹语料发布：官方仓库公开了全部181条任务定义和执行代码，却没有公开作者实验中完整的成功、失败、超时或重试轨迹。论文的已验证用途是评测与诊断反馈，而不是已规模验证的post-training recipe。

因此，本Card明确限定L4证据边界。论文身份、任务规模、schema、runner、judge路径、仓库许可证和当前release revision已经核验；精确VM回放、逐任务初始化、论文实验配置、完整轨迹留存以及任务统一审批状态尚未成立。固定JSON内部只有126条`approved`、55条`pending`、160条validity为true、21条为false。本Card维持`L3_summary_ready`和Review state `new`，把这些差异作为审计发现，而不是自行修补。
