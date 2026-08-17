ICLR 官方 proceedings record 确认 title、authors 与 ICLR 2025 publication，官方 virtual-program record 确认 Spotlight status。检查时 proceedings BibTeX endpoint 未返回可用记录，所以下面是明确标注的、基于 venue record 的 provisional citation，而不是官方导出的 BibTeX：

```bibtex
@inproceedings{xu2025agenttrek,
  title     = {AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials},
  author    = {Xu, Yiheng and Lu, Dunjie and Shen, Zhennan and Wang, Junli and Wang, Zekun and Mao, Yuchen and Xiong, Caiming and Yu, Tao},
  booktitle = {International Conference on Learning Representations},
  year      = {2025},
  url       = {https://proceedings.iclr.cc/paper_files/paper/2025/hash/c681fb2bf1d785fbc766f3ea14758aab-Abstract-Conference.html}
}
```

已核验入口：[ICLR proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/c681fb2bf1d785fbc766f3ea14758aab-Abstract-Conference.html)、[ICLR Spotlight poster](https://iclr.cc/virtual/2025/poster/30416)、[arXiv](https://arxiv.org/abs/2412.09605)、[project](https://agenttrek.github.io/)、[code](https://github.com/xlang-ai/AgentTrek)、[dataset](https://huggingface.co/datasets/xlangai/AgentTrek) 与 [model](https://huggingface.co/xlangai/AgentTrek-1.0-32B)。

Version note：分别检查了 code `a8924dc31aabf797e25230f23a6b9b723149e513`、dataset `32aabe6fb48d8e2e7dae1678e6ff05ba23725b2c` 与 model `9bbc861a2901e63350f628676599f4434b74ed2b`；没有 manifest 把它们绑定为同一次 paper run。
