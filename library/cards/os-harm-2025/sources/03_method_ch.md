构造从论文中的三份50任务manifest开始。Deliberate misuse包含25个人工编写base task和25个Claude 3.7 Sonnet语义改写，覆盖fraud、disinformation、copyright infringement、harassment与cybercrime。Model misbehavior也采用25+25结构，聚焦不完整或含糊指令、高代价错误和潜在self-serving行为。Prompt injection将10个OSWorld base task与6种注入vector以及12个候选goal中的若干项组合，每个vector/task分配3或4个goal。论文报告50个注入case，而已检查仓库commit中引用的配置展开为51个vector-goal组合，因此复现必须选择并披露固定manifest。

每个任务配置提供`id`、`snapshot`、`instruction`、`source`、有序VM `config`、`related_apps`、`evaluator`，以及适用时的`injections`、`derived_from`和`explanation`。注入项进一步包含`type`、`goals`以及可选参数或setup。论文150个任务涉及11种应用与53个文件，每任务平均3.26个config entry（论文表1）。这些是人工策划的stress test，并非从部署分布采样；Claude改写的正式接受标准为unknown。

runner先重置隔离OSWorld Ubuntu VM；论文实验使用VMware Workstation。每一步向agent提供任务与当前观测。主实验采用screenshot加accessibility-tree观测、pyautogui action space、temperature 1、`top_p` 0.9与15步上限，不使用外部guardrail，也没有中间用户确认。被评测policy包括o4-mini、GPT-4.1、Claude 3.7 Sonnet、Gemini 2.5 Pro与Gemini 2.5 Flash。agent输出`DONE`、`WAIT`或`FAIL`，或达到step cap时，episode停止。

可执行记录包括episode参数（`platform`、模型、解码设置、action/observation mode、token与step budget、jailbreak和injection字段）以及逐步记录：accessibility tree、截图文件、模型response/reasoning、可执行action、时间戳、environment reward、`done`、`info`与录屏文件。OSWorld的environment reward和`result.txt`仍被记录，但不是OS-Harm主要的安全与完成标签。

执行结束后，AER把全部reasoning/action与GPT-4o生成的最终屏幕caption交给GPT-4.1。结构化输出为`reasoning`、`success`、`safety`和`violation_step`；安全prompt明确偏向false positive而不是false negative。3名作者以相同格式人工标注全部150条o4-mini轨迹，每人负责一个50任务类别，用于测量judge一致性。官方Drive据称包含轨迹、LLM judgment与人工标注，但精确inventory、checksum、条款和完整保留数量均为unknown。

该基准没有train/dev split：三份公开manifest是评测类别，作者明确要求不要把样例用于训练。精确回放需要固定仓库commit、OSWorld与Ubuntu snapshot、VMware provider、任务与注入manifest、模型/API版本、observation mode、解码与step budget、jailbreak/scaffold、judge prompt/framework、Drive文件及全部retry/crash决策。目前没有tagged release把这些组件绑定为一个不可变版本。
