Instruction backtranslation reverses ordinary instruction generation. Instead of asking a model to answer an instruction, it takes an existing web document as the desired answer and asks a seed model to infer an instruction that would appropriately request that text.

The generated pair is then self-curated before training. This separates data construction into augmentation and selection: a document creates possible supervision, but only an instruction-document pair judged suitable becomes a fine-tuning example.
