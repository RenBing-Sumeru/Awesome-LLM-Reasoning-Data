LawBench 追问的是大语言模型在中文法律知识、法律理解和法律应用任务上的能力。主要来源是 2023 年 9 月 arXiv 预印本，以及 OpenCompass 官方 LawBench 项目页和代码仓库。

评测面是按三个认知层级组织的法律任务套件。单条样本可能是选择题、分类题、抽取题、蕴含判断、阅读理解或法律应用 query，并带官方答案或任务特定 metric。

收录边界是 legal-domain benchmark，不是法律咨询系统、不是双语法律语料库，也不是 reward model。复用时必须保留司法辖区/语言范围、prompt template、task split、evaluator script，以及模型是否允许检索或工具使用。
