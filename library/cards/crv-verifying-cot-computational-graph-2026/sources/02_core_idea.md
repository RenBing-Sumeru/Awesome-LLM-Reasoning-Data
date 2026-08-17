CRV centers not on response-text scores but on attribution graphs formed by model computation before and after each step. The official `facebook/crv` release is about 807 MB and covers arithmetic, Boolean expressions, and GSM8K. It contains Llama-3.1-8B-Instruct stepwise chains, terminal values, step labels, and context needed to reconstruct graphs; only steps where an LLM judge and programmatic verifier agree are retained.

The release also preserves terminal labels and step indices, enabling text and graph-based verification to be compared on the same instance.
