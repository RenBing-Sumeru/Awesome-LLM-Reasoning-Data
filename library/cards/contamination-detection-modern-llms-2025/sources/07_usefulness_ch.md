对于 **Data Construction & Open Release Recipes**，该论文最适合作为一种规范：在解释 score 之前，先明确 audit record 的 contract。实践者可以为每个 detector 列出所需 input、生成的 intermediate、judge 或 statistic、aggregation level 与 failure mode，避免把 quiz accuracy、likelihood、overlap 和 p-value 错误折叠成虚构的统一标签。

known-added-exposure oracle 是设计 detector evaluation 的有用参考。其 fraction matrix 与 before/after 测量让 false negative 和同分布 false positive 可被观察。更强的复用版本应增加经证明干净或至少背景更清楚的 base、token-matched nonbenchmark SFT control、重复 training seed、精确 corpus manifest 与 calibrated confusion matrix。

公开的 1,500 条处理记录与 150 条 completion slice 可以帮助重建或 unit-test 五种 probe interface 的一部分，但不足以复现论文：original-order bank、生成 artifact、oracle data/checkpoint、output log 与若干执行路径都缺失。任何重建都应 pin upstream dataset revision 与 repository SHA，修复 Local Order duplicate-option bug，重新检查 Canonical Order statistic，并保留全部成功/失败样例、选项、抽样结果和 likelihood vector。

该工作还可作为 release-audit checklist：公开逐行 provenance 与 rights、精确 sampling/filtering code、完整 generated artifact、immutable run manifest、model/API version、seed、statistical procedure 与 failure ledger。在缺失的仓库许可和 upstream terms 得到解决前，不应重新分发或用仓库代码/处理数据直接训练。

`sft` training-use 标签的含义被刻意限制：监督微调只用于构造受控 oracle；detector score 不是 reward、preference、correctness label 或推荐 supervision。合适用途是 audit、evaluation、detector stress testing 与 recipe comparison，而不是把公开 probe row 当作经过认证的 reasoning-training data。
