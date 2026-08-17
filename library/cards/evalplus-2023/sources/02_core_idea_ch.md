核心贡献是 HumanEval+ 和 MBPP+：在常用代码 benchmark 上加入更强测试套件和可执行评分 harness。机制是生成候选测试，用参考解和差分检查过滤，再让模型代码在扩展测试上重新评测。反馈契约是程序化单元测试执行。最近对比是 HumanEval、MBPP、APPS 以及后来的 live/去污染代码 benchmark。方向标签是通过强化测试套件提升代码评测可靠性。
