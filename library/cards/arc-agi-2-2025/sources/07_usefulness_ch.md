ARC-AGI-2 可作为抽象推理、少样例规则归纳和 solver search 审计的 exact-verifier benchmark。复用时应保留 task id、split、input/output demonstration pairs、test inputs、predicted outputs、attempt count、search budget 和 exact-match result。

它适合比较 program synthesis、neuro-symbolic search、test-time adaptation、visual reasoning 和 frontier-model scaffold。由于 output checking 是确定性的，失败可以直接在 grid 层面检查。

下游评测必须分开 public training、public evaluation、semi-private 和 fully-private claims。public JSON tasks 适合可复现方法开发；private-tier 结果属于另一类证据，泄漏风险更低。
