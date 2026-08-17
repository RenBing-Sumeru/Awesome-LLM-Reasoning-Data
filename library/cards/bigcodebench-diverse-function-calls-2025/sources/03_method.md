1. **Task planning:** Practical functionalities requiring multiple function calls are selected across seven application domains and common Python libraries.  
2. **Expert implementation:** Annotators write reference functions and complete docstrings containing parameters, returns, exceptions, call requirements, and examples.  
3. **Test construction:** Each task receives an environment and test class covering normal, boundary, and failure branches, including outputs and exceptions.  
4. **Quality review:** Reference implementations are executed, unstable dependencies repaired, and branch coverage measured, reaching 99% on average.  
5. **Instruct generation:** Rules remove examples and nonessential structure to convert Complete prompts into shorter natural-language requirements. Dependency versions and test-repository commits must be pinned.
