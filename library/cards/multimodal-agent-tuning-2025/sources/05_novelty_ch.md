Prior-work baseline 并不是“此前没有多模态 agent”。论文把自身放在两类工作之间：一类是通过 pseudocode、Python 或 JSON 调用工具的 LLM-driven agent，另一类是能够以视觉输入为条件的 VLM-driven agent。其更窄的出发点是，既有 VLM-agent tuning data 多依赖人工模板、小规模集合或一两个工具的简单任务，而只用 prompt 的 proprietary controller 又依赖固定 in-context example（论文第 1、2.1 节）。

具体变化是把四个要素合成一套数据 recipe：同时生成 query 与所需文件；检索图像或生成异构非图像文件；收集以 observation 为条件的可执行 ReAct 轨迹；在 SFT 前分别进行 query-file 与 trajectory 判断。这使 `{F_opt,Q,T,C,O,A}` 成为多模态 agent 训练对象，而不是把任务压平为问题和答案。

多项组件来自既有工作而非本文新创：ReAct 提供 thought/action/observation scaffold；GPT-4o mini 负责生成与判断；BGE 负责相似度检索；既有图像数据集和 ShareGPT4V caption 提供素材；LoRA、Cauldron 与 open-LLaVA-NeXT 进入训练 mixture。把漏斗扩到 23.5K candidate 并打包 21,168 行发布，是工程与 release 贡献，不是新的正确性原理。

对 reasoning-data 研究而言，其方向价值是明确耦合文件构造、可执行行为、环境 observation、筛选和训练 loss，为多模态 agent record 应保存什么提供了具体参考。同样重要的负面信号是，公开 schema 丢失 judge output、拒绝 episode、来源权利和大部分 lineage，因此无法独立重建 selection contract。

复用前，builder 应确认权威 dataset license，对齐上游条款，修复并版本化 schema，把每个 attachment 映射到 row 与 source，发布两个 judge 的 output 和 rejection，在可能时增加独立答案检查，固定 execution sandbox，并审计污染。缺少这些检查时，该 novelty 最适合作为 recipe 与 audit surface，而不是已经获准直接训练的 asset。
