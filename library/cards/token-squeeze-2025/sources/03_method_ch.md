**输入。** 发布命令从 \`datasets/math14k.jsonl\` 和 \`deepseek-ai/DeepSeek-R1-Distill-Qwen-7B\` 开始；报告的 student 是 7B 和 1.5B DeepSeek-R1-Distill-Qwen。每条输入有 instruction 和 ground-truth answer。模板将 \`think\` 与 \`answer\` 字段分开（附录 A.1；仓库 Step 1）。

**流水线。** (1) 温度 0.9 采样 64 条 completion，默认最多 8,192 个新 token；抽取答案、运行 \`merged_verify\`，保存 equality/text/token length。(2) 排序正确轨迹；以 \`q=alpha*(1-p)\`、alpha=.2 选择靠前正确轨迹，每条与更长错误轨迹配对，至多 M=64。(3) 每个 chosen step 在温度 1.0 采样 64 个 rewrite；用单轨迹 512-token window 估计局部 KL，保留低于 .005 的最短候选。(4) 将合格 rewrite 替换入 pair（论文 §3、附录 A.1/B；仓库 Steps 1-5）。

**训练。** README 中的文件名为 \`step1_response.jsonl\`、\`dpo_pair.jsonl\`、\`rewrite.jsonl\`、\`rewrite_kl.jsonl\` 与改写 pair 文件；它们是命名输出，不是已核验发布。全参数 LLaMA-Factory DPO 使用 \`sigmoid_l2s_log\`、.5 DPO-L/.5 SFT、lambda=1、Adam、学习率 5e-6、batch 128、9,000-token context 和 8 张 Tesla A100（论文 §3.3、§4.1、附录 A.2；README Step 6）。

**复现边界。** 应固定 checkpoint、tokenizer/template、commit、SGLang/Ray 与 LLaMA-Factory 版本、comparator、KL 计算、源行和采样。未核验到与论文匹配的生成 pair、seed/retry log、保留数量、split manifest、lineage ledger 或构造去污染报告。
