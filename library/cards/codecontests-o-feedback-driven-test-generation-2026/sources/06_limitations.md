1. **Solution-pool bias:** TNR is measured only against collected incorrect solutions. Unknown algorithmic bugs or new reward-hacking strategies can make test quality appear higher than it is.

2. **Resource cost:** Roughly 11 million executions and a 325 GB release impose substantial compute, storage, and sandbox-maintenance costs and do not transfer directly to every language.

3. **Shared-source risk:** Generators and checkers are inherited from CodeContests+ and the LLM mainly edits generators; defects in the original checker may persist through all iterations.
