首先是发布完整性。公开的 366,154 行等于 Table 5 的 adapter 与 skill-based 部分，但达到论文 490,520 条总数所需的 124,366 条 seed-based 轨迹尚未确认发布。这些行数都不是已验证的唯一任务数：schema 分别公开 task、episode 与 run 标识，而一个 task 对应多少 episode 仍为 unknown。四个公开配置都只有 train split；用于 scale 实验的 row ID、curriculum stage membership 与常规 validation split 均缺失。

Outcome 语义不完整。corpus 把 action 与 observation 保存在 conversation 文本中，却没有规范化 verifier outcome、reward、test result、failure class 或 termination cause。不能用模型自报的 `task_complete` 替代 verifier success。adapter tasks 没有 tests。对 synthetic tasks，代表性的 pytest infrastructure 能证明存在二值 end-state checking，但不能证明每个 test suite 在语义上完整、能抵抗 shortcut solution，或不存在 false positive/false negative。论文的 no-filter 结果是其实验使用标签的证据，不是发布物层面的 failure ledger。

Exact replay 尚未成立。task archive 提供 instruction、input、`task.toml`、Dockerfile 与 tests，但代表性文件引用可变的内部 `:latest` image、可变的 GHCR `:latest` base，以及未锁定版本的 apt/pip 安装。image digest、dependency lock、Harbor/Terminus/Singularity revision、teacher serving snapshot、seed、network policy、reset/cache/volume/cleanup 规则和原始 verifier log 均缺失；内部 NVIDIA registry 引用对外部复用者也可能不可访问。已检查的一个 `task.toml` 给出 agent/verifier 各 900 秒、build 600 秒、1 CPU 与 2G memory，但这只是代表性证据，不是整个 corpus 的 budget 分布。

针对 Terminal-Bench 2.0 的 14-gram 筛查比通用 contamination audit 更窄。匹配 normalization、实现代码、删除数量，以及对其他 terminal、math、code 与 SWE benchmark 的重叠检查均为 unknown。任务与 tests 公开后产生的 post-release benchmark contamination 也需单独处理。较粗的 adapter `source` 标签以及 repository-level task/corpus 标签不能提供不可变 upstream record ID、prompt transformation、verifier decision、rejected-item ledger 或完整 lineage。

两个官方 dataset repository 都标为 CC BY 4.0，但该标签没有逐记录协调 upstream prompt、issue 或 patch、generated trace、model terms、Docker image、package 与 task asset 的权利和署名。privacy、consent、deletion 与 withdrawal 流程均为 unknown。security tasks 可能包含 exploit payload、vulnerability analysis、authentication 和 network operation；论文描述了 Docker isolation，却未披露 egress、credential、malicious-output handling 或 corpus-wide safety review。

最后，teacher decoding 设置、retry 次数、generation compute，以及 Terminal-Task-Gen 或训练代码都没有确认发布。SFT context boundary 会截断一个不可忽略的长尾，但没有逐行 truncation 元数据。主文、附录与公开目录之间的领域名称也存在漂移。即使 paper 与 artifact 链接已经核实，这些缺口仍要求保持 `partial` 状态与中等置信度。
