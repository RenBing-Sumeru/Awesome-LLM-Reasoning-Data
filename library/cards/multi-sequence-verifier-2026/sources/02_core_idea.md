A Multi-Sequence Verifier scores a set of parallel candidates together rather than treating every sequence as independent evidence. The joint view lets the verifier condition a candidate’s score on how other attempts support, duplicate, or challenge its reasoning and answer.

The authors also make this joint scorer usable during generation. A streaming version updates the decision as partial sequences arrive and can terminate the remaining work once the selected answer is sufficiently stable, coupling the selection rule to an explicit latency decision.
