import TournamentGenerator from "../src/tournamentGenerator.js";
import TeamGenerator from "../src/teamGenerator.js";
import { expect } from "chai";
const DEFAULT_PLAYERS = [
  "Toto",
  "Alice",
  "Bob",
  "Roro",
  "Mary",
  "Titi",
  "Zozo",
  "Micka",
  "Isa",
  "Toto1",
  "Alice1",
  "Bob1",
  "Roro1",
  "Mary1",
  "Titi1",
  "Zozo1",
  "Micka1",
  "Isa1",
  "Roro2",
  "Mary2",
  "Titi2",
  "Zozo2",
  "Micka2",
  "Isa2",
];

describe("Testing the Tournament generator Functions", function () {
  it("1. it should generate poule of 4 teams ", function (done) {
    const teamGenerator = new TeamGenerator(DEFAULT_PLAYERS);
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();
    const tournamentGenerator = new TournamentGenerator(teams);
    tournamentGenerator.generatePoules();
    expect(tournamentGenerator.poules).to.have.lengthOf(
      Math.ceil(DEFAULT_PLAYERS.length / 3 / 4)
    );

    done();
  });
});
