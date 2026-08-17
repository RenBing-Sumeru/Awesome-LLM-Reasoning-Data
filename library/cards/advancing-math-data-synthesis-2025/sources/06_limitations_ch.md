论文把 NuminaMath、Lila 与专有问题数据混合。由于缺少来源比例、item ID、使用条款和专有数据收集政策，无法端到端审计 provenance、再分发权利与污染。CC BY 4.0 论文和 Apache-2.0 模型仓库也不会为未发布的混合语料及其衍生记录授予许可。

生成器、弱学生与强教师 checkpoint 未知；decoding、retry、parser、random seed、逐 seed 候选数和接受 yield 也未知。LLM 产生的 `accept`/`refuse` 与 `correct`/`wrong` 标签是判断，不是证明。它们可能接受无效问题、最终答案正确但推理错误的解答，或由教师纠错时引入新错误。Retrospective enhancement 构造人工回溯，并非真实采样错误。

各合成实验臂的 token 暴露量差异很大，尤其 tutorship 达到 13.90B token。CPT 与 SFT 的 learning rate、batch size、数据遍历次数和 checkpoint 选择也不同；SFT 报告十个 checkpoint 中最佳值，CPT 则依据 validation loss。步骤数只是粗糙难度代理，评测还对每个 dataset 选择 zero-shot/few-shot 中较高者。公开 compare model 只检查最终答案并忽略 rationale 错误，因此 step-level quality 没有被测量。

MinHash 字节重叠删除只处理狭义 exact-text 重复和泄漏，不能排除语义污染。主文与 Appendix A.1 对受控研究中数学语料规模还分别给出 14.7B 与 13.7B，存在内部不一致。接受记录、拒绝候选、拒绝原因、假接受率、seed-to-output lineage 与合成代码均不可用。公开 checkpoint 可用于模型实验，但不能替代数据、许可证与审计日志。
