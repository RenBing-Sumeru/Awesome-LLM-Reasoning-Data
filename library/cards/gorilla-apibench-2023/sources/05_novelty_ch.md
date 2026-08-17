已有工作主要包括tool-use benchmark、function-calling 数据集，以及没有严格 API-call matching 的 RAG 设置。

新的对象是绑定文档检索和语法调用验证的 API-call record，而不是普通 instruction-answer pair。

不新之处：API 文档、检索和 SFT 不新；复用要审 API 版本漂移、synthetic instruction 来源、代码/数据许可和 evaluator 实现。
