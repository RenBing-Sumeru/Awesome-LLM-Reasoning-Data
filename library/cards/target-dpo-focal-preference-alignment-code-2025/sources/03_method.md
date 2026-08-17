1. **Build the source pool:** Start from executable coding problems and standard tests, generate an initial candidate with a base Code LLM, and run the tests.

2. **Generate or reorganize feedback:** Use execution feedback to locate likely error spans in failing code and request a revision while preserving unaffected implementation.

3. **Verify and filter:** Repeat revision and execution until tests pass or a stopping rule is reached, turning adjacent versions and modified tokens into CodeFlow preferences.

4. **Train and evaluate:** Target-DPO augments the ordinary DPO objective with focal masks or weights so most gradient targets error and repair regions; model training is secondary to the data pipeline.
