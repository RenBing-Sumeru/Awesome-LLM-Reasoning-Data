WebServ 的核心观点是：网页智能体的数据质量取决于完整的 browser-server 状态转移契约，而不只取决于语言模型。因此，它同时重构每次 state-action transition 的浏览器侧和服务器侧。

浏览器侧 parser 会删除不可见或无语义元素，压平冗余容器，保留部分控件状态，识别 clickable/hoverable 元素，并分配稳定的 semantic identifier。最终文本 observation 包含带标注的 HTML snapshot，以及 clickable、hoverable、input 和 select 列表；VLM 模式还可加入截图。action space 被限制为 click、type、select、hover、导航、标签页管理和 terminate 等接近人类操作的原语。

动作执行不再只依赖固定 sleep 或整页加载事件，而是等待网络与 UI 进入静默状态。实现会跟踪 XMLHttpRequest 和 fetch 活动，在可配置的 idle window 后返回下一 observation；若超时，则返回显式错误。这样，动作之后究竟何时观测下一状态，被纳入了更明确的 transition contract。

服务器侧为每条 rollout 分配独立的自托管 WebArena 应用 Incus clone。ZFS/Btrfs 的块级 copy-on-write 避免每次 reset 都复制数 GB 文件，并支持 clone、rollback 和高并发。

训练流程是先 SFT、再 GRPO。Claude 4.5 Sonnet 提供成功的启动 demonstration，Qwen3-4B 与 Qwen3-30B-A3B 再在隔离环境中生成 on-policy episode。WebArena 的 string、URL 和 HTML evaluator 产生任务分数，rollout 代码另外加入轻量的格式/浏览器错误惩罚。论文的中心贡献是这套协同的 transition 与 reset 栈，而不是新的 RL 算法。

