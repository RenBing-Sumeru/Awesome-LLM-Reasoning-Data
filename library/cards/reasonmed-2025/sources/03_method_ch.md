源数据表包括 MedQA train/dev（10,178/1,272）、MedMCQA train（182,822）、PubMedQA train/validation（450/50），以及六个医学 MMLU 子集的 dev/validation，共 194,925 道题；具名 test split 被排除。生成 prompt 要求六个部分：改写问题、提取临床背景、评估每个选项、排除不一致选项、比较剩余选择，并给出最终答案与简明理由。

流程拟为每题生成九条初始路径。发布的生成脚本在三个温度下统一设置 top-p=0.9、最大输出 8,192 token。验证器以答案键为条件，检查关键临床因素、选项覆盖、推理是否导向给定答案，以及是否存在医学事实错误。Figure 4 记录了 192,628 道题上的 1,291,181 个 Correct 和 442,471 个 Error 判定，共 1,733,652 条路径，并未覆盖表中全部 194,925 道源题；缺少的 2,297 道题没有对账说明。

EMD 路由按难度分配修复成本。Easy 题有 5–9 条 Correct 路径，保留排序前二；Medium 题有 2–4 条 Correct 路径，Error Refiner 把原路径、正确答案和其他尝试的错误原因交给 GPT-4o-mini，要求定向纠错；Difficult 题不足两条 Correct 路径，由 GPT-o1 再生成。独立的 Response Summarizer 生成简洁视图；GPT-4o 的 1–10 分只用于质量分析，不是可执行的医学真值判据。

下游实验对 Qwen2.5-7B 进行 3 个 epoch 的全参数微调，学习率 1e-5、cosine schedule、10% warmup、4,096 token 上下文、bf16、DeepSpeed ZeRO-2，并使用 16 张 H20；论文还报告 14B 版本。数据生成约需 122 小时，7B 训练使用 448 H20 GPU-hours。按论文定价假设，选择性 EMD 估算成本为 4,552.47 美元，全部直接 GPT-o1 蒸馏为 16,631 美元。

仓库提供生成、验证、排序、修复、摘要和评分脚本，但没有端到端 run manifest 或源数据准备脚本。当前代码在部分位置也与论文 prompt 不同：`quality_ranker.py` 先逐路径给出 0–5 分再排序，验证器默认采用随机设置（temperature 1.0、top-p 0.95）。训练与评测仍标为“Stay tuned”，仓库也没有 tag 固定论文对应实现。
