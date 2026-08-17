先前基线多是通用法律 QA 或职业考试子集，经常没有明确区分测试的是哪种认知能力。LawBench 改变的是评测设计：把中文法律任务组织为记忆、理解和应用三层，并配套标准 prompt 与 OpenCompass 兼容评分。

方向信号是按司法辖区和语言构造 benchmark，并用受控 task taxonomy 限定能力边界。质量信号是公开项目页、code/data 仓库和 task-level 组织，使审计者可以检查 prompt 与 answer。

不新的部分包括 answer-key benchmark、task-level metric 和 OpenCompass 式模型评测基础设施。复用前要检查源法律材料、数据 license、任务平衡、answer parser、prompt language、法律版本时效性，以及与模型训练语料的重叠。
