已有基线包括 TriviaQA、Natural Questions 这类事实问答，也包括 TruthfulQA、FreshQA、LongFact、FActScore 等 truthfulness/factuality 工作。它们要么对 frontier models 已经偏容易，要么关注快速变化知识，要么拆解长文本输出，要么采用更宽的 factuality 契约。

SimpleQA 的变化是把几个选择组合成窄而可审计的 surface：对强模型有难度的短问题、single-answer 和 timelessness 约束、独立 trainer verification、supporting URL metadata，以及把 wrong answer 和 non-attempt 分开的三分类 grader。方向信号是：factuality evaluation 应保留 abstention 和 calibration 行为，而不只是报告 correctness。

不新的是 short-answer QA、prompted grading、公开 CSV 和模型排行榜表。质量信号在于任务收窄得足够清楚，标签语义明确。复用前要检查 public-row contamination、CSV checksum、supporting URL 可访问性、grader model、prompt、evaluator commit、F-score 解释，以及下游是否更应该采用 wrong-answer penalty。
