The official ICLR proceedings citation is reproduced below. The proceedings and OpenReview identify this as an ICLR 2025 Spotlight. Proceedings metadata orders Ke Wang before Houxing Ren; the final PDF reverses those two names, so this Card follows the official proceedings record.

```bibtex
@inproceedings{ICLR2025_bea94fe9,
  author = {Lu, Zimu and Zhou, Aojun and Wang, Ke and Ren, Houxing and Shi, Weikang and Pan, Junting and Zhan, Mingjie and Li, Hongsheng},
  booktitle = {International Conference on Learning Representations},
  editor = {Y. Yue and A. Garg and N. Peng and F. Sha and R. Yu},
  pages = {76547--76567},
  title = {MathCoder2: Better Math Reasoning from Continued Pretraining on Model-translated Mathematical Code},
  url = {https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf},
  volume = {2025},
  year = {2025}
}
```

Verified official entry points:

- Paper: [ICLR proceedings final PDF](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf); the [venue record](https://proceedings.iclr.cc/paper_files/paper/2025/hash/bea94fe9c5573e74294657f692069d89-Abstract-Conference.html) and [OpenReview](https://openreview.net/forum?id=1Iuw1jcIrf) establish ICLR 2025 Spotlight status.
- Code: [mathllm/MathCoder2](https://github.com/mathllm/MathCoder2), inspected at commit [`70413a4f2f59929bc0ebd2f1640884222a993b89`](https://github.com/mathllm/MathCoder2/tree/70413a4f2f59929bc0ebd2f1640884222a993b89).
- Data: [MathGenie/MathCode-Pile](https://huggingface.co/datasets/MathGenie/MathCode-Pile), inspected at revision [`df9a4417658cdbe8875e851fa908a50c98c8e247`](https://huggingface.co/datasets/MathGenie/MathCode-Pile/tree/df9a4417658cdbe8875e851fa908a50c98c8e247); the card states that the public corpus is partial.
- Models: [official MathCoder2 Hugging Face collection](https://huggingface.co/collections/MathGenie/mathcoder2), containing the four continued-pretrained checkpoints and associated classifier artifacts.
- Project: [official MathCoder2 project page](https://mathllm.github.io/mathcoder2/).

Version note: the inspected code commit and dataset revision are dated 2024-10-16; the GitHub repository has no tag or GitHub Release binding them to the ICLR-final run. The model/data collection does not supply a release-wide manifest connecting source rows, execution decisions, decontamination results, training configurations, and checkpoint hashes.
