[ACL 正式论文](https://aclanthology.org/2026.acl-long.1910/)及附录记录了三阶段流程、数据量、验证契约、809 条模拟器评测、25 条超长任务，以及 30 条由人类代执行的真实环境评测。[官方项目页](https://embodied-reasoner.github.io/)核实了正式版本的 14 位作者和 9 个机构，并列出主要结果。[官方仓库](https://github.com/zwq2018/embodied_reasoner)公开任务生成、轨迹生成代码及通用训练/评测入口。[官方数据集](https://huggingface.co/datasets/zwq2018/embodied_reasoner)列出 9,390 条原始记录、对应的 dialogue 转换、图像、809 条测试数据、Apache-2.0 声明及 157 GB 总体积。

在 809 条模拟器样例上，论文报告 Qwen2-VL-7B-Instruct 基座的 Success Rate / Search Efficiency / Task Completeness 为 14.79 / 11.97 / 38.67；第一阶段后为 25.46 / 24.75 / 53.67；第二阶段后为 65.39 / 46.25 / 77.73；第三阶段后为 80.96 / 55.07 / 86.30。这组顺序消融与各训练阶段在论文设置下均有贡献相一致。最终模型的 composite 任务成功率为 54.29%，GPT-4o 为 14.42%；但其 search 成功率为 65.16%，低于 GPT-o3-mini 的 78.57%，作者将该弱项归因于过度探索和忽略近处对象。

真实环境评测包含厨房、浴室和卧室中的 30 个任务，由人类持相机并执行模型命令。Embodied-Reasoner 成功率为 56.7%，GPT-o1、GPT-o3-mini 和 Qwen2.5-VL-72B 分别为 50.0%、44.0% 和 43.3%。这是样本较小、由人代执行且未报告不确定性的作者结果。无论模拟器还是现实评测，都不能独立验证每条合成思考、证明动作路径唯一正确，或证明发布数据逐条高质量。
