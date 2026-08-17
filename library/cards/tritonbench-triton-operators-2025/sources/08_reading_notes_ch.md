1. **一句话定位：** TritonBench 系统评测模型生成 Triton operator 的编译、正确性和 GPU 效率。
2. **方法抓手：** 真实 GitHub 通道、PyTorch 接口通道、数值检查与 hardware profiling 是核心。
3. **数据抓手：** 184 个真实算子，另有接口对齐任务及 LLM 输出和性能指标目录。
4. **证据锚点：** SOTA 模型在正确率和稳定加速上均有明显缺口，结果受测试 GPU 限制。
5. **复用决定：** 适合 Triton SFT/RL；使用前需做污染检查、跨硬件重测与边界输入审计。
