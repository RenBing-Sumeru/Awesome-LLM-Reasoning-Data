既有 baseline 通常按单次 accuracy、扁平 self-consistency、loss/confidence、静态元数据或随机采样筛选难度与质量。论文中最接近的多模态比较 MM-Eureka 使用 zero-shot accuracy；ThinkLite-VL 主张 tree-search budget 能进一步区分立即解出、晚解与仍未解的 prompt。论文还直接比较 random、full-pool、offline self-consistency、online self-consistency 与不同阈值。（论文 §2、§4）

真正改变的是 selection interface。一个 prompt 不再只带 source label 或经验 pass rate，而是关联 target policy、search scaffold、critic、首次通过迭代号 `K`、未解状态与选择阈值。7B 和 72B 分别运行 selection pass，不把难度视为内在属性。5.4K overlap 与跨规模训练退化，使这种策略相对解释具有实际后果。（论文 §3.2、Table 5）

对 reasoning data 研究而言，方向信号是：在分配 RL rollout 之前，先投入有界的构造算力测量 policy 在哪里遇到困难。真正有用的对象是版本化 difficulty decision ledger，而不只是最终 accepted Parquet。它可支撑 curriculum、selector 对比与审计，帮助区分“确有信息量的困难”与“错误标注造成的困难”。现有发布只部分实现了该对象，因为没有把 `K`、critic 输出、rejected row 与失败搜索组成完整 manifest。

若干组件本身并不新：MCTS、GRPO、Qwen2.5-VL、带参考答案的 judge、开源视觉问答数据集与 hard-example training 均早于本文。本文没有提出新的 process reward model、formal verifier 或视觉推理 benchmark。其贡献在于把 MCTS solve effort 与模型特定 prompt 筛选整合起来，并用一组消融说明，在所报告设置下，late-solved 加 unsolved 区间能够优于更大或更扁平的选择方案。

质量结论必须保持条件性。只有当 critic、ground truth、prompt 转换与采样预算可靠时，search depth 才是有效构造信号；它也可能编码 critic error、图像不可见、label noise 或随机搜索方差。复用前应检查 critic calibration、逐来源存活率、不同 seed 与 policy revision 下的稳定性、保留失败轨迹的影响、匹配算力比较，以及收益能否在独立验证并去污染的候选池上重现。
