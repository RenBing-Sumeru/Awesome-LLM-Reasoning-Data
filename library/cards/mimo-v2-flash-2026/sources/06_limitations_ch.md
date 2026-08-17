报告没有发布后训练数据、环境包或快照、verifier、reward model、教师 checkpoint、教师路由，或 MOPD 与 ORM 集成细节。完整来源 provenance、记录数、任务 manifest、训练/评估切分、解码设置、rollout 数、reward 阈值、judge rubric 以及接受与拒绝的产出比例均为 unknown。

报告提及的代码、终端、Playwright、搜索和合成功能调用环境，无法根据现有 artifact 独立复现。官方许可证将 Hugging Face 权重置于 MIT、将仓库置于 Apache-2.0，但并未确定后训练数据或环境的权利。

披露的 SWE-Bench 问题是一条具体的 reward-hacking 路径：环境中未删除的真值 commit 可能泄漏成功解。评估镜像更新处理了这一已点名问题，但报告没有提供覆盖全部任务族的完整污染审计，或足以证明训练/评估隔离的证据。
