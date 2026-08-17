完整流程可以拆成五个可审计阶段。

1. **任务与环境初始化。** WebArena 的 Shopping、Shopping Admin/CMS 和 GitLab 任务被映射到自托管应用。Incus manager 从停止状态的 base container 克隆实例、启动并进行 health check，通过改写 host 的 proxy 路由浏览器流量，并在 episode 结束后删除 clone。精确 base image 与 immutable snapshot 未公开。

2. **Observation 与 action 构造。** JavaScript 和 Playwright 生成附录 A 所述的紧凑 DOM observation。附录 B 定义元素交互、表单输入、导航、标签页操作与显式 terminate。每个 assistant turn 调用一次 step_browser，下一条 tool message 携带页面 observation。

3. **SFT 启动。** 论文说明两个 Qwen 模型在 RL 前都先用 Claude 4.5 Sonnet 轨迹训练 3 个 epoch。仓库转换脚本读取原始 result.json/session.json，仅当 result.success 为 true、score 严格大于 0 且至少存在一个 reasoning block 时保留 session；随后转为 messages/tools 格式，并丢弃原始 result 与 score。

4. **On-policy GRPO。** 论文报告每步 200 条 rollout、每 prompt 12 个 sample、rollout batch 16、training batch 12、oversampling batch 32、temperature 1.0、最大 response length 4096。dynamic sampling 要求组内 reward 标准差非零。Qwen3-4B 与 Qwen3-30B-A3B 都报告 step 99 的结果。

5. **Reward 与日志。** runtime task score 会乘合适的 string、URL 与 HTML check；string check 可调用配置的 LLM fuzzy matching。若 episode 中出现过 malformed tool call 或 browser exception，rollout reward 加上一次性 -0.05。代码支持保存 debug rollout object，但公开镜像中没有论文训练所用的 Qwen rollout log。

公开 SFT 数据被物理切成两个 byte part，总计 133,351,959 bytes；按字节拼接后恰好得到 726 条有效 JSONL。由于 part 01 从一条记录中间开始，它们是 byte part，而不是可独立解析的 JSONL shard。

