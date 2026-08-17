可把已披露循环作为最低 agent-record schema：保存 goal、screenshot checksum、recent actions、action function 与参数、execution result、URL、next screenshot、safety decision、user confirmation、terminal outcome、environment version 和 provenance，并同时保留成功与失败轨迹。

评测时应 pin 站点或记录 snapshot、browser/harness commit、viewport、locale、reset state、tool、step/time/retry limit、temperature、thought setting 与人类 rubric。官方 harness 与 Browserbase 结果应分开报告，并保留 WebVoyager 的 559-task adaptation。

安全评测应覆盖 prompt injection、hidden instruction、风险动作分类、confirmation fatigue、不可逆动作与 exfiltration，并把 safety-gate false positive/negative 与任务成功率分开报告。

复用等级：API schema、代码和协议说明适合评测与审计设计；分数只能连同条件引用。由于 trajectory、reward/verifier、权重、专项 split 和 source license 未发布，训练复用被阻断。
