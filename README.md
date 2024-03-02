| Système    | Sous-système           | Composants          | Fonctions           | Modes de défaillance                                                                                       | Effets d’une défaillance                                                               | G   | F   | D   | Criticité | Actions correctives et précenvites                                       |
| ---------- | ---------------------- | ------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --- | --- | --- | --------- | ------------------------------------------------------------------------ |
| Teams      | Génération des équipes | TeamGenerator       | generateTeams       | Le paramètre players n’est pas itérable                                                                    | mauvaise utilisation de la fonctionnalité, erreur lors de l’exécution de l’application | 8   | 10  | 10  | 800       | Vérification des entrées utilisateurs                                    |
|            |                        |                     |                     | Le paramètre players est une Chaine de caractère                                                           | découpe la chaine et considère chaque lettre comme un joueur                           | 9   | 10  | 10  | 900       | Vérification des entrées utilisateurs                                    |
|            |                        |                     |                     | Le paramètre players est composé d’éléments vides                                                          | Chaque teams contient des éléments vides                                               | 6   | 10  | 8   | 480       | Vérification des éléments envoyées dans le tableau players               |
|            |                        |                     |                     | Le paramètre playerPerTeams n’est pas un nombre (ou NaN)                                                   | L’application crash car consomme trop de mémoire                                       | 10  | 10  | 10  | 1000      | Vérification des entrées utilisateurs                                    |
|            |                        |                     |                     | Players / playersPerTeams ne retourne pas un nombre entier                                                 | inégalité entre les joeurs, perte de fiabilité                                         | 2   | 6   | 8   | 96        | demande de confirmation à l’utilisateur pour accepter des teams inégales |
| Tournament | Génération des poules  | TournamentGenerator | generatePoules      | paramètre teams non itérable, string ou composé d’éléments vides                                           | même risque d’erreurs que recensés précedemment avec players                           | 9   | 10  | 10  | 900       | Vérification des entrées utilisateurs                                    |
|            |                        |                     |                     | le nombre de teamsp est inférieur à 4                                                                      | pas assez d’équipes pour un poule mais aucun retour utilisateur                        | 1   | 2   | 4   | 8         | Message d’information si le nombre de teams est insuffisant              |
|            |                        |                     | generateFinalStages | si nombre de team impair, un stage se fait avec qu’une équipe et risque de retourner undefined pour winner | Erreur lors de l’affichage des différents tournaments et de l’équipe gagnante          | 8   | 5   | 5   | 200       | Vérification du nombre d’équipes inscrites pour le tournament            |
|            |                        |                     | generateTournament  | le code s’exécute même dans le cas où il n’y a aucune équipe participante                                  | utilisation de mémoire inutile                                                         | 1   | 1   | 6   | 6         | Vérification du nombre de teams avant lancement du tournois              |
