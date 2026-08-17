先前比较对象是统一 CoT 深度、迭代式 InftyThink 和对整题答案的 majority voting。SCALE 将分配单位改为子问题，并发布选中的分解、分数和逐步轨迹；与固定预算不同，它用阈值控制哪些步骤进入审慎推理。

其贡献不是新的外部 verifier：大纲选择和难度均是自评；LIMOPro 问题与答案匹配也并非新引入。区别性的对象是带上下文传播、经选择并按阈值路由的过程轨迹。发布物使这个接口可检查，但候选与 route 日志缺失，因此无法把机制与生成器和过滤器作因果隔离。

对 reasoning-data 而言，它表明轨迹 schema 应区分来源答案、生成最终答案、过程分数、route choice、compute accounting 和终端验证。SCALE 公开其中一部分而非全部。
