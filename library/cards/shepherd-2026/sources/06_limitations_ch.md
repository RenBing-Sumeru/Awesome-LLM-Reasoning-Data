论文将三个应用都定位为概念验证。它没有证明元智能体策略最优、方法对大范围模型和基准稳健，也没有证明相同收益只能由 Shepherd 实现。Tree-GRPO 还依赖更强的 Claude Opus 4.7 元智能体选择 fork 点，带来 token 成本与 teacher-policy 依赖。

发布完整性是主要数据限制。官方实验仓库包含代码与冻结框架快照，但没有生成的根/sibling 轨迹、终局奖励、精确任务 ID 划分、随机种子、过滤轨迹数量、训练检查点或 checkpoint-to-run 清单。advantage 计算需要同时观察成功与失败 sibling，而 all-pass 任务和 overlong 轨迹会被过滤；但持久保留策略与记录数量均未披露。

reset 保证分层成立。捕获的文件系统与沙箱状态可以恢复；可补偿 effects 需要正确的用户处理器；模型调用、邮件等不可逆 effects 只能审计。编辑影响大多数后续行为时，反事实回放也会失去效率优势。overlay checkpoint 链约到 60 层后需要压缩，event stream 存储随事件数线性增长。

训练/测试划分避免直接用 Terminal-Bench 2.0 测试任务进行 Endless Terminals 训练，但没有报告预训练污染、近重复任务或跨基准重叠审计。源任务、模型输出和生成轨迹没有统一许可，也未披露 PII/secret 脱敏、同意、访问控制或保留政策。因此，现有实验不能被视为可审计的公共训练数据集。
