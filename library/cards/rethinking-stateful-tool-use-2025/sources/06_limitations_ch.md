**发布与 replay。** ACL 与 arXiv 均未链接官方 code、data 或 project；没有可核实的环境包、commit、checksum、reset contract、state serializer、seed 清单或成功/失败保留政策。相同输入输出的确定性声明也未说明跨对话 reset、事务 rollback、异常处理或数据库 mutation。

**划分与污染。** DialogTool 明确派生自 SGD/MultiWOZ。论文给出训练/评测数量，却未审计划分方式、dialogue/schema overlap、近重复或模型预训练暴露，且 turn 数存在内部不一致。若用衍生评测对话训练，将破坏后续 benchmark 有效性。

**反馈。** 组件 accuracy 会掩盖错误传播：错误 call 改变状态，并污染后续 response。论文没有 recovery/retry 分数。BLEU/ROUGE-L 测表面相似，GPT-4o role score 与每模型 50 个回复的三人评测关注风格/质量，不验证事务或端到端目标完成。

**许可、隐私与安全。** 论文为 CC BY 4.0，但不存在 artifact license；SGD、MultiWOZ、lookup 结果和 50 个影视角色配置需另行审查。ethics statement 称数据公开且已审查，并避免冒犯/偏见内容，但无记录级 consent、PII scan、redaction 或角色权利证据。工具创建会执行模型生成 Python；论文观察到不可用库 hallucination，却未说明 sandbox、资源限制、文件/网络访问和副作用控制。VirtualMobile 降低 live-service 风险，也省略权限、漂移、并发与真实事务失败。
