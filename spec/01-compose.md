## Composition##

#### In mathematics, ```f ∘ g```, denotes the composition of functions ```f``` and ```g``` for which  ####

````
(f ∘ g)(x) = f( g(x) )
````

---

#### ```f ∘ g``` is pronounced ```f``` composed with ```g```. ####

---

#### In ramda, ```R.compose(f,  g)(x) = f( g(x) )```.

---

#### The ramda function ```pipe``` evaluates the functions in the opposite order, such that

````
R.pipe(g, f)(x) = R.compose(f,  g)(x) = (f ∘ g)(x) = f( g(x) )
````

---
