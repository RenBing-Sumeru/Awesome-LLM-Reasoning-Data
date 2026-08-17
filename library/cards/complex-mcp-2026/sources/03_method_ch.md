**输入与环境。** 一个身份未披露的 LLM 被用于预生成接近真实分布的合成应用实体。人工 curator 随后定义跨应用自然语言任务，要求结果确定且唯一，并且不在 query 中提供显式工具名提示。每个任务选择 application 和 seed；seed 控制初始状态与执行扰动，包括瞬时 network error。配置的 substrate 含 15 个 MCP server 和 315 个工具，其中 7 个 server 有状态、8 个无状态。

**参考轨迹构造与验收。** 人类专家通过 MCP interface 为每个任务编写 ground-truth trajectory。已检查的构造脚本会序列化文本、tool-call JSON、response 和结束标记，并且只有标注者对 `Pass this query?` 回答 yes 后才保存记录。完整 rubric、标注者身份与人数、agreement procedure、被拒尝试及拒绝数量均为 unknown。最终 parquet 含 47 条已接受记录和 7 个字段：`seed`、`query`、`apps`、`level`、`output`、`tool_cnt` 与 `gt_env`；检查的 snapshot 中所有单元格均非空。

**模型 rollout。** 主评测使用 ReAct。full-context prompting 提供全部工具描述，论文报告约占 29,964 tokens；fixed top-k retrieval 与 iterative retrieval variant 使用 `all-MiniLM-L6-v2`。每个被评测模型在全部 47 个任务上独立运行 3 次。client 根据给定 seed 打开新的 UUID session，把 session 注入 stateful call，并在 logout 时删除。这是带 seed 的进程内 reset，不是发布的持久化 snapshot。

**停止条件与 observation。** 系统按序累积模型文本、tool call 与 response block。agent 可以发出 `[END]`；current runner 还会在 100 turns 后或连续 5 次没有 tool call 的 response 后停止。工具可能返回结构化成功结果或 simulated failure。current runner 未提供精确 provider revision、temperature、top-p、wall-clock budget、model-sampling seed、dependency lock 或 fault-schedule export。

**Verifier 与输出。** evaluator 递归计算必需的 target-state diff 和额外 collateral change。completion 等于匹配必需变化数除以必需变化总数；misbehavior 等于 collateral change 数除以必需变化总数；success 要求目标完全满足且 collateral change 为零。content 字段允许 exact match、substring match 或 Levenshtein similarity 高于 0.7 的匹配。runner 会打印汇总指标，但不持久化完整 evaluated rollout、trial identifier、model-sampling seed、environment hash 或 result manifest。

**用途与重建边界。** 论文只把这套 pipeline 用于 evaluation。可靠 replay 必须固定精确的 code/data/evaluator commit、dependency、server configuration、model/provider revision、decoding setting、seed 与 fault schedule、task row、session behavior 以及 metric implementation。官方仓库 current commit 可检查，但没有 tag 或 release 证明它就是论文时期的实验 snapshot。
