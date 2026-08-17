TabMWP 的 verifier 有用但较浅。两位小数 numeric normalization 与 option matching 支持 benchmark scoring，但可能漏掉等价表达式、单位、格式边界情况，或模型在非标准输出中包含正确值的情形。论文 case studies 也提到 answer-extraction failures。

gold solutions 对解释性有价值，但不能在没有额外验证时当作 step-level process labels。它们说明 multi-step reasoning，但 scoring contract 检查的是 final answer。若直接训练 solutions，可能学到风格或 shortcut patterns，因此仍要审计 final answer 与 table grounding。

官方 README 存在 license ambiguity：code 有 MIT license file；README 同时说明 TabMWP dataset 使用 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International。复用时应区分 code license 与 dataset license，并在维护者未澄清前保留 non-commercial/share-alike 约束。
