Tulu 2 的贡献是一套文档完整的开放适配包，其中指令—回答记录监督 SFT，偏好对监督 DPO，统一评测工具比较最终 checkpoint。与 Tulu V1 和 LiMA 这类一次性数据发布相比，它把混合数据修订、后续偏好训练、模型规模和评测输出拆成可分别检查的对象。它适合作为数据入门论文，是因为清楚展示了异质后训练数据和反馈如何被组合并用于训练。

Google Scholar 引用数：315（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Camels+in+a+Changing+Climate%3A+Enhancing+LM+Adaptation+with+Tulu+2&author=Hamish+Ivison&hl=en）

开源数据：有。**Tulu V2 SFT Mixture** 位于 https://huggingface.co/datasets/allenai/tulu-v2-sft-mixture，共 326,154 条指令—回答样本，来源包括 FLAN V2 CoT、Open Assistant、ShareGPT、GPT-4-Alpaca、Code-Alpaca、LIMA、WizardLM、Open-Orca、固定提示和 7,544 条科学数据。数据通过 Hugging Face 发布，带有来源或配置字段以及对话或指令—回答记录，可用于监督微调；具体格式和许可证随原始来源而异。代码与 checkpoint 分别位于 https://github.com/allenai/open-instruct 和 https://huggingface.co/collections/allenai/tulu-v2-suite-6551b56e743e6349aab45101。
