Official PMLR citation:

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

Verified official entry points:

- Paper: [PMLR landing page and official citation](https://proceedings.mlr.press/v267/pan25g.html); its 21-page venue-final paper controls over the older 18-page PDF bundled in the code repository.
- Code: [SWE-Gym/SWE-Gym](https://github.com/SWE-Gym/SWE-Gym). Verified associated code surfaces are [SWE-Bench-Fork](https://github.com/SWE-Gym/SWE-Bench-Fork), [OpenHands](https://github.com/SWE-Gym/OpenHands), and [Moatless-Agent-Fork](https://github.com/SWE-Gym/Moatless-Agent-Fork).
- Data: [SWE-Gym main tasks](https://huggingface.co/datasets/SWE-Gym/SWE-Gym). Verified related releases are [Lite](https://huggingface.co/datasets/SWE-Gym/SWE-Gym-Lite), [Raw](https://huggingface.co/datasets/SWE-Gym/SWE-Gym-Raw), [OpenHands SFT trajectories](https://huggingface.co/datasets/SWE-Gym/OpenHands-SFT-Trajectories), [OpenHands sampled trajectories](https://huggingface.co/datasets/SWE-Gym/OpenHands-Sampled-Trajectories), [OpenHands verifier trajectories](https://huggingface.co/datasets/SWE-Gym/OpenHands-Verifier-Trajectories), [MoatlessTools sampled trajectories](https://huggingface.co/datasets/SWE-Gym/MoatlessTools-Sampled-Trajectories), and [MoatlessTools agent/verifier training data](https://huggingface.co/datasets/SWE-Gym/MoatlessTools-Agent-Verifier-Train-Data).
- Models: [official SWE-Gym Hugging Face organization](https://huggingface.co/SWE-Gym), which exposes agent and verifier repositories; several checked repositories lack model cards and license metadata.
- Project: [official Apple Machine Learning Research page](https://machinelearning.apple.com/research/training-software).

Version note: the main code was inspected at commit `b681068ca20628c6987b7416cc4cf03f06b77ba5` and the main dataset at revision `bb94ed9e39bbeb96a7fcbfb533b80f25a7fd59cb`. The official repositories have no experiment-bound tags or GitHub Releases, and no immutable manifest binds task IDs, image digests, fork commits, trajectories, subsets, checkpoints, and predictions. Artifact presence does not transfer the main code/data licenses to the unlabelled auxiliary releases.
