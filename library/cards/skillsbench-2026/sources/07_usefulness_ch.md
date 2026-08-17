它适合作为 evaluation surface 和 audit checklist。复用时应保留 task id、source version、split、prompt/scaffold、model output、evaluator revision、raw verdict、aggregate metric，以及 hidden-set 或 judge configuration。

它的主要用途是比较反馈契约：信号究竟来自 exact matching、tests、execution environment、expert rubric、LLM judge，还是 leaderboard preference votes。evaluation-only 证据必须和 training data 或 reward quality claim 分开。
