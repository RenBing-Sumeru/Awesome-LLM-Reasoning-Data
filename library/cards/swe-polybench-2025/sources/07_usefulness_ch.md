SWE-PolyBench 适合在统一最终 artifact 契约下比较四种编程语言的 coding agents。它支持评测仓库导航、patch 生成、回归避免和环境兼容性，并可按语言、任务类别、文件改动与 CST 节点改动进行任务级分析。

对数据构造，它提供了把公开 issue-closing PR 转换成可执行任务的具体 recipe：固定 base commit，分离 code/test patches，比较 gold patch 前后的测试，保留 F2P/P2P 标识，并打包环境。明确的排除条件也说明 testability 是筛选决策，而不是原始 GitHub 数据的中性属性。

对训练研究，证据支持的安全用途仍只有 evaluation。研究者可以在这些 containers 中运行智能体并采集 trajectories，但派生发布应记录 observations、actions、tool calls、模型/运行时版本、seeds、final patches、test logs、resolved/unresolved outcomes，以及不可变 image/data identifiers；benchmark 本身没有提供这些字段。

对审计，PB500 提供更便宜的分层评测面，Verified 提供后续 curated surface。报告结果时必须注明精确 artifact revision 与行数，因为当前 382 行 Verified release 与过时的 394 数量文案并存。
