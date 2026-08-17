论文报告了 Codex 在 HumanEval 上的表现，并用 pass@k 估计 k 个采样里至少一个通过测试的概率。官方仓库提供 benchmark 的 problem set 和 evaluation harness。

逐题证据是可执行的：某个生成补全在选定 harness 下要么通过该题单元测试，要么失败。总体 pass@k 受采样数、temperature、timeout、依赖环境和估计公式限制，不能解释成生成程序在测试之外都稳健正确。
