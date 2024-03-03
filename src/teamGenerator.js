class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  verifyTeamsEquality() {
    if (this.players.length % this.playersPerTeam !== 0) {
      return false;
    }
    return true;
  }

  validateEntries() {
    if (!Array.isArray(this.players)) {
      return [false, "players need to be an array"];
    } else if (
      typeof this.playersPerTeam !== "number" ||
      isNaN(this.playersPerTeam)
    ) {
      return [false, "number of players per teams need to be a number"];
    }
    return [true];
  }

  generateTeams() {
    const isValidEntries = this.validateEntries();
    if (!isValidEntries[0]) return console.log(isValidEntries[1]);

    if (!this.verifyTeamsEquality()) {
      return console.log(
        "Les teams générées ne sont pas égales en termes de joueurs."
      );
    }

    let shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random()); // Mélange aléatoire des joueurs
    let teamIndex = 0;

    while (shuffledPlayers.length > 0) {
      let teamPlayers = shuffledPlayers.splice(0, this.playersPerTeam);
      let teamName = `Équipe ${teamIndex + 1}`;
      let team = {
        name: teamName,
        players: teamPlayers,
      };
      this.teams.push(team);
      teamIndex++;
    }
  }

  getTeams() {
    return this.teams;
  }
}

export default TeamGenerator;
// Exemple d'utilisation
