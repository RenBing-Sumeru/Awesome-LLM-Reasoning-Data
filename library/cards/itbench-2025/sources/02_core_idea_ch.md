ITBench的核心贡献是把IT任务规范、已部署的运维状态、工具介导的智能体episode与领域特定success check绑定成一个可审计评测契约。benchmark runner选择场景、部署testbed、加载场景并注入触发条件，把environment manifest交给智能体，记录交互，以ground truth评估终态输出/状态，删除场景，最后汇总结果。

交互被建模为POMDP。智能体根据先前observation/action选择下一动作；observation proxy只暴露部分系统状态；action set由领域工具和stop action组成。在SRE示例中，substrate包括Kubernetes、OpenTelemetry Astronomy Shop、Grafana、Loki、Jaeger、Prometheus及故障机制。SRE/FinOps智能体查询trace、metric、log、Kubernetes与summarization接口；CISO智能体通过GitOps式访问生成并执行Kyverno、OPA Rego或脚本。

反馈契约明确分开**终止**与**成功**。智能体在`t*`停止，但success是另一个predicate，需要把下一状态/终态或结构化输出与desired outcome和场景ground truth比较。论文期评测组合环境/程序化检查和领域指标。后续trajectory release增加了混合契约：检查到的`judge_output.json`用`GCP/gemini-2.5-pro`进行语义诊断判断，同时计算entity precision/recall/F1、propagation-chain、alert-completeness、fault-localization与ranking指标。不能把这个后续judge反推为所有论文实验的反馈方式。

相对静态IT问答或incident report，变化在于diagnosis、mitigation、compliance和cost-control任务是在有状态testbed中执行，而不是只评文本。相对其他交互智能体基准，其区别是覆盖三个运维IT领域，并给出明确的领域ground truth与工具。provisioning、CrewAI/ReAct loop、Kubernetes telemetry、程序化指标和LLM judge都不是各自首次出现；可复用的方向信号是把它们按版本绑定为scenario/episode/evaluator对象。
