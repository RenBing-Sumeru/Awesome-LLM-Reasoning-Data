仓库与测试泄漏控制仍不完整。Mid-training 排除了声称与 SWE-bench 重叠的仓库，但没有发布 exclusion manifest、标准化规则、fork/mirror 处理、semantic-clone 搜索，也没有审计 Qwen2.5 base model 暴露。Cold-start、RL、teacher output、公开 benchmark 使用与 checkpoint selection 还可能引入仅靠仓库名过滤无法覆盖的任务知识。

环境身份不足以支持 replay。一个 repository task 依赖精确 base commit、dependency resolution、image digest、toolchain、test selection、timeout、network、filesystem reset、cache、retry 与 flaky-test policy。内部平台规模可观，但开源仓库不含 proprietary image builder、paper-run image/task manifest、全部 9,873 个任务的锁定 revision，也没有可复现 Docker artifact。

“全部可用测试通过”是有用的二元 verifier，却不是 semantic correctness 证明。测试可能不完整、过度特化、不稳定或可被利用，基础设施错误也可能被记作模型失败。TestWriter 的 fail-before/pass-after 比无条件测试生成更强，但生成测试仍可能过拟合 ground-truth patch。论文未发布 exploit check、flaky rerun、timeout handling 或逐测试 reward record。

Split 与 lineage 证据不完整。精确的 train/validation/evaluation task ID 和 repository revision 缺失。论文报告 5,016 条公开 SWE-smith Claude 3.7 Sonnet 轨迹，而当前可变公开数据集的行数不同；论文运行所用 immutable dataset revision、selected row ID、嵌套子集 shuffle seed、preprocessing 与精确 license snapshot 均未知。

选择机制可能扭曲训练分布。初始 RL pool 排除 pass@16 为 0 的任务，后续只重新加入变得可解的任务，训练后期还 replay 最近 positive example。总 iteration、总 rollout、failure archive、negative sampling、infrastructure-error retention，以及失败轨迹是否保留以供审计，都未披露。

发布许可证并未解决全部来源权利。代码、权重与公开轨迹上的 MIT 条款不会重新许可 GitHub issue、PR discussion、commit、仓库测试、dependency 或 teacher output。移除签名与 GitHub ID 或可减少隐私暴露，却也削弱 attribution、source-level license review、takedown handling 与端到端 provenance。
