1. **预处理层级 RTL：** 固定 BaseJump STL commit，展开依赖、参数和实例关系，生成可独立形式验证的模块包。

2. **合成参考断言：** LLM 根据 RTL 与规格提出 SVA，formal tool 反馈编译、证明和空真结果，流程迭代修正后保存参考 artifact。

3. **构造深层 bug 集：** 对 28 个模块注入多类错误，保留正确/错误 RTL、自然语言规格和 mutation lineage。

4. **运行六维验证：** 编译检查语法，formal engine 检查非空证明，规格与 mutation 测试衡量忠实度、故障检测和 formal core 覆盖。

5. **比较模型与 agent：** 在相同 RTL、工具和预算下评测单轮与 agentic 生成，保存逐模块指标。
