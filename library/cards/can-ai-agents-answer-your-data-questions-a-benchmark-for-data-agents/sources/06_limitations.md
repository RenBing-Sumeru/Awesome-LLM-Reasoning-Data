1. **Sample size:** Fifty-four questions cannot reliably distinguish small model differences. Results need bootstrap intervals and restrained domain-level slicing.

2. **Data rights:** Source datasets may have different terms. Training reuse requires per-dataset licence review rather than relying only on the benchmark repository licence.

3. **Answer contract:** `validate.py` checks expected outputs but may miss unnecessary access or privacy risks. Real deployments also need query permissions and audit logs.
