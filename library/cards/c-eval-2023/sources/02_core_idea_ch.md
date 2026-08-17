核心贡献是一个覆盖 52 个科目、13,948 道多选题的中文评测套件，并额外定义更难的 C-Eval Hard 子集。关键机制是考试题目整理、标准化 prompting，以及用官方答案键做精确评分。

与 MMLU、AGIEval 和其他考试 benchmark 相比，C-Eval 改变的是语言、学科覆盖和中国教育/职业考试语境，但保留多选题答案键这一熟悉反馈契约。数据对象是 answer-level 而不是 trajectory-level：模型输出只有匹配官方选项标签才算正确。方向标签是 multilingual static reasoning benchmark with answer-key verification。
