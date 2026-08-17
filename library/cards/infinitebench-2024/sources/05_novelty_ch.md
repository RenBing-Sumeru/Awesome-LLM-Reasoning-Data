先前基线是更短长度的长上下文评测，尤其是 LongBench 规模输入和 needle-style retrieval probe。InfiniteBench 改变的是压力面：把 100K+ context 与多任务族、中英文、真实/合成数据结合起来。

方向信号是长上下文 benchmark 不能只报长度，还要公开 context 来源、答案格式、输出预算和 scorer。质量信号来自公开仓库、数据发布和逐任务 metric 定义表。

不新的部分包括 exact-match retrieval、ROUGE QA/摘要评分、code/math 答案检查。复用前要检查数据许可证、书籍/脚本/代码来源 lineage、split 策略、合成任务构造方式，以及目标结论是否需要人工语义评估。
