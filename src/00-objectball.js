// Function to create game object
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [
                {
                    playerName: "Alan Anderson",
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                {
                    playerName: "Reggie Evans",
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                {
                    playerName: "Brook Lopez",
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                {
                    playerName: "Mason Plumlee",
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                {
                    playerName: "Jason Terry",
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            ]
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: [
                {
                    playerName: "Jeff Adrien",
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                {
                    playerName: "Bismak Biyombo",
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                {
                    playerName: "Desagana Diop",
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                {
                    playerName: "Ben Gordon",
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                {
                    playerName: "Brendan Haywood",
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            ]
        }
    };
}

// Function to return points scored by a player
function numPointsScored(playerName) {
    const game = gameObject();

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.playerName === playerName) {
                return player.points;
            }
        }
    }
    return "Player doesn't exist";
}

// Function to return shoe size of a player
function shoeSize(playerName) {
    const game = gameObject();

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.playerName === playerName) {
                return player.shoe;
            }
        }
    }
    return "Player doesn't exist";
}

// Function to return team colors
function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return "Team doesn't exist";
    }
}

// Function to return team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Function to return player numbers of a team
function playerNumbers(teamName) {
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home :
        game.away.teamName === teamName ? game.away : null;

    if (!team) return [];
    return team.players.map(player => player.number);
}

// Function to return stats of a player
function playerStats(playerName) {
    const game = gameObject();

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.playerName === playerName) {
                return player;
            }
        }
    }
    return "Player doesn't exist";
}

// Function to return rebounds of the player with the largest shoe size
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
}

// Bonus Functions
// Function to return the player with the most points
function mostPointsScored() {
    const game = gameObject();
    let topScorer = "";
    let maxPoints = 0;

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.points > maxPoints) {
                maxPoints = player.points;
                topScorer = player.playerName;
            }
        }
    }
    return topScorer;
}

// Function to return the winning team
function winningTeam() {
    const game = gameObject();
    let homePoints = game.home.players.reduce((sum, player) => sum + player.points, 0);
    let awayPoints = game.away.players.reduce((sum, player) => sum + player.points, 0);

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Function to return the player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.playerName.length > longestName.length) {
                longestName = player.playerName;
            }
        }
    }
    return longestName;
}

// Function to check if the player with the longest name had the most steals
function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let longestNameSteals = 0;

    for (const team in game) {
        for (const player of game[team].players) {
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
            }
            if (player.playerName === longestNamePlayer) {
                longestNameSteals = player.steals;
            }
        }
    }
    return longestNameSteals === maxSteals;
}

// Testing the functions
console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Reggie Evans"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
