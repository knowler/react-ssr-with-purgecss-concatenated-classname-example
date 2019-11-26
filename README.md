# React SSR + Purgecss for Concatenated Classnames

This is a bare minimum demonstration for reference purposes.

Concatenated classnames are problematic for purgecss which makes
using Tailwind with React a lesser experience than straight
CSS-in-JS. One way to improve the output of the purged css is to
provide it rendered markup. Of course, this isn’t perfect since
React apps are complex, but it is a step in the right direction.
