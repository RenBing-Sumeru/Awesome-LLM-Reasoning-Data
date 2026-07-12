# 论文卡片：Reasoning with Language Model is Planning with World Model

> **一句话评价：** RAP 用 MCTS 在模型预测的状态空间中展开候选推理步骤，并依据任务奖励选择路径。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2023 · EMNLP
> **作者：** Shibo Hao, Yi Gu, Haodi Ma, Joshua Jiahua Hong, Zhen Wang, Daisy Zhe Wang, Zhiting Hu
> **机构：** UC San Diego · University of Florida · Mohamed bin Zayed University of Artificial Intelligence
> **链接：** [Paper](https://arxiv.org/abs/2305.14992) · [Venue](https://aclanthology.org/2023.emnlp-main.507/)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-language-model-is-planning-with-world-model-2023&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-language-model-is-planning-with-world-model-2023&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-language-model-is-planning-with-world-model-2023&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文把语言推理表述为规划问题：语言模型既是行动生成器，也是预测后继状态的世界模型。

## 2. 核心思想：这篇论文的主要贡献是什么？

RAP 用 MCTS 在模型预测的状态空间中展开候选推理步骤，并依据任务奖励选择路径。

## 3. 方法：它是怎么工作的？

系统从问题状态生成动作，预测下一状态，计算任务特定奖励并回传价值，最终输出搜索选中的计划或答案。

## 4. 证据：为什么应该相信它？

规划、数学和逻辑任务的结果支持树搜索方法，但中间状态是模型预测而非真实环境状态。

## 5. 新意：相比已有工作新在哪里？

它显式暴露了世界模型预测、任务奖励和树策略这三个常被隐藏的推理组件。

## 6. 局限：弱点或隐藏假设是什么？

错误世界模型会系统性误导搜索；任务奖励与 MCTS 预算变化也可能比基础模型更影响结果。

## 7. 用途：我可以如何使用这篇论文？

适合研究搜索式推理和 TTC；比较时要固定模型调用数、分支宽度、深度和奖励函数。

## 8. 阅读笔记：应该记住什么？

不要只保存最终推理链，应保留预测状态、候选动作、奖励、节点价值和被剪枝分支。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{reasoning_with_language_model_is_planning_with_world_model_2023,
  title = {Reasoning with Language Model is Planning with World Model},
  author = {Shibo Hao and Yi Gu and Haodi Ma and Joshua Jiahua Hong and Zhen Wang and Daisy Zhe Wang and Zhiting Hu},
  year = {2023},
  howpublished = {EMNLP}
}
```
