Triton 以 Python 风格封装 GPU 编程，但正确的 block 划分、内存布局和并行优化仍需要专业经验。通用代码模型在普通 Python 上表现较好，并不能说明其能生成可编译、数值正确且高效的 Triton operator；已有 kernel benchmark 又常偏向 CUDA 或少量人工任务，缺少面向工业 GPU 和 PyTorch 接口的系统评测。

TritonBench 构建两个评测通道：184 个来自 GitHub 的真实 Triton operator，以及一组与 PyTorch 接口对齐的生成任务。框架在广泛部署的 GPU 上运行功能测试和性能测量，使模型输出同时接受编译、数值等价和效率三重检查。
