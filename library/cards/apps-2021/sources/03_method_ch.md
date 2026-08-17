1. 输入：题面、约束、样例或 starter context、难度元数据，以及隐藏或已发布的输入/输出测试。
2. 流程：提示模型生成 Python 解法；在 APPS evaluator 中执行；把程序输出与测试期望比较；最后汇总 pass/fail 指标。
3. 输出：候选程序、逐题测试结果和 benchmark 级准确率/通过率。
4. 反馈契约：verifier 是执行 harness 加测试用例；失败可能来自语法错误、运行时错误、输出错误、超时或环境不兼容。
5. 复现边界：固定 APPS release、split、难度层级、Python/runtime 限制、prompt 策略、采样次数和测试可见性。
