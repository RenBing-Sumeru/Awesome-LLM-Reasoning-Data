ReasonMed 组合了三个初始教师：Qwen2.5-72B、HuatuoGPT-o1-70B 与 DeepSeek-R1-Distill-Llama-70B。每个模型分别在温度 0.7、0.9 和 1.0 下生成三条六部分推理路径。Qwen2.5-72B 读取问题、选项、已知答案和候选推理，输出 `Correct`/`Error` 判定及简短原因。九条路径中的错误数决定 Easy（0–4 个错误）、Medium（5–7）或 Difficult（8–9）路由。

Easy 题保留由 Qwen 排名前二的正确路径；Medium 题保留两条路径，并由 GPT-4o-mini 针对验证器指出的部分进行修改；Difficult 题由 GPT-o1 重新生成一条六部分推理。随后，GPT-4o-mini 为接纳的推理生成摘要，形成 CoTMed（完整推理）、ReasonMed（把 CoT 放在 `think` 标签内并在其后附摘要）和 ResponseMed（摘要）三种 SFT 表示。

公开规模并不是三套完全相同的 370K 数据。Dataset Server 报告 CoTMed 370,022 行、ReasonMed 369,983 行、ResponseMed 371,550 行，共 1,111,555 行，合并在一个 train split 中。每行只有 `instruction`、`input` 和 `output`；抽查记录中的 `input` 为空。由于没有稳定的来源或配对 ID，无法确认三种视图之间是否逐行一一对应。
