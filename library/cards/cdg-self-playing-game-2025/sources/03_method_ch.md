主自博弈题池由 GSM8K 全部 7,473 道训练题和 MATH 训练集中的 12,000 道题组成。每题先生成四个 Prover 初始解；每个错误的“题目—解答”对生成八条 Helpful Critic，每个正确对生成四条 Misleading Critic；随后每个“题目—初始解—critique”三元组再生成四个 Prover revision。rollout 解码参数为 temperature 0.95、top-p 0.95、top-k 5，最大长度 4,096。

论文给出的 Prover、Misleading Critic、Helpful Critic 阈值分别为 0.5、0.75、0.5。具体而言，四次 revision 中至少两次改对，Helpful Critic 才入选；至少三次没有输出 `\boxed{This critic is not critical.}` 且把原正确答案改错，Misleading Critic 才入选。Prover 训练集则平衡抽取 10,000 条初始正确、10,000 条抗误导成功和 10,000 条接受有效批评后纠正的样本。

入选的 Prover 记录被转换成包含问题、初始回答、critique 与 revision 的多轮对话；Critic 记录转换成 instruction/output 对。官方脚本中可见 `prompt`、`responses`、`response`、`metadata`、`round1_response`、`critic`、`conversations`、`instruction`、`input`、`output`、`system` 与 `mask_history` 等中间字段。仓库内的 `data/train.jsonl` 是含答案和来源元数据的 19,473 条原始题目，不等于 Google Drive 上链接的 rollout 语料。

论文描述两轮自博弈与训练：学习率依次为 5e-6 和 1e-6，batch size 为 32 和 256；Prover、Misleading Critic 各训练一轮，Helpful Critic 训练两轮。当前官方 `main.sh` 却默认运行三轮、跨轮更新角色 checkpoint，并包含占位路径，因此不能直接视为论文实验的固定运行清单。复现前必须先解决这处论文—脚本差异。
