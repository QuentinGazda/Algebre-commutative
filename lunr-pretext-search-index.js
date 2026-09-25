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
  "title": "Anneaux d’entiers algébriques",
  "body": " Anneaux d'entiers algébriques   Éléments associés, irréductibles et premiers    Deux éléments sont associés s'il existe tel que .    Un élément est irréductible s'il est non nul, non inversible, et si toute égalité , avec , entraîne que ou est inversible.    Un élément est premier s'il est non nul, non inversible, et si, pour tous ,       Propriété de factorisation et anneau factoriel    L'anneau  admet la propriété de factorisation si tout élément non nul et non inversible de s'écrit comme un produit fini d'éléments irréductibles :     L'anneau est factoriel s'il admet la propriété de factorisation et si cette factorisation est unique à l'ordre des facteurs et à association près. Autrement dit, si   avec tous les et irréductibles, alors et il existe une permutation de telle que et soient associés pour tout .      Anneau principal  L'anneau est principal si tout idéal de est engendré par un seul élément : il existe tel que     Stathme et anneau euclidien  Un stathme euclidien sur est une application telle que, pour tous et , il existe vérifiant   L'anneau est euclidien s'il admet un tel stathme. Les éléments et sont respectivement un quotient et un reste de la division de par ; leur unicité n'est pas exigée.    Euclidien implique principal, qui implique factoriel, et admet la propriété de factorisation.   Inclusions entre classes d'anneaux intègres.   Euclidiens inclus dans principaux, inclus dans factoriels, inclus dans atomiques.   Quatre rectangles emboîtés représentent, du plus petit au plus grand, les anneaux euclidiens, principaux, factoriels, puis les anneaux admettant la propriété de factorisation.      Ces inclusions sont strictes en général. L'anneau est principal mais non euclidien ; , pour un corps, est factoriel mais non principal ; admet la propriété de factorisation mais n'est pas factoriel.    Mes premiers anneaux euclidiens     Montrer que est euclidien.    Soit un corps. Montrer que est euclidien.    Montrer que l'anneau est euclidien de stathme .    Montrer que l'anneau est euclidien.        On montre que la valeur absolue est un stathme pour en utilisant la division euclidienne classique.    On montre que le degré est un stathme pour . Soit un polynôme non nul de que l'on suppose unitaire sans perte de généralité. Soit . On montre par récurrence sur qu'il existe tels que Si , alors soit et on prend et , soit et on prend et .  Si , alors soit et on prend et , soit . Dans ce dernier cas, on écrit comme où et on applique l'hypothèse de récurrence à pour en déduire l'existence de tels que On pose alors et pour en déduire avec ou .    Soit non nul et soit . Le quotient est un nombre complexe, et l'on note et sa partie réelle et sa partie imaginaire. Tout nombre réel se décompose de manière unique comme la somme d'un entier et d'un nombre réel ; on applique ce fait à et pour obtenir avec et de norme . On pose et l'on obtient avec .    On procède de manière analogue à l'exercice précédent, en utilisant le stathme . Cette fois-ci, on décompose la partie imaginaire de comme la somme d'un élément de et d'un élément de .       Caractérisation d'Euler-Gauss   Soit un anneau (commutatif, unitaire) intègre.    Montrer que tout élément premier est irréductible.    Soit un anneau qui vérifie la propriété de factorisation. Montrer que est factoriel si et seulement si tout élément irréductible est premier.        Soit premier et supposons que avec . Alors , donc ou . Supposons que , alors il existe tel que . On obtient alors par intégrité Ainsi, est inversible et est irréductible.    Supposons que est factoriel et soit irréductible. Soit tels que et soit tel que . Comme est factoriel, on peut écrire , et avec tous les irréductibles. On obtient alors Par unicité de la factorisation, il existe un tel que et soient associés. Ainsi, ou , et est premier.  Réciproquement, supposons que tout élément irréductible est premier. Soit non nul et non inversible. Comme admet la propriété de factorisation, on peut écrire avec tous les irréductibles. Si l'on a une autre factorisation , alors . Comme est premier, il divise un des , disons . Par irréductibilité, ils sont associés et l'on peut simplifier pour obtenir On conclut par récurrence sur le nombre de facteurs.       Déterminer les irréductibles     Quels sont les éléments irréductibles de ?    Quels sont les irréductibles de ? De ?        Les éléments irréductibles de sont les nombres premiers et leurs opposés.    Les éléments irréductibles de sont les polynômes de degré 1. Les éléments irréductibles de sont les polynômes de degré 1 et les polynômes quadratiques à discriminant strictement négatif.           Irréducitbles de   On considère l'anneau équippé de l'application .    Montrer que .    Soit un nombre premier.    Si s'écrit sous la forme avec entiers, montrer qu'il existe un irréductible tel que .    Si n'est pas de cette forme, montrer que est irréductible dans .      Soit un irréductible de . Montrer que vérifie soit pour un nombre premier , soit est associé à un nombre premier. En déduire qu'un ensemble de représentants des classes d'associés d'éléments irréductibles de est donné par         Si , il existe tel que . En appliquant , on obtient . Comme , on a . Réciproquement, si , alors et donc est inversible d'inverse . Enfin, les éléments de norme sont et .    Si , on pose . Alors et il suffit de montrer que est irréductible. Si avec , on a et donc . Comme est premier, on a ou , et donc ou est inversible.  Supposons que n'est pas de cette forme, et qu'il n'est pas irréductible. Alors on peut écrire avec . On a et donc . Mais alors avec , ce qui contredit l'hypothèse.    Soit irréductible et factorisons sa norme en produit de nombres premiers. Comme , divise sa norme et, puisqu'il est premier ( est factoriel), il divise l'un des . La relation de division étant stable par conjugué, on a que est irréductible et divise . Or un irréductible ne peut pas diviser deux nombres premiers, car alors il diviserait leur pgcd qui vaut . La propriété d'unique factorisation donne alors , et l'on note , .  On a donc montré que . Enfin, soit est de la forme et ce qui implique et, quitte à remplacer par son conjugué à unité près, par propriété d'unique factorisation. Soit n'est pas de cette forme et est irréductible; auquel cas est associé à par propriété d'unique factorisation.  On en déduit ql'ensemble de représentants. On a isolé car c'est le seul irréductible associé à son conjugué : .       Nombres premiers de la forme  Un théorème de Fermat affirme que les nombres premiers de la forme sont exactement et les nombres premiers congrus à modulo .    Les nombres premiers de Gauss  La figure suivante représente la répartition des irréductibles (aka nombres premiers de Gauss) dans le plan complexe.   Répartition des nombres premiers de Gauss. Image de Truejackster, domaine public, Wikimedia Commons .      Quelques factorisations dans   Factoriser les nombres suivants dans :     ;     ;     ;     .        On écrit avec et irréductibles dans car ils ne sont pas de la forme ( ). C'est donc sa décomposition en irréductibles.    On écrit avec et irréductibles dans (car de norme première). C'est donc sa décomposition en irréductibles.    On commence par factoriser la norme de (puis, on utilise que tout nombre divise sa norme). Comme et que se décompose en , et on obtient ainsi que divise . En particulier, la factorisation de en irréducibles est de la forme avec une unité et deux entiers positfs tels que .  Si et sont simultanément non nuls, alors serait divisible par , ce qui est absurde. Ainsi, l'un des deux entiers est nul et il reste à déterminer lequel de divise . Pour cela, rien de mieux que de calculer le quotient qui n'est visiblement pas dans . Ainsi, est associé à ; on vérifie qu'en effet:     Comme , on trouve .       Irréducitbles de   Déterminer les éléments irréductibles de .    On suit la méthode précédente. On introduit et on commence par montrer que . On montre ensuite qu'un irréductible de vérifie soit pour un nombre premier qui est pas de la forme , soit est associé à un nombre premier qui n'est pas de cette forme. On en déduit un ensemble de représentants :      n'est pas factoriel   À partir de la relation montrer que l'anneau n'est pas factoriel.    On considère l'application multiplicative donnée par . On vérifie facilement qu'un élément est une unité si et seulement si .  De cette observation, on en déduit que est irréductible : en effet si avec , on a et donc . Comme n'est pas de la forme avec , on ne peut pas avoir , et donc l'un des deux facteurs est une unité.  Si était factoriel, alors en tant qu'irréductible serait aussi premier, et donc divise soit soit ; mais il ne divise aucun des deux car la relation de divisibilité dans implique et en comparant parties réelle et imaginaire.     Résolution d'une équation diophantienne   On se propose de montrer que les seules solutions de l'équation sont .    Montrer que et sont impairs.    Montrer que et sont premiers entre eux dans .    En déduire que est un cube dans et conclure.        En réduisant la relation modulo , on trouve que et ont la même parité. S'ils étaient pairs, alors on aurait ce qui est absurde.    Plus généralement, et sont premiers entre eux dans car sinon un nombre premier vérifierait ce qui est absurde. En particulier, on peut trouver une relation de Bezout entre et .  Par l'absurde, supposons l'existence d'un élement irréductible qui divise et . En particulier divise leur somme et leur produit , puis il divise par primalité. Il divise donc la relation de Bezout choisie, donc est inversible ce qui est absurde.    On décompose les éléments et en produit d'éléments irréductibles; ces irréductibles sont distincts d'après la question précédente. Mais leur produit est dont la décomposition en irréductible ne fait intervenir que des exposants multiples de . On en déduit que vérifie la même propriété et donc que c'est un cube.  On écrit alors avec et on en déduit et . On en déduit que et . On obtient alors les solutions qui donnent les solutions .       Résoudre Fermat  Il y eu des tentatives de résolution de Fermat par ces méthodes. En effet, si avec , alors on a la factorisation où est une racine primitive -ième de l'unité. On peut ainsi espérer comparer les factorisations et tomber sur une contradiction.  Cependant, cette technique ne se généralise pas facilement car les anneaux ne sont pas factoriels en général. Le plus petit entier tel que n'est pas factoriel est .   "
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
  "body": " Quelques factorisations dans   Factoriser les nombres suivants dans :     ;     ;     ;     .        On écrit avec et irréductibles dans car ils ne sont pas de la forme ( ). C'est donc sa décomposition en irréductibles.    On écrit avec et irréductibles dans (car de norme première). C'est donc sa décomposition en irréductibles.    On commence par factoriser la norme de (puis, on utilise que tout nombre divise sa norme). Comme et que se décompose en , et on obtient ainsi que divise . En particulier, la factorisation de en irréducibles est de la forme avec une unité et deux entiers positfs tels que .  Si et sont simultanément non nuls, alors serait divisible par , ce qui est absurde. Ainsi, l'un des deux entiers est nul et il reste à déterminer lequel de divise . Pour cela, rien de mieux que de calculer le quotient qui n'est visiblement pas dans . Ainsi, est associé à ; on vérifie qu'en effet:     Comme , on trouve .     "
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
  "id": "sec-exercices-geo-alg",
  "level": "1",
  "url": "sec-exercices-geo-alg.html",
  "type": "Section",
  "number": "1.2",
  "title": "Anneaux de la géométrie algébrique classique",
  "body": " Anneaux de la géométrie algébrique classique   Ensemble algébrique  Un sous-ensemble est dit algébrique s'il existe des polynômes de tels que corresponde à l'ensemble des zéros communs de ; i.e.     On s'intéresse l'application :   On utilisera que tout idéal de est de type fini, c-à-d engendré par un nombre fini d'élements.   Propriétés de     Montrer que l'application est bien définie; i.e. que est un ensemble algébrique pour tout idéal .    Qu'est-ce que et ? Montrer que si alors .    Décrire dans le cas et en déduire que n'est pas bijective en général.    Montrer que .    Montrer que .        On sait que est engendré par un nombre fini de polynômes, mettons . On prétend que L'inclusion est claire car les sont des éléments de . Pour l'inclusion réciproque, soit dans l'ensemble droite et soit . Comme est engendré par les , il existe des polynômes tels que . En particulier, et donc .    Le polynôme nul s'annule partout et donc . Le polynôme constant égal à ne s'annule nul part, et donc . Si , alors un zéro commun à l'ensemble des polynômes de est en particulier un zéro commun aux polynômes de , et donc .    Dans le cas l'anneau est principal. En particulier tout idéal est engendré par un unique polynôme unitaire. devient l'application qui à un polynôme unitaire associe le sous-ensemble fini de ses racines complexes.  On remarque par exemple que , et donc n'est pas bijective.    Comme et , l'inclusion est claire. Réciproquement, si , alors pour tout et . Par définition tout élément s'écrit comme , et , et donc     Comme et , on a et donc .  Comme , on a aussi .  Reste à montrer que . Soit donc et supposons par l'absurde qu'il n'appartient pas à . Il existe alors et tels que et . En particulier ; contradiction.       Topologie  Soit un ensemble et une famille de sous-ensembles de . On rappelle que est appelée topologie sur X et les élements de les ouverts de X si     et appartiennent à ;    Toute union quelconque d'élements de est dans ;    Toute intersection finie d'éléments de est dans .    On appelle alors fermé de un sous-ensemble dont le complémentaire appartient à .    Topologie de Zariski   Montrer qu'il existe une unique topologie sur dont les fermés sont les sous-ensembles algébriques.    Soit le sous-ensemble des parties de dont le complémentaire est un sous-ensemble algébrique; c'est l'unique candidat à une topologie vérifiant le critère de l'énoncé. Comme et sont algébriques, leur complémentaire et sont dans . Soit une famille d'éléments de indexée par un ensemble . Pour , Soit un idéal tel que soit le complémentaire de . Alors le complémentaire est . Soit l'idéal engendré par les . Alors on vérifie que qui, en particulier, est un sous-ensemble algébrique. En effet, pour tout on a , puis d'où l'inclusion . Pour l'inclusion réciproque, soit dans l'intersection des et soit . Il existe un sous-ensemble fini et pour tout tels que . Ainsi et donc .  Enfin, comme les sous-ensembles algébriques sont stables par unions finies, est stable par intersection finie.    On étudie ensuite la réciproque partielle :    Propriétés de     Montrer que est bien définie; i.e que est un idéal de .    Soit un sous-ensemble de . Montrer que avec égalité si et seulement si est un sous-ensemble algébrique.    Soit un idéal de . Montrer que . Est-ce qu'il y a toujours égalité ?    Soient deux sous-ensembles de . Montrer que .    Montrer que C'est en fait une égalité, mais la réciproque demande le Nullstelensatz.  .        L'addition de deux polynômes s'annulant sur ou la multiplication de deux polynômes dont l'un s'annule sur s'annulent encore sur .    Par définition, est l'ensemble des zéros communs aux polynômes qui s'annulent sur . L'inclusion est donc claire.  Si est algébrique, e.g. ensemble des zéros communs de polynômes , alors . De plus, si , alors pour tout , et en particulier c'est le cas pour . Ainsi .  Si n'est pas algébrique alors car ce dernier l'est.     correspond à l'ensemble des fonctions qui s'annulent là où s'annulent les éléments de . Tautologiquement, .    Une fonction (polynômiale) s'annule sur et sur si et seulement si elle s'annule sur . Autrement dit, .    Soit . Alors on peut écrire avec et . Pour , on a car , et donc . Ainsi .       Idéal radical  Soit un anneau (commutatif, unitaire) et un idéal de . On appelle raidcal de l'idéal L'idéal est dit radiciel si l'inclusion est une égalité.    Propriétés du radical     Montrer que est bien un idéal de .    Soit un anneau factoriel, des irréductibles de et des entiers strictement positifs. Calculer le radical de l'idéal principal .    Soit un sous-ensemble de . Montrer que est un idéal radiciel.        Soient et soit deux entiers positifs tels que . Par le binôme de Newton, Or pour et pour . Pour avoir , il reste donc à choisir tel que pour tout soit soit ; par exemple convient.    On va montrer que . Pour on a ce qui montre l'inclusion . Réciproquement, soit et un entier positif tel que . Il existe donc pour lequel En particulier divise et donc par la propriété d'unique factorisation. Toujours par cette dernière, divise et donc .    Soit tel que pour un entier . En particulier, pour tout on a et donc . Ainsi , et donc .       Nullstelensatz  L'application induit une bijection d'inverse entre les sous-ensembles algébriques de et les idéaux réduits de .    Fermé irréductible  Soit un espace topologique et un fermé de . On dit que est irréductible si, pour toute décomposition avec des fermés de , alors ou .    Variétés irréductibles   Soit un sous-ensemble algébrique.    Montrer que est irréductible si et seulement si est premier.    Montrer que est un singleton si et seulement si est maximal.        Supposons irréductible. Soient deux polynômes dont le produit s'annule sur ; c-à-d . On a alors et donc s'écrit que la réunion de et . Comme est irréductible, soit soit de sorte que soit soit s'annule sur ; c-à-d ou , et donc est premier.  Réciproquement, supposons premier et écrivons comme la réunion de deux sous-ensembles algébriques. Si ces sous-ensembles sont propres, alors on peut trouver qui s'annule sur mais pas sur tout et qui s'annule sur mais pas sur tout . Autrement dit mais , contredisant la primalité de .    Si est un singleton, alors est le noyau de l'application , d'évaluation en . Cette application est surjective, donc d'après le théorème d'isomorphisme est un corps. En particulier, est maximal.  Réciproquement supposons maximal. En particulier est non vide car . Soit . De la décroissance de on déduit que l'idéal contient . Cet idéal n'est pas car autrement le polynôme constant s'annulerait en . Comme est maximal on trouve Soit . Les polynômes s'annulent en par l'égalité ci-dessus d'où puis . Ainsi .       n'est pas principal   Montrer que l'idéal de n'est pas principal.    Supposons principal de générateur . Alors divise , d'où , et de même . Autrement dit est une constante non nulle. Mais une relation comme donnerait que s'annule en , une contradiction.    "
},
{
  "id": "sec-exercices-geo-alg-2",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-2",
  "type": "Rappel",
  "number": "1.2.1",
  "title": "Ensemble algébrique.",
  "body": " Ensemble algébrique  Un sous-ensemble est dit algébrique s'il existe des polynômes de tels que corresponde à l'ensemble des zéros communs de ; i.e.    "
},
{
  "id": "sec-exercices-geo-alg-6",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-6",
  "type": "Exercice",
  "number": "1.2.1",
  "title": "Propriétés de <span class=\"process-math\">\\(V\\)<\/span>.",
  "body": " Propriétés de     Montrer que l'application est bien définie; i.e. que est un ensemble algébrique pour tout idéal .    Qu'est-ce que et ? Montrer que si alors .    Décrire dans le cas et en déduire que n'est pas bijective en général.    Montrer que .    Montrer que .        On sait que est engendré par un nombre fini de polynômes, mettons . On prétend que L'inclusion est claire car les sont des éléments de . Pour l'inclusion réciproque, soit dans l'ensemble droite et soit . Comme est engendré par les , il existe des polynômes tels que . En particulier, et donc .    Le polynôme nul s'annule partout et donc . Le polynôme constant égal à ne s'annule nul part, et donc . Si , alors un zéro commun à l'ensemble des polynômes de est en particulier un zéro commun aux polynômes de , et donc .    Dans le cas l'anneau est principal. En particulier tout idéal est engendré par un unique polynôme unitaire. devient l'application qui à un polynôme unitaire associe le sous-ensemble fini de ses racines complexes.  On remarque par exemple que , et donc n'est pas bijective.    Comme et , l'inclusion est claire. Réciproquement, si , alors pour tout et . Par définition tout élément s'écrit comme , et , et donc     Comme et , on a et donc .  Comme , on a aussi .  Reste à montrer que . Soit donc et supposons par l'absurde qu'il n'appartient pas à . Il existe alors et tels que et . En particulier ; contradiction.     "
},
{
  "id": "sec-exercices-geo-alg-7",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-7",
  "type": "Rappel",
  "number": "1.2.2",
  "title": "Topologie.",
  "body": " Topologie  Soit un ensemble et une famille de sous-ensembles de . On rappelle que est appelée topologie sur X et les élements de les ouverts de X si     et appartiennent à ;    Toute union quelconque d'élements de est dans ;    Toute intersection finie d'éléments de est dans .    On appelle alors fermé de un sous-ensemble dont le complémentaire appartient à .  "
},
{
  "id": "sec-exercices-geo-alg-8",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-8",
  "type": "Exercice",
  "number": "1.2.2",
  "title": "Topologie de Zariski.",
  "body": " Topologie de Zariski   Montrer qu'il existe une unique topologie sur dont les fermés sont les sous-ensembles algébriques.    Soit le sous-ensemble des parties de dont le complémentaire est un sous-ensemble algébrique; c'est l'unique candidat à une topologie vérifiant le critère de l'énoncé. Comme et sont algébriques, leur complémentaire et sont dans . Soit une famille d'éléments de indexée par un ensemble . Pour , Soit un idéal tel que soit le complémentaire de . Alors le complémentaire est . Soit l'idéal engendré par les . Alors on vérifie que qui, en particulier, est un sous-ensemble algébrique. En effet, pour tout on a , puis d'où l'inclusion . Pour l'inclusion réciproque, soit dans l'intersection des et soit . Il existe un sous-ensemble fini et pour tout tels que . Ainsi et donc .  Enfin, comme les sous-ensembles algébriques sont stables par unions finies, est stable par intersection finie.   "
},
{
  "id": "sec-exercices-geo-alg-11",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-11",
  "type": "Exercice",
  "number": "1.2.3",
  "title": "Propriétés de <span class=\"process-math\">\\(I\\)<\/span>.",
  "body": " Propriétés de     Montrer que est bien définie; i.e que est un idéal de .    Soit un sous-ensemble de . Montrer que avec égalité si et seulement si est un sous-ensemble algébrique.    Soit un idéal de . Montrer que . Est-ce qu'il y a toujours égalité ?    Soient deux sous-ensembles de . Montrer que .    Montrer que C'est en fait une égalité, mais la réciproque demande le Nullstelensatz.  .        L'addition de deux polynômes s'annulant sur ou la multiplication de deux polynômes dont l'un s'annule sur s'annulent encore sur .    Par définition, est l'ensemble des zéros communs aux polynômes qui s'annulent sur . L'inclusion est donc claire.  Si est algébrique, e.g. ensemble des zéros communs de polynômes , alors . De plus, si , alors pour tout , et en particulier c'est le cas pour . Ainsi .  Si n'est pas algébrique alors car ce dernier l'est.     correspond à l'ensemble des fonctions qui s'annulent là où s'annulent les éléments de . Tautologiquement, .    Une fonction (polynômiale) s'annule sur et sur si et seulement si elle s'annule sur . Autrement dit, .    Soit . Alors on peut écrire avec et . Pour , on a car , et donc . Ainsi .     "
},
{
  "id": "sec-exercices-geo-alg-12",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-12",
  "type": "Rappel",
  "number": "1.2.3",
  "title": "Idéal radical.",
  "body": " Idéal radical  Soit un anneau (commutatif, unitaire) et un idéal de . On appelle raidcal de l'idéal L'idéal est dit radiciel si l'inclusion est une égalité.  "
},
{
  "id": "sec-exercices-geo-alg-13",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-13",
  "type": "Exercice",
  "number": "1.2.4",
  "title": "Propriétés du radical.",
  "body": " Propriétés du radical     Montrer que est bien un idéal de .    Soit un anneau factoriel, des irréductibles de et des entiers strictement positifs. Calculer le radical de l'idéal principal .    Soit un sous-ensemble de . Montrer que est un idéal radiciel.        Soient et soit deux entiers positifs tels que . Par le binôme de Newton, Or pour et pour . Pour avoir , il reste donc à choisir tel que pour tout soit soit ; par exemple convient.    On va montrer que . Pour on a ce qui montre l'inclusion . Réciproquement, soit et un entier positif tel que . Il existe donc pour lequel En particulier divise et donc par la propriété d'unique factorisation. Toujours par cette dernière, divise et donc .    Soit tel que pour un entier . En particulier, pour tout on a et donc . Ainsi , et donc .     "
},
{
  "id": "sec-exercices-geo-alg-14",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-14",
  "type": "Rappel",
  "number": "1.2.4",
  "title": "Nullstelensatz.",
  "body": " Nullstelensatz  L'application induit une bijection d'inverse entre les sous-ensembles algébriques de et les idéaux réduits de .  "
},
{
  "id": "sec-exercices-geo-alg-15",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-15",
  "type": "Rappel",
  "number": "1.2.5",
  "title": "Fermé irréductible.",
  "body": " Fermé irréductible  Soit un espace topologique et un fermé de . On dit que est irréductible si, pour toute décomposition avec des fermés de , alors ou .  "
},
{
  "id": "sec-exercices-geo-alg-16",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-16",
  "type": "Exercice",
  "number": "1.2.5",
  "title": "Variétés irréductibles.",
  "body": " Variétés irréductibles   Soit un sous-ensemble algébrique.    Montrer que est irréductible si et seulement si est premier.    Montrer que est un singleton si et seulement si est maximal.        Supposons irréductible. Soient deux polynômes dont le produit s'annule sur ; c-à-d . On a alors et donc s'écrit que la réunion de et . Comme est irréductible, soit soit de sorte que soit soit s'annule sur ; c-à-d ou , et donc est premier.  Réciproquement, supposons premier et écrivons comme la réunion de deux sous-ensembles algébriques. Si ces sous-ensembles sont propres, alors on peut trouver qui s'annule sur mais pas sur tout et qui s'annule sur mais pas sur tout . Autrement dit mais , contredisant la primalité de .    Si est un singleton, alors est le noyau de l'application , d'évaluation en . Cette application est surjective, donc d'après le théorème d'isomorphisme est un corps. En particulier, est maximal.  Réciproquement supposons maximal. En particulier est non vide car . Soit . De la décroissance de on déduit que l'idéal contient . Cet idéal n'est pas car autrement le polynôme constant s'annulerait en . Comme est maximal on trouve Soit . Les polynômes s'annulent en par l'égalité ci-dessus d'où puis . Ainsi .     "
},
{
  "id": "sec-exercices-geo-alg-17",
  "level": "2",
  "url": "sec-exercices-geo-alg.html#sec-exercices-geo-alg-17",
  "type": "Exercice",
  "number": "1.2.6",
  "title": "<span class=\"process-math\">\\(\\mathbb{C}[X,Y]\\)<\/span> n’est pas principal.",
  "body": " n'est pas principal   Montrer que l'idéal de n'est pas principal.    Supposons principal de générateur . Alors divise , d'où , et de même . Autrement dit est une constante non nulle. Mais une relation comme donnerait que s'annule en , une contradiction.   "
},
{
  "id": "sec-exercices-anneaux",
  "level": "1",
  "url": "sec-exercices-anneaux.html",
  "type": "Section",
  "number": "2.1",
  "title": "Généralités sur les anneaux commutatifs",
  "body": " Généralités sur les anneaux commutatifs   Intégrité et finitude implique corps     Montrer qu'un anneau commutatif fini et intègre est un corps.    Soit un corps. Monter qu'une algèbre commutative de dimension finie et intègre est un corps.         Anneau réduit  Un anneau commutatif est dit réduit s'il n'a pas d'éléments nilpotents non nuls; c-à-d pour tout et , la relation entraîne .    Propriété universelle de     Soit le sous-ensemble des éléments nilpotents de . Montrer que est un idéal.    Montrer que est un anneau réduit.    Montrer que pour tout anneau réduit, on a une bijection     Soit un idéal. Montrer que .       Premiers somme de deux carrés     Soit un nombre premier. Montrer que   En déduire que est somme de deux carrés si et seulement si est un carré modulo .    En déduire le théorème de Fermat sur les premiers somme de deux carrés.       Anneau des adèles du pauvre   On considère le groupe     Montrer que est un anneau. Est-il intègre ? Est-il réduit ?    Soit un entier non nul. Montrer que la multiplication par est bijective sur . En déduire que est une -algèbre.    Montrer que n'admet pas de racine carré dans . Montrer toutefois que l'équation admet une racine non nulle dans .        "
},
{
  "id": "sec-exercices-anneaux-2",
  "level": "2",
  "url": "sec-exercices-anneaux.html#sec-exercices-anneaux-2",
  "type": "Exercice",
  "number": "2.1.1",
  "title": "Intégrité et finitude implique corps.",
  "body": " Intégrité et finitude implique corps     Montrer qu'un anneau commutatif fini et intègre est un corps.    Soit un corps. Monter qu'une algèbre commutative de dimension finie et intègre est un corps.       "
},
{
  "id": "sec-exercices-anneaux-3",
  "level": "2",
  "url": "sec-exercices-anneaux.html#sec-exercices-anneaux-3",
  "type": "Rappel",
  "number": "2.1.1",
  "title": "Anneau réduit.",
  "body": " Anneau réduit  Un anneau commutatif est dit réduit s'il n'a pas d'éléments nilpotents non nuls; c-à-d pour tout et , la relation entraîne .  "
},
{
  "id": "sec-exercices-anneaux-4",
  "level": "2",
  "url": "sec-exercices-anneaux.html#sec-exercices-anneaux-4",
  "type": "Exercice",
  "number": "2.1.2",
  "title": "Propriété universelle de <span class=\"process-math\">\\(A_{\\mathrm{red}}\\)<\/span>.",
  "body": " Propriété universelle de     Soit le sous-ensemble des éléments nilpotents de . Montrer que est un idéal.    Montrer que est un anneau réduit.    Montrer que pour tout anneau réduit, on a une bijection     Soit un idéal. Montrer que .     "
},
{
  "id": "sec-exercices-anneaux-5",
  "level": "2",
  "url": "sec-exercices-anneaux.html#sec-exercices-anneaux-5",
  "type": "Exercice",
  "number": "2.1.3",
  "title": "Premiers somme de deux carrés.",
  "body": " Premiers somme de deux carrés     Soit un nombre premier. Montrer que   En déduire que est somme de deux carrés si et seulement si est un carré modulo .    En déduire le théorème de Fermat sur les premiers somme de deux carrés.     "
},
{
  "id": "sec-exercices-anneaux-6",
  "level": "2",
  "url": "sec-exercices-anneaux.html#sec-exercices-anneaux-6",
  "type": "Exercice",
  "number": "2.1.4",
  "title": "Anneau des adèles du pauvre.",
  "body": " Anneau des adèles du pauvre   On considère le groupe     Montrer que est un anneau. Est-il intègre ? Est-il réduit ?    Soit un entier non nul. Montrer que la multiplication par est bijective sur . En déduire que est une -algèbre.    Montrer que n'admet pas de racine carré dans . Montrer toutefois que l'équation admet une racine non nulle dans .       "
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
