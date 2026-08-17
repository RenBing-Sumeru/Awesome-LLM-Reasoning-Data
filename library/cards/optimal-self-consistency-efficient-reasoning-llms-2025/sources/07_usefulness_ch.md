对 rollout/search/test-time trace Track，这项工作给出了 allocation-aware self-consistency 的紧凑 schema：问题 ID 与 benchmark revision、prompt 与 decoding 配置、每条候选轨迹及归一化最终答案、答案频数表、前两名间隔、每一步的 ASC/PPR/混合置信度、被选问题、已用预算、排除或停止原因、经验众数，以及与共识分离保存的正确性标签和延迟。

这类记录可用于研究调度器、early stopping、校准、selector 训练，或审计算力是否真正集中到歧义样本。不能因为一条轨迹属于多数答案就把它当作正向示范。aligned/misaligned 标记、外部答案正确性与共识稳定性必须是不同字段。由于缓存生成和分配日志未发布，目前的复用仅限于重新实现 recipe，并在自行生成的轨迹上验证。
