输入是一条记录所需的任务材料和元数据：2010-2022 年 2,811 道高考试题，覆盖 9 个学科，其中 1,781 道客观题、1,030 道主观题，并带答案键或评分 rubric。

流程：收集高考试题；区分学科和题型；提示模型作答；客观题按答案键评分；主观题按类人工 rubric 评分；汇总转换分。

输出是在该契约下评分的 benchmark record 或 evaluation summary：客观题 exact/rule matching，加上主观题人工评分或带 marking criteria 的 GPT-4-turbo judge 评分。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
