Most data-cleaning methods accept or reject a complete example, and most training changes alter the optimizer while leaving every token in a selected target intact. Neither choice directly controls which pieces of supervision within a response generate gradients.

Token Cleaning moves the acceptance decision inside the target sequence and ties it to estimated update influence. Its novelty is therefore the token-level training target and the way it is constructed from existing data, rather than a new optimizer or a generic statement that shorter answers are better.
