以下为 PMLR 官方引文：

```bibtex
@InProceedings{pmlr-v267-pan25g,
  title = {Training Software Engineering Agents and Verifiers with {SWE}-Gym},
  author = {Pan, Jiayi and Wang, Xingyao and Neubig, Graham and Jaitly, Navdeep and Ji, Heng and Suhr, Alane and Zhang, Yizhe},
  booktitle = {Proceedings of the 42nd International Conference on Machine Learning},
  pages = {47717--47737},
  year = {2025},
  volume = {267},
  series = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url = {https://proceedings.mlr.press/v267/pan25g.html}
}
```

已核验的官方入口：

- 论文：[PMLR landing page 与官方引文](https://proceedings.mlr.press/v267/pan25g.html)；该 21 页 venue-final paper 优先于代码仓库中较旧的 18 页 PDF。
- 代码：[SWE-Gym/SWE-Gym](https://github.com/SWE-Gym/SWE-Gym)。已核验的相关代码界面包括 [SWE-Bench-Fork](https://github.com/SWE-Gym/SWE-Bench-Fork)、[OpenHands](https://github.com/SWE-Gym/OpenHands) 与 [Moatless-Agent-Fork](https://github.com/SWE-Gym/Moatless-Agent-Fork)。
- 数据：[SWE-Gym 主任务](https://huggingface.co/datasets/SWE-Gym/SWE-Gym)。已核验的相关发布包括 [Lite](https://huggingface.co/datasets/SWE-Gym/SWE-Gym-Lite)、[Raw](https://huggingface.co/datasets/SWE-Gym/SWE-Gym-Raw)、[OpenHands SFT trajectory](https://huggingface.co/datasets/SWE-Gym/OpenHands-SFT-Trajectories)、[OpenHands sampled trajectory](https://huggingface.co/datasets/SWE-Gym/OpenHands-Sampled-Trajectories)、[OpenHands verifier trajectory](https://huggingface.co/datasets/SWE-Gym/OpenHands-Verifier-Trajectories)、[MoatlessTools sampled trajectory](https://huggingface.co/datasets/SWE-Gym/MoatlessTools-Sampled-Trajectories) 与 [MoatlessTools agent/verifier training data](https://huggingface.co/datasets/SWE-Gym/MoatlessTools-Agent-Verifier-Train-Data)。
- 模型：[官方 SWE-Gym Hugging Face organization](https://huggingface.co/SWE-Gym)，其中公开 agent 与 verifier repository；若干已检查仓库缺少 model card 与 license metadata。
- 项目：[官方 Apple Machine Learning Research page](https://machinelearning.apple.com/research/training-software)。

版本说明：主代码检查于 commit `b681068ca20628c6987b7416cc4cf03f06b77ba5`，主数据检查于 revision `bb94ed9e39bbeb96a7fcbfb533b80f25a7fd59cb`。官方仓库没有与实验绑定的 tag 或 GitHub Release，也没有 immutable manifest 将 task ID、image digest、fork commit、trajectory、subset、checkpoint 与 prediction 绑定。工件存在并不意味着主代码/数据许可可自动转移到未标注许可的辅助发布。
