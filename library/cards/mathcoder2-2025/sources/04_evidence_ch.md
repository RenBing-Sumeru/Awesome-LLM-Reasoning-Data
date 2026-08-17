论文区分 16.5B-token 基础语料与新增的 2.7287B-token translated code。对 Llama-3-8B 做 continued pretraining 时，加入 translated code 后四样本 MATH 为 38.4%、GSM8K 为 69.9%，比只训练基础语料分别提升 3.1 与 4.1 个百分点。四类 7B/8B 基础模型在五个数学 benchmark 的报告平均值上都得到提升。

作者随后进行监督式微调：先在通用数学 instruction 上训练两轮，再在 NuminaMath CoT 或 TIR 上训练三轮。这些结果支持 continued-pretrained checkpoint 可以进入后续数学 post-training，但它们同时包含语料、optimizer、SFT 数据、decoding 和评测选择，不能证明每个公开文档都正确，也不能证明当前 public snapshot 可复现论文语料。

执行证据比论文文字表述更弱。运行 teacher-generated Python 可以排除语法和运行时失败，但预期结果与程序由同一个 teacher 生成。核查的代码还会跳过长输出或非数值输出的相等性比较。因此，通过筛选不能解释为对源数学含义或推理步骤有效性的独立证明。

附录 H 报告 overlap 从 3-gram 的 0.21% 降到 13-gram 的 0.00%。这是作者报告的聚合证据，不是公开的逐匹配账本。公开去污染代码期望的字段和输出对象形状都与当前 text-only release 不一致，因此核查脚本无法透明重建托管的 decontaminated 文件。
