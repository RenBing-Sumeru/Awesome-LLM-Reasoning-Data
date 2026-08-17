Nemotron 3 Ultra 是一个总参数 550B、激活参数 55B 的 hybrid Mamba-Attention mixture-of-experts 模型。NVIDIA 报告了 20T-token 预训练、1M 上下文扩展，随后进行 SFT、统一的多环境 RLVR，以及两轮带有专门教师稠密信号的异步 MOPD。已发布的 BF16 checkpoint、官方数据集合、NVIDIA-NeMo 仓库和项目页使这条管线的若干层面可被检查。

其反馈表面是混合的，而非完整规定。报告给出了异步 GRPO、8,192 的全局 RL batch、每样本 16 次 rollout 和分阶段生成上限；还给出了具体的 SWE 例子：隐藏测试产生二元 GRPO reward，未完成 trajectory 被 mask，畸形 reasoning 或工具调用得到负 advantage。但它没有发布每个环境的 reward 函数、校准、权重、错误率或配置。

对 Track 12 而言，核心价值是一份披露账本：将公开发布 artifact 和已点名的构造机制，与这些 artifact 不能消除的私有输入、不完整谱系和未解决的反馈审计边界区分开。

