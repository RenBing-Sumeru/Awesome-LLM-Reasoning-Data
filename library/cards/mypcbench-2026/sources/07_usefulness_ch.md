可以把这篇作为 environment_agent_trajectory_data 的 schema/checklist。复用时要保留 task input、output format、evaluator 或 裁判、数据切分/版本、artifact URL、model/scaffold 设置、运行时 dependencies 和报告 metric。

在 atlas 里使用时，要把行级证据和 aggregate score 分开。一个可复用下游记录应包含 source URL、task ID、prompt/context、model output 或 trajectory、验证器/裁判 result、score、license、release date 和 known failure modes。
