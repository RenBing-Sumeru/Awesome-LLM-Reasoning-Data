2025 年 *Gemma 3 Technical Report* 描述开放权重的 1B、4B、12B、27B 模型；后三者把 decoder 与冻结的约 400M-parameter SigLIP vision encoder 结合。预训练预算分别为 2T、4T、12T、14T tokens。报告、官方 model card、checkpoint、代码和条款公开，但训练记录与反馈资产不公开。

Atlas 问题是区分开放 checkpoint 与开放训练 pipeline。每个预训练 token 接收 256 个 sampled teacher logits；后训练使用 large IT teacher，然后采用 improved BOND/WARM/WARP-style RL，反馈来自 weight-averaged human-feedback reward model、code execution、mathematical ground truth 与 safety SFT/RLHF。Teacher identity、preference、RM、test、math checker、rollout 和 RL 设置仍私有。

一条记录可能包含 source text/image、sampled teacher token ID/probability、instruction/response、human preference/safety label、RM score、code execution feedback 或 math-correctness reward。确切 schema、mixture、generator 与 lineage 未发布。本 Card 通过同时记录具体 supervision object 与缺失资产达到 L4，而不把权重或 benchmark score 当作数据披露。
