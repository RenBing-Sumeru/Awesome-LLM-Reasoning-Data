更早代码模型已使用 GitHub/web corpus、synthetic instruction、execution filtering、preference optimization 与 RL。Seed-Coder 的独特贡献是将其整合为一条量化 pipeline：外部 teacher 质量标签蒸馏为小 scorer、迭代 web recall、6T curriculum、generated-test self-correction、on-policy DPO、外部 LongCoT warmup 与目标 policy GRPO。

新的数据接口不只是“高质量代码”。它连接 source/commit metadata、learned score、site category、syntax state、generated instruction/solution/test、sandbox outcome、preference pair 与 long-CoT reward。每个 filter 都会改变分布并成为隐式 objective。

若按字面理解，标题夸大了自治程度。DeepSeek-V2-Chat 锚定质量；外部 LLM 合成和评价 SFT；DeepSeek-R1/open trace 初始化 reasoning；目标 policy 自我改进出现在后期。复用前必须审计 teacher/scorer bias、独立测试、sandbox exploitability、language/site retention、semantic leakage 与 source license。
