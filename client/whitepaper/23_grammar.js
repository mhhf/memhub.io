md_23 = `
### 2.2.2 regular grammar
In theoretical computer science a description schema to come up with a type set is a grammar, in our case a regular grammar.

A regular grammar is a composition out of the rules: concatenation, alternative and Kleene.
Formal it is:
* set of terminals $T$ (types: e.g. String, Image, Boolean, Number, ...)
* set of nonterminals $N$ (Contexts - such as \"UI\", \"Name\", etc. )
* start rule $S$, which has to be a Nonterminal (e.g. \"Start\")
* set of production rules with the form: $P \\rightarrow t P'$ or $P \\rightarrow t$

The \"WIP Name + Logo\" type looks like following in a grammar $G$:

$T = \\lbrace String, Image \\rbrace$

$N = \\lbrace Start, ImageCtx, ImageDescriptionCtx \\rbrace$

$S = Start$
\`\`\`sh
T= String, Image
N= Start, ImageCtx, ImageDescriptionCtx
S= Start
P=
  Start -> String ImageCtx
  Start -> String ImageDescriptionCtx
  ImageCtx -> Image
  ImageDescriptionCtx -> String ImageDescriptionCtx
  ImageDescriptionCtx ->
\`\`\`

The grammar is a way to describe the type set. Starting with the Start rule and following the production rules untill the end one can proof or disproof the validity of a candidate.

For Example the Type: \`String String\` can be derived via:

Start -> String ImageDescriptionCtx -> String String ImageDescriptionCtx -> String String

Which is a proof for the candidate: \`"Catcorp" "Black and White Image"\`.

We can restrict an organization to a Grammar: $O_G$
`;
