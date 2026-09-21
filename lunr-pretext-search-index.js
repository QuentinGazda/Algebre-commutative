var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-preface",
  "level": "1",
  "url": "front-preface.html",
  "type": "Préface",
  "number": "",
  "title": "Préface",
  "body": " Ces notes consistent en les exercices corrigés du cours d' Algèbre commutative et introduction à la géométrie algébrique délivré par Jean-François Dat . Elles sont destinées aux étudiant·e·s du module UM4MA303 de Sorbonne Université.  Les travaux dirigés sont dispensés chaque lundi de 13h45 à 15h45 et chaque jeudi de 16h00 à 18h00 au premier semestre de l'année universitaire 2026\/2027.  "
},
{
  "id": "sec-exercices-factorisation",
  "level": "1",
  "url": "sec-exercices-factorisation.html",
  "type": "Section",
  "number": "1.1",
  "title": "Factorisation",
  "body": " Factorisation   Éléments associés, irréductibles et premiers    Deux éléments sont associés s'il existe tel que .    Un élément est irréductible s'il est non nul, non inversible, et si toute égalité , avec , entraîne que ou est inversible.    Un élément est premier s'il est non nul, non inversible, et si, pour tous ,       Propriété de factorisation et anneau factoriel    L'anneau  admet la propriété de factorisation si tout élément non nul et non inversible de s'écrit comme un produit fini d'éléments irréductibles :     L'anneau est factoriel s'il admet la propriété de factorisation et si cette factorisation est unique à l'ordre des facteurs et à association près. Autrement dit, si   avec tous les et irréductibles, alors et il existe une permutation de telle que et soient associés pour tout .      Anneau principal  L'anneau est principal si tout idéal de est engendré par un seul élément : il existe tel que     Stathme et anneau euclidien  Un stathme euclidien sur est une application telle que, pour tous et , il existe vérifiant   L'anneau est euclidien s'il admet un tel stathme. Les éléments et sont respectivement un quotient et un reste de la division de par ; leur unicité n'est pas exigée.    Euclidien implique principal, qui implique factoriel, et admet la propriété de factorisation.   Inclusions entre classes d'anneaux intègres.   Euclidiens inclus dans principaux, inclus dans factoriels, inclus dans atomiques.   Quatre rectangles emboîtés représentent, du plus petit au plus grand, les anneaux euclidiens, principaux, factoriels, puis les anneaux admettant la propriété de factorisation.      Ces inclusions sont strictes en général. L'anneau est principal mais non euclidien ; , pour un corps, est factoriel mais non principal ; admet la propriété de factorisation mais n'est pas factoriel.    Mes premiers anneaux euclidiens     Montrer que est euclidien.    Soit un corps. Montrer que est euclidien.    Montrer que l'anneau est euclidien de stathme .    Montrer que l'anneau est euclidien.        On montre que la valeur absolue est un stathme pour en utilisant la division euclidienne classique.    On montre que le degré est un stathme pour . Soit un polynôme non nul de que l'on suppose unitaire sans perte de généralité. Soit . On montre par récurrence sur qu'il existe tels que Si , alors soit et on prend et , soit et on prend et .  Si , alors soit et on prend et , soit . Dans ce dernier cas, on écrit comme où et on applique l'hypothèse de récurrence à pour en déduire l'existence de tels que On pose alors et pour en déduire avec ou .    Soit non nul et soit . Le quotient est un nombre complexe, et l'on note et sa partie réelle et sa partie imaginaire. Tout nombre réel se décompose de manière unique comme la somme d'un entier et d'un nombre réel ; on applique ce fait à et pour obtenir avec et de norme . On pose et l'on obtient avec .    On procède de manière analogue à l'exercice précédent, en utilisant le stathme . Cette fois-ci, on décompose la partie imaginaire de comme la somme d'un élément de et d'un élément de .       Caractérisation d'Euler-Gauss   Soit un anneau (commutatif, unitaire) intègre.    Montrer que tout élément premier est irréductible.    Soit un anneau qui vérifie la propriété de factorisation. Montrer que est factoriel si et seulement si tout élément irréductible est premier.        Soit premier et supposons que avec . Alors , donc ou . Supposons que , alors il existe tel que . On obtient alors par intégrité Ainsi, est inversible et est irréductible.    Supposons que est factoriel et soit irréductible. Soit tels que et soit tel que . Comme est factoriel, on peut écrire , et avec tous les irréductibles. On obtient alors Par unicité de la factorisation, il existe un tel que et soient associés. Ainsi, ou , et est premier.  Réciproquement, supposons que tout élément irréductible est premier. Soit non nul et non inversible. Comme admet la propriété de factorisation, on peut écrire avec tous les irréductibles. Si l'on a une autre factorisation , alors . Comme est premier, il divise un des , disons . Par irréductibilité, ils sont associés et l'on peut simplifier pour obtenir On conclut par récurrence sur le nombre de facteurs.       Déterminer les irréductibles     Quels sont les éléments irréductibles de ?    Quels sont les irréductibles de ? De ?        Les éléments irréductibles de sont les nombres premiers et leurs opposés.    Les éléments irréductibles de sont les polynômes de degré 1. Les éléments irréductibles de sont les polynômes de degré 1 et les polynômes quadratiques à discriminant strictement négatif.           Irréducitbles de   On considère l'anneau équippé de l'application .    Montrer que .    Soit un nombre premier.    Si s'écrit sous la forme avec entiers, montrer qu'il existe un irréductible tel que .    Si n'est pas de cette forme, montrer que est irréductible dans .      Soit un irréductible de . Montrer que vérifie soit pour un nombre premier , soit est associé à un nombre premier. En déduire qu'un ensemble de représentants des classes d'associés d'éléments irréductibles de est donné par         Si , il existe tel que . En appliquant , on obtient . Comme , on a . Réciproquement, si , alors et donc est inversible d'inverse . Enfin, les éléments de norme sont et .    Si , on pose . Alors et il suffit de montrer que est irréductible. Si avec , on a et donc . Comme est premier, on a ou , et donc ou est inversible.  Supposons que n'est pas de cette forme, et qu'il n'est pas irréductible. Alors on peut écrire avec . On a et donc . Mais alors avec , ce qui contredit l'hypothèse.    Soit irréductible et factorisons sa norme en produit de nombres premiers. Comme , divise sa norme et, puisqu'il est premier ( est factoriel), il divise l'un des . La relation de division étant stable par conjugué, on a que est irréductible et divise . Or un irréductible ne peut pas diviser deux nombres premiers, car alors il diviserait leur pgcd qui vaut . La propriété d'unique factorisation donne alors , et l'on note , .  On a donc montré que . Enfin, soit est de la forme et ce qui implique et, quitte à remplacer par son conjugué à unité près, par propriété d'unique factorisation. Soit n'est pas de cette forme et est irréductible; auquel cas est associé à par propriété d'unique factorisation.  On en déduit ql'ensemble de représentants. On a isolé car c'est le seul irréductible associé à son conjugué : .       Nombres premiers de la forme  Un théorème de Fermat affirme que les nombres premiers de la forme sont exactement et les nombres premiers congrus à modulo .    Les nombres premiers de Gauss  La figure suivante représente la répartition des irréductibles (aka nombres premiers de Gauss) dans le plan complexe.   Répartition des nombres premiers de Gauss. Image de Truejackster, domaine public, Wikimedia Commons .      Quelques factorisations dans   Factoriser les nombres suivants dans :     ;     ;     ;     .          Irréducitbles de   Déterminer les éléments irréductibles de .    On suit la méthode précédente. On introduit et on commence par montrer que . On montre ensuite qu'un irréductible de vérifie soit pour un nombre premier qui est pas de la forme , soit est associé à un nombre premier qui n'est pas de cette forme. On en déduit un ensemble de représentants :      n'est pas factoriel   À partir de la relation montrer que l'anneau n'est pas factoriel.    On considère l'application multiplicative donnée par . On vérifie facilement qu'un élément est une unité si et seulement si .  De cette observation, on en déduit que est irréductible : en effet si avec , on a et donc . Comme n'est pas de la forme avec , on ne peut pas avoir , et donc l'un des deux facteurs est une unité.  Si était factoriel, alors en tant qu'irréductible serait aussi premier, et donc divise soit soit ; mais il ne divise aucun des deux car la relation de divisibilité dans implique et en comparant parties réelle et imaginaire.     Résolution d'une équation diophantienne   On se propose de montrer que les seules solutions de l'équation sont .    Montrer que et sont impairs.    Montrer que et sont premiers entre eux dans .    En déduire que est un cube dans et conclure.        En réduisant la relation modulo , on trouve que et ont la même parité. S'ils étaient pairs, alors on aurait ce qui est absurde.    Plus généralement, et sont premiers entre eux dans car sinon un nombre premier vérifierait ce qui est absurde. En particulier, on peut trouver une relation de Bezout entre et .  Par l'absurde, supposons l'existence d'un élement irréductible qui divise et . En particulier divise leur somme et leur produit , puis il divise par primalité. Il divise donc la relation de Bezout choisie, donc est inversible ce qui est absurde.    On décompose les éléments et en produit d'éléments irréductibles; ces irréductibles sont distincts d'après la question précédente. Mais leur produit est dont la décomposition en irréductible ne fait intervenir que des exposants multiples de . On en déduit que vérifie la même propriété et donc que c'est un cube.  On écrit alors avec et on en déduit et . On en déduit que et . On obtient alors les solutions qui donnent les solutions .       Résoudre Fermat  Il y eu des tentatives de résolution de Fermat par ces méthodes. En effet, si avec , alors on a la factorisation où est une racine primitive -ième de l'unité. On peut ainsi espérer comparer les factorisations et tomber sur une contradiction.  Cependant, cette technique ne se généralise pas facilement car les anneaux ne sont pas factoriels en général. Le plus petit entier tel que n'est pas factoriel est .    Ensemble algébrique  Un sous-ensemble est dit algébrique s'il existe des polynômes de tels que corresponde à l'ensemble des zéros communs de ; i.e.     On s'intéresse l'application :   On utilisera que tout idéal de est de type fini, c-à-d engendré par un nombre fini d'élements.   Propriétés de     Montrer que l'application est bien définie; i.e. que est un ensemble algébrique pour tout idéal .    Qu'est-ce que et ? Montrer que si alors .    Décrire dans le cas et en déduire que n'est pas bijective en général.    Montrer que .    Montrer que .          Topologie  Soit un ensemble et une famille de sous-ensembles de . On rappelle que est appelée topologie sur X et les élements de les ouverts de X si     et appartiennent à ;    Toute union quelconque d'élements de est dans ;    Toute intersection finie d'éléments de est dans .    On appelle alors fermé de un sous-ensemble dont le complémentaire appartient à .    Topologie de Zariski   Montrer qu'il existe une unique topologie sur dont les fermés sont les sous-ensembles algébriques.       On étudie ensuite la réciproque partielle :    Propriétés de     Montrer que est bien définie; i.e que est un idéal de .    Soit un sous-ensemble de . Montrer que avec égalité si et seulement si est un sous-ensemble algébrique.    Soit un idéal de . Montrer que . Est-ce qu'il y a toujours égalité ?    Soient deux sous-ensembles de . Montrer que .    Montrer que .    Montrer que C'est en fait une égalité, mais la réciproque demande le Nullstelensatz.  .          Idéal radical  Soit un anneau (commutatif, unitaire) et un idéal de . On appelle raidcal de l'idéal L'idéal est dit radiciel si l'inclusion est une égalité.    Propriétés du radical    Montrer que est bien un idéal de .    Calculer le radical de l'idéal de et de dans .      Nullstelensatz  L'application induit une bijection d'inverse entre les sous-ensembles algébriques de et les idéaux réduits de .    Variétés irréductibles  Soit un sous-ensemble algébrique.    Montrer que est irréductible si et seulement si est premier.    Montrer que est un singleton si et seulement si est maximal.     "
},
{
  "id": "sec-exercices-factorisation-2",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-2",
  "type": "Rappel",
  "number": "1.1.1",
  "title": "Éléments associés, irréductibles et premiers.",
  "body": " Éléments associés, irréductibles et premiers    Deux éléments sont associés s'il existe tel que .    Un élément est irréductible s'il est non nul, non inversible, et si toute égalité , avec , entraîne que ou est inversible.    Un élément est premier s'il est non nul, non inversible, et si, pour tous ,     "
},
{
  "id": "sec-exercices-factorisation-3",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-3",
  "type": "Rappel",
  "number": "1.1.2",
  "title": "Propriété de factorisation et anneau factoriel.",
  "body": " Propriété de factorisation et anneau factoriel    L'anneau  admet la propriété de factorisation si tout élément non nul et non inversible de s'écrit comme un produit fini d'éléments irréductibles :     L'anneau est factoriel s'il admet la propriété de factorisation et si cette factorisation est unique à l'ordre des facteurs et à association près. Autrement dit, si   avec tous les et irréductibles, alors et il existe une permutation de telle que et soient associés pour tout .    "
},
{
  "id": "sec-exercices-factorisation-4",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-4",
  "type": "Rappel",
  "number": "1.1.3",
  "title": "Anneau principal.",
  "body": " Anneau principal  L'anneau est principal si tout idéal de est engendré par un seul élément : il existe tel que   "
},
{
  "id": "sec-exercices-factorisation-5",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-5",
  "type": "Rappel",
  "number": "1.1.4",
  "title": "Stathme et anneau euclidien.",
  "body": " Stathme et anneau euclidien  Un stathme euclidien sur est une application telle que, pour tous et , il existe vérifiant   L'anneau est euclidien s'il admet un tel stathme. Les éléments et sont respectivement un quotient et un reste de la division de par ; leur unicité n'est pas exigée.  "
},
{
  "id": "sec-exercices-factorisation-6",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-6",
  "type": "Rappel",
  "number": "1.1.5",
  "title": "Euclidien implique principal, qui implique factoriel, et admet la propriété de factorisation..",
  "body": " Euclidien implique principal, qui implique factoriel, et admet la propriété de factorisation.   Inclusions entre classes d'anneaux intègres.   Euclidiens inclus dans principaux, inclus dans factoriels, inclus dans atomiques.   Quatre rectangles emboîtés représentent, du plus petit au plus grand, les anneaux euclidiens, principaux, factoriels, puis les anneaux admettant la propriété de factorisation.      Ces inclusions sont strictes en général. L'anneau est principal mais non euclidien ; , pour un corps, est factoriel mais non principal ; admet la propriété de factorisation mais n'est pas factoriel.  "
},
{
  "id": "ex-euclidien-Z",
  "level": "2",
  "url": "sec-exercices-factorisation.html#ex-euclidien-Z",
  "type": "Exercice",
  "number": "1.1.1",
  "title": "Mes premiers anneaux euclidiens.",
  "body": " Mes premiers anneaux euclidiens     Montrer que est euclidien.    Soit un corps. Montrer que est euclidien.    Montrer que l'anneau est euclidien de stathme .    Montrer que l'anneau est euclidien.        On montre que la valeur absolue est un stathme pour en utilisant la division euclidienne classique.    On montre que le degré est un stathme pour . Soit un polynôme non nul de que l'on suppose unitaire sans perte de généralité. Soit . On montre par récurrence sur qu'il existe tels que Si , alors soit et on prend et , soit et on prend et .  Si , alors soit et on prend et , soit . Dans ce dernier cas, on écrit comme où et on applique l'hypothèse de récurrence à pour en déduire l'existence de tels que On pose alors et pour en déduire avec ou .    Soit non nul et soit . Le quotient est un nombre complexe, et l'on note et sa partie réelle et sa partie imaginaire. Tout nombre réel se décompose de manière unique comme la somme d'un entier et d'un nombre réel ; on applique ce fait à et pour obtenir avec et de norme . On pose et l'on obtient avec .    On procède de manière analogue à l'exercice précédent, en utilisant le stathme . Cette fois-ci, on décompose la partie imaginaire de comme la somme d'un élément de et d'un élément de .     "
},
{
  "id": "sec-exercices-factorisation-8",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-8",
  "type": "Exercice",
  "number": "1.1.2",
  "title": "Caractérisation d’Euler-Gauss.",
  "body": " Caractérisation d'Euler-Gauss   Soit un anneau (commutatif, unitaire) intègre.    Montrer que tout élément premier est irréductible.    Soit un anneau qui vérifie la propriété de factorisation. Montrer que est factoriel si et seulement si tout élément irréductible est premier.        Soit premier et supposons que avec . Alors , donc ou . Supposons que , alors il existe tel que . On obtient alors par intégrité Ainsi, est inversible et est irréductible.    Supposons que est factoriel et soit irréductible. Soit tels que et soit tel que . Comme est factoriel, on peut écrire , et avec tous les irréductibles. On obtient alors Par unicité de la factorisation, il existe un tel que et soient associés. Ainsi, ou , et est premier.  Réciproquement, supposons que tout élément irréductible est premier. Soit non nul et non inversible. Comme admet la propriété de factorisation, on peut écrire avec tous les irréductibles. Si l'on a une autre factorisation , alors . Comme est premier, il divise un des , disons . Par irréductibilité, ils sont associés et l'on peut simplifier pour obtenir On conclut par récurrence sur le nombre de facteurs.     "
},
{
  "id": "sec-exercices-factorisation-9",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-9",
  "type": "Exercice",
  "number": "1.1.3",
  "title": "Déterminer les irréductibles.",
  "body": " Déterminer les irréductibles     Quels sont les éléments irréductibles de ?    Quels sont les irréductibles de ? De ?        Les éléments irréductibles de sont les nombres premiers et leurs opposés.    Les éléments irréductibles de sont les polynômes de degré 1. Les éléments irréductibles de sont les polynômes de degré 1 et les polynômes quadratiques à discriminant strictement négatif.         "
},
{
  "id": "sec-exercices-factorisation-10",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-10",
  "type": "Exercice",
  "number": "1.1.4",
  "title": "Irréducitbles de <span class=\"process-math\">\\(\\mathbb{Z}[i]\\)<\/span>.",
  "body": " Irréducitbles de   On considère l'anneau équippé de l'application .    Montrer que .    Soit un nombre premier.    Si s'écrit sous la forme avec entiers, montrer qu'il existe un irréductible tel que .    Si n'est pas de cette forme, montrer que est irréductible dans .      Soit un irréductible de . Montrer que vérifie soit pour un nombre premier , soit est associé à un nombre premier. En déduire qu'un ensemble de représentants des classes d'associés d'éléments irréductibles de est donné par         Si , il existe tel que . En appliquant , on obtient . Comme , on a . Réciproquement, si , alors et donc est inversible d'inverse . Enfin, les éléments de norme sont et .    Si , on pose . Alors et il suffit de montrer que est irréductible. Si avec , on a et donc . Comme est premier, on a ou , et donc ou est inversible.  Supposons que n'est pas de cette forme, et qu'il n'est pas irréductible. Alors on peut écrire avec . On a et donc . Mais alors avec , ce qui contredit l'hypothèse.    Soit irréductible et factorisons sa norme en produit de nombres premiers. Comme , divise sa norme et, puisqu'il est premier ( est factoriel), il divise l'un des . La relation de division étant stable par conjugué, on a que est irréductible et divise . Or un irréductible ne peut pas diviser deux nombres premiers, car alors il diviserait leur pgcd qui vaut . La propriété d'unique factorisation donne alors , et l'on note , .  On a donc montré que . Enfin, soit est de la forme et ce qui implique et, quitte à remplacer par son conjugué à unité près, par propriété d'unique factorisation. Soit n'est pas de cette forme et est irréductible; auquel cas est associé à par propriété d'unique factorisation.  On en déduit ql'ensemble de représentants. On a isolé car c'est le seul irréductible associé à son conjugué : .     "
},
{
  "id": "sec-exercices-factorisation-11",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-11",
  "type": "Remarque",
  "number": "1.1.7",
  "title": "Nombres premiers de la forme <span class=\"process-math\">\\(a^2+b^2\\)<\/span>.",
  "body": " Nombres premiers de la forme  Un théorème de Fermat affirme que les nombres premiers de la forme sont exactement et les nombres premiers congrus à modulo .  "
},
{
  "id": "sec-exercices-factorisation-12",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-12",
  "type": "Remarque",
  "number": "1.1.8",
  "title": "Les nombres premiers de Gauss.",
  "body": " Les nombres premiers de Gauss  La figure suivante représente la répartition des irréductibles (aka nombres premiers de Gauss) dans le plan complexe.   Répartition des nombres premiers de Gauss. Image de Truejackster, domaine public, Wikimedia Commons .    "
},
{
  "id": "sec-exercices-factorisation-13",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-13",
  "type": "Exercice",
  "number": "1.1.5",
  "title": "Quelques factorisations dans <span class=\"process-math\">\\(\\mathbb{Z}[i]\\)<\/span>.",
  "body": " Quelques factorisations dans   Factoriser les nombres suivants dans :     ;     ;     ;     .        "
},
{
  "id": "sec-exercices-factorisation-14",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-14",
  "type": "Exercice",
  "number": "1.1.6",
  "title": "Irréducitbles de <span class=\"process-math\">\\(\\mathbb{Z}[i\\sqrt{2}]\\)<\/span>.",
  "body": " Irréducitbles de   Déterminer les éléments irréductibles de .    On suit la méthode précédente. On introduit et on commence par montrer que . On montre ensuite qu'un irréductible de vérifie soit pour un nombre premier qui est pas de la forme , soit est associé à un nombre premier qui n'est pas de cette forme. On en déduit un ensemble de représentants :    "
},
{
  "id": "ex-factorisation-non-factorialite-racine-moins-cinq",
  "level": "2",
  "url": "sec-exercices-factorisation.html#ex-factorisation-non-factorialite-racine-moins-cinq",
  "type": "Exercice",
  "number": "1.1.7",
  "title": "<span class=\"process-math\">\\(\\mathbb{Z}[i\\sqrt{5}]\\)<\/span> n’est pas factoriel.",
  "body": " n'est pas factoriel   À partir de la relation montrer que l'anneau n'est pas factoriel.    On considère l'application multiplicative donnée par . On vérifie facilement qu'un élément est une unité si et seulement si .  De cette observation, on en déduit que est irréductible : en effet si avec , on a et donc . Comme n'est pas de la forme avec , on ne peut pas avoir , et donc l'un des deux facteurs est une unité.  Si était factoriel, alors en tant qu'irréductible serait aussi premier, et donc divise soit soit ; mais il ne divise aucun des deux car la relation de divisibilité dans implique et en comparant parties réelle et imaginaire.   "
},
{
  "id": "sec-exercices-factorisation-16",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-16",
  "type": "Exercice",
  "number": "1.1.8",
  "title": "Résolution d’une équation diophantienne.",
  "body": " Résolution d'une équation diophantienne   On se propose de montrer que les seules solutions de l'équation sont .    Montrer que et sont impairs.    Montrer que et sont premiers entre eux dans .    En déduire que est un cube dans et conclure.        En réduisant la relation modulo , on trouve que et ont la même parité. S'ils étaient pairs, alors on aurait ce qui est absurde.    Plus généralement, et sont premiers entre eux dans car sinon un nombre premier vérifierait ce qui est absurde. En particulier, on peut trouver une relation de Bezout entre et .  Par l'absurde, supposons l'existence d'un élement irréductible qui divise et . En particulier divise leur somme et leur produit , puis il divise par primalité. Il divise donc la relation de Bezout choisie, donc est inversible ce qui est absurde.    On décompose les éléments et en produit d'éléments irréductibles; ces irréductibles sont distincts d'après la question précédente. Mais leur produit est dont la décomposition en irréductible ne fait intervenir que des exposants multiples de . On en déduit que vérifie la même propriété et donc que c'est un cube.  On écrit alors avec et on en déduit et . On en déduit que et . On obtient alors les solutions qui donnent les solutions .     "
},
{
  "id": "sec-exercices-factorisation-17",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-17",
  "type": "Remarque",
  "number": "1.1.10",
  "title": "Résoudre Fermat.",
  "body": " Résoudre Fermat  Il y eu des tentatives de résolution de Fermat par ces méthodes. En effet, si avec , alors on a la factorisation où est une racine primitive -ième de l'unité. On peut ainsi espérer comparer les factorisations et tomber sur une contradiction.  Cependant, cette technique ne se généralise pas facilement car les anneaux ne sont pas factoriels en général. Le plus petit entier tel que n'est pas factoriel est .  "
},
{
  "id": "sec-exercices-factorisation-18",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-18",
  "type": "Rappel",
  "number": "1.1.11",
  "title": "Ensemble algébrique.",
  "body": " Ensemble algébrique  Un sous-ensemble est dit algébrique s'il existe des polynômes de tels que corresponde à l'ensemble des zéros communs de ; i.e.    "
},
{
  "id": "sec-exercices-factorisation-22",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-22",
  "type": "Exercice",
  "number": "1.1.9",
  "title": "Propriétés de <span class=\"process-math\">\\(V\\)<\/span>.",
  "body": " Propriétés de     Montrer que l'application est bien définie; i.e. que est un ensemble algébrique pour tout idéal .    Qu'est-ce que et ? Montrer que si alors .    Décrire dans le cas et en déduire que n'est pas bijective en général.    Montrer que .    Montrer que .        "
},
{
  "id": "sec-exercices-factorisation-23",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-23",
  "type": "Rappel",
  "number": "1.1.12",
  "title": "Topologie.",
  "body": " Topologie  Soit un ensemble et une famille de sous-ensembles de . On rappelle que est appelée topologie sur X et les élements de les ouverts de X si     et appartiennent à ;    Toute union quelconque d'élements de est dans ;    Toute intersection finie d'éléments de est dans .    On appelle alors fermé de un sous-ensemble dont le complémentaire appartient à .  "
},
{
  "id": "sec-exercices-factorisation-24",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-24",
  "type": "Exercice",
  "number": "1.1.10",
  "title": "Topologie de Zariski.",
  "body": " Topologie de Zariski   Montrer qu'il existe une unique topologie sur dont les fermés sont les sous-ensembles algébriques.      "
},
{
  "id": "sec-exercices-factorisation-27",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-27",
  "type": "Exercice",
  "number": "1.1.11",
  "title": "Propriétés de <span class=\"process-math\">\\(I\\)<\/span>.",
  "body": " Propriétés de     Montrer que est bien définie; i.e que est un idéal de .    Soit un sous-ensemble de . Montrer que avec égalité si et seulement si est un sous-ensemble algébrique.    Soit un idéal de . Montrer que . Est-ce qu'il y a toujours égalité ?    Soient deux sous-ensembles de . Montrer que .    Montrer que .    Montrer que C'est en fait une égalité, mais la réciproque demande le Nullstelensatz.  .        "
},
{
  "id": "sec-exercices-factorisation-28",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-28",
  "type": "Rappel",
  "number": "1.1.13",
  "title": "Idéal radical.",
  "body": " Idéal radical  Soit un anneau (commutatif, unitaire) et un idéal de . On appelle raidcal de l'idéal L'idéal est dit radiciel si l'inclusion est une égalité.  "
},
{
  "id": "sec-exercices-factorisation-29",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-29",
  "type": "Exercice",
  "number": "1.1.12",
  "title": "Propriétés du radical.",
  "body": " Propriétés du radical    Montrer que est bien un idéal de .    Calculer le radical de l'idéal de et de dans .    "
},
{
  "id": "sec-exercices-factorisation-30",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-30",
  "type": "Rappel",
  "number": "1.1.14",
  "title": "Nullstelensatz.",
  "body": " Nullstelensatz  L'application induit une bijection d'inverse entre les sous-ensembles algébriques de et les idéaux réduits de .  "
},
{
  "id": "sec-exercices-factorisation-31",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-31",
  "type": "Exercice",
  "number": "1.1.13",
  "title": "Variétés irréductibles.",
  "body": " Variétés irréductibles  Soit un sous-ensemble algébrique.    Montrer que est irréductible si et seulement si est premier.    Montrer que est un singleton si et seulement si est maximal.    "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "Références",
  "number": "",
  "title": "References",
  "body": " References   Jean-François Dat  Algèbre commutative et introduction à la géométrie algébrique  Sorbonne Université  2026-2027  Page   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
