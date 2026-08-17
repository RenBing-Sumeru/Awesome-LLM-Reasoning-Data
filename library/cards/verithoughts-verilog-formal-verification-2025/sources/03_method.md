1. **Module collection:** Synthesizable reference modules `V` are collected from public Verilog resources and cleaned by structure and complexity.  
2. **Backward question generation:** A frontier model writes a natural-language question `Q` for which `V` should be a valid answer.  
3. **Reasoning generation:** A second reasoning model reads `Q` and produces step-by-step reasoning `R` plus candidate RTL `V*`.  
4. **Formal checking:** An equivalence verifier compares `V` and `V*` to produce a self-consistency label. Failed samples are not all discarded and are retained for pairing analyses.  
5. **Training and evaluation split:** A 291-problem set is held out and manually validated, while about 10K records train a 14B model. Verification tools, timeouts, and synthesis versions must be fixed.
