主要贡献是用执行结果衡量 Python 函数生成的功能正确性。核心机制是给模型函数 stub，让它采样一个或多个补全，运行测试，并用 pass@k 汇总。

数据对象包含 prompt、canonical solution 和 tests；反馈契约是 benchmark harness 下的通过/失败，以及多次采样上的 pass@k。最近对比对象包括 MBPP 式编程题和早期程序合成 benchmark；HumanEval 的方向标签是面向代码模型的可执行单元测试评测。
