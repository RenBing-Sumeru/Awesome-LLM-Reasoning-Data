以下书目信息根据 COLM 2025 最终论文核验；未核验到官方 BibTeX 链接：

Deepak Nathani、Lovish Madaan、Nicholas Roberts、Nikolay Bashlykov、Ajay Menon、Vincent Moens、Mikhail Plekhanov、Amar Budhiraja、Despoina Magka、Vladislav Vorotilov、Gaurav Chaurasia、Dieuwke Hupkes、Ricardo Silveira Cabral、Tatiana Shavrina、Jakob Nicolaus Foerster、Yoram Bachrach、William Yang Wang、Roberta Raileanu。《MLGym: A New Framework and Benchmark for Advancing AI Research Agents》。Conference on Language Modeling（COLM），2025。

官方论文与 venue 记录：

- COLM 最终论文 PDF：https://openreview.net/pdf/75f6e6aa5276a0b93fd3859ec7b41c92ee79cea8.pdf
- OpenReview forum：https://openreview.net/forum?id=ryTr83DxRq
- arXiv 记录：https://arxiv.org/abs/2502.14499

已核验官方 artifact：

- Repository：https://github.com/facebookresearch/MLGym
- 审计 source 与 trajectory snapshot：https://github.com/facebookresearch/MLGym/tree/9d40c1b5035202018cd7091fb4e83a9c68b377c0
- 审计 trajectory 目录：https://github.com/facebookresearch/MLGym/tree/9d40c1b5035202018cd7091fb4e83a9c68b377c0/trajectories/mlgym_bench_v0
- Replay script：https://github.com/facebookresearch/MLGym/blob/9d40c1b5035202018cd7091fb4e83a9c68b377c0/run_replay.py
- License bundle：https://github.com/facebookresearch/MLGym/blob/9d40c1b5035202018cd7091fb4e83a9c68b377c0/LICENSE
- 官方 `mlgym/coco-captioning` 组件：https://huggingface.co/datasets/mlgym/coco-captioning

Hugging Face 组件只是一个底层 task dataset，并非完整 benchmark 或 trajectory corpus。仓库 snapshot 是对可变 main 的审计 commit，不是带 tag 的论文 release。
