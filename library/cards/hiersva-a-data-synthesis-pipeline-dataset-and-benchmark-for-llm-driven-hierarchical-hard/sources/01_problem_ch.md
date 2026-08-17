LLM 生成 SystemVerilog Assertion 的研究多在扁平小模块上评测，只看语法或是否能证明，无法衡量断言是否空真、忠实覆盖规格、检测 bug 或触及层级设计的关键 formal core。真实 RTL 包含深层实例和参数依赖，使数据构建与评测更困难。

HierSVA 同时提供层级 RTL 预处理与断言合成流程、数据集和六维 benchmark，用形式工具区分“能编译”“能证明”和“真正有验证价值”。
