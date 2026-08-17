作者明确给出四类边界：依赖从人工整理问题转移到人工设计游戏；每次实验仍需要大量计算；评测集中在学术 benchmark 与 zero-shot transfer；并且 reward hacking 仍然可能发生。论文报告 Qwen3-4B 约需 8 张 H100 训练 25 小时、Qwen3-8B 约需 28 小时，并指出延长训练后的收益趋于饱和。三个小型零和游戏不足以证明方法可扩展到开放式、合作式、机器人或极稀疏 reward environment。（Appendix B、D.2。）

Environment 能验证游戏是否成功，却不能验证中间解释。模型可能在 reasoning 错误或事后编造时仍输出合法 action；RAE 消融只能说明非空输出与性能保持相关。GPT-4.1 pattern classification 也不是 process supervision。Curator inference：若下游直接把这些 trace 当作 faithful demonstration，可能学到游戏专属话术或隐藏的 policy traits，而不是具有因果作用的 reasoning。

Parser 与 reward 实现扩大了可攻击面。Invalid action 使用特殊的 -1.5/0.5 终止分配，达到最大回合数给 0/0，zero-advantage trajectory 还可能被丢弃。Curator inference：policy 可以通过格式、终止条件或 environment bug 获得 reward，而不学习目标技能；这些分支也使论文整洁的零和解释更复杂。论文实证展示了 fixed-opponent exploitation，却没有压力测试 self-play 对共享 parser 或 environment artifact 的利用。

发布完整性限制了审计与复现。没有 tagged per-experiment bundle 同时保存精确 TextArena/Oat/vLLM revision、prompt、seed、全部有效/无效回合、reward、baseline、advantage、optimizer state 与 checkpoint。论文声明未使用 benchmark-related data，但未给出 item-level decontamination report。仓库根目录是 MIT license，而关键文件带有 Apache-2.0 header；静态 dataset/model license 及上游义务也未解决。因此，现有材料不足以把在线 stream 当作可直接复用的数据集。
