现有证据支持下列重建；其中已披露数值与未解决实现细节必须分开。

1. **来源 prompt。** 数学 prompt 来自 890 道 2024 年前 AIME、7,500 道 MATH 和 28,505 道 Numina-MATH。代码 prompt 来自 7,505 道 Codeforces、2,011 道 Code Contests，以及 558 道 2024 年 7 月前 LiveCodeBench（附录 A，表 9）。六个打印分项合计 46,969，不是报告的 49,969；三个数学分项合计 36,895，而第 3.1 节报告 40K math problems，第 2.2 节又把 `D_START` 描述为 40K math reasoning samples。
2. **Hint library。** 作者定义六种 hint 功能，由 Qwen-2.5-72B 为每种功能生成多个替代表达。改写 prompt、candidate 数量、解码设置、保留 variant 和 mixture weight 均为 unknown。
3. **初始行为与插入。** QwQ-32B-Preview 生成长推理。Hint-infer 在终止处或最后一个 `wait` 处截断；Hint-RFT 还把 `Wait`、`Alternatively` 与推理末尾作为插入位置。准确的 parsing、大小写、标点和 fallback 行为未披露。
4. **工具交互。** 模型输出 Python，接收解释器输出或错误，再继续推理、验证或 debugging。附录 J.1 报告的 library-use 数量包括 sympy 14,469、math 11,655、numpy 5,790、itertools 3,131、scipy 2,942、cmath 104 和 networkx 90。没有发布 sandbox image、package version、timeout、filesystem 或 network policy、resource limit、state-reset 规则或 observation schema。
5. **选择。** Active learning 保留初始答案错误、插入 hint 后成功的案例。每个 hint 通过多次 sampling iteration 检查，但次数与聚合规则未知。重复 response 和错误代码执行会被删除。最终答案 extractor 与 comparator、代码测试、重复判定、exception handling、过滤 threshold、拒绝数量，以及图 1 的 `modify` 操作都未披露。
6. **Seed 训练。** 论文报告 `D_seed` 包含 10,000 条已接收数学推理样本。对 QwQ-32B-Preview 做 full-parameter fine-tuning 得到 START-0。unique prompt 数、prompt-to-trajectory multiplicity、来源分配和接收 yield 均未知。
7. **扩展。** START-0 生成 `D_START`，作者报告其含 40,000 条数学推理样本；再用它微调原始 base model 得到 START。扩展阶段的 rollout 与接收 protocol 没有单独说明。该框架也应用于 DeepSeek-R1-Distill-Qwen-32B。
8. **训练。** 附录 H 报告 3 个 epoch、128 global batch、cosine schedule、3% warmup、16,384 最大训练 context、full-parameter DeepSpeed ZeRO-3，以及 QwQ-32B-Preview 的 `7e-6` 和 DeepSeek-R1-Distill-Qwen-32B 的 `2e-6` learning rate。optimizer、weight decay、gradient clipping、seed 与 dependency version 未知。训练使用 32 张 NVIDIA A100，但 GPU 显存、wall time、GPU-hours、生成 compute 和失败 run 均缺失。
9. **评测设置。** 附录 H 写明 greedy decoding、最多生成 32,768 token，并且每次推理最多使用工具 6 次；第 3.4 节却报告 top-p 0.95 与 temperature 0.6。论文没有说明哪套设置对应 `D_seed`、`D_START` 或各评测表，因此构造 temperature 与 top-p 保持 `unknown`。
10. **Split 与污染。** 论文称采用 Qwen2.5-Math 去污染方法，但没有给出本地实现、normalization、threshold、删除数量或 audit ledger。代码构造使用 2024 年 7 月前 LiveCodeBench，评测使用 2024 年 8–11 月的 112 道题，但缺少准确 item ID 和 snapshot hash。

进入训练的输出是经选择的 reasoning-plus-tool trajectory，使用常规 full-parameter SFT 监督。复现必须实现并固定四个未发布模块——answer checker、Python 环境、candidate sampler、filter/modification pipeline——并先解决计数与解码矛盾，才能在同等条件下比较报告结果。
