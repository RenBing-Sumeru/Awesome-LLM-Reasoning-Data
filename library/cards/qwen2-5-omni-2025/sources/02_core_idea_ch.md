官方报告将 Qwen2.5-Omni 描述为一个可接收文本、图像、音频和视频输入，并流式输出文本和语音的端到端系统。其 Thinker 生成文本，Talker 使用 Thinker 的隐藏表示生成音频 token。该架构在此处仅作为语境，因为报告将其与分阶段的多模态数据和反馈叙述相联系。

在预训练方面，报告列出 image-text、video-text、video-audio、audio-text 和文本语料，并给出第二阶段 800B image/video、300B audio 和 100B video-with-audio token 的总量。在后训练方面，Thinker 使用覆盖四类模态组合的 ChatML 指令微调数据。Talker 包含上下文续写、DPO 和多说话人指令微调阶段；其被披露的 DPO 元组由输入文本、好的与坏的生成语音及参考语音构成，并按与 WER 和标点停顿误差相关的分数排序。

这些来源没有发布底层训练、指令、参考语音、偏好或拒绝输出记录。

