输入来自离线函数调用记录。ToolACE 用于主要 Tool-Zero-7B/32B 训练设置；xLAM 用于数据与 backbone 泛化分析，并加入单独链接的 7.5K irrelevance subset。如果函数调用无法解析为 JSON 或 Python code，或 candidate-tool list 无法解析为 JSON，就删除该记录。表 2 报告处理后 xLAM 包含 67,500 条 single-turn 与 10,254 条增强 multi-turn 记录，ToolACE 包含 97,300 条 single-turn 与 1,966 条 multi-turn 记录。Record ID、精确 revision、split manifest、各原因拒绝数量与去重方式均为 unknown。（论文 §4.1、表 2）

多轮构造包含四类变换：拼接相关 single-turn dialogue；移除某工具并在后续重新引入；mask 某个参数以迫使模型请求澄清；扰动或删除 call、parameter 或 value 以迫使模型验证结果。函数名与参数名还会替换成通用 identifier，降低对名称的依赖。模型接收用户 query/历史和 candidate schema，生成自然语言 thought 与序列化调用；离线历史可以含 observation，但训练配方没有报告在线工具执行。

每个 completion 由格式 bit、早期 overlap reward、后期 exact-AST reward、多工具 bonus 和无效参数 penalty 打分。GG-GRPO 在训练过程中用 sigmoid 混合 general 与 strict tool reward，在采样组内归一化 reward，再把得到的 advantage 施加到整段 completion。该方法没有 critic、learned reward model、LLM judge、process label、tree search 或已发布的 environment-state terminal predicate，并移除了 KL regularization。

命名模型分别从 Qwen2.5-7B Base 与 Qwen2.5-32B Base 初始化；Appendix D 还研究 1.5B 与 3B。ACL 规范终稿 appendix 报告 `kappa=0.1`、midpoint `25`、每个 prompt 八个 rollout、temperature `0.8`、global batch `128`、mini-batch `1024`、带 cosine decay 的 learning rate `5e-7`、tensor parallel size `4`、clip epsilon `0.2`、最大 prompt/response 长度 `2048/2048`、vLLM，以及在 `5 × 8` 张 Ascend 910B NPU 上最长 28 小时。较早的 OpenReview appendix 报告四个 rollout，因此复现必须固定论文版本。

概念输出是 Tool-Zero checkpoint 与 completion-level reward record。未核验到 Tool-Zero checkpoint、处理后语料、record manifest、GG-GRPO 实现、论文专属 config、dependency lock、train/eval entry point 或评测输出。MindSpeed-RL 只是论文引用的 optimizer framework：已检查仓库提供通用 GRPO 基础设施，不是 Tool-Zero/GG-GRPO 复现。忠实重建必须自行实现奖励、固定数据与 benchmark 版本，并保存成功、失败、malformed 和被拒绝的记录。
