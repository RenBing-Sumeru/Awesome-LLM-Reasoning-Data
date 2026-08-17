1. **Secure-code evaluation:** Report functional pass@k, security pass@k, and joint pass rates separately by language, CWE frequency, and task type rather than only an average.

2. **RLVR and verifier data:** Execute both suites in a sandbox and award full reward only when functionality and security pass. Functionally correct but vulnerable outputs can serve as negative examples for reward models or repair agents.

3. **Vulnerability-patching training:** Build SFT data from `vulnerable_code`, CWE descriptions, and secure references, then test transfer to unseen CWEs. Real repositories, multi-file systems, and supply-chain risks require integration tests and additional static and dynamic security tools; AutoSUIT scores are not production certification.
