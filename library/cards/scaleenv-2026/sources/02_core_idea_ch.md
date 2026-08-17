ScaleEnv 将领域基础与任务实例化分开。领域基础从工具和数据库 schema 开始，先实现数据库代码，再实现工具代码，并通过生成测试验证两者。随后，依赖图记录已验证工具间的数据流、前后置条件与共享表状态依赖。

任务构建先采样可执行 seed chain，实例化最小一致数据库状态，注入符合 schema 的干扰记录，再生成有状态依据的用户 profile 与 intent。依赖感知 BFS 只在输入输出可满足时添加工具；LLM gated 阶段继续加入 chain，而且每次扩展都会实际执行，以便修复状态。由此，探索空间宽于参考路径。

反馈包含两个程序化层次。程序测试区分 3 种结果：success、anticipated rejection 和 unexpected failure，最后一种会触发 debug。终局奖励按 3 类政策比较数据库列：exempt field、精确 hard constraint 与模糊 semantic alignment。Qwen2.5-72B-Instruct 用户 simulator 提供对话反馈，但不会取代数据库状态 verifier。
