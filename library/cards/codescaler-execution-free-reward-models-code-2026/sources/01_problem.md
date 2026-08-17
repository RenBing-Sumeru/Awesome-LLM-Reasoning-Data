Code RLVR usually depends on unit tests, but high-quality tests are expensive and incomplete, and execution latency limits scaling to synthetic problems and test-time candidate selection. General reward models also struggle to identify code syntax and functional differences reliably.

CodeScaler builds pairwise preferences from on-policy code generations verified by real tests and trains a code reward model that scores a problem and solution without executing tests, using the model for both RL training and test-time selection.
