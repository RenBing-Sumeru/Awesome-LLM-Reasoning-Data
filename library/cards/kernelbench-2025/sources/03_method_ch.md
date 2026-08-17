1. 输入：PyTorch reference workload、允许的 CUDA/C++ extension 接口、LLM 生成源码、硬件/运行时配置和测试 seed。
2. 任务构造：workload 按单个算子、融合算子模式、更大的神经网络模块等 level 组织。
3. 执行：harness 将生成代码写成可构建 extension，编译、导入，并用随机输入 tensor 调用。
4. 正确性契约：输出必须在数值容差内匹配 PyTorch reference；编译错误、运行错误、shape 错误、数值不匹配和 timeout 都是失败。
5. 速度契约：只有正确 kernel 才与 PyTorch baseline 比较，并汇总 speedup 或相关 timing 指标。
6. 复现边界：必须固定数据版本、GPU 型号、CUDA/driver、PyTorch/Triton/C++ compiler、warmup/timing 策略、随机 seed、timeout、precision/tolerance，以及是否允许多次尝试或 best-of-N。
