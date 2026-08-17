直接 LLM judge 成本高、依赖 prompt、rubric 变更后不灵活且带偏差，使大型评测管线难以审计和复现。

PAJAMA 让 LLM 合成可执行判决程序，而非直接给 verdict。程序可存储、检查、调整并本地运行；弱监督汇总其带噪输出。
