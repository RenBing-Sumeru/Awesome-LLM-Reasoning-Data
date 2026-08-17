阅读时应把它当作 verifier 设计样例，而不是宽泛模型排行榜。关键边界是逐 instruction predicate 是否通过，不是回答整体质量。

必须分开 strict score、loose score、外部人工或 LLM 判断。只有固定 prompt 文件、checker 版本和 response 格式后，总 accuracy 才可比较。
