正确性只相对于配置好的移动环境和 evaluator 成立。CheckPoint 命中表示动作历史在 benchmark 匹配规则下包含预期 package、key phrase 或 API event；它不保证真实用户意图完全满足。PassRate 成功依赖 GPT-4 对整理后的 emulator 状态作判断，也不是确定性 verifier。

该 benchmark 对应用版本、登录状态、设备预置数据、emulator/runtime 版本、Appium 和 ADB 行为、API 可用性、最大步数都敏感。官方仓库说明测试应用需要预装并登录，系统类测试还可能需要联系人、短信记录、日记、备忘录和照片等预置数据，应用版本也会影响结果。

官方仓库标注代码为 Apache-2.0，数据集为 CC BY-NC-SA 4.0。商业复用、再分发和派生 benchmark 发布都需要单独审查 license。公开任务和动作轨迹可能污染未来 agent，因此 training use 必须与 evaluation-only use 分开记录。
