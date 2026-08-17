论文的 benchmark pool 从 12 个 Python、Java、JavaScript 与 TypeScript 仓库中的 2,441 个 GitHub issue 开始，只保留 2025-03-01 之前创建的 issue。每个 issue 与 merged pull request 配对，不含 test change 的 pair 被丢弃；在每个 repository/version stratum 内按 20% 采样且至少取一条，得到 671 个 SweSetupBench task。构建流程通过生成 direct-download command 并在评测前移除不完整 binary hunk，修复 GitHub diff 遗漏的 binary resource。

对每个任务，SWE-Builder 运行 Repository Explorer、Environment Manager、Test Manager 与 Test Analyst。前三个角色收集 context 并生成 Dockerfile/evaluation script；Test Analyst 使用 `build_image`、`start_container` 和 `run_eval` 提供 execution feedback。成功的 pair 被保存，用于同 repository/version 检索。Accepted-paper 实验使用 GPT-4.1-mini-2025-04-14、Kimi-K2 或 DeepSeek-V3-0324，temperature 0.1，最多五轮 Builder iteration、十轮 context retrieval 与 20 个并行 subprocess。

过滤依据是 gold-patch fail-to-pass。Evaluation script 必须保存测试 exit status 并输出标准 marker。原始状态加 test patch 必须返回非零，应用 gold patch 后必须返回零；流程不训练 learned reward model。三名有经验研究者检查日志以评估 parser，但逐条 annotation、disagreement、adjudication 与 correction 未发布。

训练阶段，GPT-4.1 mini 从十个据称与 SWE-bench 仓库不同的 Python 仓库构建 2,877 个环境，其中 2,809 个完成工具安装。Kimi-K2 对每个 prepared task 以 temperature 0.2、最多 40 次交互采样一条轨迹，使用 DeepSWE 的 Execute Bash、Search、File Editor 与 Finish/Submit 工具。公开 2,809 行 train split 只把 episode 序列化为交错 `messages`，不含 task ID、Dockerfile、evaluation script、verifier outcome、reward 或 success。

五个模型——Qwen2.5-Coder-Instruct 3B/7B/14B、Llama-3.1-8B-Instruct 与 non-thinking Qwen3-8B-Instruct——使用 MS-Swift 做 full-parameter SFT。论文报告八张 A800、三次 training iteration、maximum length 65,536、bf16、learning rate 1e-5、warmup 0.05、FlashAttention、packing、YaRN 与按模型设置的 sequence parallelism。评测使用单张 A100 与 vLLM，temperature 0，最多 40 次 agent iteration，在 SWE-bench Verified 与 Lite 上运行。

复现时必须固定 accepted-paper PDF、repository commit、Hugging Face revision、prompt、Builder model 与 budget、task membership、Dockerfile、base-image digest、package lock、evaluation script，以及 trajectory/checkpoint mapping。链接的 `Appendix.pdf` 缺失，仓库没有 paper-run tag，当前 README/run example 的 temperature 与 parallelism 也不同于 accepted paper。
