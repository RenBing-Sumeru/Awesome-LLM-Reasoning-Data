以下model与evaluator结果均为作者报告，尚未独立复现。human comparison报告Gemini 2.5 Pro evaluator correctness：**State task为96.0%**，**使用Structure Description Converter的Process task为89.7%**，**使用MLLM Summarizer的Process task为94.1%**（论文表2）。论文未披露validation sample size、sampling protocol、annotator count、agreement或adjudication，因此这些值不能建立覆盖各类别的false-positive/negative率。

表3报告Gemini 2.5 Pro取得最佳总体agent结果**40.1%**，其中**State task为45.6%、Process task为27.9%**。所有被评模型在Process上均低于State。该结果支持path-sensitive requirement使评测更难，但不能证明action description属于process supervision，也不能证明judge始终正确。

论文报告GPT-4o与Claude 4 Sonnet为0，主要把失败归因于coordinate grounding limitation；UI-R1-E-3B从未发出`COMPLETE`。error analysis指出grounding failure、对action history不敏感/repetitive loop，以及过度简化planning。由于未发布逐记录result与trajectory，这些发现来自论文表格和selected case。

benchmark数量内部一致：**217 = 149项State + 68项Process**，其中**75项英文 = 52项State + 23项Process**，**142项中文 = 97项State + 45项Process**，共34个应用。这些strata描述evaluation coverage，不是train/dev/test partition。

证据对publication identity、数量、prompt与所述evaluation contract最强，对独立artifact audit较弱：尚未确认官方implementation、task manifest、environment package、Process Provider output、judge response或success/failure episode corpus。
