已有工作的基线可拆成三层：SWE-rebench 提供真实仓库任务和可执行环境；SWE-agent 风格系统提供 shell/edit/search 交互循环；DAPO 提供 clipped token-level group-relative 优化目标。二元测试验证与成功样本过滤也不是新概念。论文贡献不在于孤立发明其中任一组件。

真正改变的是这些组件在长时程和训练规模上的耦合方式。作者给出论文专属的 21,336 到 7,249 任务过滤，使用 6,548 条自生成成功 episode、在没有更强 teacher 的情况下做 1 个 epoch RFT，随后以每组 10 条仓库 episode 的同步流程进行两阶段训练，并从 65k/40 轮扩展到 131k/80 轮。同一终局接口把仓库执行、二元验证、软长度惩罚、组内归一化和 token 更新连接起来。

对 reasoning data 研究而言，方向信号来自 outcome-conditioned warm-up 数据与混合 outcome 的 on-policy 数据之间的对比。RFT 删除整条失败尝试，但在成功 episode 内对部分格式错误 turn 做 mask；RL 可以利用成功与失败样本的相对差异，而同质 group 会被丢弃。因此，样本保留规则和环境版本属于学习数据定义本身，而不是偶然的预处理细节。

这里的质量信号是操作性的，而非语义性的：trajectory 对该 recipe 有用，是因为它产生可执行测试成功，或在组内具有信息性的相对 reward。verifier 不能证明超出 test suite 的正确性，benchmark 提升也不是每条保留 trajectory 都高质量的证据。最接近的可复用对象仍是上游 SWE-rebench；论文专属 manifest 与 trajectory 不可获得。

复用前必须核验精确任务 ID 与过滤实现、2,028 个 Stage 2 任务的规则、各 group 的 outcome 统计、测试 oracle 可靠性、container/runtime 固定版本、reset 与 replay 语义、trajectory 权利和污染控制。缺少这些信息时，该工作是具体的方法与审计参考，而不是已发布训练语料。
