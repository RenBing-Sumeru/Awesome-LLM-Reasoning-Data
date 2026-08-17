官方论文报告现有长上下文 LLM 在 100K+ context 上仍有明显困难；仓库发布任务表、数据下载方式、运行脚本，以及 GPT-4、Claude 2、Kimi-Chat、YaRN-Mistral-7B、Yi-200K、ChatGLM-3-128K 等模型的示例结果。

最强证据是任务级的：retrieval、code、math、dialogue、多选任务看解析答案是否在官方 accuracy scorer 下命中；QA 和摘要任务看指定 ROUGE 实现下的文本重叠分。

证据边界：只有固定任务文件、prompt template、输出预算、API 版本和 metric 实现后，aggregate score 才可比较。retrieval 高分不等于广义长文档推理通过，ROUGE 分也不是语义正确性证书。
