对 Data Construction and Open Release track，Prolog-MATH 最适合作为构造与 verifier 审计案例。它把问题来源、predicate induction、共享 library 复用、answer-type prompting、程序合成、SWI-Prolog 执行、符号筛选、重试、监督 warm-start 和 GRPO 恢复拆成了可分析的模块。

若按此 recipe 做更强的发布，应保留不可变 MATH ID、源 CoT 与 gold answer、predicate-buffer revision、提议及实体化 predicates、生成器与解码设置、每个候选程序、原始 stdout/stderr、解析答案、verifier 分量、保留或拒绝理由、reward 分量、恢复模型和最终并集成员关系。同步发布被拒候选，才能审计 verifier 边界与恢复过程。

复用等级：**直接训练前仍被核验项阻挡**。当前公开文件可用于 schema 检查、小规模受控 SFT 和 verifier stress test，但前提是固定 Hub revision、独立重跑程序、核对源数据及代码权利并对齐各项计数。不能把它视为论文完整的 97.4% 并集，也不能当作 process-supervision 数据。

可执行研究包括：比较 final-answer equivalence 与人工程序审查；比较 all-predicate 和 any-predicate partial reward；按 symbolic answer type 测量误接受；消融源 CoT、共享 buffer 状态、重试和恢复模型。应把 release revision、执行环境、checker commit、通过或失败数量和人工逻辑错误率，与 MATH-500 accuracy 分开报告。
