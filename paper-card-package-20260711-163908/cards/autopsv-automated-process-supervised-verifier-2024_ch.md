# 论文卡片：AutoPSV: Automated Process-Supervised Verifier

> **一句话评价：** 它用加入每一步前后验证器置信度的变化，生成步骤级进展标签和过程验证信号。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, verifier_reward, construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2024 · NeurIPS
> **作者：** Jianqiao Lu, Zhiyang Dou, Hongru Wang, Zeyu Cao, Jianbo Dai, Yingjia Wan, Zhijiang Guo
> **机构：** The University of Hong Kong · The Chinese University of Hong Kong · University of Cambridge · University of Edinburgh · City University of Hong Kong
> **链接：** [Paper](https://arxiv.org/abs/2405.16802) · [DOI](https://doi.org/10.48550/arXiv.2405.16802) · [Code](https://github.com/rookie-joe/AutoPSV)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autopsv-automated-process-supervised-verifier-2024&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autopsv-automated-process-supervised-verifier-2024&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=autopsv-automated-process-supervised-verifier-2024&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文试图在没有昂贵人工步骤标签时，从答案级验证器自动构造过程监督。

## 2. 核心思想：这篇论文的主要贡献是什么？

它用加入每一步前后验证器置信度的变化，生成步骤级进展标签和过程验证信号。

## 3. 方法：它是怎么工作的？

模型生成多步推理，答案验证器分别评估前缀，置信度增减被转换为步骤标签并用于候选选择或训练。

## 4. 证据：为什么应该相信它？

数学和常识推理实验支持自动标签的实用性，但置信度变化只是代理信号，不等价于逻辑正确性。

## 5. 新意：相比已有工作新在哪里？

它在人工步骤标注和纯结果监督之间提供了一条自动化中间路径。

## 6. 局限：弱点或隐藏假设是什么？

答案验证器若失准，错误会被传播到所有步骤；前缀置信度也可能受措辞与长度影响。

## 7. 用途：我可以如何使用这篇论文？

适合比较自动 PRM 标签与人工标签，并审计步骤级数据的噪声、校准和选择偏差。

## 8. 阅读笔记：应该记住什么？

记住其监督来源仍是答案验证器；复用时要保留前后置信度、最终标签和验证器版本。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{autopsv_automated_process_supervised_verifier_2024,
  title = {AutoPSV: Automated Process-Supervised Verifier},
  author = {Jianqiao Lu and Zhiyang Dou and Hongru Wang and Zeyu Cao and Jianbo Dai and Yingjia Wan and Zhijiang Guo},
  year = {2024},
  howpublished = {NeurIPS}
}
```
