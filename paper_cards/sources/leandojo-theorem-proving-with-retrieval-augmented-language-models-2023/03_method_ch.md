LeanDojo 从固定 mathlib revision 提取 theorem、premise、tactic 和中间状态，并提供初始化 theorem 和应用 tactic 的接口。无效 tactic 会被 Lean 拒绝；关闭所有目标即为终止成功。

benchmark 提供 random 和 novel-premises split。后者要求测试证明至少使用一个训练中从未使用的 premise，从而削弱记忆捷径。
