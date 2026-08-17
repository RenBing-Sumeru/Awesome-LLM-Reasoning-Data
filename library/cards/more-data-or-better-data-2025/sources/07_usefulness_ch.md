对于 Data Construction and Open Release Recipes track,本文提供了一张紧凑的数学数据 pipeline 干预地图:source selection、OCR cleanup、教育化重写、teacher distillation、failure-guided retrieval、生成、consistency filtering、LLM judging、去重与 mixture evaluation。其负结果尤其有用,可避免自动假设更多 token、更长 trace 或规则生成的复杂度就代表更好的训练记录。

构建者可把 80/20 设计用于初筛,但应固定总 token、optimizer step、model checkpoint、sampling exposure 与 evaluation protocol,进行重复运行并报告 confidence interval,同时呈现跨领域回退,而不是只报告目标 benchmark。还需要 factorial ablation 分离 teacher strength、format、filtering 与 volume。用于 error-guided generation 的 benchmark item 应与最终评估隔离。

可复用发布应包含稳定的 source/record ID、教材页与权利、OCR 版本、prompt 与模型 revision、decoding 与 seed、原始—重写配对、答案组、filter decision、rejected sample、检索 index 与 rank、MinHash 参数、mixture membership、训练 schedule、checkpoint,以及 split/decontamination 报告。在这些材料出现前,该工作是配方比较报告,不是可直接复用的数据发布。

复用等级:当前适合作为阅读与审计参考,也可作为独立实现对照实验的蓝图。由于构造语料和 baseline mixture 不可得,直接训练复用处于阻塞状态;缺少代码、运行配置、seed 和 checkpoint-to-table mapping,也使论文所报排序无法精确复现。
