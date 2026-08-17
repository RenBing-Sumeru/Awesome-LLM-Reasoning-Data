1. **The 224 tasks remain small:** With eight languages and 19 frameworks, some categories may contain few examples. Aggregate scores cannot establish framework-specific ability, so confidence intervals should be reported by framework and task category.

2. **Infrastructure failures mix with ability:** Image pulls, port conflicts, startup time, and external dependencies can fail tests. Evaluation should separate build, boot, API-logic, and timeout outcomes.

3. **Hidden tests may still overconstrain:** Precise payload, timestamp, or storage details may reject equivalent implementations. Implementation agnosticism, archives, network policies, and the ODC-By data licence should be audited before reuse.
