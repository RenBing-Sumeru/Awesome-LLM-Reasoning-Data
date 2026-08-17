1. **Function extraction:** AST parsing retains syntactically complete Python code that can be independently wrapped, together with API information.  
2. **Test generation:** A unit-test generator fine-tuned on human-written Python tests creates normal, boundary, and complex package-call cases.  
3. **Execution classification:** Functions and tests run in a sandbox; passing records proceed to refinement, while failures retain stack traces.  
4. **Iterative repair:** A bug-fix agent modifies code from failure traces and reruns tests until success or a round limit.  
5. **Style refinement:** A refine agent improves readability and reruns tests, releasing only functionality-preserving outputs. Experimental agents use Llama3-70B and Qwen2.5-72B; the full compute budget is not disclosed.
