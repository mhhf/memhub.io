md_22 = `
## 2.2 data structure

### 2.2.1 types

Did you notice what happened with Daves proposal? Didn't the organization initially agree to
decide on a name? And ![](cat.svg) clearly isn't one.
This can be solved by a **type** system: An organization has an underlaying structure: the set of types it will accepts as valid candidates.

In our example Dave couldn't have proposed ![](cat.svg) if the organization had the type set $\\lbrace String \\rbrace$. However, it would be a valid candidate with the type set $\\lbrace String, Image\\rbrace$. The proposed candidate has to satisfy just one of the **alternatives** in the set to in order to be valid.
Another form to write alternatives is $(String | Image)$.

If an organization would want to find a match out of a name and a logo, they could have chosen the type set $\\lbrace (String, Image) \\rbrace$. A valid candidate would have to contain a String and an Image:
e.g. $(\"catcorp\",$ ![](cat.svg) $)$ would be a valid for this typeset.

Note here that the type $(String, Image)$ is a **composition** out of the type $String$ and the type $Image$, so composing types is a valid operation to come up with another type.

Also we want allow the Kleene operator for type derivation:
$String*$ states that the type $String$ can be concatenated arbitrary times:
$\\lbrace (), (String), (String, String), (String, String, String), ... \\rbrace$

e.g. $(\"so\", \"much\", \"feature\")$ with the type $(String, String, String)$ would valid.

Now we can use the operations (alternative, concatenation, Kleene) to describe the structure of our organization.

An example for a complex type is \"WIP Name + Logo\":
\"Either a name and logo-sketch, or a name and a list of requirements for the logo\"
$(String, ( Image | String* ) )$

Which can be understood as the type set:
$\\lbrace (String, Image), (String), (String,String), (String, String, Sting), ... \\rbrace$
`;
