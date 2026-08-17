**发布完整性。** 公开镜像包含 726 条 Claude SFT 记录，而不是论文训练产生的 Qwen on-policy rollout stream。失败与零分 Claude session 被转换脚本显式过滤。原始 result/session 目录、逐条 score、task ID、terminal state、RL log、checkpoint 和模型权重均缺失。

**轨迹完整性。** 转换代码从成功 source session 中取样，但发布 schema 删除 success 和 score。726 条中仅 303 条以显式 terminate action 结束，另 423 条以其他浏览动作结束且没有后续 observation。这些记录可用于 SFT，却不是可自行核验的带标签成功/失败语料。

**数据封装。** README 写的是 data/sft_training.jsonl，但实际发布两个 byte part；第二段从一条记录中间开始，因此逐 shard 直接按 JSONL 加载会失败，必须按顺序字节拼接。发布没有 checksum manifest 或 dataset card 说明这一点。

**环境 replay。** Incus/WebArena image、停止状态 base-container snapshot、ZFS/Btrfs 与 OS 版本、browser revision、proxy 配置、凭据初始化和 reset fixture 没有被固定为 immutable bundle。network-aware waiting 能提升可靠性，却不能在后台流量或 timer 存在时保证语义状态稳定。

**Verifier 风险。** string、URL 与 HTML check 可能包含不完整 rubric；LLM fuzzy 与 unachievable-task matching 对模型版本和 prompt 敏感；多个组件相乘会使任一失败把总分归零，而一次性 format penalty 无法区分一次错误与多次错误。

**Split 与污染。** SFT、RL 和 evaluation 都来自命名的 WebArena task family，但精确 task-ID manifest、overlap check、deduplication 和 decontamination 均未知，因此无法审计 task/template leakage。

**权利与版本。** MIT 文件明确覆盖软件与相关文档，却未单独确定 WebArena 派生 observation 或 Claude 生成轨迹的条款。匿名发布没有公开 source identity 与 immutable commit。workshop 与 arXiv v2 的标题/作者不同，arXiv 摘要页的 55.5% 还与 v2 PDF 的 57.3% 冲突。

**论文自述边界。** 文本 observation 不保留空间布局；工作重点是环境设计而非算法创新；没有进行大规模线上生产网站评测。

