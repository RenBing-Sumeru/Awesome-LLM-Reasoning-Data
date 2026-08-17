ICLR 2025 接收版论文报告的 Herald Translator Pass@128 结果为：miniF2F-test 96.7、miniF2F-valid 96.3、Extract-Theorem 23.5、College CoT 16.0。这些数字支持“公开 statement data 能在论文设置下训练出有效 translator”，却不能证明每条发布的 NL-FL row 都语义对齐，也不能证明 proof annotations 改善了 proof model，或 corpus 已去污染。

最有信息量的质量证据是 Table 4 中的 ProofNet 人工审计：

| Model | 通过 validation | Correct | Minor error | Major error |
|---|---:|---:|---:|---:|
| InternLM2 | 72 | 42 | 12 | 18 |
| Herald | 151 | 101 | 24 | 26 |

在该审计中，Herald 比 InternLM2 产生更多通过 validation 的输出，也产生更多完全正确的输出；但 Herald 的 151 个 validation-passed outputs 中只有 101 个完全正确，仍有 50 个含 minor 或 major semantic errors。这直接说明 Lean 加 back-translation/NLI 的 pipeline 是有用但有噪声的 semantic-correctness proxy。

Appendix 给出了具体边界。一个仅包含 comments、没有 theorem declaration 的 candidate 仍可通过 compiler 与 NLI 路径；另一个 candidate 可以编译，却把原本的二元 polynomial 问题错误形式化为一元 proposition。这些并非纯假设风险：它们证明“无 Lean error”与 learned equivalence 联合使用时，仍会接受空洞或语义错误的输出。False negatives 也可能存在，因为 back-translation 与 learned judge 可能扭曲正确 formalization。

Lean 在其实际能力范围内仍提供有意义的证据。论文称 tactic-state-derived declarations 已由 compiler 验证，完整 source proofs 可被检查，公开 evaluation code 也采用明确机械规则：只要 REPL messages 中没有 severity `error` 就接受 Lean output。Warnings 仍可通过，其中包括与 `sorry` 有关的 warning。因此，formal layer 支持的是特定环境下的语法与类型有效性，而不是 statement rows 的 proof existence，也不是 natural-language equivalence。

引用结果时必须注意版本漂移。接收版 proceedings paper 报告 miniF2F-test 96.7% 与 graduate-level Extract-Theorem 23.5%；arXiv v2 abstract 仍保留旧值 93.2% 与 22.5%。本 Card 以接收版 ICLR 论文为权威结果来源，仅把 arXiv 作为有版本的访问入口。
