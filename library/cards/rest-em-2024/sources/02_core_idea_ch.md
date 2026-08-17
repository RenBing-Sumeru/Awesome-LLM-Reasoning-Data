ReST-EM 通过可重复的 E-step/M-step 契约，把 policy 自己的成功 rollout 变成新示范：采样候选，使用外部二元 verifier，每道题限制保留数量，再用 SFT 训练下一版 policy。相对一次性的 rejection-sampling fine-tuning，新的决策是在 policy 改变后重新生成数据，并测量额外轮次何时开始过拟合。

Google Scholar 引用数：282（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Beyond+Human+Data%3A+Scaling+Self-Training+for+Problem-Solving+with+Language+Models&author=Avi+Singh&hl=en）

开源数据：没有。论文使用 7,500 道 MATH 训练题和 2,342 道 APPS Introductory 训练题，并在每轮生成新解答，但未确认官方 ReST-EM 生成数据集、记录文件、代码仓库或许可证。MATH 与 APPS 是输入 benchmark，不是已发布的 ReST-EM artifact。
