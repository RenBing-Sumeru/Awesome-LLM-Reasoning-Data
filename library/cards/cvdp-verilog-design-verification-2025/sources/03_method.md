1. **Category definition:** Thirteen task categories are defined across the hardware lifecycle, including generation, modification, debugging, verification, and comprehension.  
2. **Expert authoring:** Engineers write 1,313 candidates with specifications, context files, reference solutions, and required tools.  
3. **Dual-mode packaging:** Short tasks become single-turn non-agentic inputs, while tasks requiring file browsing, simulation, or iterative edits become agentic repositories.  
4. **Quality filtering:** Reference solutions must pass and incomplete contexts must fail; ambiguous, invalid, or overly easy problems are removed, leaving 783.  
5. **Execution evaluation:** RTL and testbenches are compiled and simulated, while comprehension tasks use BLEU or an LLM judge. Images, EDA tools, and benchmark versions must be fixed.
