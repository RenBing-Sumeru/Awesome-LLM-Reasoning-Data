1. 输入：受支持 Lean 仓库中的 Lean 文件和 theorem declarations，以及 LeanDojo 抽取的 dependency/premise 信息。
2. 流程：trace repository，构造 theorem/premise 数据，划分 benchmark task，检索相关 premise，提示语言模型生成 tactic，并在 Lean 中执行。
3. 输出：被接受的 proof 或 tactic trace、失败尝试、Lean error message、proof-state transition、retrieval record 和 benchmark pass rate。
4. 反馈：Lean environment 是 verifier；单步 tactic 必须 typecheck 并推进 proof state，完整 proof 只有在固定工具链下被 Lean 接受才算成功。
5. 复现：需要固定 Lean version、repository commit、LeanDojo version、traced corpus、split、timeout、search budget、retrieval index、model checkpoint、decoding settings，以及生成 proof 是否从头重检。

训练和评测要分开。ReProver 使用 traced proofs 和 retrieved premises 学习，但 benchmark claim 依赖 held-out theorem split 和 Lean re-execution。
