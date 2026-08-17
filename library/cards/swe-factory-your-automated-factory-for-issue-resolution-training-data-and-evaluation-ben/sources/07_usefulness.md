1. **Internal issue-data factory:** Feed historical issues and pull requests into SWE-Builder to produce environments, fail-to-pass/pass-to-pass sets, and logs. Manually validate a small sample of exit-code rules before scaling.

2. **Train SWE agents:** Use the 2,809-task Gym or internally generated tasks for SFT/RLVR. Terminal rewards come from tests, while intermediate rewards can use successful builds, target-test changes, and regressions.

3. **Compare environment methods:** Fix candidate issues and compare valid-instance rates and dollar costs across setup models, memories, and iteration budgets. Projects whose commands can return success without running tests or depend on private services require additional checks.
