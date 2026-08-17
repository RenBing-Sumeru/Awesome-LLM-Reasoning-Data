仓库级 coding agent 的主流评测仍以 Python bug fix 为中心，既缺少 Java、JavaScript 和 TypeScript，也很少区分新增功能、重构和修复三类工作。只报告最终测试是否通过还无法说明 agent 是不会定位文件、漏改语法节点，还是生成了错误补丁，因而难以诊断多语言系统的瓶颈。

SWE-PolyBench 从 21 个真实仓库构建 2,110 个执行型任务，覆盖四种语言和三类变更，并发布按任务和仓库分层的 PB500 子集。除 Docker 测试判定外，论文还从 gold patch 的文件、函数与类级语法树节点计算检索 precision/recall，使 benchmark 同时评估终局解决和代码定位。
