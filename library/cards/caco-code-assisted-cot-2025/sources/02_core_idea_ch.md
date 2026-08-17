Caco 把 augmentation 从 question space 移到可执行 reasoning-program space。CodeGen 训练时只观察标准化 Code CoT，推理时无条件采样程序。因此，生成程序可以重组 decomposition、intermediate computation 与 control structure，而不受某个 seed question 表述的直接约束。另一个模型再依据程序及其代表性 input-output example 推断出合理指令。

反馈契约分为四个不能混为一谈的层次：

1. **带外部答案的种子验证。** 转换后的 seed program 必须可解析、可运行；若来源数据有答案，execution output 必须与其一致。这一层约束最强，因为程序受到外部 expected answer 的限制。
2. **程序有效性与结构。** 生成程序必须在 10 秒内执行结束，至少包含 6 行非注释代码，并由 AST analysis 确认 input dictionary 中每个变量都被使用。这些测试证明有界执行与非平凡句法结构，却不能证明数学真值。
3. **跨表示答案一致性。** Qwen3-8B 生成 instruction 与独立 language CoT 后，抽取出的 language answer 会与程序输出比较。它可以发现直接答案冲突，但若两侧共享同一个错误，仍可能通过。
4. **模型语义判断。** Qwen3-32B 判断 problem solvability、answer correctness，以及 code reasoning 与 language reasoning 的一致性。论文提供 yes/no prompt，但没有发布逐记录 decision、相对于人工或形式求解器的 judge calibration、二元答案之外的 threshold，或 disagreement handling。

最终 supervision 是 mixed。发布的 `instruction`/`output` pair 提供 sequence-level SFT target；`answer` 支持 answer-level check；`code` 暴露可审计或可派生实验的中间可执行 trace。论文只用 supervised fine-tuning／distillation-style synthetic supervision 训练下游模型。RL with verifiable rewards 仅是 future work；没有报告 RL objective、policy rollout、reward study 或 RL-trained result，因此本卡不加入 `rlvr`。

概念上最接近的路线包括 problem-rewriting augmentation、teacher-generated reasoning distillation 与 execution-filtered code synthesis。Caco 的具体贡献在于编排顺序：把异构解答统一成可执行 pattern，不依赖 prompt 问题生成新 pattern，再在答案与语义检查下反向生成 instruction。其新意是集成且可扩展的数据构建 recipe 与开放 final corpus，而不是证明程序可执行就等同于语义正确。

与只含 instruction/output 的 corpus 相比，当前 release 同时包含 `answer` 与 `code`，可审计性更强；但它仍未暴露构造过程的全部证据。execution output、representative test input、source ID、generator parent、acceptance/rejection label、prompt/model revision 与 judge rationale 都没有与逐行记录绑定。
