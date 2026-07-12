# 论文卡片：Efficient Long CoT Reasoning in Small Language Models

> **一句话评价：** 方法先裁剪教师长推理中的冗余步骤，再筛选学生自己生成且答案正确的 on-policy 轨迹。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · arXiv
> **作者：** Zhaoyang Wang, Jinqi Jiang, Tian Qiu, Hui Liu, Xianfeng Tang, Huaxiu Yao
> **机构：** University of North Carolina at Chapel Hill · Huazhong University of Science and Technology · Fudan University · Amazon
> **链接：** [Paper](https://arxiv.org/abs/2505.18440) · [DOI](https://doi.org/10.48550/arXiv.2505.18440)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=efficient-long-cot-reasoning-in-small-language-models-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=efficient-long-cot-reasoning-in-small-language-models-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=efficient-long-cot-reasoning-in-small-language-models-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文关注小模型继承长 CoT 时的准确率、轨迹长度和训练效率矛盾。

## 2. 核心思想：这篇论文的主要贡献是什么？

方法先裁剪教师长推理中的冗余步骤，再筛选学生自己生成且答案正确的 on-policy 轨迹。

## 3. 方法：它是怎么工作的？

输入为题目和教师长 CoT，经过步骤裁剪、学生采样与答案检查，输出压缩轨迹和被接受的学生训练样本。

## 4. 证据：为什么应该相信它？

数学任务上的准确率与长度结果支持方法，但最终答案检查不能证明每个保留或删除步骤都忠实。

## 5. 新意：相比已有工作新在哪里？

新意是把 long-to-short 蒸馏与学生 on-policy 数据筛选串成同一条数据谱系。

## 6. 局限：弱点或隐藏假设是什么？

裁剪可能删除必要但表面冗余的步骤，答案级验证也可能接受有缺陷的推理过程。

## 7. 用途：我可以如何使用这篇论文？

适合研究高效 reasoning distillation；复用时应保存教师原轨迹、裁剪掩码、学生候选和检查结果。

## 8. 阅读笔记：应该记住什么？

应同时报告准确率、平均轨迹长度、采样预算和筛选率，不能只看最终 benchmark 分数。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{efficient_long_cot_reasoning_in_small_language_models_2025,
  title = {Efficient Long CoT Reasoning in Small Language Models},
  author = {Zhaoyang Wang and Jinqi Jiang and Tian Qiu and Hui Liu and Xianfeng Tang and Huaxiu Yao},
  year = {2025},
  howpublished = {arXiv}
}
```
