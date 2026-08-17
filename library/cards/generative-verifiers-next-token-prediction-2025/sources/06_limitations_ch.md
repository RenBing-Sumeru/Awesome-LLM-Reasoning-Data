论文明确指出，模型生成的 GSM8K 理由可能含有错误，并显示无参考的理由合成较弱。Reference guidance 改善教师的最终判决，但也向教师提供了测试时 verifier 看不到的正确解。因此，流畅 target 可能教会模型表面上的参考解对齐，而非独立验证。联合生成与验证也不是单调有益：生成数据混合消融表明，正确解生成权重过大会降低验证表现。

反馈契约会导出多种 verifier 错误。错误推导碰巧得到正确最终答案、貌似合理的 critique 漏掉首个无效步骤，或候选解采用 verifier 偏好的写法时，可能出现 false positive。正确的替代推导、陌生格式，或传播教师错误的合成 critique 则可能造成 false negative。这些是基于答案级标签与模型介导理由的 curator inference。论文没有报告对抗式 verifier gaming、跨领域校准，也没有保证平均 32 个样本可以消除系统性错误；所有投票共享模型、prompt 与训练分布。

发布层面仍有具体审计缺口。正确与错误候选解都被保留，但最终验证判决错误的理由会被过滤，拒绝日志与保留比例并未公开。仓库 README 明确把 MIT 许可证说明用于 GSM8K data，却未单独说明生成 critique 的许可证范围。除已说明的划分、去重与无效 response 过滤外，没有报告去污染流程。未确认官方实现、已训练 verifier checkpoint、不可变 tagged release、checksum、完整逐文件 manifest、训练 temperature、理由生成 temperature、随机 seed 或硬件配置。

实验范围限于两个字符串操作任务、GSM8K，以及向 MATH500 和 MMLU 数学的迁移。该证据不能建立代码、开放式判断、安全、事实性或交互环境上的鲁棒性；论文结论只把这些列为未来工作。模型、prompt 与仓库版本漂移都可能改变理由文本和 `Yes` 概率；若不固定 artifact，后续复现可能在不知情的情况下实现不同 verifier。
