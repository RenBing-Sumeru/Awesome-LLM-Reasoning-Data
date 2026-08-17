已有手机 GUI benchmark 多评测通用执行、真机环境或固定动作路径完成率。PSPA-Bench 改变的是评测对象：加入 persona、偏好敏感任务分支、随时间变化的偏好采样，以及长期适应指标。

方向信号不是“手机任务更多”，而是 TDG feedback contract。它把 fixed progress 和 flexible preference satisfaction 分开，从 execution trace 计算过程指标，而不只看二值成功。它还用经验积累前后的 APR/PPR/CT/CPT delta 审计长期适应。

不新的部分包括 smartphone GUI agent、ReAct 风格框架、memory module、LLM-as-judge 和合成模板。复用前要检查 TDG 构造质量、隐私假设、合成 persona 真实性、app 可用性、arXiv 论文之外 code/data 的许可证、evaluator prompts，以及匿名仓库是否已经成为持久 artifact。
