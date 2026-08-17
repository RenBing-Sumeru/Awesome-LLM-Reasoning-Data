Motion Transfer 无法从报告复现。架构、跨具身 alignment object、loss、optimizer、batching、mixture weight、curriculum、schedule、checkpoint selection 与负迁移控制都未披露。聚合 ablation 表明存在效果，却不能识别究竟是哪类数据、平台比例或算法组件造成效果。

自然语言 thinking label 的 provenance 未知。可见的 inference trace 不能说明训练 target 来自人工 annotator、teacher model、自生成、蒸馏还是隐藏内部表示。覆盖率、prompt、修订、过滤以及展示 thought 与实际优化 target 的一致性均未报告。只出现在注释 TeX 中的 thinking-token 数值不是已发表证据，不能作为实验设置引用。

模拟构成重要审计边界。超过 90% 的开发评测 episode 使用与真实场景对齐的 MuJoCo，但 simulator asset、版本、随机化、failure distribution 与 sim-to-real 校准不可得。排名一致性可以支持迭代，却不能证明真实世界鲁棒性。

环境与 checkpoint 可比性不完整。230-task 通用 VLA suite 使用共享 checkpoint，但长时程 ALOHA 使用 pre-training checkpoint，Franka 则接受额外 post-training。实时和 offline success detection 的延迟与推理预算也不同。这些条件下的分数不应合并成一个模型估计。

Progress、success 与 failure label 的来源不完整。任务 rubric 有部分描述，但 label author、class balance、inter-rater agreement、threshold、calibration、false-positive/negative rate 与可执行 terminal predicate 未开放。Gemini 2.5 Flash 打分与 AutoRater 又引入了专有 judge 依赖。

数据与权利状态仍不透明。机器人 demonstration、sensor/action 记录、互联网来源、synthetic caption、thinking trace、安全攻击与 label 都没有平台级 manifest，也没有 operator consent、隐私审查、失败保留、license 或再分发条款。论文的 CC BY 4.0 不延伸到这些专有工件、模型权重或训练代码。

最后，item-level split、duplicate-trajectory check、scene/object overlap、互联网污染，以及 source→caption→sensor/action→thought→checkpoint 的记录级 lineage 都缺失。跨具身限制在概念上有价值，但没有 manifest 就无法独立验证。
