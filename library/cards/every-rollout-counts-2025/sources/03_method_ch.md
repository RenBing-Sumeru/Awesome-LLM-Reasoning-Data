每个搜索步骤先扩展活跃部分解，收集已完成解，为其余候选计算最后一步 PRM 分数，再由分配规则决定每个候选以多少副本进入下一轮。DORA 计算 BGE-M3 embedding、余弦相似度、逐行 softmax affinity、对角 uniqueness、PRM softmax 质量和按比例取整的分配。搜索结束后用 PRM 加权多数投票选择答案。

实验使用 Llama-3.2-1B-Instruct、Llama-3.2-3B-Instruct、Qwen2.5-1.5B-Instruct policy 和 Qwen2.5-Math-PRM-7B。总预算为 16、32、64、128、256。生成配置为 temperature 0.8、top-p 1.0、每步 256 tokens、每条解最多 2,048 tokens。MATH500 重复五次，AIME2024/2025 重复十次；附加评估包括 HMMT24/25 与 AMC23/24。

Apache-2.0 官方仓库发布了 DORA/搜索代码、recipe、parser 和 benchmark 文件，但没有发布论文实验生成的轨迹、逐步分数矩阵、embedding 输出、分配或最终投票 ledger。

