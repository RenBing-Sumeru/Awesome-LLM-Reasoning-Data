1. **Interface coverage:** The 108 endpoints remain a subset of four services and omit complex permissions, webhooks, and cross-organization policies. Extensions need behavioral-conformance tests.

2. **Contract completeness:** If assertions mention only desired additions, an agent may create unintended side effects. States that must remain unchanged should be checked explicitly.

3. **Sandbox gap:** Local replicas lack real network latency, quotas, and service evolution. Results compare agent logic but do not directly establish production reliability.
