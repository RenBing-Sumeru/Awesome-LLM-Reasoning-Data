OpInstruct-HSx 的构造从预筛选的 OpenCodeInstruct self-instruct 样本开始，由 DeepSeek-R1-Distill-Llama-70B 生成 Haskell。公开代码先对生成代码字符串做精确去重，再查找函数绑定和含箭头的类型签名，针对常见基础类型、列表与元组递归合成类型兼容的字面量，最后调用 GHC 编译并在该输入上执行。保留样本公开五个字段：`code`、`input`、`status`、`output` 和 `size`。这一流程只能说明程序在一个合成输入上最低限度可运行，并未把 Haskell 结果与上游 Python 解答做语义比较。

自博弈的 Alice 与 Bob 都使用 DeepSeek-R1-Distill-Qwen-7B。SEQ 把反射标注和生成引理写入启用 PLE 的 Liquid Haskell 模块，工具接受后保留证明轨迹；SINQ 则通过子进程执行框架，在 Alice 给出的输入上编译并运行两个程序，以输出、异常或终止行为的差异作为不等价证据。通过分支验证后，系统对 Bob 重复采样十次。Alice 的训练数据包括筛选后的原始生成、难度预测样本以及所有通过验证的 SEQ 证明轨迹；Bob 的训练数据保留其判断正确的等价性回答。

主实验 E0 每轮使用 500 个参考程序，共七轮，名义分支比例为 50/50；采样参数为温度 0.6、top-p 0.95、top-k 20、presence penalty 1.5，上下文长度 32,768。拒绝采样 LoRA SFT 使用累计保留数据：第 \(i+1\) 轮生成使用第 \(i\) 轮的 Alice 适配器，但每轮微调都从原始基础模型初始化；Bob 只在七轮结束后微调一次。论文报告主实验约需四张 NVIDIA L40S 运行三天。
