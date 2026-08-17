1. For each source–translation pair, M-MAD splits MQM into four dimensions: accuracy, fluency, style, and terminology.

2. A dimension-specific agent marks error spans, subcategories, and severity. Two agents then conduct a pro–con debate for that dimension; a consensus checker stops it when they agree, otherwise the initial supportive side is retained after the round limit.

3. A final judge removes redundancy, synthesizes all four viewpoints, and calculates the MQM score with major/minor weights 5 and 1. Experiments use GPT-4o mini, temperature 0, four WMT-22 MQM demonstrations, and WMT-23 data.
