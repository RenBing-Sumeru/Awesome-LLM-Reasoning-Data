# 论文卡片：ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding

> **一句话评价：** 它把检索证据、过程奖励模型、过程解释模型和 MCTS 结合，生成带证据与偏好信号的搜索轨迹。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, verifier_reward, construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · arXiv
> **作者：** Zhongxiang Sun, Qipeng Wang, Weijie Yu, Xiaoxue Zang, Kai Zheng, Jun Xu, Xiao Zhang, Song Yang, Han Li
> **机构：** Gaoling School of Artificial Intelligence, Renmin University of China · School of Information Technology and Management, University of International Business and Economics · Kuaishou Technology Co., Ltd
> **链接：** [Paper](https://arxiv.org/abs/2501.07861) · [DOI](https://doi.org/10.48550/arXiv.2501.07861) · [Code](https://github.com/Jeryi-Sun/ReARTeR)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文关注检索增强推理中如何获得可信的步骤级反馈，并避免只靠最终答案监督。

## 2. 核心思想：这篇论文的主要贡献是什么？

它把检索证据、过程奖励模型、过程解释模型和 MCTS 结合，生成带证据与偏好信号的搜索轨迹。

## 3. 方法：它是怎么工作的？

系统检索上下文、扩展部分推理步骤，用 PRM 打分、PEM 解释，再由 MCTS 选择分支并形成步骤级偏好对。

## 4. 证据：为什么应该相信它？

实验把最终任务表现与过程评分结合，但可信度仍依赖检索质量以及 PRM 与解释是否真正对齐。

## 5. 新意：相比已有工作新在哪里？

相较纯数学 PRM，它把检索证据和解释也纳入可审计的数据对象。

## 6. 局限：弱点或隐藏假设是什么？

检索可能泄漏答案，PRM 可能偏好表面合理的步骤，解释模型也可能事后合理化错误分数。

## 7. 用途：我可以如何使用这篇论文？

适合研究 RAG 推理、过程监督和搜索数据构造；复用时应保留被拒分支、证据来源和搜索预算。

## 8. 阅读笔记：应该记住什么？

关键记录是“证据—步骤—分数—解释—搜索决策”的完整链路，而不是只保存最终正确轨迹。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{rearter_retrieval_augmented_reasoning_with_trustworthy_process_rewarding_2025,
  title = {ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding},
  author = {Zhongxiang Sun and Qipeng Wang and Weijie Yu and Xiaoxue Zang and Kai Zheng and Jun Xu and Xiao Zhang and Song Yang and Han Li},
  year = {2025},
  howpublished = {arXiv}
}
```
