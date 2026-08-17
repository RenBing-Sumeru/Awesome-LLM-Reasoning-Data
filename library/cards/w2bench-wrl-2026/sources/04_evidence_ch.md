**主张。** 需求级 reward modeling 可提升写作。**设置。** 论文在 WEval 上将 7B reward model 与 judge prompting 和既有 reward model 比较，再将其用于多个 base model 的 RL。**结果。** 作者的 7B reward model 取得 94.6 的相关性、97.3 的 instruction-level 和 78.0 的 prompt-level 分数；Qwen2.5-7B-Instruct 在 WritingBench 从 57.0 提升至 64.4。

**边界。** 结果支持该需求删除构造及这些基准，不能分离 teacher 生成、过滤、reward 训练和 GRPO 的全部贡献，也不能证明覆盖所有真实写作需求。
