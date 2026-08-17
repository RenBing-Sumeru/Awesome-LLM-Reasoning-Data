流水线从约 15,000 道数学题开始，主要来自 GSM8K 和 MATH。OmegaPRM 使用带 UCB 风格状态选择的 divide-and-conquer Monte Carlo tree search，每题生成约 20 条 rollout。作者再加入 MathShepherd 与 RLHFlow 的 process-reward data，并明确排除 PRM800k，以降低评测泄漏风险。由此得到的带噪池约含 120 万条 rollout，其中包含逐步推理和候选错误位置。

DeepSeek-V3 审查完整 rollout 以及 OmegaPRM 提出的错误判断。judge 确认该判断时保留样本，两者矛盾时丢弃；论文称这一步移除了约一半带噪样本。随后对正、负步骤重新平衡，但没有报告目标类别比例与抽样规则。

DeepSeek-R1-Distill-Qwen-32B 把保留材料转换成逐步 target。直接且正确的步骤得到简短的 System-1 加号判决；错误步骤，以及被认为复杂到需要分析的正确步骤，得到以加号或减号结尾的 System-2 解释。论文报告约 117,000 条整理后的推理轨迹，而当前 Hugging Face 数据集公开的是 156,321 条 train row，顶层只有 `conversations` 一个字段；现有 manifest 无法解释数量差异，也未暴露来源、judge、拒绝记录与重平衡字段。

主 student 是 DeepSeek-R1-Distill-Qwen-14B，以常规自回归交叉熵训练。附录 A.1 报告最大输入长度为 2048 token，LoRA rank 与 alpha 均为 16，dropout 为 0.1，训练三轮，单设备 batch size 为 2，gradient accumulation 为 8，学习率为 2e-5，weight decay 为 0.01，使用 FP16 和 8 张 NVIDIA A800-SXM4-80GB GPU。

推理时，Dyve 依次验证累计前缀，每次响应允许生成 1 到 8192 个 token，并在首个被解析为负向的判决处停止；若所有步骤均为正向，则接受整条轨迹。当前仓库实现使用末尾符号启发式解析加减号。由于仓库没有 tagged release，也没有 paper-to-commit manifest，这只能视为当前 artifact 的行为，不能直接当作论文实验的完整复现。
