已核验的论文引用如下（基于 arXiv v2；venue 状态仍是“Submitted to ICLR 2026”，不是已接收）：

```bibtex
@article{golubev2025training,
  title={Training Long-Context, Multi-Turn Software Engineering Agents with Reinforcement Learning},
  author={Golubev, Alexander and Trofimova, Maria and Polezhaev, Sergei and Badertdinov, Ibragim and Nekrashevich, Maksim and Shevtsov, Anton and Karasik, Simon and Abramov, Sergey and Andriushchenko, Andrei and Fisin, Filipp and Skvortsov, Sergei and Yangel, Boris},
  journal={arXiv preprint arXiv:2508.03501},
  year={2025}
}
```

官方论文与投稿记录：

- arXiv 摘要页与 v2 PDF：https://arxiv.org/abs/2508.03501 和 https://arxiv.org/pdf/2508.03501v2
- OpenReview 投稿记录：https://openreview.net/forum?id=etyJ7WjAKu
- arXiv DOI：https://doi.org/10.48550/arXiv.2508.03501

以下为已核验的上游 artifact，不是论文专属 trajectory 发布：

- SWE-rebench dataset：https://huggingface.co/datasets/nebius/SWE-rebench
- 论文时期 dataset revision：https://huggingface.co/datasets/nebius/SWE-rebench/tree/3fee35ad6b4f16d6048dd058d5797098f49e8352
- 固定到审计 commit 的 SWE-rebench execution fork：https://github.com/SWE-rebench/SWE-bench-fork/commit/980d0cca8aa4e73f1d9f894e906370bef8c4de8a
- Container registry：https://hub.docker.com/repositories/swerebench

目前没有核验到精确 7,249-task manifest、6,548 条 RFT trajectory、RL rollout/reward、training code、trained checkpoint 或 deterministic replay bundle 的官方链接。
