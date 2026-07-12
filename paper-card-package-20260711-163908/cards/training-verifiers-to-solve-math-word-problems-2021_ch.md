# 论文卡片：Training Verifiers to Solve Math Word Problems

> **一句话评价：** 每道 GSM8K 题生成 100 条完整解题轨迹，并由学习式验证器选出得分最高的候选。
> **阅读优先级：** 必读
> **论文类型：** 推理数据 / construction_recipe, scaling_study, verifier_reward 论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 best-of-N、验证器训练、候选覆盖率与选择误差的读者。
> **置信度：** 高
> **年份 / 来源：** 2021 · arXiv preprint arXiv:2110.14168
> **作者：** Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, Christopher Hesse, John Schulman
> **机构：** OpenAI
> **链接：** [Paper](https://arxiv.org/abs/2110.14168) · [Code](https://github.com/openai/grade-school-math)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-verifiers-to-solve-math-word-problems-2021&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-verifiers-to-solve-math-word-problems-2021&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=training-verifiers-to-solve-math-word-problems-2021&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

每道 GSM8K 题生成 100 条完整解题轨迹，并由学习式验证器选出得分最高的候选。 原文界定的问题是：GSM8K, with 7,500 training and 1,000 test grade-school math word problems.

一个可复用记录包括：problem, candidate_solution, final_answer, outcome_label, token_level_verifier_score, solution_level_verifier_score, sample_rank, sample_count。

## 2. 核心思想：这篇论文的主要贡献是什么？

每道 GSM8K 题生成 100 条完整解题轨迹，并由学习式验证器选出得分最高的候选。

核心机制是：GPT-3-family generators fine-tuned for two epochs sample complete natural-language solutions. 反馈契约是：a learned verifier predicts correctness from the problem and candidate solution; labels come only from final-answer correctness.

## 3. 方法：它是怎么工作的？

生成与搜索流程是：a two-epoch fine-tuned generator sampled at positive temperature for candidate-set construction. 采样或搜索协议是：sample 100 completions per training problem for verifier data and 100 per test problem for the main best-of-N result; sweep 25 to 3,200 at test time. 筛选规则是：label every completion by final-answer match, train a verifier, then return the candidate with maximum verifier score.

最终记录包含：problem, candidate_solution, final_answer, outcome_label, token_level_verifier_score, solution_level_verifier_score, sample_rank, sample_count。论文报告的用途包括 reward modeling, evaluation, test time compute。

## 4. 证据：为什么应该相信它？

验证器优于单纯微调且随数据扩展；分开test@N与实际选择，并扩展至3200候选。主实验每题使用 100 个候选，并将 test@N 覆盖上界与验证器实际选择正确率分开；扩展到 3,200 候选的曲线说明选择器和生成覆盖需分别评估。

## 5. 新意：相比已有工作新在哪里？

相比单路径生成、best-of-N 和只保留最终成功答案的过滤方式，本文的变化是：每道 GSM8K 题生成 100 条完整解题轨迹，并由学习式验证器选出得分最高的候选。

可复用的新意在于把生成、选择或验证与保留下来的推理轨迹连成一条可审计链路；通用采样、搜索、SFT 或最终答案评测并不是本文独有的新组件。

## 6. 局限：弱点或隐藏假设是什么？

终答正确可能掩盖错推理；oracle覆盖不等于选择准确；专有模型与候选池妨碍复现。终答正确会把部分错误推理标成正例，oracle test@N 也不等于可部署准确率；GPT-3 权重、完整 100 路候选池与验证器分数没有公开。

## 7. 用途：我可以如何使用这篇论文？

可作为题目-候选-标签-分数-排名-温度-N的基础审计schema。这是 best-of-N 审计的基础 schema：每题应绑定全部自然语言解、终答标签、token/solution 级分数、排名、最终选择、T=0.7 与候选 N。

## 8. 阅读笔记：应该记住什么？

公开GSM8K不是100路rollout数据；贪心准确率上升时多样性可能坍缩。需牢记生成器微调更久可能提高贪心准确率却使高温候选多样性坍缩；官方 GSM8K 仓库只发布题目与参考解，不是论文的验证器训练 rollout。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{training_verifiers_to_solve_math_word_problems_2021,
  title = {Training Verifiers to Solve Math Word Problems},
  author = {Karl Cobbe and Vineet Kosaraju and Mohammad Bavarian and Mark Chen and Heewoo Jun and Lukasz Kaiser and Matthias Plappert and Jerry Tworek and Jacob Hilton and Reiichiro Nakano and Christopher Hesse and John Schulman},
  year = {2021},
  howpublished = {arXiv preprint arXiv:2110.14168}
}
```
