The citation below identifies the seven-author 2025 arXiv/workshop version. The official ICML virtual record labels it a poster in the 2nd AI for Math Workshop @ ICML 2025. A later TMLR publication appeared in June 2026 with Basel Alomair added to the author list; that later record should not replace this Card's year, venue, or authors.

```bibtex
@misc{xu2025tinyv,
  title={TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning},
  author={Zhangchen Xu and Yuetai Li and Fengqing Jiang and Bhaskar Ramasubramanian and Luyao Niu and Bill Yuchen Lin and Radha Poovendran},
  year={2025},
  eprint={2505.14625},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  doi={10.48550/arXiv.2505.14625},
  url={https://arxiv.org/abs/2505.14625}
}
```

Verified official entry points:

- ICML 2025 workshop poster record: https://icml.cc/virtual/2025/52372
- Workshop OpenReview forum and PDF: https://openreview.net/forum?id=scPETXuAiY and https://openreview.net/pdf?id=scPETXuAiY
- arXiv record and DOI: https://arxiv.org/abs/2505.14625 and https://doi.org/10.48550/arXiv.2505.14625
- Official code repository and project entry: https://github.com/uw-nsl/TinyV
- Official HF collection and model family: https://huggingface.co/collections/zhangchenxu/tinyv
- Main TinyV-1.5B checkpoint: https://huggingface.co/zhangchenxu/TinyV-1.5B
- Balanced verifier-training data: https://huggingface.co/datasets/zhangchenxu/TinyV_Training_Data_Balanced
- Public hard-prompt/RL source pool: https://huggingface.co/datasets/zhangchenxu/bigmath_tinyv_filtered
- HardVerify-Math benchmark release: https://huggingface.co/datasets/zhangchenxu/HardVerify-Math
- Later TMLR version history: https://openreview.net/forum?id=HMGsqApBM3

Version note: the Card represents the seven-author 2025 workshop version. Inspected heads are code `4a9d2c720c161e2ccc0e492cc59ed5f9c226ec5f`, balanced SFT data `8e5705702ea50787be39b3ceb91414de45e24c4b`, RL prompt data `78dcfc4cc0b77ae31b91d76c3cd27ad386524465`, HardVerify `8afc00dbb909beeefc42afab302f341c8df9114a`, and TinyV-1.5B `8733b55454c21153618cd42f29a95269b7fe00f2`. No tag or immutable manifest binds these revisions to one paper run, and the public dataset cards do not declare data licenses.
