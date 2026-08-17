首要建模限制来自 ORM。它只根据指令、动作历史和最终 HTML 给出二元 1/0 判断，因此表面合理的最终页面仍可能掩盖失败副作用、未满足条件，或未序列化进 HTML 的状态。论文所述评测包含 100 条人工 rollout，ORM 总体准确率约为 80%，这意味着 false positive 与 false negative 均可能存在。由于被优化策略提供了部分 ORM 训练分布，共享盲点与 reward gaming 是合理但属于 curator inference 的风险。

发布完整性明显弱于方法披露。约 103 MB 的 `scripts/webarena_lite_sft.pt` 只是一个 PyTorch 序列化的 SFT/experience 工件，并不是 8 个阶段、每阶段 500 个保留任务的完整记录。生成指令、成功与失败原始轨迹、ORM 输出、replay 选择、failure set、环境日志和种子 manifest 均未发布。成功历史进入 replay，失败历史则从 replay 中丢弃；即使未来只发布接纳样本，也会隐藏这种选择偏差。

split 与污染证据仍不完整。具名划分包含 1,186 条训练样本和 165 个评测任务，覆盖相同的 5 个站点；但生成任务会刻意继承失败样本的领域和值。缺少逐条 lineage 与相似度分析时，无法审计模板或实体是否与评测重叠。论文也没有报告模型预训练去污染。

权利与 replay 构成另外两类阻塞。仓库没有根许可证，模型卡标为 `license: other`，外部 VisualAgentBench 的 Apache-2.0 许可证也不覆盖整个 WebRL 发布；`.pt` 文件没有经核验的独立数据许可，而且通过 `torch.load` 读取。作为 curator inference 的安全预防，应在隔离环境中把它当作不可信序列化对象检查。浏览器轨迹可能包含用户名、账户状态、HTML 和动作历史，但未核验到脱敏、同意、保留或下架政策。历史站点镜像、凭据、reset 顺序、浏览器版本和 episode 最大 horizon 同样未固定，因此精确重放尚未得到验证。
