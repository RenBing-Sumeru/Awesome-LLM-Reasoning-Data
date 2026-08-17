organic数据准备从targeted acquisition和大规模来源过滤开始。报告举例列出学术论文、教育论坛、编程教程、licensed book、arXiv、PubMed Central、GitHub、CommonCrawl和Wikipedia，但没有发布完整来源清单。web dump由使用LLM annotation训练的小型classifier排序；多语言文档使用fastText语言识别和类似质量过滤；定制parser处理HTML、TeX、ePub/XML类文件、Word文档和PDF。

合成构造从筛选后的种子开始。约50个数据家族采用不同多阶段流程，包括把段落改写为练习和讨论、把推导链抽取为问答对、依据推理与事实rubric迭代自我修订，以及从已有代码反向生成任务描述的instruction reversal。问题池通过多次生成答案来过滤：完全一致视为过易，完全不一致视为过难或含糊；缺少真值时，plurality answer可替代ground truth用于拒绝采样。代码和部分科学记录可以用execution loop或test检查。

最终预训练与midtraining运行报告为9.8T token；约400B表示未加权合成源token。最终分配、唯一文档数、epoch或重复记账及精确来源比例均为unknown。midtraining把context扩展到16K。官方模型卡报告使用1,920张H100-80G、训练21天，但没有分开生成与过滤计算量。

SFT进行一轮，使用约8B chat格式token，覆盖数学、代码、推理、对话、模型身份、安全和40种语言。提示混合公开instruction数据与synthetic prompt；先生成多个回答，再由LLM评估选优。evaluator checkpoint、提示、候选数量、分数分布、阈值、接受记录数和精确SFT mixture均为unknown。

Pivotal Token Search通过比较片段前后采样continuation的oracle成功率，递归检查一个completion；它按累计token log-probability划分片段，再把显著提高或降低成功率的单个token转为接受/拒绝pair。代码可使用完整test suite，数学可把最终答案与ground truth比较。除非成功率沿解答过程近似单调，否则该搜索不能保证找到全部pivotal token。rollout数量、阈值、memoized estimate与oracle实现均未发布。

表7包含250,297条第一轮示例：132,859条通用选择问答、76,552条数学、16,080条Python、21,806条C++/Go/Java/JavaScript/Rust，以及3,000条额外安全或幻觉缓解示例。第二轮由GPT-4o、GPT-4t和phi-4生成回答，GPT-4o按准确性以及准确性、风格、细节的聚合评分判断pair。表8合计841,842个pair，正文将其约写为850K；两轮都混入少量安全与幻觉缓解数据。
