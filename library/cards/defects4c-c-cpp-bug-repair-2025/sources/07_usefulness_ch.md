1. **C/C++ repair评测：** 在固定 Docker、编译器与资源限制下运行 350 个实例，分别报告普通 bug 和 vulnerability 的 compile rate、test pass 与完整修复率。

2. **可验证训练数据：** 以 buggy function、上下文和 gold patch 做 SFT；再采样替代补丁，使用编译、复现测试、回归测试和 sanitizer 结果形成 reward records。

3. **内部数据构建：** 复用“提交挖掘—缺陷定位—复现测试—容器化”流程整理企业历史缺陷。若不能公开源码、复现测试不稳定或问题跨多个服务，则不应直接套用函数级 benchmark 格式。
