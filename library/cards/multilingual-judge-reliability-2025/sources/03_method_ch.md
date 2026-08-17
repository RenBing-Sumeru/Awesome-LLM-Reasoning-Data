1. 使用 XQuAD、MGSM、WMT23、WikiLingua 和 XDailyDialog 五个平行数据集；语言是目标变化因素。
2. 让 GPT-3.5、GPT-4o、Gemini-2.0、Llama-3.3、Qwen-2.5 与 Aya-Expanse 做点式是/否和 1--5 分判决。
3. 将每种语言输出视为一位评审，计算 Fleiss' Kappa；准确率/平均分是独立质量检查。
4. 分析资源量与模型因素，再对 Aya、Qwen、Llama 多数投票集成。

须固定数据版本、英文提示模板、目标语言标记、模型快照和解码设置；公开代码/数据未知。
