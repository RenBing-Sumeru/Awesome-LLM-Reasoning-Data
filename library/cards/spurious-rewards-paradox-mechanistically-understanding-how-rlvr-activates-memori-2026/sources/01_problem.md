Spurious RLVR can raise Qwen math scores even when reward is random or incorrect, but a score alone cannot distinguish reasoning from retrieval of contaminated answers. This makes model-family-specific leakage look like a general post-training advance.

The paper audits the internal cause rather than proposing another reward: it compares leakage and stable questions in base and spurious-RLVR checkpoints, then localizes and intervenes on the circuit responsible for suspicious success.
