核心对比使用 Qwen2-VL-7B-Instruct 作为基础模型，并在 MATH-V 与 VLM-S2H 上评测。基础模型的分布内总体准确率为 18.3%，使用等量线性思维链数据训练的 Chain-Only 为 23.7%，完整 STELAR-VISION 达到 28.0%，分别取得 9.7 和 4.3 个百分点的提升。

论文还在 Geometry3K、We-Math、PolyMath、SciBench 和 LogicVista 五个分布外 benchmark 上测试，STELAR-VISION 均优于基础模型。Frugal Learning 将输出长度减少 18.1%，同时保持接近的准确率。这支持多拓扑训练在当前 Qwen2-VL 配置下有效，但不能证明外显格式等同于模型真实内部推理结构。
