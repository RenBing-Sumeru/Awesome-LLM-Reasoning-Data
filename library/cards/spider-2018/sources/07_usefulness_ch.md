可以把 Spider 用作 text-to-SQL 的规范 benchmark schema：question、database ID、schema serialization、gold SQL、difficulty、split、predicted SQL、exact-match result、execution result 和 evaluator version。

对 atlas 来说，Spider 是 benchmark/evaluation-surface 卡。它有助于区分 answer-level programmatic verification 和 agentic database interaction：模型写 SQL，evaluator 检查 SQL 结构或执行结果，但默认没有多轮环境。
