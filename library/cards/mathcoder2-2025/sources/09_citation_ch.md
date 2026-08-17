以下复现 ICLR proceedings 官方引文。Proceedings 与 OpenReview 将该工作标为 ICLR 2025 Spotlight。Proceedings 元数据把 Ke Wang 排在 Houxing Ren 之前，final PDF 则对调两人顺序；本卡采用官方 proceedings 记录。

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

已核验的官方入口：

- 论文：[ICLR proceedings final PDF](https://proceedings.iclr.cc/paper_files/paper/2025/file/bea94fe9c5573e74294657f692069d89-Paper-Conference.pdf)；[venue record](https://proceedings.iclr.cc/paper_files/paper/2025/hash/bea94fe9c5573e74294657f692069d89-Abstract-Conference.html) 与 [OpenReview](https://openreview.net/forum?id=1Iuw1jcIrf) 确认 ICLR 2025 Spotlight 状态。
- 代码：[mathllm/MathCoder2](https://github.com/mathllm/MathCoder2)，检查 revision 为 [`70413a4f2f59929bc0ebd2f1640884222a993b89`](https://github.com/mathllm/MathCoder2/tree/70413a4f2f59929bc0ebd2f1640884222a993b89)。
- 数据：[MathGenie/MathCode-Pile](https://huggingface.co/datasets/MathGenie/MathCode-Pile)，检查 revision 为 [`df9a4417658cdbe8875e851fa908a50c98c8e247`](https://huggingface.co/datasets/MathGenie/MathCode-Pile/tree/df9a4417658cdbe8875e851fa908a50c98c8e247)；dataset card 明确说明公开语料为 partial。
- 模型：[官方 MathCoder2 Hugging Face collection](https://huggingface.co/collections/MathGenie/mathcoder2)，包含四个 continued-pretrained checkpoint 与相关 classifier artifact。
- 项目：[官方 MathCoder2 project page](https://mathllm.github.io/mathcoder2/)。

版本说明：检查的 code commit 与 dataset revision 日期均为 2024-10-16；GitHub repository 没有将它们绑定到 ICLR-final run 的 tag 或 GitHub Release。Model/data collection 也没有提供 release-wide manifest 来连接 source row、execution decision、decontamination result、training configuration 与 checkpoint hash。
