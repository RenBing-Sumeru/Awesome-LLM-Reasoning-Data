《First Finish Search: Efficient Test-Time Scaling in Large Language Models》（arXiv:2505.18149）针对推理时采样的 token 与延迟成本。majority voting 和其他 Best-of-N 选择器要等待多条完整轨迹，budget forcing 则延长一条轨迹。论文观察到，在所研究的推理模型和任务上，正确轨迹往往比错误轨迹更早结束，并据此考察能否把完成时间本身作为选择器。

必须明确其边界：FFS 是无需训练的解码策略，不是正确性 verifier，也不是已发布的推理数据集。可审计数据对象是同一提示下的一组并发部分轨迹，其中包括逐 token 进度、EOS 或长度上限事件、完成顺序、未完成任务的取消、轨迹长度、解析后的最终答案，以及事后才进行的 ground-truth 评估。已接受 artifacts 未确认发布提示清单或 rollout 语料。因此，该方法展示的是对临时轨迹的选择规则，而不是可复用数据质量。
