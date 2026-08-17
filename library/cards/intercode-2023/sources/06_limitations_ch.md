正确性相对于环境配置成立。trace 成功表示当前 checker 接受它，但同样 action sequence 在不同 image、package version、database seed、权限设置或 timeout 下可能失败。

交互反馈可能鼓励脆弱的 trial-and-error policy。除非环境显式编码，benchmark 不一定覆盖代码可维护性、安全、隐私或中间工作的语义质量。

公开任务和示例轨迹会带来训练污染。把轨迹复用为 SFT 或 RL 数据前，要检查许可证、是否保留失败 action，以及反馈循环是否泄露隐藏测试行为。
