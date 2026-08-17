报告将语言组件初始化为 Qwen2.5，并从头训练重新设计的 ViT。其三个预训练阶段分别列出 1.5T、2T 和 0.6T token。披露的预训练类别包括图像字幕、交错图文、OCR、视觉知识、多模态学术问题、grounding、文档解析、视频和 agent 交互。对于交错图文数据，报告称先进行标准清洗，再按四个内部评分维度打分；源数据身份、评分实现、阈值和保留率未披露。

报告还描述了使用公开和 proprietary 数据、XML/JSON 等格式，以及 Grounding DINO 与 SAM 合成的 grounding 材料；带 layout box 的合成文档 HTML；混合合成、开放与内部材料的 OCR 数据；100 万条合成图表样本；经离线表格识别模型过滤的 600 万条表格样本；以及由多帧合成的长视频字幕。这些是项目级披露，并非已发布的语料或完整 source manifest。

对于 agent 材料，移动端、网页和桌面截图获得合成 caption 和 UI grounding 标注。来自开源数据和虚拟环境中 agent framework 的多步轨迹被重构为共享的 function-call action space。人工与模型标注者根据全局 query、操作前后截图和高亮的 ground-truth action，为每一步写出 reasoning explanation；模型 filter 会移除低质量 reasoning。报告未列出所有环境、标注者、记录、可回放状态或任务成功 predicate。

后训练报告约 200 万条 SFT 样本，按条目数计纯文本和多模态各占一半。query 主要来自开源仓库，并加入经整理的购买数据与线上 query。Qwen2-VL-Instag 先将 QA 对分类为 8 个 domain、30 个子类，随后规则 filter 与 Qwen2.5-VL reward model 对样本打分。拒绝采样中，中间版本 Qwen2.5-VL 的候选输出只有在匹配 ground-truth expected answer 时才被保留，之后还经过额外的规则/模型检查。SFT 后进行 DPO，使用图文与纯文本偏好数据且冻结 ViT；偏好来源和标准未知。

