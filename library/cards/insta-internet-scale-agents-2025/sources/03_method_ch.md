输入是 Common Crawl 2024 年 4–6 月 host PageRank 文件中排名最高的 100 万个 host。预训练 task proposer 只接收目标 URL、in-context examples 与安全说明，输出 initial task 或 `N/A`。排除项涵盖 harmful/mature content、API/CDN、account/login/social/forum flow、purchase、posting、personal information、download 与 web-state change。论文报告过滤约 85% 的候选项，v2 精确保留 146,746 条 task，而不是恰好 150,000 条。

在 grounding 阶段，Playwright 控制 Chromium browser 尝试 initial task。observation processor 将 live HTML 转为紧凑 Markdown，同时 run-local pipeline 还可保存 current URL、raw HTML、screenshot 与 DOM metadata。模型先输出 reasoning，再输出 JSON Playwright function call；解析失败时重试。context 保留最近五条 observation 与 action，observation budget 为 2,048 tokens，proposer、agent、judge 每次最多生成 1,024 tokens，每个站点最多执行 30 个 browser action。

一条 exploration trajectory 会返回给 task proposer。refinement output 可包含基于近期站点状态的、更难的 `proposed_task`、steps、criteria 与 rationale。这个单次 proposer-agent feedback scaffold 不是 tree search。采样使用 temperature 0.5、top-p 1.0；每条 row 的 proposer model、endpoint revision、source timestamp、random seed、retry history 与 decoding provenance 均未发布。

rollout 与 verification 阶段中，LLM agent 通过范围较广的 Playwright access 与 live site 交互。success judge 读取 task 与近期 observation/action history，生成 rationale，并返回 success、efficiency、self-correction 分数。报告 judge-validation accuracy 时以 success 大于 0.5 为阈值；SFT data filter 更严格，只保留 success 恰好等于 1 的 trajectory。安全信号来自初始 `N/A` decision；feasibility 只在独立人工研究中评估，不是附着在全部 row 上的生产 label。

论文展示的 SFT 实验用 Qwen3-235B 收集 20K 条 trajectory，保留 10.5K 条 judged success，再用 Adam、learning rate `5e-5`、batch size 32、BF16、maximum sequence length 16,384、1% linear warmup 对 Qwen3-1.7B 进行一轮 full fine-tuning。v2 的大规模叙述则另行使用 fine-tuned Qwen3-1.7B 为每个 task 运行约一条 trajectory，以 Qwen3-235B 作 judge，平均约 15 steps，并报告 2.2M 张 screenshot 与 action trace。

公开 output 在 rollout 之前中断。V2 revision `b62e25283471513e3497b973122cceb9b420e0e4` 含 143,811 条 train 与 2,935 条 test task rows；v3 revision `5a689ac657a24b0e55b1c0a0d690acfadd443c38` 含 143,508 条 train 与 2,933 条 test row，并使用更丰富的 task schema。两版都按 website 隔离 split，但没有 row migration ledger、semantic decontamination audit、trajectory/failure release 或 checkpoint mapping。

复现必须固定 arXiv v2、Common Crawl input 与 hash、code commit `b2386fcf2cdb054bb0e422ed233fd2bee8877393`、dataset revision、prompt 与 model endpoint、browser/container/dependencies、locale 与 network state、PII configuration、random seed、retry、task/rollout ID、judge decision、SFT subset 与 evaluation time。即使代码公开，缺少 live-site snapshot 也无法精确 replay 历史运行。
