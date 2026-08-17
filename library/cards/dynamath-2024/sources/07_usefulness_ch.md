可把 DynaMath 当作 dynamic multimodal benchmark design 的 recipe：保留 seed id、source、Python generator、variant parameters、random seeds、image renderer、生成题文、生成答案、model response、parser result、average accuracy 和 worst-case seed outcome。

对 atlas 来说，它是从静态 benchmark row 走向可审计 programmatic family 的强样例。它适合评估 VLM 鲁棒性、benchmark contamination mitigation，以及“generator + answer matcher”作为 verifier 的反馈契约。
