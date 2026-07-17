对于每条指令和优选—劣选回答对，模型从策略与参考模型的对数概率比计算 DPO 的偏好概率。FocalPO 用带概率 gamma 次方因子的缩放版本替换通常的负对数概率。梯度分析表明，这会给隐式奖励排序准确的回答对更大权重，给排序错误的回答对更小权重。

论文让 Mistral-Base-7B 在 UltraFeedback 上训练，让 Llama-3-Instruct-8B 在 Llama3-ultrafeedback-armorm 上训练，使用批大小 128 训练一个轮次。它将 gamma 固定为 0.05，并网格搜索学习率。比较对象是 DPO、SimPO、KTO 和 ORPO；另一个实验采用相反焦点方向来强调排序错误的回答对。
