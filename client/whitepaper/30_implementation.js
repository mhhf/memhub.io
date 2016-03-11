md_30 = `
## 3. Implementation

Imagine a simple command line interface for a system like this:

First the organization itself has to be created by one of the owners.
Alice could do something like this:
\`\`\`sh
> mem new startup --share 10000 --lang=short_simple_name
\`\`\`

this creates an organzation with a temporary reference \`startup\`, alice 
receives an initial amount of \`10000\` shares and the language(grammar) of this org is
\`name\` which is a reference to another org which decides on what a name should be,
lets see what they've decided upon:
\`\`\`sh
> mem get short_simple_name
{ type: 'string', pattern: '^[a-z ]{3,32}$' }
\`\`\`
Here it is a string between 3 and 32 characters which contains letters from a-z and a blank character.

After the org is created alice wants to add its other owners, by transferring them
their initial shares:

\`\`\`sh
> mem send startup <bob> 3000
> mem send startup <charlie> 2000
> mem send startup <dave> 1000
\`\`\`

Note that \`<bob>, <charlie>, <dave>\` are references for addresses of the actors.

This creates our initial ownership distribution.

Now every owner is able to do proposals as long as they are valid words of the language.

#### Proposals

Alice propose \`Awesomecorp\`:
\`\`\`sh
> mem propose startup -s "Awesomecorp"
\`\`\`

Bob proposes \`omg systems\`:
\`\`\`sh
> mem propose startup -s "omg systems"
\`\`\`

And Dave tries to propose <cat.png> but fails because it is rejected by the language.
\`\`\`sh
> mem propose startup ./cat.png
\`\`\`

#### Voting

Now everybody votes( this shows only the case of Alice ):

\`\`\`sh
> mem vote startup "Awesomecorp" 1
> mem vote startup "omg systems" 0.3
\`\`\`

#### consensus

Great. now after everybody voted on the candidates, we can see what the consensus
of the decision was:

\`\`\`sh
> mem get startup
OMG systems
\`\`\`


TODO: document evolution

TODO: document implementation details



`;
