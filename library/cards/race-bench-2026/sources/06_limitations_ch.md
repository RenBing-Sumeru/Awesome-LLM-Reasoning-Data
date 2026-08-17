尚未核实任何官方代码、数据、项目页、容器镜像、evaluator、judge prompt 或轨迹 URL。论文描述了丰富的实例对象和 Docker 工作流，但独立用户目前无法检查记录 schema、来源链路、FTP/PTP 命令、OCI digest、依赖、智能体修订、evaluator 输出或修订历史。方法上重置到 base commit 不等于公开确定性重放。

论文没有 train/dev/test 划分或去污染协议。Lite 是利用三个智能体在完整 528 实例上的结果选择的 outcome-matched subset，并非独立 holdout。任务来自公开 GitHub issues/PRs，且使用与 SWE-bench 相同的 12 个仓库家族；没有时间 cutoff、预训练暴露审计，或 issue/commit/patch/test 级重合分析。

推理评估存在等效多解风险。一个 gold implementation 和一个构造推理参考无法枚举所有正确方案。精确对齐可能惩罚替代文件或分解，LLM 语义匹配又可能随提示和模型修订变化。轨迹总结与补丁反向推断还把当时表达的推理与事后重构混在一起。

成功和失败运行只做了聚合分析。缺少公开逐记录语料时，无法知道所有补丁、轨迹、测试日志、judge 输出、超时、崩溃和 apply failure 是否保留。单次、temperature-zero 评测也不能估计环境或 API 方差。

作为可发布基准对象的许可、隐私和安全仍未知。论文的 arXiv 许可不覆盖 GitHub issue/PR 文本、上游代码、补丁/测试、合成标注、轨迹或容器。没有 PII、同意或 takedown 政策。虽描述 Docker 隔离，但网络、secret、Linux capability、依赖固定、恶意 setup script、资源限制、供应链防护和 host escape 保护均未说明。
