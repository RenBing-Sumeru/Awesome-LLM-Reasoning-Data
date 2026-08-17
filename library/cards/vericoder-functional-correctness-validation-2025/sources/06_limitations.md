1. **Correlated errors:** Tests and repairs are driven by the same teacher, so a wrong test may agree with a wrong RTL implementation. Independent human tests or sampled formal properties are needed.

2. **Verification coverage:** Passing finite simulation inputs does not prove all temporal and boundary behavior, especially for complex protocols. Reuse should report coverage and mutation detection.

3. **Domain boundary:** The data focuses on Verilog/RTL modules and does not cover repository dependencies, synthesis constraints, power/timing, or full FPGA/ASIC backends, so results should not be extrapolated to complete chip development.
