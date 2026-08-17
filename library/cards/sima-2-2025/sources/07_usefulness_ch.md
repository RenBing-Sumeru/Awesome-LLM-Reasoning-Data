SIMA 2 给出了实用的具身数据 schema：版本化环境与 save-state、RGB 历史、指令来源、对话/推理标注、动作块、验证器类型与输出、人类偏好、终止原因和变换 lineage。尤其应区分“动作前的人类意图”与“事后结果描述”。

对自改进而言，建议记录 task-generator 提示、任务 lineage、actor 轨迹、独立奖励证据、0–100 judge 分数、接受决定、experience-bank 代数和策略 checkpoint。独立或多样化 judge、失败轨迹保留及可执行环境快照能显著提升可审计性。
