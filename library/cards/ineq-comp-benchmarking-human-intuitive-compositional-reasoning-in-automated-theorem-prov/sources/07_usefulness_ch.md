1. **prover 诊断：** 用 seed→type1/type2→mix 的阶梯分数定位模型对表面改写、变量复制和多步组合的具体弱点。

2. **组合训练集：** 基于相同生成器扩展训练题，但保留 unseen seeds 与 unseen transformation combinations 作为测试，避免模板泄漏。

3. **过程研究：** 比较不给 proof、给组件 proof 和给自然语言提示三种设置，判断失败发生在检索、规划还是 Lean 实现。
