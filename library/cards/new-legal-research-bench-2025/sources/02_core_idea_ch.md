核心贡献是在 legal-research, multi-hop-legal-qa 上提供 本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：legal expert answer or official Vals scoring rubric; exact 裁判 and private-set policy are 待审计。

数据对象或环境是：legal research setting with possible multi-hop source retrieval。最接近的对比对象是 agent-environment, tool-use, and benchmark-harness papers in the same atlas category。方向标签是 benchmarks_evaluation_surfaces，反馈方式是 需要裁判判断、混合。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
