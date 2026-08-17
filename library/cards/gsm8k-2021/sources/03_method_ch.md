输入是一条记录所需的任务材料和元数据：8.5K 道小学数学文字题，JSONL 字段为 question 和 answer；release split 为 7,473 train 和 1,319 test，最终数值答案跟在 #### 标记后。

流程：提示或训练模型生成解答；抽取最终答案；按 exact match 评分；在生成解答上训练 verifier；用 verifier 分数从采样解答中选择。

输出是在该契约下评分的 benchmark record 或 evaluation summary：答案抽取后的最终答案 exact match；verifier models 作为选择信号训练和评测。复用必须固定来源版本、split、scorer 或 judge 版本、prompt/scaffold policy、相关运行环境和 artifact license。
