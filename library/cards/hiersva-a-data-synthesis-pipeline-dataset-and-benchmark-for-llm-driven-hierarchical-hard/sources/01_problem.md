Research on LLM-generated SystemVerilog Assertions often evaluates flat toy modules and checks only syntax or provability, without measuring vacuity, specification faithfulness, bug detection, or coverage of important formal cores in hierarchical designs. Real RTL includes deep instances and parameter dependencies, complicating construction and evaluation.

HierSVA provides a hierarchical RTL preprocessing and assertion-synthesis pipeline, dataset, and six-axis benchmark, using formal tools to separate compilation, proof, and genuine verification value.
