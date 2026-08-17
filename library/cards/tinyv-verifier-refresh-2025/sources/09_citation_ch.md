以下引文对应七位作者的 2025 年 arXiv/workshop 版本。ICML 官方虚拟会场明确将其标为 2nd AI for Math Workshop @ ICML 2025 的 poster。后续 TMLR 版本于 2026 年 6 月发表，并新增作者 Basel Alomair；该版本不能替换本卡的年份、venue 或作者列表。

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

已核验的官方入口：

- ICML 2025 workshop poster 记录：https://icml.cc/virtual/2025/52372
- Workshop OpenReview forum 与 PDF：https://openreview.net/forum?id=scPETXuAiY 和 https://openreview.net/pdf?id=scPETXuAiY
- arXiv 记录与 DOI：https://arxiv.org/abs/2505.14625 和 https://doi.org/10.48550/arXiv.2505.14625
- 官方 code repository 与 project 入口：https://github.com/uw-nsl/TinyV
- 官方 HF collection 与 model family：https://huggingface.co/collections/zhangchenxu/tinyv
- TinyV-1.5B 主 checkpoint：https://huggingface.co/zhangchenxu/TinyV-1.5B
- Balanced verifier-training data：https://huggingface.co/datasets/zhangchenxu/TinyV_Training_Data_Balanced
- 公开 hard-prompt/RL source pool：https://huggingface.co/datasets/zhangchenxu/bigmath_tinyv_filtered
- HardVerify-Math benchmark release：https://huggingface.co/datasets/zhangchenxu/HardVerify-Math
- 后续 TMLR 版本历史：https://openreview.net/forum?id=HMGsqApBM3

版本说明：本卡代表七位作者的 2025 workshop 版本。已检查的 HEAD 分别为 code `4a9d2c720c161e2ccc0e492cc59ed5f9c226ec5f`、balanced SFT data `8e5705702ea50787be39b3ceb91414de45e24c4b`、RL prompt data `78dcfc4cc0b77ae31b91d76c3cd27ad386524465`、HardVerify `8afc00dbb909beeefc42afab302f341c8df9114a` 和 TinyV-1.5B `8733b55454c21153618cd42f29a95269b7fe00f2`。没有 tag 或 immutable manifest 把这些 revision 绑定到同一 paper run，公开 dataset card 也没有声明 data license。
