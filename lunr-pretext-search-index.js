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
  "body": " Factorisation   Éléments associés, irréductibles et premiers    Deux éléments sont associés s'il existe tel que .    Un élément est irréductible s'il est non nul, non inversible, et si toute égalité , avec , entraîne que ou est inversible.    Un élément est premier s'il est non nul, non inversible, et si, pour tous ,       Propriété de factorisation et anneau factoriel    L'anneau  admet la propriété de factorisation si tout élément non nul et non inversible de s'écrit comme un produit fini d'éléments irréductibles :     L'anneau est factoriel s'il admet la propriété de factorisation et si cette factorisation est unique à l'ordre des facteurs et à association près. Autrement dit, si   avec tous les et irréductibles, alors et il existe une permutation de telle que et soient associés pour tout .      Anneau principal  L'anneau est principal si tout idéal de est engendré par un seul élément : il existe tel que     Stathme et anneau euclidien  Un stathme euclidien sur est une application telle que, pour tous et , il existe vérifiant   L'anneau est euclidien s'il admet un tel stathme. Les éléments et sont respectivement un quotient et un reste de la division de par ; leur unicité n'est pas exigée.    Euclidien implique principal, qui implique factoriel, et admet la propriété de factorisation.   Inclusions entre classes d'anneaux intègres.   Euclidiens inclus dans principaux, inclus dans factoriels, inclus dans atomiques.   Quatre rectangles emboîtés représentent, du plus petit au plus grand, les anneaux euclidiens, principaux, factoriels, puis les anneaux admettant la propriété de factorisation.      Ces inclusions sont strictes en général. L'anneau est principal mais non euclidien ; , pour un corps, est factoriel mais non principal ; admet la propriété de factorisation mais n'est pas factoriel.    Mes premiers anneaux euclidiens     Montrer que est euclidien.    Soit un corps. Montrer que est euclidien.    Montrer que l'anneau est euclidien de stathme .    Montrer que l'anneau est euclidien.        On montre que la valeur absolue est un stathme pour en utilisant la division euclidienne classique.    On montre que le degré est un stathme pour . Soit un polynôme non nul de que l'on suppose unitaire sans perte de généralité. Soit . On montre par récurrence sur qu'il existe tels que Si , alors soit et on prend et , soit et on prend et .  Si , alors soit et on prend et , soit . Dans ce dernier cas, on écrit comme où et on applique l'hypothèse de récurrence à pour en déduire l'existence de tels que On pose alors et pour en déduire avec ou .    Soit non nul et soit . Le quotient est un nombre complexe, et l'on note et sa partie réelle et sa partie imaginaire. Tout nombre réel se décompose de manière unique comme la somme d'un entier et d'un nombre réel ; on applique ce fait à et pour obtenir avec et de norme . On pose et l'on obtient avec .    On procède de manière analogue à l'exercice précédent, en utilisant le stathme . Cette fois-ci, on décompose la partie imaginaire de comme la somme d'un élément de et d'un élément de .       Caractérisation d'Euler-Gauss   Soit un anneau (commutatif, unitaire) intègre.    Montrer que tout élément premier est irréductible.    Soit un anneau qui vérifie la propriété de factorisation. Montrer que est factoriel si et seulement si tout élément irréductible est premier.        Soit premier et supposons que avec . Alors , donc ou . Supposons que , alors il existe tel que . On obtient alors par intégrité Ainsi, est inversible et est irréductible.    Supposons que est factoriel et soit irréductible. Soit tels que et soit tel que . Comme est factoriel, on peut écrire , et avec tous les irréductibles. On obtient alors Par unicité de la factorisation, il existe un tel que et soient associés. Ainsi, ou , et est premier.  Réciproquement, supposons que tout élément irréductible est premier. Soit non nul et non inversible. Comme admet la propriété de factorisation, on peut écrire avec tous les irréductibles. Si l'on a une autre factorisation , alors . Comme est premier, il divise un des , disons . Par irréductibilité, ils sont associés et l'on peut simplifier pour obtenir On conclut par récurrence sur le nombre de facteurs.       Déterminer les irréductibles     Quels sont les éléments irréductibles de ?    Quels sont les irréductibles de ? De ?    Quels sont les irréductibles de ? De ?        Les éléments irréductibles de sont les nombres premiers et leurs opposés.    Les éléments irréductibles de sont les polynômes de degré 1. Les éléments irréductibles de sont les polynômes de degré 1 et les polynômes quadratiques à discriminant strictement négatif.           n'est pas factoriel   On considère l'anneau et l'application     Montrer que est multiplicative et déterminer les éléments inversibles de .    Montrer, par récurrence sur la norme, que admet la propriété de factorisation.    En étudiant les décompositions montrer que n'est pas factoriel.          Résolution d'une équation diophantienne   On se propose de montrer que les seules solutions de l'équation sont .    Montrer que et sont impairs.    Montrer que et sont premiers entre eux dans .    En déduire que est un cube dans et conclure.        "
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
  "body": " Déterminer les irréductibles     Quels sont les éléments irréductibles de ?    Quels sont les irréductibles de ? De ?    Quels sont les irréductibles de ? De ?        Les éléments irréductibles de sont les nombres premiers et leurs opposés.    Les éléments irréductibles de sont les polynômes de degré 1. Les éléments irréductibles de sont les polynômes de degré 1 et les polynômes quadratiques à discriminant strictement négatif.         "
},
{
  "id": "ex-factorisation-non-factorialite-racine-moins-cinq",
  "level": "2",
  "url": "sec-exercices-factorisation.html#ex-factorisation-non-factorialite-racine-moins-cinq",
  "type": "Exercice",
  "number": "1.1.4",
  "title": "<span class=\"process-math\">\\(\\mathbb{Z}[i\\sqrt{5}]\\)<\/span> n’est pas factoriel.",
  "body": " n'est pas factoriel   On considère l'anneau et l'application     Montrer que est multiplicative et déterminer les éléments inversibles de .    Montrer, par récurrence sur la norme, que admet la propriété de factorisation.    En étudiant les décompositions montrer que n'est pas factoriel.        "
},
{
  "id": "sec-exercices-factorisation-11",
  "level": "2",
  "url": "sec-exercices-factorisation.html#sec-exercices-factorisation-11",
  "type": "Exercice",
  "number": "1.1.5",
  "title": "Résolution d’une équation diophantienne.",
  "body": " Résolution d'une équation diophantienne   On se propose de montrer que les seules solutions de l'équation sont .    Montrer que et sont impairs.    Montrer que et sont premiers entre eux dans .    En déduire que est un cube dans et conclure.       "
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
