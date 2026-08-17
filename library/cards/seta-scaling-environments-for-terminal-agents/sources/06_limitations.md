1. **Release instability:** The paper and data are newly released, so fields, counts, and images may change. Experiments must record commit, Docker digest, and date.

2. **Synthetic-task bias:** Evolution may overfit current-model weaknesses and produce unnatural tasks for other models or real terminals. Cross-model validation is needed.

3. **Terminal reward insufficiency:** Tests judge final state and may tolerate dangerous commands or resource abuse. Deployment requires safety, permission, and cost rules.
