问题生成与最终评分都硬性依赖 golden/reference patch。论文没有说明如何为尚无已知正确 patch 的全新私有、企业或 legacy issue 评分；向 judge 展示 reference 还会形成相似性或泄漏通道，可能惩罚不同但同样正确的解法。Candidate patch 与问答上下文均截断到 10,000 字符，这也可能删去大型仓库中的决定性证据。

学习型分数不是经过校准的终局判定。AUC 衡量排序能力，而 operating threshold、calibration、false-positive 与 false-negative rate、reward clipping、对抗性 verifier gaming，以及两次评分都失败时的处理方式均为 unknown。Rust 与 C 的差距说明 compiler、dependency 和 runtime diagnostics 的缺失会产生实际影响；增加问题数量还可能降低 AUC，因此仓库证据既不完整，也不是越多越好。

环境控制缺失使操作复现仍受阻：image digest、已安装 package 与 index、仓库/submodule commit 清单、依赖安装策略、network/egress、cache 与文件系统 reset 行为、权限与资源限制、hard timeout 数值、seed、命令日志和 replay script 均为 unknown。证据 sub-agent 虽通过 prompt 限制为只读命令，但 OpenHands policy rollout 可以执行任意 shell command。论文未报告 sandbox threat model、secret policy、供应链保护或恶意仓库防御；复现应在一次性、限制网络的基础设施中进行。

样本保留具有选择性且不可审计。Verifier 构建只保留判断与执行标签一致的 teacher 轨迹，删除格式错误、中断和 turns 超出范围的轨迹，并将负样本比例限制为 4:1。SFT 只保留 16K 中排名最高的 4K，SFT/RL 还会丢弃失败的 verifier pass。论文没有发布 accepted、rejected、interrupted、timeout、compiler/dependency failure 或 all-failed 轨迹，也没有 drop manifest。

Verifier 训练与评测来源名称不同，并不能证明 instance、code 或 semantic level 的去污染。SWE-Rebench-v2 的 SFT/RL 重叠、与下游评测的重叠、task ID、776 条 benchmark 的 candidate-model mixture，以及模型 pretraining contamination 检查均未披露。arXiv 分发许可只覆盖论文，不授权复用仓库、issue 文本、patch、GLM-5 轨迹或 Agent rollout；这些对象的许可、来源权利、privacy/consent 处理和安全审查均为 unknown。未核验到论文专属代码、数据、模型、benchmark manifest 或项目发布。
