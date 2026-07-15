作者为 1,000 个精选问题蒸馏 Gemini Thinking 轨迹，并微调 Qwen2.5-32B-Instruct。推理时，他们通过强制提前停止或在模型试图完成后延长生成来改变 token 预算，再测量各推理 benchmark 上随预算变化的准确率。

复现需要 s1K 修订版、训练超参数、特殊 token 处理、提示格式、最小和最大预算、上下文限制和每个 benchmark 切分。仅有 token 长度不足以说明 budget forcing。
