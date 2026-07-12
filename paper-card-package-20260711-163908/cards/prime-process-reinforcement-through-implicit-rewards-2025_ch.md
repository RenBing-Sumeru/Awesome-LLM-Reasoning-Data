# 论文卡片：PRIME: Process reinforcement through implicit rewards

> **一句话评价：** PRIME 在 RL 循环中联合更新策略与隐式奖励信号，无需预先收集人工步骤标签。
> **阅读优先级：** 可读
> **论文类型：** 推理数据 / process_supervision, verifier_reward, construction_recipe论文
> **知识点分类：** Rollout, Search, and Test-Time Trace Data
> **适合读者：** 适合研究 rollout、搜索轨迹、验证器和 post-training 数据谱系的读者。
> **置信度：** 高
> **年份 / 来源：** 2025 · arXiv
> **作者：** Ganqu Cui, Lifan Yuan, Zefan Wang, Hanbin Wang, Yuchen Zhang, Jiacheng Chen, Wendi Li, Bingxiang He, Yuchen Fan, Tianyu Yu, Qixin Xu, Weize Chen, Jiarui Yuan, Huayu Chen, Kaiyan Zhang, Xingtai Lv, Shuo Wang, Yuan Yao, Xu Han, Hao Peng, Yu Cheng, Zhiyuan Liu, Maosong Sun, Bowen Zhou, Ning Ding
> **机构：** Shanghai AI Laboratory · Tsinghua University · University of Illinois Urbana-Champaign · Peking University · Shanghai Jiao Tong University
> **链接：** [Paper](https://arxiv.org/abs/2502.01456) · [DOI](https://doi.org/10.48550/arXiv.2502.01456) · [Code](https://github.com/PRIME-RL/PRIME) · [Data](https://huggingface.co/datasets/PRIME-RL/Eurus-2-Rollout) · [Hugging Face](https://huggingface.co/PRIME-RL)
> **Ask the Atlas：** [解释](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=explain) · [审计](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=audit) · [对比](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prime-process-reinforcement-through-implicit-rewards-2025&mode=compare)

---

## 1. 问题：这篇论文想回答什么问题？

论文研究如何只用策略 rollout 与结果标签，在线产生稠密的隐式过程奖励。

## 2. 核心思想：这篇论文的主要贡献是什么？

PRIME 在 RL 循环中联合更新策略与隐式奖励信号，无需预先收集人工步骤标签。

## 3. 方法：它是怎么工作的？

当前策略采样数学和代码响应，任务验证器给出结果奖励，隐式奖励模型估计 token/步骤贡献并参与优势计算和更新。

## 4. 证据：为什么应该相信它？

实验展示在线过程奖励的训练效果，但证据依赖具体策略、采样分布、答案检查和优化配置。

## 5. 新意：相比已有工作新在哪里？

它把过程监督从静态标注集改成随策略分布更新的在线对象。

## 6. 局限：弱点或隐藏假设是什么？

隐式奖励可能继承结果验证器漏洞并随策略漂移；不记录每轮模型和 rollout 就无法复现。

## 7. 用途：我可以如何使用这篇论文？

可用于研究无人工稠密标签的 RLVR，并与 outcome-only、离线 PRM 和人工 PRM 做受控比较。

## 8. 阅读笔记：应该记住什么？

关键是保留 prompt、rollout、结果奖励、隐式过程奖励、优势和策略版本的对应关系。

## 9. 引用

临时引用，人工 review 后替换为官方 BibTeX：

```bibtex
@misc{prime_process_reinforcement_through_implicit_rewards_2025,
  title = {PRIME: Process reinforcement through implicit rewards},
  author = {Ganqu Cui and Lifan Yuan and Zefan Wang and Hanbin Wang and Yuchen Zhang and Jiacheng Chen and Wendi Li and Bingxiang He and Yuchen Fan and Tianyu Yu and Qixin Xu and Weize Chen and Jiarui Yuan and Huayu Chen and Kaiyan Zhang and Xingtai Lv and Shuo Wang and Yuan Yao and Xu Han and Hao Peng and Yu Cheng and Zhiyuan Liu and Maosong Sun and Bowen Zhou and Ning Ding},
  year = {2025},
  howpublished = {arXiv}
}
```
