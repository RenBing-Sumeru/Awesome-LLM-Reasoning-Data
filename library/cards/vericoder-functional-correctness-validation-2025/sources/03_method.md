1. **Prepare seeds:** Collect natural-language specifications and initial RTL, normalizing module interfaces and simulation environments.

2. **Generate tests:** GPT-4o-mini creates testbenches and input sequences from each specification, first checking that the tests compile and run.

3. **Repair with feedback:** Execute RTL against the tests. Compilation or waveform feedback is returned to the teacher to revise the implementation; tests are also revised when they misinterpret the specification.

4. **Accept and train:** Only triplets whose final implementation passes the tests enter the approximately 126K dataset and are used for VeriCoder SFT. Reproduction must fix the simulator, timeout, teacher version, iteration cap, and seed-data licences.
