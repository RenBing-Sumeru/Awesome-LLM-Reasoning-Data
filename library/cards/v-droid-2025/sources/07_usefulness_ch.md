对指定的 `environment_agent_trajectory_data` 方向而言，V-Droid 最适合作为构建与审计配方，而不是可下载的轨迹语料。采集者可以保存论文隐含的完整 episode 对象——目标、UI 状态与 serializer 版本、working memory、完整候选集合、一个或多个有效动作、分数向量与熵、标签来源、执行结果、下一状态、纠正、终止证据以及 app/环境 provenance——再与公开的精简 `{chosen, rejected}` prompt 对象进行显式比较。

对 `preference_reward_feedback_data` 而言，该方法给出具体的过程反馈 baseline：把一个决策状态展开为正确—备选动作偏好对，训练标量 verifier，再与 multi-positive preference、状态变化 verifier、终止成功标签或校准不确定性进行比较。忠实复现应记录其他有效动作的裁决并测量 false-negative rate，而不能假定所有未选动作都错误。entropy 的 accuracy/AUC 以及反复 back 的坍缩，可直接作为选择机制与 reward-hacking 分析的 audit slice。

四轮人类—智能体闭环可用于研究标注预算。研究者可以比较纯人工 cold start、不确定性引导纠错、随机与多样性导向的错误状态抽样、固定与学习得到的恢复动作，同时保持任务/app mixture 与 verifier checkpoint 不变。这样的受控设计能够拆分 V-Droid 9K–110K 曲线当前混合的多种因素。数据管线应保存失败、timeout、中止和未被标记的轨迹，而不是只保留纠正至成功的路径。

公开 preview 也可作为部分复现起点：固定 GitHub commit `8d549027634abe65a5721fe6bc3b5e84475db2f6`、HF revision `4b2ed82d9f10486dd02376b1ccbad92842e3dc7a`、base model `unsloth/Meta-Llama-3.1-8B-Instruct-bnb-4bit`、Android Tiramisu/API 33、Pixel 6 与 gRPC port 8554；随后审计 adapter/value-head 的加载路径，并比较 HTML 与 XML prompt 序列化。不能根据单 GPU demo、五条示例和 AndroidWorld setup 推断论文的 16-GPU 训练或三项 benchmark 评测已经复现。

复用等级：**可作阅读与审计参考；训练数据复用及完整评测回放在核验完成前受阻**。110K 语料不可获得，代码/示例数据 license 为 unknown，外部 GPT-4 memory 与动作补全配置也未固定。报告结果可以支持开展针对性实验，但不能支持再分发、生产部署或一般性数据质量结论。
