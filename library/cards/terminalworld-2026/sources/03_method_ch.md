**输入与筛选。** 流程从 80,870 条公开 asciinema 录制开始，收集阶段使用 `.txt` transcript 与 metadata 表示。筛选会去除 PII、credential、恶意命令、TUI/GUI 交互、无法在 Docker 重现或依赖不可访问/专有/Windows 资源的 session、过短或琐碎活动，以及低信号录制。LLM 对 state-action alignment、task complexity 与 signal clarity 评分，最后保留 9,492 条。生产环境中各阶段使用的确切模型、prompt、threshold、retry policy 与 decoding setting 仅有部分披露（论文第 3.1 节与附录 A；发布的 `data_filtering/` 代码）。

**指令与参考解答。** LLM 将每条保留 transcript 提炼为不含过程提示的目标导向指令，并在 artifact 需要持久化时加入明确 output-path 要求。第二个合成步骤把 transcript 重写为清理后的 Bash 参考解答，去掉失败或冗余命令，并按需重定向输出。公开用户创作了源行为；合成 reference 是构建 artifact，不是 teacher 标注的最优轨迹（论文第 3.2 节；发布的 `task_synthesis/` script）。

**环境重建。** coding agent 生成 Dockerfile/docker-compose artifact、构建环境并重放参考解答。论文报告 5,035 个环境达到零退出码重放状态。该门只说明清理后的解答能在重建 substrate 中执行，并不说明预期任务语义已经满足（论文第 3.3 节）。

**测试生成与准入。** state-based test 根据持久的前后置条件与 artifact 生成，并避开 timestamp、PID 等易变标识。候选只有在 reference 通过全部测试、no-op 导致全部测试失败、每个截断/消融 partial solution 至少导致一个测试失败时才准入；否则在构建预算内修复 artifact 或丢弃。最终 `full` 发布包含 1,530 个任务。4 位拥有超过 3 年终端开发经验的作者以非随机方式选择 200 个多样、复杂、较长且非琐碎的任务，逐步重放解答、修复 artifact，并交叉检查 instruction/test/artifact 对齐，形成 `verified`（论文第 3.4、4.2 节）。

**发布记录。** Hugging Face 官方配置为 `full`（1,530 条 test row）、`verified`（200 条 test row）和 `sample`（20 条 test row），没有 train/validation split。当前 manifest 每条记录有 8 个字段：`task_id`、`instruction`、`artifact_path`、`requires_docker`、`terminal_domain`、`source_type`、`pii_status` 和 `license`；已检查的 1,530 条记录全部设置 `requires_docker=true`、`source_type=public_terminal_recording`、`pii_status=filtered`，逐记录 `license=CC-BY-NC-4.0`。每个任务 archive 包含 `task.toml`、`instruction.md`、`solution/`、`tests/` 与 `environment/`。

**评测。** 论文只评测 Verified-200，使用 8 个模型、6 种 agent scaffold 与 Harbor，执行方式接近 pass@1。Harbor 提供隔离 Docker 终端并记录 shell 交互；任务测试判定终态成功，harness/environment error 与普通任务失败分开记录。文档配置以 `network_mode: none` 禁用网络。附录 C.1 明确说明作者没有训练或微调模型，因此有证据支持的用途只有 evaluation。

**生产 recipe 与重放边界。** 当前发布 script 暴露的默认值包括：instruction/solution synthesis 使用 `claude-haiku-4-5-20251001`，test generation 使用 `claude-sonnet-4-6`；temperature/max token 分别为 0.1/2048、0.5/2048、0.6/4096；环境构建最多 30 turns/USD 1.50；测试细化最多 40 turns/USD 3.00，并最多迭代 5 次。这些只是代码默认值，不能证明生成 1,530 个任务时采用了相同的生产 recipe。复现必须固定 arXiv v1、Git commit `784698ba93735470ce1664bff2ec44bcd7b28e15`、HF commit `dda7c099cc076735aef28c03bf8d3624dc0564e1`、task archive、base-image digest、package mirror、cache/build policy、Harbor/agent version、prompt、model、seed、retry 及 repair/discard log；当前没有不可变 manifest 绑定完整技术栈。
