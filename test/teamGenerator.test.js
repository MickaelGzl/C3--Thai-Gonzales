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
];

describe("Testing the Team Generation Functions", function () {
  it("1. should create 3 teams of 3players sorted aleatory", function (done) {
    const teamGenerator = new TeamGenerator(DEFAULT_PLAYERS);
    teamGenerator.generateTeams();
    expect(teamGenerator.getTeams()).to.have.lengthOf(3);
    expect(teamGenerator.getTeams()[0].players).to.have.lengthOf(3);
    done();
  });

  it("2. should create 4 teams of 2 players and 1 alone ", function (done) {
    const teamGenerator = new TeamGenerator(DEFAULT_PLAYERS, 2);
    teamGenerator.generateTeams();

    expect(teamGenerator.getTeams()).to.have.lengthOf(5);
    expect(teamGenerator.getTeams()[4].players).to.have.lengthOf(1);
    done();
  });

  it("3. should not create teams if players param is a string ", function (done) {
    const teamGenerator = new TeamGenerator("Jean luc Melenchon");
    teamGenerator.generateTeams();

    expect(teamGenerator.getTeams()).to.have.lengthOf(0);

    done();
  });

  it("4. should send an error if playersPerTeams is not a number", function (done) {
    const teamGenerator = new TeamGenerator(DEFAULT_PLAYERS, "toto");
    teamGenerator.generateTeams();

    expect(teamGenerator.getTeams()).to.have.lengthOf(0);

    done();
  });
});
