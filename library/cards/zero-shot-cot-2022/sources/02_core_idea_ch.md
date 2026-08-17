Zero-shot-CoT 用一个与任务无关的提示，在问题与抽取答案之间插入模型生成的理由，从而去掉少样本 CoT 所需的人工示例。序列化对象包括问题、精确提示、第一次生成的理由、答案抽取 prompt 和最终答案；benchmark 答案匹配只判断终局答案，不检查单个步骤。它在理由数据谱系中是诱导基线，不能证明生成链可作为忠实监督。

Google Scholar 引用数：10024（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Large+Language+Models+are+Zero-Shot+Reasoners&author=Takeshi+Kojima&hl=en）

开源数据：没有新的训练数据集。数据集名称与地址：不适用；论文在 12 个既有推理 benchmark 上评测，并在 https://github.com/kojima-takeshi188/zero_shot_cot 发布代码。规模与记录形式：benchmark 规模沿用各自原始发布；每次运行记录问题、生成理由和抽取答案。文件格式与许可：论文未声明新的数据格式或许可。用途：零样本评测，以及生成在用于 SFT 前必须另行验证的候选理由。
