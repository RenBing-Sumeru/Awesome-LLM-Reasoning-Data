最有价值的贡献是一份不完整但具体的构造账本。预训练以 early fusion 统一文本与视觉，并纳入图像和视频数据；随后使用专门数据进行 mid-training。对于 Maverick，Meta 报告了 lightweight SFT、multimodal online RL 和 lightweight DPO。经 Llama 裁判标为简单的 SFT 数据中，超过一半被删除；online RL 期间则交替执行训练与策略驱动的过滤，只保留中等至困难提示。

另一条教师分支必须单独记录。Meta 明确说明 Maverick 由仍未发布的 Llama 4 Behemoth codistill 而来，蒸馏损失在训练中动态加权 soft target 与 hard target。大部分学生数据通过 codistillation 摊销目标计算；对于新增数据，再运行 Behemoth forward pass 生成目标。这些是已披露的谱系操作，不是已发布的教师轨迹。

反馈合同属于 mixed，但并不完整：Llama 难度判断、未披露的 online-RL 奖励、未披露的 DPO 反馈、安全分类器与教师目标都会影响筛选或学习。报告没有发布裁判、提示、奖励定义、偏好记录或样本 schema。
