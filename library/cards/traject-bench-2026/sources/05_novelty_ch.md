既有 tool-use benchmark 已经评测 function selection、argument、execution 或 final answer；LLM judge、semantic retrieval、ReAct 与 API catalog 本身也都不是新机制。TRAJECT-Bench 的变化在于把完整参数化的 multi-call reference trajectory 设为一等评测对象，并分离两类结构：无序、相互独立的 parallel call，与按 output dependency 排序的 sequential chain。simple/hard query pair 则在保持预期 reference behavior 不变的同时改变语言表达的直接程度。

构造 recipe 也比单纯扩展 prompt set 更具体。RapidAPI 派生工具经过执行，并按 error、trivial output、overlap、description quality 与 parameter complexity 过滤。parallel example 从 50 个人工收集的 task type 和 LLM 合成 call set 开始；sequential example 从有向 compatibility graph、人工 chain template 与明确 data binding 开始，再由 LLM 实例化。automatic validation 与 human review 属于论文声称的流程，但确切 model、prompt、rejection statistics 与发布运行配置仍为 unknown。

feedback interface 是对 reasoning-data 研究最重要的方向信号。tool identity、argument use、retrieval 与 sequential order 接受程序化检查；trajectory satisfaction 与 final-answer equivalence 接受模型判断；ReAct 则接收可变 environment observation。把这些组件分开能使 metric blind spot 可被审计，也说明“trajectory verified”并不是一个单一属性：名称相等、参数相等、依赖顺序、语义充分性与执行成功是不同契约。

并不新颖的部分也应明确。论文没有提出 training objective、base model、teacher policy、dense process reward、preference dataset、新 API provider 或 deterministic environment snapshot。sequential structure 仅限 chain，而非任意 dependency graph。贡献中有相当部分是跨 1,228 个工具的 benchmark engineering 与规模集成，不是新的 learning algorithm。

复用前应依据 artifact integrity 而非 venue 或 score 检查这项新意。研究者需要调和 5,670 与 5,870，确认 Email/Mapping 的预期发布状态，固定 code/data/schema/judge/API，审计 alternate-valid trajectory 与 metric 的 false positive/negative，检查 dropped failure，并建立 upstream rights。在此之前，该工作是有用的 evaluation/audit 方向信号，不是已验证训练语料。
