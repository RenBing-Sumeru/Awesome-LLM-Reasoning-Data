HumanEval 类 benchmark 要求模型写函数并由既有 tests 评分；已有测试生成集又多从独立函数或合成 specification 出发。TestGenEval 改变评测对象：模型需要为真实仓库中的已有实现生成或续写完整测试文件，并处理 fixture、imports 与项目依赖。

另一个实际变化是采用 execution、coverage 和 mutation 三层 contract，而不是把 test pass 或覆盖率当作唯一质量信号。它不提出新的测试生成模型；新意集中在真实文件级数据、completion 设置和多指标自动评测协议。
