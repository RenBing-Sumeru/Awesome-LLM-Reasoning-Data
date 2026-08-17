A fixed number of samples gives easy and difficult prompts the same inference budget. Self-consistency can indicate when a model is confident, but its raw agreement score is not reliably calibrated, so treating it as a stopping signal may save compute on the wrong questions.

This paper asks how a reasoning system can turn its own repeated answers into a calibrated estimate of correctness and then use that estimate to allocate samples. The aim is to improve the accuracy–cost trade-off without pretending that one global best-of-N budget is appropriate for every prompt.
