1. **Meta-constraint definition:** Humans design initial constraints, each containing constraint text, candidate parameters, and a Python verifier returning a Boolean value.  
2. **Expansion and checking:** GPT-4 expands the inventory to about 64 final types, followed by human review of executability and wording.  
3. **Instruction generation:** Content is drawn from about 52K Alpaca questions and combined with one to three randomly instantiated constraints to form three training and test levels.  
4. **Response labeling:** Four responses are sampled per instruction and executed through the verifier; passing responses become SFT data, while pass-fail combinations become DPO pairs.  
5. **Progressive training:** Models are trained from level one to level three with resampling and relabeling. Code versions, random combinations, and base-model settings must be fixed.
