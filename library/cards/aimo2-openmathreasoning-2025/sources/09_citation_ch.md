权威报告引文：

```bibtex
@article{moshkov2025aimo2,
  title   = {AIMO-2 Winning Solution: Building State-of-the-Art Mathematical Reasoning Models with OpenMathReasoning dataset},
  author  = {Moshkov, Ivan and Hanley, Darragh and Sorokin, Ivan and Toshniwal, Shubham and Henkel, Christof and Schifferer, Benedikt and Du, Wei and Gitman, Igor},
  journal = {arXiv preprint arXiv:2504.16891},
  year    = {2025},
  url     = {https://arxiv.org/abs/2504.16891}
}
```

已核验的官方入口：

- 指定 arXiv 报告与 DOI：https://arxiv.org/abs/2504.16891
- NVIDIA OpenMathReasoning 数据集；检查 revision 为 `d3d08664755704f422af97d43a7ff0ded4bd95df`：https://huggingface.co/datasets/nvidia/OpenMathReasoning
- NVIDIA 模型/数据 collection：https://huggingface.co/collections/nvidia/openmathreasoning
- NeMo Skills recipe；检查 code commit 为 `74b8649734a6ecc2d3beca89311e1a5e02da48fa`：https://github.com/NVIDIA-NeMo/Skills/tree/main/recipes/openmathreasoning
- 官方发布文档：https://nvidia-nemo.github.io/Skills/releases/openmathreasoning/
- 当前构造文档：https://nvidia-nemo.github.io/Skills/releases/openmathreasoning/dataset/
- NVIDIA AIMO-2 方案说明：https://developer.nvidia.com/blog/building-a-winning-math-model-for-ai-mathematical-olympiad/
- 改题后的 workshop poster：https://icml.cc/virtual/2025/52427

workshop 记录属于 2nd AI for Math Workshop @ ICML 2025 poster，不是 ICML main-conference publication。指定标题仍使用 arXiv 报告标题。用于复现的引文应同时注明固定 dataset 与 code state，因为托管 artifact 和当前文档都可能变化。
