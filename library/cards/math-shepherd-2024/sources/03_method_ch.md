1. 输入：带参考最终答案的数学题、模型生成的逐步解答，以及部分解答前缀。
2. 流程：从每个前缀采样 continuations，检查这些 continuation 的最终答案，把成败转成 step/prefix reward，训练 process reward model，再用于 solution selection 或 reinforcement。
3. 输出：自动标注的过程监督记录、一个 PRM，以及经重排或强化后的 solver 输出。
4. 验收：rollout 的最终答案检查提供 teacher signal；学到的 PRM 只是代理 judge。
5. 复现边界：必须固定 problem sets、base generator、rollout count、temperature、answer checker、reward aggregation rule、PRM architecture 和 inference/search budget。
