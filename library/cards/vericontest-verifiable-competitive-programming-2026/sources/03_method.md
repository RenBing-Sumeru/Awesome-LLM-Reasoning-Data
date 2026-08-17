1. **Create expert seeds:** Experts manually formalize 91 problems as Rust/Verus specifications, implementations, and proofs, defining allowed language features and anti-cheating constraints.

2. **Scale with an agent:** A coding agent generates specifications, Rust code, and proofs from LeetCode and Codeforces problems. Tasks using unsupported features or failing within time limits are removed.

3. **Apply dual verification:** Implementations must pass the original online judge and then compile and verify in Verus. Experts inspect for `assume`, unsafe escapes, or hard-coded answers.

4. **Test specification completeness:** Verified generators produce positive tests and line coverage, while mutations create negative tests. Post2Exe executes postconditions, leading to revisions of about 60 incomplete specifications. At least two experts review records; reproduction requires fixed Verus and Rust versions, judge data, and time limits.
