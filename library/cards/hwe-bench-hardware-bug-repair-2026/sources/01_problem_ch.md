硬件代码 benchmark 多要求从规格生成单个 HDL 模块，无法测试代理在真实 SoC 仓库中定位跨 RTL、配置、固件和验证文件的历史 bug。HWE-Bench 从真实 pull request 构建仓库级修复任务，代理读取 issue 和完整代码库、提交补丁，并由项目原生仿真或回归流程判定。目标是测量硬件语义推理与跨 artifact 协调，而非只检查 Verilog 语法。
