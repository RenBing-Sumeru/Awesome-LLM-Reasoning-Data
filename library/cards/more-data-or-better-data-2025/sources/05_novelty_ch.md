论文的独特贡献是比较性而非算法性:它把网页筛选、教育化重写、强 teacher 蒸馏、failure-guided retrieval 与 augmentation、教材 QA 抽取,以及多项失败尝试放入统一 80/20 evaluation scaffold。公开负结果与跨任务结果,使其比单个正向数据集发布更有用。

Math-Cosmo 教育化重写、QwQ distillation、FAISS retrieval、答案一致、LLM filtering 与 MinHash 都是已有组件。论文没有提出新的 correctness verifier、scaling law 或已发布语料。其方向信号是表示方式、teacher 与 mixture compatibility 可能比名义 token 数更重要;同时,论文自己的表格也显示"better"依赖具体 task 与 scaffold。

研究还明确区分未来设想与已测试方法。包含多条 solution path、reward-like metadata、带噪成功与失败样本、层级 curriculum 和多 generator 的 RL-like generation 仅出现在 future work,且没有实验依据,不能记录为已经实现的数据 pipeline。
