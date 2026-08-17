1. **建立程序池：** 继承 CodeContests/CodeContests+ 的题面、参考正确解、错误解以及已有 generator/checker，形成可评估测试质量的正负程序集合。

2. **生成初始测试：** LLM 分析输入约束和典型漏洞，编写 testlib 生成器及多组命令，产生结构合法的 corner cases。

3. **执行并收集反馈：** 把测试运行在正确解 S+ 和错误解 S− 上，记录 false positive、false negative、编译/运行错误和 stack trace。

4. **迭代修正与停止：** LLM 根据错误报告修改生成器和命令，直到 TPR/TNR 达到阈值或触及最大轮数；最终保留测试及完整迭代记录。
