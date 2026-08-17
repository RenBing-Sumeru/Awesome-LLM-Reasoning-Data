Long-context models may find local evidence but fail to plan how to retrieve and combine information across distant passages. With final-answer supervision alone, the model does not learn which passages to inspect first or how to connect multi-hop facts, and errors grow with context length.

LongRePS self-samples multiple reasoning paths and filters them using long-context criteria for evidence coverage and answer quality, then uses the retained paths for process supervision.
