Wolfram Alpha 只验证它接收到的结构化 query。把自然语言陈述转成 query、选择相关工具输出、解析等价式、单位、定义域或假设时的错误都可能产生错误标签。某个计算成功也不能证明该步骤对原证明逻辑充分或相关。

删除工具无法验证、不完整或不一致的 trace，会使数据偏向工具友好问题，并移除本应审计 verifier 覆盖率的失败。确切 policy checkpoint、构造轮数、UCT 系数、beta/gamma、解码设置、seed、API/parser revision 与接收率均未固定。

尚未核验作者官方代码、数据、模型、许可、split、去污染台账、完整搜索树或被拒分支归档。N=8 搜索增益混合了 policy 候选多样性、采样预算与 selector 质量；benchmark F1 不能证明每条训练标签或 rationale 正确。

