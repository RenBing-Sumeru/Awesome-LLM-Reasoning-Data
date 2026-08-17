代码生成 benchmark 主要覆盖 Python/Java，并通常只检查功能正确性；Solidity 智能合约还必须考虑跨合约调用、链上状态、安全漏洞和 gas 成本。一个能通过少量 tests 的实现可能存在 reentrancy 等风险，或因 gas 过高而缺乏实际可用性。

SolEval 构建 repository-level Solidity 任务，把真实合约上下文、Foundry tests、Slither 安全扫描和 gas 测量组合起来，同时评估正确性、成本与漏洞。它回答 LLM 能否在 Ethereum 工程环境中生成可执行、安全且高效的合约代码。
