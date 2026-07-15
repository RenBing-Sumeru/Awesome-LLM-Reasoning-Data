当目标是训练能修改真实仓库的 Agent 时，可从公开 Scale-SWE 任务开始，固定环境并让 Agent 生成补丁，再以 fail-to-pass/pass-to-pass 测试验收；轨迹可作为工具使用的蒸馏监督。实验需要报告公开数据修订版、任务数、环境成功率、模型与 rollout 预算。它不适合纯文本补全，或无法运行 Docker 环境的场景。
