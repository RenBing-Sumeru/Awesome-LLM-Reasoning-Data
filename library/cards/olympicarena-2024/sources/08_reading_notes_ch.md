阅读时先看数据切分、答案类型和评测协议，再看榜单。最重要的区别是本地 validation evaluation 与官方隐藏 test 提交；Hugging Face 公开字段并不意味着 test 答案可本地审计。

四类结论要分开：答案级 accuracy、CS pass@k、model-based correctness judgment、过程级步骤分数。aggregate score 本身不能说明是哪种反馈契约给出的判定，除非同时记录学科、答案类型、split 和 evaluator 路径。
