既有 synthetic-reasoning pipeline 已经会改写问题、采样 teacher solution、过滤答案或执行生成代码。Caco 并未单独提出 chain-of-thought distillation、Python execution、AST checking、back-translation 或 LLM-as-judge verification。

第一项有区别的设计是**无条件 pattern generation**。来源解答先被归一化为可执行 Code CoT，Qwen2.5-Coder-7B 只学习程序分布，而不是学习从给定问题到代码的映射。因此，在任何自然语言 instruction 出现前，采样过程就可能产生新的程序结构。作者把它称为 pattern-level augmentation，以区别于表层 question rewriting。

第二项设计是**在执行过滤后做 instruction reversal**。约 5.3M 个 sampled program 先缩减为约 4.6M 个 executable/structural survivor，Qwen3-8B 才发明问题与语言解答。预期 correctness anchor 从程序流向两种自然语言表示，随后用 answer agreement 与 Qwen3-32B judgment 过滤 pair。该顺序构成核心思路：先生成候选 reasoning object，在代码层验证能够验证的性质，再将其渲染为训练文本。

第三项设计是 scale study 与开放 final object 的组合。论文报告 146K→5.3M→4.6M→1.3M 的 funnel、构造时间、三个下游模型上的 data-size scaling、verification ablation、teacher-distillation control 与 science-domain extension。当前 release 不仅有 instruction 和 language output，还为每个可见 row 提供 extracted answer 与 code，因此可以进行仅凭 aggregate score 无法完成的审计。

已核验的贡献因而是集成 data recipe 与大规模开放产物，而不是 correctness guarantee：execution 只证明程序在其编码输入上的行为；AST check 只证明变量被使用；answer agreement 可能具有相关性；LLM judge 也可能接受共享错误。论文同样没有证明 RLVR；repository 把它列为 future work。

要把该 recipe 提升为更强的可审计标准，未来 release 还需提供 immutable source/split manifest、逐行 parent/source/model/prompt lineage、代表性 input-output test 与 execution log、全部 rejection decision、独立 judge calibration、sandbox specification、upstream-license mapping，以及 exact/semantic benchmark decontamination。
