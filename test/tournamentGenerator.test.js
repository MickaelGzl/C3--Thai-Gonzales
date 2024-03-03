import { Faker, fr } from "@faker-js/faker";
import TournamentGenerator from "../src/tournamentGenerator.js";
import TeamGenerator from "../src/teamGenerator.js";
import { expect } from "chai";

const customFaker = new Faker({ locale: [fr] });
const DEFAULT_PLAYERS = customFaker.helpers.multiple(createPlayer, {
  count: 24,
});
let teams;
function createPlayer() {
  return customFaker.person.firstName();
}

describe("Testing the Tournament generator Functions", function () {
  before(function () {
    const teamGenerator = new TeamGenerator(DEFAULT_PLAYERS);
    teamGenerator.generateTeams();
    teams = teamGenerator.getTeams();
  });
  it("1. it should generate poule of 4 teams ", function (done) {
    const tournamentGenerator = new TournamentGenerator(teams);
    tournamentGenerator.generatePoules();
    expect(tournamentGenerator.poules).to.have.lengthOf(
      Math.ceil(DEFAULT_PLAYERS.length / 3 / 4) // 3 players per team and 4 teams per poule
    );

    done();
  });
});
describe("create functionnality for Tournament generation in TDD ", function () {
  before(function () {
    const teamGenerator = new TeamGenerator([...DEFAULT_PLAYERS].splice(0, 9));
    teamGenerator.generateTeams();
    teams = teamGenerator.getTeams();
  });
  it("1. it should not poule cause insufisante teams", function (done) {
    const tournamentGenerator = new TournamentGenerator(teams);
    expect(teams).to.have.lengthOf(3);
    expect(tournamentGenerator.checkNumberOfTeams()).to.not.be.true;

    done();
  });
});
