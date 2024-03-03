import { Faker, fr } from "@faker-js/faker";
import TournamentGenerator from "../src/tournamentGenerator.js";
import TeamGenerator from "../src/teamGenerator.js";
import { expect } from "chai";

const customFaker = new Faker({ locale: [fr] });
const DEFAULT_PLAYERS = customFaker.helpers.multiple(createPlayer, {
  count: 24,
});

function createPlayer() {
  return customFaker.person.firstName();
}

describe("Testing the Tournament generator Functions", function () {
  it("1. it should generate poule of 4 teams ", function (done) {
    console.log(DEFAULT_PLAYERS);
    const teamGenerator = new TeamGenerator(DEFAULT_PLAYERS);
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();
    const tournamentGenerator = new TournamentGenerator(teams);
    tournamentGenerator.generatePoules();
    expect(tournamentGenerator.poules).to.have.lengthOf(
      Math.ceil(DEFAULT_PLAYERS.length / 3 / 4) // 3 players per team and 4 teams per poule
    );

    done();
  });
});
