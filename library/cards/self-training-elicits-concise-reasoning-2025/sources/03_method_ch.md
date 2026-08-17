来源数据使用原始split：GSM8K含7,473个训练问题和1,319个测试问题；MATH含7,500个训练问题，结果在MATH-500上报告。论文称两者原始许可证均为MIT。

数据生成使用vLLM、BF16、temperature 0.7；GSM8K输出上限512 token，MATH为1,024。主要朴素BoN预算是每题16条路径。论文的Python解析/规范化代码移除最终答案错误的候选，按token数排序，再逐题保留一条最短正确路径。

仅few-shot生成使用八个简洁示例。FS-BoN每题采样16条few-shot条件路径和16条默认分布路径；8+8设置与朴素16路径总预算匹配。合并候选池按问题过滤和选择；部分设置还用zero-shot BoN样本增强选中的few-shot数据。

FS-Self示例发现随机抽取128个训练问题，目标模型以temperature 0.7为每题生成128条路径。Parser先过滤正确性，GPT-4o再按长度递增检查候选，直到得到八个可接受示例。MATH的八个示例分布于不同学科类别。FS-GPT4o示例还经过人工过滤；精确GPT-4o版本为unknown。

选中轨迹用HuggingFace Trainer微调一个epoch，batch size 16、learning rate 1e-5、最多469步。评估使用greedy decoding，因此测试时不支付BoN搜索。论文报告主要实验约使用1,000 H100 GPU-hour；在一个Llama-3.2-3B/GSM8K示例中，生成约需60-90分钟，训练只需2分24秒。

主要模型包括Llama-3.2-3B、Gemma-2-2B、Qwen2.5-3B、Qwen2.5-Math-1.5B和DeepSeekMath-7B；Llama scaling study还包括1B、3B和8B。没有不可变生成轨迹manifest把所有运行与发布记录绑定。

