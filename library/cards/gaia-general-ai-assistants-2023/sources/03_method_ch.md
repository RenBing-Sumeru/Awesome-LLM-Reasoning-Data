输入是一条记录所需的任务材料和元数据：问题、可选文件或多模态输入、level 元数据和最终答案目标；发布对象不是 state-action supervision，其中 300 个答案保留给 leaderboard 使用。

流程：构造需要推理、浏览、工具和多模态处理的问题；标注答案和 level；公开问题但保留大量答案；按最终答案给提交评分。

输出是在该契约下评分的 benchmark record 或 evaluation summary：官方答案集、答案归一化和隐藏答案 leaderboard policy 下的 final-answer correctness。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
