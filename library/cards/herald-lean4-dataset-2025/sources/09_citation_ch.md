ICLR proceedings 提供的官方 BibTeX 为：

```bibtex
@inproceedings{ICLR2025_8c2bb821,
  author = {Gao, Guoxiong and Wang, Yutong and Jiang, Jiedong and Gao, Qi and Qin, Zihan and Xu, Tianyi and Dong, Bin},
  booktitle = {International Conference on Learning Representations},
  editor = {Y. Yue and A. Garg and N. Peng and F. Sha and R. Yu},
  pages = {55720--55762},
  title = {Herald: A Natural Language Annotated Lean 4 Dataset},
  url = {https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Paper-Conference.pdf},
  volume = {2025},
  year = {2025}
}
```

已核验的官方入口：

- ICLR 2025 proceedings record：https://proceedings.iclr.cc/paper_files/paper/2025/hash/8c2bb821410066459be64d03a4dc5719-Abstract-Conference.html
- 接收版 paper PDF：https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Paper-Conference.pdf
- 官方 supplement：https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Supplemental-Conference.zip
- 官方 BibTeX：https://proceedings.iclr.cc/paper_files/paper/2025/file/8c2bb821410066459be64d03a4dc5719-Bibtex-Conference.bib
- ArXiv record：https://arxiv.org/abs/2410.10878
- OpenReview record：https://openreview.net/forum?id=Se6MgCtRhz
- 官方 code/evaluation repository 与 project 入口：https://github.com/frenzymath/herald_translator
- Statement dataset，579,883 rows：https://huggingface.co/datasets/FrenzyMath/Herald_statements
- Proof dataset，44,553 rows：https://huggingface.co/datasets/FrenzyMath/Herald_proofs
- Herald Translator model：https://huggingface.co/FrenzyMath/Herald_translator
- 关联 Lean 4.11.0 test environment：https://github.com/frenzymath/lean_test_v4110

Citation status 已核验。最终模型结果应引用 ICLR 接收版论文，因为 arXiv v2 仍保留旧值。已检查的 revision 分别为 statement data `d8d849682ecfba92dda26026a97e10a662187f4c`、proof data `2d31b459df74d730bff85682de237d894b4eecfa`、translator model `c819f8707ef7486befcac64b7ce907afa7fb7dd4`、code `f03f6c40e57baae4ed084f29e0511364f41a2370` 与 Lean environment `25a1d0527272e24bc88f0aec08db74e69b5db4b3`。没有官方 named release 绑定这些 artifact。论文所链 Lean-Jixia repository 在 2026-07-23 返回 404，因此只作为历史不可用依赖记录，不列入活跃 artifact 链接，也不以未核验 successor 替换。
