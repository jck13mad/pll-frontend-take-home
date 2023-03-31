export interface Player {
    clubTeam: string | null;
    college: string | null;
    collegeYear: number | null;
    country: string | null;
    countryCode: string | null;
    dob: string | null;
    age: number | null;
    firstName: string | null;
    handedness: string | null;
    height: string | null;
    highSchool: string | null;
    hometown: string | null;
    instagramUrl: string | null;
    injuryDescription: string | null;
    injuryStatus: string | null;
    isCaptain: boolean | null;
    jerseyNum: number | null;
    lastName: string | null;
    lastNameSuffix: string | null;
    nickname: string | null;
    officialId: string | null;
    bio: string | null;
    position: string | null;
    positionName: string | null;
    profileUrl: string | null;
    scratch: boolean | null;
    twitterUrl: string | null;
    weight: number | null;
    expFromYear: number | null;
    slug: string | null;
    stats: Stats;
}

export interface Stats {
    gamesPlayed: number | null;
    gamesStarted: number | null;
    plusMinus: number | null;
    assists: number | null;
    goals: number | null;
    onePointGoals: number | null;
    points: number | null;
    powerPlayGoals: number | null;
    shortHandedGoals: number | null;
    shotPct: number | null;
    shots: number | null;
    shotsOnGoal: number | null;
    shotsOnGoalPct: number | null;
    powerPlayShots: number | null;
    twoPointGoals: number | null;
    twoPointShots: number | null;
    twoPointShotPct: number | null;
    twoPointShotsOnGoal: number | null;
    twoPointShotsOnGoalPct: number | null;
    numPenalties: number | null;
    pim: number | null;
    pimValue: number | null;
    GAA: number | null;
    goalieLosses: number | null;
    goalieTies: number | null;
    goalieWins: number | null;
    goalsAgainst: number | null;
    saa: number | null;
    savePct: number | null;
    saves: number | null;
    scoresAgainst: number | null;
    shortHandedGoalsAgainst: number | null;
    shortHandedShots: number | null;
    twoPointGoalsAgainst: number | null;
    twoPtGaa: number | null;
    powerPlayGoalsAgainst: number | null;
    faceoffPct: number | null;
    faceoffs: number | null;
    faceoffsLost: number | null;
    faceoffsWon: number | null;
    foRecord: string | null;
    tof: number | null;
    turnovers: number | null;
    causedTurnovers: number | null;
    groundBalls: number | null;
}