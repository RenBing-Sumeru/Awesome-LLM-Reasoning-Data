以下为核验后的 NeurIPS 2025 Main Conference Track 引文：

```bibtex
@inproceedings{zhao2025sirius,
  title={SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning},
  author={Wanjia Zhao and Mert Yuksekgonul and Shirley Wu and James Y. Zou},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025},
  url={https://papers.nips.cc/paper_files/paper/2025/hash/b45279ac82cb017a5f55ea7d3653193a-Abstract-Conference.html}
}
```

已核验的论文入口：

- NeurIPS 官方 proceedings 页面：https://papers.nips.cc/paper_files/paper/2025/hash/b45279ac82cb017a5f55ea7d3653193a-Abstract-Conference.html
- 正式 30 页 proceedings PDF：https://papers.nips.cc/paper_files/paper/2025/file/b45279ac82cb017a5f55ea7d3653193a-Paper-Conference.pdf
- 官方 proceedings supplement：https://papers.nips.cc/paper_files/paper/2025/file/b45279ac82cb017a5f55ea7d3653193a-Supplemental-Conference.zip
- arXiv：https://arxiv.org/abs/2502.04780
- arXiv DOI：https://doi.org/10.48550/arXiv.2502.04780
- OpenReview 记录：https://openreview.net/forum?id=IDSTtDw4Cs
- arXiv BibTeX 入口：https://arxiv.org/bibtex/2502.04780

已核验的 code 与 sample-data 入口：

- 官方 repository：https://github.com/zou-group/sirius
- 已检查的 repository snapshot：https://github.com/zou-group/sirius/tree/16643cdc484b07d4d20419ba785a32a9845639b7
- 该 snapshot 的 MIT software license：https://github.com/zou-group/sirius/blob/16643cdc484b07d4d20419ba785a32a9845639b7/LICENSE
- 五行 sample input：https://github.com/zou-group/sirius/blob/16643cdc484b07d4d20419ba785a32a9845639b7/dataset/phy_train.jsonl

sample file 恰好包含五行 JSONL，全部是 MMLU physics input，字段为 `index`、`question`、`groundtruth` 与 `task`。它不是论文报告的 212 行 physics train split、role-specific SFT library 或 trajectory release。

Artifact 可用性 ledger：

- 官方 project page：`null`
- Hugging Face dataset：`null`
- Dataset card：`null`
- SiriuS fine-tuned model/checkpoint：`null`
- Provider fine-tune identifier：`unknown`
- 论文运行 experience library 与完整 trajectory：`null`
- 论文运行 result/trajectory log：`null`
- Immutable GitHub tag 或 release：`null`
- Derived-trajectory 与 fine-tuned-model license：`unknown`

版本说明：本 Card 使用 NeurIPS 2025 Main Conference Track 正式 proceedings artifact，并另行记录 2025 年 2 月 7 日提交的 arXiv v1。代码与 release 结论固定在 2025 年 12 月 1 日的 commit `16643cdc484b07d4d20419ba785a32a9845639b7`。该 repository state 已超出 proceedings supplement 的版本，GitHub 没有 tag 或 release 标识精确论文代码版本。README badge text 含错误 arXiv 编号，但其 link 与 citation 指向已核验的 `2502.04780`。
