对于 Frontier Reports and Data Disclosure Ledger track，本 Card 提供了一种严格比较方式：Qwen3.5 实际发布了什么，以及其训练主张若要被审计还需要什么。它区分三种 artifact 层级：官方报告、采用 Apache-2.0 的后训练 checkpoint/configuration 发布，以及包含引文与部署材料的官方信息仓库；其中任何一种都不能替代缺失的智能体训练记录与 feedback contract。

可复用披露包应标明预训练来源清单与权利；发布 RL task 和 environment ID、版本、observation/action/tool schema、reset 与 terminal rule；保存 prompt、多模态输入、trajectory、reward、verifier output、被拒尝试、replay 决策与 seed；并把每条记录映射到过滤、课程分配、optimizer stage、checkpoint 与 evaluation split。若要审计 million-environment 主张，还需要环境 container 与确定性 replay metadata。

研究者可利用当前来源研究开放权重部署或比较前沿披露实践，但不能据此复现 agent RL、训练 reward model、回放报告环境或推断可靠 RLVR contract。Benchmark performance 应只作为已发布模型在评估设置下的证据，不能证明隐藏数据或反馈质量高。
