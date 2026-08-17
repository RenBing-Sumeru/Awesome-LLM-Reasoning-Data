公开数据对象无法对齐。仓库有 671 条 raw SweSetupBench 记录，论文描述 2,877 个已构建和 2,809 个已准备的 Python 环境，主要 trajectory dataset 有 2,809 条 `messages`-only 记录，而 SWE-Factory-Gym 有 430 条 task/environment 记录。没有 stable ID 或 manifest 将这些集合映射到 training subset、五个 checkpoint 或 evaluation prediction。主要 trajectory schema 也缺少 success、verifier output、reward 与 rejected record。

Verifier 同时可能出现 false negative 和语义过宽。Marker typo 与 `set -e` 造成 16 个报告的 false negative；反过来，crash、缺失 dependency 与 timeout 等任意 nonzero pre-patch exit 都可能满足谓词前半段。报告的 parser confusion matrix 不能证明每个 nonzero 都代表预期失败测试。由于接收阶段使用 gold patch，source linkage 与 gold-label error 也没有被独立检查。

环境复现不完整。Dockerfile 与 evaluation script 是配方，不是 immutable environment。Base-image tag 可能变化，而发布内容缺少 built image、digest-pinned base、package lock、binary-resource hash、SBOM、build log，以及把每个 episode 映射到精确 container 的全任务清单。缺失的 `Appendix.pdf`、不存在的 paper-run tag，以及 accepted setting 与当前 example 的漂移进一步削弱可重建性。

论文身份与引用界面存在漂移。Accepted paper 标题为 **SWE Data Construction, Automatically!** 并列出 Haoyu Song；较早的 arXiv/仓库引用元数据使用更长的 SWE-Factory 标题与 Yingtian Zou。Accepted PDF 仍保留 2018 ACM placeholder、dummy DOI 与 `Trovato et al.` 页眉。在 official proceedings record 出现之前，ACM URL、DOI、page range 与最终 BibTeX 均为 unknown。

发布权利尚未解决。代码仓库的自定义声明对 non-commercial/academic use 适用 AGPL-3.0 条款，并要求商业使用单独许可；Hugging Face dataset card 则标注 MIT，却没有分析 issue、repository code、patch、test、log 或派生 trajectory 的上游许可。五个 model repository 既没有 model card，也没有声明 license。Privacy、consent、secret/PII scan、malicious-code containment 与 takedown handling 同样未披露。

污染控制只到作者报告的 repository split：十个训练仓库据称不同于 SWE-bench 仓库，但 appendix 缺失使 membership 无法审计。发布内容没有 issue、commit、patch、semantic、clone、solution、generator-pretraining 或 base-model-pretraining overlap 分析。四种语言与 12 个 benchmark repository，以及不超过 14B 的训练模型，限定了实验泛化范围。
