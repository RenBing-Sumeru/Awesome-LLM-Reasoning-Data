对 `rollout_search_test_time_trace_data` 而言，应记录 prompt 来源/split、policy 版本、think/action token、查询、排序结果 ID、URL/页面版本、抽取观察、Reading-Agent/Synthesis 输出、cache 命中、重试/错误、工具预算、终局答案、格式有效性、F1 和全部同组 rollout，以审计探索、证据损失、cache 耦合与 reward hacking。

该发布也是清晰的边界案例：可复现代码、处理后 prompt 输入和训练 checkpoint 已确认；可复用的原始轨迹语料未确认。复用者应固定 commit 与 Parquet checksum，快照网页/环境服务，审计组件权利，并为长文研究任务加入引文或证据归因奖励。

