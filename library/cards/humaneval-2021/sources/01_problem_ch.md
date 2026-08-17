HumanEval 来自 OpenAI 2021 年 arXiv 论文《Evaluating Large Language Models Trained on Code》。论文要解决的具体缺口是：用文本相似度评代码生成很弱，真正需要看生成程序能否在测试中运行正确。

评测面是 164 道手写 Python 函数补全题。每题给函数签名和 docstring 风格 prompt，模型补全后由单元测试执行验收。这里收它作为程序化代码生成 benchmark，而不是仓库级软件工程环境或 agent 任务。
