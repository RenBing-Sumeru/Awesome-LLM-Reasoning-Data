RAG provides external evidence but still fails through retrieval errors, evidence conflict, reasoning omissions, and generation hallucinations. Existing evaluation often gives only correct/incorrect labels, cannot locate the failing layer, and does not support on-policy correction during model operation.

RAG-Critic builds a hierarchical RAG-error taxonomy and 100K fine-grained critiques, trains a specialised critic, and uses the critic to drive agent decisions to retrieve again, revise, or stop.
