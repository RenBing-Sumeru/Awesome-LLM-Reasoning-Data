1. **选择真实文件对：** 从 SWE-bench 相关的 11 个 Python 仓库定位源文件及其人工测试文件，固定提交、依赖与测试入口；不覆盖目标代码的 gold tests 被过滤。

2. **构造任务视图：** 为完整生成隐藏整个 test file；为 completion 按位置保留部分人工测试并删除待生成片段，使模型获得目标代码和必要仓库上下文。

3. **执行候选测试：** 将模型输出写回隔离环境，检查语法、导入和 pytest 执行；分别统计 pass@1/pass@5，避免把不可运行代码计入覆盖率。

4. **测量测试质量：** 对成功运行的输出计算 coverage 增量，并运行预生成 mutants 得到 mutation-score improvement。评测必须固定仓库 commit、Docker 镜像、测试预算和模型采样设置。
