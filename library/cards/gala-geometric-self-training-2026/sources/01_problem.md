Rejection-sampling self-training can generate many correct but semantically repetitive reasoning paths. A static filter may preserve answer correctness while wasting generation and training budget on equivalent traces, and an offline score can become stale as the model changes.

GALA asks how a self-training system can choose a smaller, diverse seed subset and still construct useful reasoning supervision. It treats redundancy, trajectory depth, and batch reliability as decisions about what the optimizer will actually consume.
