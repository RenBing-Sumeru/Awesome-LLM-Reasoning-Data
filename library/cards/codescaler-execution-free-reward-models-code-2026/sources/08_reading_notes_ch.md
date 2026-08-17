1. **一句话定位：** CodeScaler 用已通过真实测试验证的 on-policy 代码生成构造成对偏好。

2. **方法抓手：** 在原测试环境中执行候选。训练 1.7B、4B 和 8B CodeScaler。

3. **数据抓手：** 官方 CodeScalerPair-51K 含 51,107 个英文代码偏好对。

4. **证据锚点：** CodeScaler 将 Qwen3-8B-Base 在五个代码基准上的平均成绩提高 11.72 个点。

5. **复用决定：** 直接用 question_content、code_pos、code_neg 和 Bradley–Terry loss 训练代码 ORM。最大风险是奖励模型只是测试结果的代理。
