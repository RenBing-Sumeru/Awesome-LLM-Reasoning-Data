# 论文卡片：Competition-Level Code Generation with AlphaCode

> **一句话评价：** 每题每个模型采样一百万个程序，再经编译、示例测试和行为聚类压缩为最多十次提交。
> **阅读优先级：** 必读
> **论文类型：** 推理数据 / model_report, scaling_study, construction_recipe 论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究代码大规模采样、程序验证、候选去冗余与预算归因的读者。
> **置信度：** 高
> **年份 / 来源：** 2022 · Science 378(6624), 1092-1097
> **作者：** Yujia Li, David Choi, Junyoung Chung, Nate Kushman, Julian Schrittwieser, Rémi Leblond, Tom Eccles, James Keeling, Felix Gimeno, Agustin Dal Lago, Thomas Hubert, Peter Choy, Cyprien de Masson d'Autume, Igor Babuschkin, Xinyun Chen, Po-Sen Huang, Johannes Welbl, Sven Gowal, Alexey Cherepanov, James Molloy, Daniel J. Mankowitz, Esme Sutherland Robson, Pushmeet Kohli, Nando de Freitas, Koray Kavukcuoglu, Oriol Vinyals
> **机构：** DeepMind
> **链接：** [Paper](https://arxiv.org/abs/2203.07814) · [DOI](https://doi.org/10.1126/science.abq1158) · [Code](https://github.com/google-deepmind/code_contests) · [Project](https://deepmind.google/blog/competitive-programming-with-alphacode/) · [Venue](https://www.science.org/doi/10.1126/science.abq1158)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=competition-level-code-generation-with-alphacode-2022&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=competition-level-code-generation-with-alphacode-2022&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=competition-level-code-generation-with-alphacode-2022&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

每题每个模型采样一百万个程序，再经编译、示例测试和行为聚类压缩为最多十次提交。 原文界定的问题是：CodeContests competitive-programming statements from Codeforces and related contest platforms.

一个可复用记录包括：problem_statement, language, sampled_program, compilation_result, example_test_result, behavior_cluster, model_score, selected_submission, sample_count。

## 2. 核心思想：这篇论文的主要贡献是什么？

每题每个模型采样一百万个程序，再经编译、示例测试和行为聚类压缩为最多十次提交。

核心机制是：AlphaCode policy models sample Python and C++ programs at very large scale. 反馈契约是：compilation and example-test filtering followed by clustering and model-based ranking; hidden tests provide terminal evaluation only.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：an ensemble of AlphaCode models samples programs independently for each problem. 采样或搜索协议是：draw one million samples per problem from each model in the main large-scale analysis before filtering and clustering. 筛选规则是：remove noncompiling and example-test-failing samples, cluster survivors by behavior on generated inputs, then rank representatives.

最终记录包含：problem_statement, language, sampled_program, compilation_result, example_test_result, behavior_cluster, model_score, selected_submission, sample_count。论文报告的用途包括 evaluation, test time compute。

## 4. 证据：为什么应该相信它？

模拟十场近期 Codeforces 达估计前54.3%；样例过滤超99%样本，并消融规模、过滤、聚类和集成。还应结合论文中模型规模、集成、过滤与聚类消融来解释收益：隐藏测试才是最终验证，样例测试通过率不能单独视作问题解决率。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：每题每个模型采样一百万个程序，再经编译、示例测试和行为聚类压缩为最多十次提交。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

百万采样成本高；可见测试不完备；聚类依赖生成测试；完整候选、簇和排序数据未公开。审核时必须把每模型每题一百万次生成与最多十次外部提交分开，并注明官方 CodeContests 并未包含完整模型候选池、行为簇和排序器日志。

## 7. 用途：我可以如何使用这篇论文？

适合审计执行反馈和多样性如何把巨大候选池压缩成很小外部行动预算。复现实验时建议逐候选保存编译状态、全部可见测试结果、生成测试行为、簇 ID、排序分数与隐藏评测结果，以便区分覆盖率、去冗余和最终选择贡献。

## 8. 阅读笔记：应该记住什么？

不要把 CodeContests 等同于 AlphaCode rollout；区分生成、过滤、聚类与提交数量。阅读 4.4–4.6 节及表 9 时，应沿“生成数→编译后→样例通过→行为聚类→十次提交”逐层记录数量，避免用 pass@k 代替真实竞赛预算。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{competition_level_code_generation_with_alphacode_2022,
  title = {Competition-Level Code Generation with AlphaCode},
  author = {Yujia Li and David Choi and Junyoung Chung and Nate Kushman and Julian Schrittwieser and Rémi Leblond and Tom Eccles and James Keeling and Felix Gimeno and Agustin Dal Lago and Thomas Hubert and Peter Choy and Cyprien de Masson d'Autume and Igor Babuschkin and Xinyun Chen and Po-Sen Huang and Johannes Welbl and Sven Gowal and Alexey Cherepanov and James Molloy and Daniel J. Mankowitz and Esme Sutherland Robson and Pushmeet Kohli and Nando de Freitas and Koray Kavukcuoglu and Oriol Vinyals},
  year = {2022},
  howpublished = {Science 378(6624), 1092-1097}
}
```
