对每个 prompt，解码器并行启动 N 条采样轨迹。论文主设置使用 top-k 20、top-p 0.95、temperature 0.7 和 Zero-Shot-CoT，模型包括 Qwen2.5-7B-Instruct、Llama3-8B-Instruct、Mistral-7B-Instruct-v0.3，并用 Qwen2.5-72B-Instruct 检查模型规模泛化。客观任务覆盖 MATH、TheoremQA、GPQA、MMLU，主观任务使用 revised CNNDM 与 AlpacaFarm。Scaling 图中的采样数从 3 到 80 变化，并非固定为单一 N。

实现会在早期每一步检查是否仍有任意一对 token 前缀完全相同；当所有候选两两分歧时记录 c。随后把 token hidden states 汇聚成逐层句向量，计算 CoE 曲率特征，并以某候选和其余候选的 CoE 特征平方差均值作为分数。主实验令 buffer window 的 tau=c，在窗口内重复排序，再以逐步胜者的 plurality 决定保留轨迹。环境是可访问 hidden states、使用 KV cache 的白盒自回归推理。ST-BoN 本身没有外部 verifier；正确答案与任务评估器只用于衡量最终输出，Full-BoN 基线则按任务使用多数/语义一致性、Skywork-o1-Open-PRM-Qwen-2.5-7B 或 ArmoRM-Llama-3-8B。

官方 Apache-2.0 仓库实现 greedy、self-consistency 和 ST-BoN 三种模式，并记录 final output、inference time、各阶段时长、c、tau 与 stop_step。Data 目录含 MATH-500、MMLU、TheoremQA、AIME 和 AMC 文件。完整复现仍需固定 commit，并核对模型 revision、精确 prompt template、六个数据集的完整 manifest、seed、GPU 分配，以及能否导出逐候选 hidden states 与分数历史；现有 final-output schema 未完整建立这些 lineage。
