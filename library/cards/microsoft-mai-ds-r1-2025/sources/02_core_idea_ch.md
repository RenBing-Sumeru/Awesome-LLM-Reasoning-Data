MAI-DS-R1 是一个以 DeepSeek-R1（671B）为基础、由 Microsoft 后训练的模型。Microsoft 将后训练目标描述为：在保持 reasoning 的同时，提高对被阻断主题的响应性并减少有害或不安全输出。官方 Microsoft 仓库以 MIT 模型许可证提供权重；未识别到官方训练数据发布。

已披露数据对象有两部分。约 350K 个内部示例从收集和过滤 query keyword 开始，将 keyword 扩展为多个问题，把问题翻译为多种语言，并用 DeepSeek R1 和内部模型 bootstrap 答案及其相应 CoT。另有 110K 个 Safety and Non-Compliance 组件来自 Tulu3 SFT：CoCoNot、WildJailbreak 和 WildGuardMix。

对 Track 12 而言，核心贡献是一项有清晰边界的构造披露。数量和阶段已知，但发布材料没有建立训练反馈合约和逐条来源谱系。

