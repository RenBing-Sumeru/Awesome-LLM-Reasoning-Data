1. **构造问题：**生成不同运算复杂度的算术、布尔表达式，并加入 GSM8K 问题。
2. **生成与切步：**用 Llama-3.1-8B-Instruct 产生 CoT，保存完整文本和分步前后上下文。
3. **双重标注：**程序检查与 LLM judge 分别判断步骤，仅保留标签一致的记录。
4. **提取计算图：**用 Circuit Tracer 和 transcoder 构建 attribution graph，提取结构特征训练错误分类器并测试干预。
