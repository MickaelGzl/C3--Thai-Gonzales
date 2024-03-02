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
});
