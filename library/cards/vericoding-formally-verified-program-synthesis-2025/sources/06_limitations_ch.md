1. **跨语言不可直接比较：** Dafny、Verus 和 Lean 子集来自不同题源、规格长度和难度，成功率混合了语言、数据和自动化差异。应按来源分层，最好建立同功能平行任务。

2. **非编译样本：** 仓库明确保留部分翻译失败文件在 `issues`，若加载时混入 tasks 会把 spec repair 与 vericoding 混为一谈。使用者必须读取状态字段并重新编译。

3. **规格 hacking 与污染：** verifier 只证明给定 spec，弱前置/后置条件可能允许无意义实现；大量题源公开且可能进入预训练。复用前应做反例/人工规格审计、source-level 去重，并固定 Dafny、Verus、Lean 与 Mathlib 版本。
