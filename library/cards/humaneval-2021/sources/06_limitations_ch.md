正确性只相对于所选 harness 的测试成立。补全可能通过 HumanEval 测试，但在边界条件、安全要求或未定义行为上失败。

benchmark 规模小、只覆盖 Python、且是函数级；它不评测仓库导航、依赖管理、多文件修改、issue triage 或长程智能体行为。公开题目、canonical solution 和测试已经广泛流通，现代评测必须做污染检查，最好配合发布后或隐藏变体。
