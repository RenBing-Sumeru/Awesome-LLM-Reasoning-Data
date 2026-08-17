以下模型分数均为作者报告，尚未独立复现。在四个智能体、每项任务两次运行、15步horizon的共同协议下，表3报告总体Success Rate：**UI-TARS-1.5 7B为21.14%、Qwen3-VL 2B为11.40%、Qwen3-VL 4B为24.23%、OpenAI Computer Use Preview为31.83%**（论文§4与表3，第6页）。这些结果在论文环境和两次运行取最大值的条件下比较智能体，不能证明evaluator正确或trajectory data质量高。

source subset结果对familiarity与contamination提供了警示。UI-TARS在OSWorld subset上领先OpenAI CUA，分数为**21.27对16.74**；在MacArena-specific subset上却落后，分数为**10.20对36.73**，反转26.53个百分点（论文表3与§4.2，第6–7页）。作者推测原因是task-distribution或platform familiarity，但未提供training-exposure audit。因此该反转是审计lineage的证据，不是某个因果机制的证明。

官方artifact数量支持该评测表面的存在。仓库树精确包含**421个task JSON = 221个OSWorld-derived + 151个macOSWorld-derived + 49个custom**，每个custom JSON都含一个weight 100的evaluator。官方Hugging Face bucket包含9个文件，总计**121,038,630,504 bytes**，包括两个`.utm`目录；这些是可执行VM资产，不是rollout dataset。作者报告人工审核全部任务，但未报告可测量human-performance baseline、annotator agreement、evaluator test coverage或rejection统计。

artifact检查还提供直接negative evidence。任务`450f6f33-bf2c-43bf-a349-4363e9b75740`要求合并Contacts条目，其evaluator却检查Session Setapp website-blocker/YouTube状态。该instruction/evaluator mismatch否定了“每个发布分数都测量其所述任务”的笼统假设。另一处代码检查显示，两次运行中的第二次只关闭应用而不重新clone VM，因此maximum-of-two结果可能混合具有不同残留状态的运行。

runner output schema证明系统具备在本地保留成功、0分和error的能力：screenshot PNG、action/reward/done/info entry、response history、result、log、video与exception object。但没有发现论文实验的规范化公开rollout bundle。日志能力证据不能被改写为已发布规范化报告轨迹的证据。
