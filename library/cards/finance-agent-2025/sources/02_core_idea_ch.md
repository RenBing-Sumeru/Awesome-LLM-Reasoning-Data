核心贡献是在 finance-research, sec-filings 上提供 本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：expert-authored answer and official evaluator; exact v2 rubric and 裁判设置需要钉住页面和版本。

数据对象或环境是：agentic harness with web search and SEC filing access。最接近的对比对象是 agent-environment, tool-use, and benchmark-harness papers in the same atlas category。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 需要裁判判断、混合。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
