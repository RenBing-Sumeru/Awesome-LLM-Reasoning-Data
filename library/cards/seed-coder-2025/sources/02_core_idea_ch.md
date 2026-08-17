核心机制是一串学习式与可执行 filter。DeepSeek-V2-Chat 对 21 种语言的 222,066 个文件按 0–10 质量打分；一个 pretrained 1.3B、Llama-2-style regression model 训练一轮以模仿标签，再移除相对 bottom approximately 10%，之后作用于 89-language corpus。这是 teacher imitation，不是独立代码正确性。

Web recall 对 10M candidates 进行 70/30 fastText seed/validation 划分，报告 recall 99%、precision 45%，在后续 LLM scoring 前将约 3% Common Crawl 识别为 code-related candidates。Continued-pretraining positive 从约 100K seeds 与 random/hard negatives 开始，进行 2–3 轮 fastText 扩张。这增加覆盖，也可能传播 teacher 与 false-positive bias。

后训练改变反馈对象。SFT 结合 LLM generation、模型 correctness/difficulty judgment、syntax check 与 generated-test self-correction。DPO 用 generated-code/generated-test execution 把 on-policy candidates 转成约 20K preference pairs。LongCoT GRPO 使用可执行 correctness 与 format signal。确切 reward formula、sandbox、compiler/runtime matrix、test、parser、weight、normalization 与 exploit control 未知。

最近的比较是 DeepSeek-R1 式 execution-verifiable reasoning，但 Seed-Coder 还加入端到端 corpus construction 与 synthetic instruction pipeline。其方向价值是揭示模型 scorer 与 generated test 链条如何成为隐式训练目标。
