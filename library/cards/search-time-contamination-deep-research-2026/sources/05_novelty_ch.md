论文的主要贡献，是把 contamination 定位到 agent trajectory 内部，而不是把整个问题粗略标成 contaminated/clean。BML 在网页访问前标记可疑搜索方向，QCL 标记只有题源上下文的暴露，EAL 标记直接答案 key。结果显示 repository/URL hit 本身不能证明分数膨胀，而显式答案会强烈改变 prediction。

研究还把 evidence provenance 与时间行为连接起来。intermediate prediction 显示页面是在当轮还是继续 reasoning 后改变答案；survival/escalation 分析询问正确答案何时出现，以及弱暴露是否升级。最终 audit object 联结 question provenance、Search/Visit observation、contamination state、prediction state 与 terminal correctness。

对 Track 6 而言，web observation 被重新理解为潜在对抗性环境状态：citation 不自动等于合法证据，它可能就是测试题 mirror。该工作没有提供已验证公共训练/replay 数据、完美 detector 或受控因果 intervention，这些边界本身也是结论。
