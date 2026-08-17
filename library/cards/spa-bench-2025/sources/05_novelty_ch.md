既有 mobile-agent benchmark 常侧重单一 app family、单一语言、固定 action match 或最终 task success。SPA-Bench 的具体贡献是一个双语、live-app 的 340-task evaluation surface：组合 300 个 single-app 与 40 个 cross-app task、多种 observation/action interface、human golden-step reference，以及允许不同 action sequence 的 outcome judgment。

verifier 是 benchmark object 的实质组成。single-app evaluation 把 OCR key-component gate 与 GPT-4o judgment 结合；cross-app evaluation 进一步加入 expected-app segmentation、顺序 subtask check 与 propagated memory。completion 与 success 分开评估，因此可以分析 premature 与 overdue termination。这些选择不只是 leaderboard wrapper，因为它们定义哪些 screenshot、path 与 state 算成功。

data release 的 novelty 比论文的数据收集描述更窄。公开 artifact 包括 340 个 task row、40 个经人类审核的 cross-app subtask JSON、task/evaluator config 与 execution/evaluation code。human reference screenshot trajectory、11-agent 实验 run、success/failure output、rerun history 与 device snapshot 虽被描述，但未发布。不能把该方法引用为公开 screenshot-trajectory dataset。

多数英文 cross-app task 来自 GUI Odyssey，并在需要时重写 description、重新收集 trajectory。这是 source adaptation，而不是完全独立的 task origin。由于公开记录缺少逐条 source ID，且没有 overlap matrix，无法衡量语义复用程度。

对 reasoning-data 研究而言，方向信号在于 environment state、termination belief、screenshot evidence、OCR gate、MLLM judgment、rerun selection 与 reset policy 共同定义 label。复用前必须区分 agent failure 与 infrastructure rerun，固定 device/app/account/evaluator 版本，测试 judge robustness，披露 source overlap，并清理权利与副作用边界。
