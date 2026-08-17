Outcome reward model 可以在测试时对多条推理尝试排序，但其行为取决于训练 verifier 时所用的候选数据。对三分类演绎逻辑任务，普通 chain-of-thought 采样往往产生较多正确轨迹，而错误类型相对狭窄。由此产生一个实际缺口：ORM 可能只学到简单的答案格式或表面线索，却没有接触足够多貌似合理、围绕错误答案展开的失败轨迹，因而难以区分有效推导与自信但错误的推导。

LogicORM 在 FOLIO、ProverQA 与 JustLogic 上研究这一问题。目标对象不是单个最终答案，而是一组独立采样的推理轨迹；每条轨迹都配有 True/False/Uncertain 金标准标签、解析后的 A/B/C 预测以及二元 outcome reward，随后由学习得到的标量分数在 Best-of-N 候选池中选出一个候选。Echo 构造会先声明一个候选答案，再要求模型给出 rationale，从而生成围绕该结论组织、但最终可能错误的轨迹；之后由 LLM judge 去除其能够直接识别的错误。

该工作属于 Rollout, Search, and Test-Time Trace Data，因为实际执行的 contract 是“采样 N 个候选，用 ORM 对每条完整轨迹打分，再保留分数最高的候选”。公开 release 使训练侧的一部分可以检查：10,009 条 FOLIO CoT 记录，以及一个含 19,105 条记录的 Echo 增强文件。但它没有发布相应的测试时带分候选池、被拒绝的 Best-of-N 轨迹、所选索引或历史 ORM 分数。因此，本 Card 将其视为可审计的训练数据与 verifier recipe，而不是完整的测试时轨迹日志。
