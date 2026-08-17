在预训练方面，论文列出六类多模态数据：caption、interleaving、OCR、knowledge、video 和 agent。论文称语料混合了开源和内部数据，并经过过滤、合成和去重，但没有发布来源清单、样本数量、混合比例或许可证。

对于非推理指令数据，人工标注者先创建种子集，seed model 生成多个候选响应，标注者再对最高排名响应进行排序和修订。对于视觉代码、视觉推理和数学/科学任务，论文称当规则或模型验证比人工判断更适合时，会以拒绝采样扩增 SFT 数据。

对于长 CoT 数据，作者汇集带有真值的多步 QA，在整理后的推理提示下用 Kimi k1.5 采样多条轨迹，再用现成奖励模型和规则奖励过滤错误链式思维。长 CoT warmup 后使用 online policy mirror descent 的 RL 变体：奖励模型依据相对真值给出二值正确性，长度奖励惩罚过长输出。curriculum 和 prioritized sampling 使用难度标签及单样本成功率。

对于 agent 数据，内部平台在 Desktop、Mobile 和 Web 行动空间中批量运行虚拟机。启发式方法收集截图-动作记录，再处理为密集 grounding 和连续轨迹；人工标注者提供带合成 CoT 的计算机使用轨迹。环境、任务实例、动作 schema、轨迹和日志均未发布。
