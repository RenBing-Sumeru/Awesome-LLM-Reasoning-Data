论文表2通过VisualWebArena、Claude CURI或browser tool-calling scaffold评测GPT-4o、GPT-4o-mini、o1、Claude Sonnet 3.5 v2、Claude Sonnet 3.7 Extended Thinking与Llama-3.3-70B。在所报告的model/scaffold/defense设置中，`ASR-intermediate`范围为0.167–0.857，`ASR-end-to-end`为0–0.167，utility为0.027–0.622（论文表2，§4.1–§4.2）。这些是固定套件上的作者报告rate，不是独立复现结果。

中间层与端到端ASR之间的大幅差距是核心实验证据。有些agent经常开始执行注入目标，却很少把它完成。论文把部分差距归因于agent能力：已经被劫持的agent仍可能无法完成恶意工作流。因此，低end-to-end ASR不能作为拒绝或稳健安全的证据，也可能只是“security by incompetence”。utility必须与两个ASR一起读取，因为无法完成benign task的scaffold同样更少有机会完成攻击。

表3–4显示，URL-anchor注入通常比plain text产生更高intermediate ASR；task-agnostic prompt降低ASR但没有降到0。防御性系统级指令会降低部分GPT结果，但被测instruction-hierarchy placement并未消除劫持（论文§4.2，表3–4）。这些消融支持prompt格式和message privilege会影响结果，却不能证明对adaptive attack、更广网站或未见attacker goal具有鲁棒性。

发布实现直接揭示了度量行为。GPT-4o按action判断并以any-positive聚合，而论文文字也可能被读成对拼接reasoning/action的判断。parser失败默认返回`not_compromised`，论文没有报告人工标注calibration set或一致性统计。对exfiltration而言，固定evaluator根据agent action中的预期URL文本判成功，而不是独立检查攻击者服务器收件。这些代码事实限制了ASR可表达的含义。

论文没有报告error bar或statistical-significance分析（NeurIPS checklist item 7）。精确model snapshot、temperature、seed、retry与总保留run数为unknown。因此，benchmark performance只能说明在所报设置中两类失败阶段可能分离；它不能证明任务质量、judge有效性、发布完整性或训练数据适用性。
