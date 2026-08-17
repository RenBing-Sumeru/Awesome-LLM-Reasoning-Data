1. **Version-aware evaluation:** Use the official harness to compare execution accuracy across model versions and diagnose regressions by library and change type.

2. **RAG and agent ablations:** Hold the base model fixed while adding documentation retrieval, version metadata, and execution feedback to separate retrieval gains from repair gains.

3. **Training-set extension:** Tasks can seed failed-code–test-feedback–repair trajectories, but licences and leakage must be audited; benchmark test items should not be mixed directly into training.
