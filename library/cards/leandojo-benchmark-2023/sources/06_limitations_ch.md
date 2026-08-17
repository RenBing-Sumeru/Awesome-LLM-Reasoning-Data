正确性是形式化且工具链相对的。被 Lean 接受的 proof 对精确编码的 theorem、imports、library versions 和 kernel/tactic semantics 有效，但可能不可读、脆弱、过度依赖库 lemma，或与非形式化题意距离很远。

评测会受 timeout、search budget、premise retriever、allowed tactics、硬件和 repository cache 影响。Premise leakage 是核心风险：模型不应检索到会泄露 held-out theorem solution 的 proof artifact。

GitHub 仓库是 MIT license，但被 trace 的 Lean 仓库可能有各自 license 和依赖约束。当前 LeanDojo 文档还区分 paper-era system 与新版 v2 support，因此 benchmark claim 必须固定目标 release。
