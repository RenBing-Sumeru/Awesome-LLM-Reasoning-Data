2024 年初的开放代码模型可以单轮生成程序，却远不如专有 code-interpreter 系统善于利用执行诊断或响应变化的用户意图。运行反馈通常只是系统中的瞬时状态，既有 instruction 数据也很少把请求、代码回答、执行结果、反馈与修订完整保存成可复用监督。

OpenCodeInterpreter 构造了 Code-Feedback：包含 68K 条静态多轮对话和 192K 个 turn 的公开语料。流程在合成时执行代码，模拟十类用户反馈，再把解释、代码、诊断与修订序列化用于 SFT；公开数据对象是对话记录，而不是在线执行环境。

**L4 事实：**主要来源与日期：Findings of ACL 2024，第 12834-12859 页，2024 年 8 月发表，DOI 10.18653/v1/2024.findings-acl.762；判定边界与评测面：执行结果引导最多三轮修订，GPT-4 判断是否看似完成，训练后模型使用 HumanEval/MBPP 的 EvalPlus 测试与 MT-Bench 代码轮次评测；收录核验：开放 Apache-2.0 JSONL、id/messages schema、规模、构造分支、SFT 消费者、采用度、泄漏检查、provider policy 边界与代码重放风险均已检查。
