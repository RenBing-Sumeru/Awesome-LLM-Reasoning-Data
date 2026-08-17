无 OCR 文档模型常分别学习识字或问答，缺少统一的文字位置、页面结构和解释型答案表示。

流程先用 DocStruct4M 学习解析与定位，再用 DocReason25K 解释和下游混合做文档指令微调。 该方法直接产出 DocReason25K and DocStruct4M。本卡的决策边界是可下载训练记录，而不是只有模型的报告或只用于评测的基准；单条记录包含 文档图像、结构或问答指令，以及简短答案或详细解释。

L4 事实：已于 2026-07-27 核验 Findings of EMNLP 2024 官方页面、https://huggingface.co/datasets/mPLUG/DocReason25K 的实际公开记录、规模和条款。收录理由是论文中心贡献直接构造或筛选可序列化的后训练目标。
