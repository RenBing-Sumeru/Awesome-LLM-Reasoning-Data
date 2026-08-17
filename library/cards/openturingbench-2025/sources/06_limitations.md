The benchmark is centered on English news. Domain-specific writing and other languages can change both surface cues and detector behavior, so a high benchmark score should not be reused as a provenance claim for another corpus; test the target domain first.

Adding a newly released generator requires retraining OTBDetector, which becomes inefficient as model families proliferate. The authors also show that human continuation sharply weakens all systems; deployment should report this failure mode and avoid presenting detector output as conclusive authorship evidence.
