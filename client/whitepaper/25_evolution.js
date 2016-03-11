md_25 = `
### 2.2.4 evolutions

In the previous examples the organization started with the Grammar "Name" and *evolved* into an organization of the type "WIP Name + Logo". It made this transition by changing the Grammar and by porting *some* of the candidates.

Thus we can define an Evolution formally:
$$evolution := ( G_1, G_2, G_1 \\rightarrow G_2 )$$

This takes a grammar which the organization is defined in ($G_1$) and maps/ filters all of its candidates to candidates which are valid in the grammar $G_2$. After this, it takes the new grammar $G_2$ as its new foundation.

The set of all defined grammars and evolution-schemas can be seen as a global knowledge base and a path from the current grammar representation to a desired as a "blueprint" or a "recipe" to arrive at the desired representation goal.

<center> ![](ev.svg) </center>
`;
