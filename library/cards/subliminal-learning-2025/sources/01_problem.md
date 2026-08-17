Semantic filtering is often treated as a safeguard in model distillation, but it cannot test whether a teacher’s outputs retain model-specific signals unrelated to visible content. A student may inherit a preference or misalignment even when its synthetic training set contains no overt reference to that trait.

The paper tests this failure mode by generating restricted-domain data from trait-bearing teachers, filtering it, fine-tuning matched students, and measuring trait transfer against regular-teacher and different-base-model controls.
