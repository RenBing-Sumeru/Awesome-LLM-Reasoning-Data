阅读重点是论文 Sections 3–5、Tables 2–5 与 Appendices B–D。Table 2 应作为划分数量依据，因为邻近正文“33k turns”与 329,964 个训练 turns 冲突。Table 7 定义有状态 action，prompt 显示缺失参数可写成 `?`。所有结果都应视为六项组件评测，而非单一端到端成功率。

复用前需核实：

- 官方 DialogTool/VirtualMobile URL、不可变版本、checksum、artifact license 及 SGD/MultiWOZ 条款；
- source-record 映射、训练/评测划分、近重复/污染审计和 role rewrite 生成/审核流程；
- App/API schema、database、state serialization、reset/transaction/rollback、异常处理与生成代码 sandbox；
- 模型 prompt/版本、temperature/top-p、seed、retry、budget 和完整成功/失败预测保留；
- turn/episode verifier、recovery scoring、人类/GPT-4o judge 记录及数量冲突解释。

在这些材料公开前，应保留 unknown，并把 VirtualMobile 视为论文描述的 simulation，而不是已验证公共 replay 环境。
