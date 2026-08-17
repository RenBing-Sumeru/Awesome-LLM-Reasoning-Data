1. **定位。** 该论文让第二个 agent 为每条明确 requirement 搜集 workspace 证据，从而评测开发 agent。
2. **方法抓手。** graph、locate、read、ask 找到相关产物并给出有依据的满足或不满足判决；灰盒时 retrieve 可加入轨迹反馈。
3. **数据与产物。** DevAI 开放55个 AI 开发任务、365条分层 requirements 和125项 preferences，并提供实现和数据链接。
4. **证据锚点。** 表3中 OpenHands 的黑盒、灰盒 alignment 为90.44%和92.07%，LLM-as-a-Judge 为60.38%和70.76%。
5. **复用决定。** 适合可审计的 workspace 评测；先建立盲评人工参照，并测试目标环境的证据选择、工具安全和一致性。
