既有 tree-of-thought 与 MCTS 方法在模型生成的动作或状态上搜索，并用模型分数、value function 或 process reward 引导扩展。CMCTS 通过定义小型语义动作词表来改变搜索 substrate，施加仿人顺序约束，并把这些约束与 PRM 产生的 Q、V 信号结合。coding 动作还把工具辅助验证变成显式分支类型，而不是提示中的偶然行为。

对数据策展而言，方向性信号是把动作、生成状态、规则可用性、过程分数和终局投票分开。这比线性 long-CoT 记录提供更丰富的轨迹 schema，并允许审计某个分支为何被探索或拒绝。纯规则与纯 PRM 变体原则上也让反馈来源归因更可检查。

MCTS、UCT、PRM、self-consistency voting、SymPy 使用和提示式动作类型都不是单独的新概念。新意在于它们的受约束组合，以及“预定义动作多样性改善搜索”的主张。相对更大模型的 benchmark 优势不能证明中间树正确或可复用；树发布、PRM lineage 和规则覆盖必须独立评估。
