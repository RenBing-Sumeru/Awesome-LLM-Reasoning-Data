LeanDojo 可作为 executable formal-reasoning data 的参考设计。应保留 theorem id、repository commit、Lean version、imports、local context、proof state、available premises、retrieved premises、generated tactics、checker result、timeout 和 search budget。

它也能启发 reward/verifier design：Lean feedback 可以给 candidate tactic 打标签、过滤 rollout 或评分完整 proof，但 trace 中必须保留失败、超时和 rejected tactics。

对 atlas 而言，核心经验是把 environment contract 与 data object 一起存。没有 Lean 工具链和精确 library snapshot，样本就只剩文本，失去决定性反馈信号。
