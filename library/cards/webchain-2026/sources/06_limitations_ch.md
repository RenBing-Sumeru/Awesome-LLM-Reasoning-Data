成功契约披露不足。“人工核验”没有说明 428 个 domain 上如何判断完成、如何处理分歧或失败尝试、是否由审查者逐条重放。实验中的 coordinate-in-box 与词汇覆盖 reward 只检查参考动作一致性，而非网站终局。等价 selector、坐标、动作顺序、键盘快捷方式与恢复路径的存在，也使精确模仿不能完整代表正确性。

合成解释层具有独立的认知风险。一个未具名 VLM 在看到任务、历史、当前状态和已记录动作之后编写解释，因此可能生成流畅但事后合理化的文本，并不忠实于人的决策过程。论文未披露 VLM、prompt、解码设置、拒绝标准和人工核验比例，解释质量及其污染风险无法独立复现。

隐私与权利问题仍然重要。截图、DOM 文本、Accessibility tree、表单字段、输入字符串、账户状态、消息、地址、搜索历史、支付/配送上下文或 session 数据都可能包含个人或机密信息。论文称已做脱敏和审查且不发布 PII，但没有逐记录同意/脱敏日志或漏检审计。自定义数据许可约束的是接收者，并不能证明对 428 个第三方网站的内容都具有采集与再发布权限；网站 ToS、robots/access policy、版权、用户同意和登录账户 provenance 仍是逐 domain 的 unknown。

真实网站漂移限制了可复现性。DOM、布局、本地化、个性化、地理位置、认证、API、库存和反机器人行为都会变化，即使记录最初有效，selector 与坐标也可能失效。采集时间、浏览器与 OS build、viewport、locale、账户状态、归档页面及重放诊断没有形成完整的逐记录 manifest。

发布包装也存在具体缺口。访问需要人工审批，且 WebChain Academic Research License v1.0 对用途有限制，因此不是不受限的 open-source 复用。全页面截图仅部分可用，原始文件需自定义解析，也没有覆盖全部 artifact 的统一 schema。HF quick-start 使用 `computer-use-agent-Lab/WebChain`，实际检查的仓库是 `webagentlab/WebChain`，LICENSE 末尾又写成 `Fan-Sicheng/WebChain`。作者链接的 GitHub README 声称 Apache-2.0，但 API 未检测到许可证，文件树中也没有 LICENSE 或实现代码。

最后，split 与 provenance 仍不完整。发布物包含 high/low test Parquet，论文也描述了 1,200 步 held-out benchmark，但没有端到端公开确定性的 split 构造、去重、跨 benchmark 去污染、拒绝轨迹、精确任务/domain 混合和逐文件不可变 checksum。因此，benchmark 提升只能作为实验结果，不能当作数据整体正确、安全的证明。
