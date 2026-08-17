1. **一句话定位：** 该 benchmark 汇总 12,504 个 Dafny、Verus/Rust 和 Lean 规格，并公开 verifier 结果与构建脚本。

2. **方法抓手：** 多源聚合、跨语言翻译、文件组件统一、native 编译检查和 55,397 次模型实验构成 pipeline。

3. **数据抓手：** Dafny 3,029、Verus 2,334、Lean 7,141，含 6,174 新题；tasks 与 non-compiling issues 必须区分。

4. **证据锚点：** verified success 约 Lean 27%、Verus 44%、Dafny 82%；自然语言描述无显著增益。

5. **复用决定：** 适合跨 verifier 研究与 RLVR；最大风险是子集不对齐、弱规格和公开题污染，必须按来源重编译与审计。
