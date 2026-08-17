论文报告 SimpleQA 公开 4,326 个问题。作者抽样 1,000 个 finalized examples 做质量检查：第三名 trainer 回答样本，对被 grader 判错的情况人工复核，剩余错误主要来自歧义问题、来源冲突或多个有效答案，最终估计 benchmark error 约 3%。

模型表明它在发布时没有饱和：GPT-4o correct 38.2%、F-score 38.4；o1-preview correct 42.7%、F-score 44.8；Claude-3.5 Sonnet correct 28.9%、F-score 35.0，并且比 GPT-4o 更多选择不作答。论文还说明 correct-given-attempted 和 F-score 会呈现不同模型行为，因为 abstention 会改变分母。

逐样本证据不是 aggregate score，而是 question、reference answer、supporting metadata URLs、trainer agreement process、model answer 和三分类 grader label。证据边界是：发布的 evaluator 使用 prompted model classifier，不是 symbolic verifier，也不是实时网页核查。grader model、prompt、evaluator commit、CSV snapshot、解析规则和模型回答格式都会影响分数。
