Numerical-reasoning dataset 已提供自然语言步骤，formal theorem-proving dataset 已提供严格验证，scientific-paper corpus 已包含 equation，multi-agent pipeline 也早已分解复杂生成任务。STORM-BORN 并未单独首创这些组件。

第一项具体变化是 source object：以当代技术文档中的完整推导为对象，而不是短竞赛题或 proof-assistant statement。问题围绕 formula dependency、approximation choice、lemma 与 source context 构造，目标是保留论文和 appendix 中常见的非形式化但技术密集 reasoning，包括 answer-only dataset 经常遗漏的 heuristic transition。

第二项变化是把 grounding 模块化为六个阶段。Formula recognition、question drafting、source answer retrieval、context collection、self-contained rewriting 与 answer-type filtering 各自独立。这样可以在概念上区分每类 failure——formula omission、missing prerequisite、unsupported answer、lost context、underspecified question 或 non-derivational content——尽管 release 没有保留逐行审计所需的中间记录。

第三项变化是刻意采用小规模 human expert selection。作者依据 complexity、clarity、correctness 与 reasoning density，把 2,000 个生成 pair 缩减为 100 个，并将 top-100 与更大子集比较。其预期启示不是简单增加 synthetic data，而是 source retrieval 加昂贵 domain judgment 可以形成小型 training/evaluation object。Ablation 具有提示性，但不能证明 100 在一般情况下最优，也不能识别每项 gain 来自哪种 expert action。

开放 release 还增加 train/test 与 multiple-choice view，支持 SFT 和成本较低的选项评测。但已核验的新意是最终 100-row dataset 与文档化 recipe，而不是完全透明的 human-feedback corpus。Candidate pool、evidence span、expert edit 与 option lineage 缺失，使研究者无法直接分析论文所强调的 selection process。

更强的后续工作应发布 document version 与 rights、formula/evidence span、每个 agent input/output、accept/reject/revise decision、annotator assignment/agreement、更大 ablation subset、source-disjoint split 与经校准的独立评测。这样才能把 human-in-the-loop 从论文级叙事转化为可复用 data contract。
