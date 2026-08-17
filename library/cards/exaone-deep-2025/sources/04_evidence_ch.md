官方 [arXiv 报告](https://arxiv.org/abs/2503.12524)支持以下事实：基础模型为 EXAONE 3.5 Instruct，模型有三个规模，阶段数量为 1.6M/20K/10K，SFT 约含 12B token，输出使用 thought tag 加最终答案格式，DPO 使用 SimPER，Online RL 使用自研 GRPO 变体。报告也明确模型可用于研究，但没有列出训练数据集、轨迹生成器、偏好标签者、过滤、切分方法或 Online-RL 奖励。

官方 [EXAONE Deep 仓库](https://github.com/LG-AI-EXAONE/EXAONE-Deep)宣布发布 2.4B、7.8B 和 32B 模型，并链接 LG 的[官方 Hugging Face 集合](https://huggingface.co/collections/LGAI-EXAONE/exaone-deep)。官方 [32B 模型卡](https://huggingface.co/LGAI-EXAONE/EXAONE-Deep-32B)提供可下载的 BF16 权重、EXAONE 3.5 基础模型链接、推理示例和 LG 提供的量化版本链接。[LG 发布文章](https://www.lgresearch.ai/blog/view?seq=543)也确认了模型公开发布。

论文和模型卡把 EXAONE AI Model License Agreement 1.1 - NC 应用于模型材料。该协议把用途限制为研究，未经另行协议禁止商业使用，并包含可撤销条款。已核查的官方页面没有提供可下载的 SFT/DPO/RL 数据集，也没有为这些未披露记录授予数据许可。基准结果与模型可下载性不能填补这一证据缺口。

