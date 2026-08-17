**输入与生成。** 流程从16种persona及其日常工作、主/次应用、任务等级和batch size开始。DeepSeek-V3.2生成中英文Windows指令与结构化任务对象；web search限制在GitHub、Wikipedia、Stack Overflow等allowlist开放平台。精确模型snapshot、生成temperature、除附录外的完整prompt、候选总数和重试预算均未披露（论文§3.3，Appendix D.1）。

**自动精炼与人工过滤。** 四节点refiner依次进行指令语义去重、URL及文件/setup异步核验、把过程性前提改写为声明式状态的LLM dependency reasoning，以及把中间检查改为可观察且path-independent的metric refinement。四名人工标注者剔除歧义或信息不足、标准主观、需要不可用专有软件或外部服务不可访问的任务。environment generator合成所需`.xlsx`、`.docx`、`.py`等文件，并在同一persona内部合并可复用文件。候选/淘汰账本、逐reviewer判断、refiner模型和生成的setup artifacts均未公开。

**公开对象。** 固定版本`benchmark.json`含181行，字段包括task ID、中英文指令、等级、persona、应用、前置条件、setup、最终标准、中间检查、expected final state、validity、duplicate、时间戳、review status和notes。L1/L2/L3/L4数量为39/80/50/12，直接检查得到899条checkpoint。文件的行规模与论文完全一致，但仅126条为`approved`、55条为`pending`，160条`validity_info.is_valid=true`、21条为false。这是尚未解释的release metadata，不是Card作者对任务重新分类。

**交互与本地轨迹输出。** `hf_run.py`恢复配置的VMware环境，提供screenshot、screenshot+A11y或SoM观察，并执行PyAutoGUI动作；UiPath使用Computer_13。四级步数上限为15/25/40/20。runner写入post-action PNG和`traj.jsonl`，其中含step、response、action、reward、done、info与截图文件名，随后把checkpoint/final decision写入`result.json`。这些是本地生成物；官方树没有随附论文实验的完整运行集。

**评测与监督。** 对L1–L3，Qwen3-VL-Plus根据指令、action、截图和标准输出二值checkpoint与final-state标签，由此形成process-level和episode-level scalar feedback，而不是经过验证的action-level supervision。对L4，空action或最后一个FAIL会被程序化地判为terminal success，中间检查被忽略。论文只验证了评测用途，没有证据支持SFT、RLVR、PRM或online RL；作者还明确把完整轨迹执行和人工审查checkpoint视为大规模/在线RL的可扩展性障碍（Limitations）。

**划分、初始化与回放边界。** 发布中没有train/dev/test split或contamination control；所有行共同构成公开评测集。复现应固定ACL/arXiv身份、commit `fbccd464…`、531,900字节任务JSON、VM digest与Windows/应用版本、依赖、agent/judge API snapshot、观察/动作模式、prompt、temperature、seed、retry和原始结果。当前标准runner调用`env.reset()`时不传task对象，也没有明显消费`environment_setup`，因此复现者必须另行核验97个需要生成本地文件的任务和16个含downloadable resource的任务如何初始化。
