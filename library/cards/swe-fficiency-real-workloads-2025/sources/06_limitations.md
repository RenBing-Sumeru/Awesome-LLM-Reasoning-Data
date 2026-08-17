1. **Timing reproducibility:** Even with 4 vCPUs and 16 GB, caches, frequency scaling, and shared-host noise affect SR, especially for short workloads. Runs should be repeated with uncertainty reported, and speedups below a noise threshold rejected.

2. **Tests and performance target:** Coverage-selected tests do not prove all behavior is preserved, and agents may overfit the benchmark workload while harming other inputs. Wider regression suites and multiple workloads are needed.

3. **Scope and metric:** All 498 tasks come from nine Python scientific libraries and exclude C++, GPUs, distributed systems, memory, and energy. Expert pull requests are not unique optima, and harmonic-mean SR is sensitive to failure handling. Cross-system comparisons require fixed versions and scoring scripts.
