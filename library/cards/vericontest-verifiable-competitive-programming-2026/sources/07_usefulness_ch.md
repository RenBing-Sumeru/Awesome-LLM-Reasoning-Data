1. **分阶段 vericoding 评测：** 分别测试 NL→spec、NL→code、spec→proof 和 end-to-end，统一 Verus 版本、时间与重试次数，避免只报告最终低分而无法定位瓶颈。

2. **RLVR：** 将在线 judge、Verus proof 和负测试合成分层 reward：先编译、再功能通过、再证明、最后规格反例检查；不得只奖励 `verus` 成功，否则模型可能利用弱 specification。

3. **规格训练：** 用正例、mutation 负例和 Post2Exe 结果训练 spec generator 或 critic。若目标语言不是 Rust/Verus、任务需要外部状态或无法访问 judge，该 benchmark 只能提供方法参考，不能直接充当 verifier。
