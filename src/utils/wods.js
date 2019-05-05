// Fetching command:
// object.data.wods.map((wod) => ({title: wod.title, type: wod.score_types, how: wod.exercises_title, exercises: wod.exercises}))

const wods = [
  {
    exercises: ["Thrusters (95/65 lb)", "Pull-Ups"],
    how: "21-15-9 Reps For Time",
    isSaved: false,
    title: "Fran",
    type: "For Time",
  },
  {
    exercises: ["30 Clean-and-Jerks (135/95 lb)"],
    how: "For Time",
    isSaved: false,
    title: "Grace",
    type: "For Time",
  },
  {
    exercises: ["5 Pull-Ups", "10 Push-Ups", "15 Air Squats"],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Cindy",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "500 meter Row",
      "12 Deadlifts (Bodyweight)",
      "21 Box Jumps (24/20 in)",
    ],
    how: "3 Rounds for Time",
    isSaved: false,
    title: "Christine",
    type: "For Time",
  },
  {
    exercises: [
      "400 meter Run",
      "21 Kettlebell Swings (1.5/1 pood)",
      "12 Pull-Ups",
    ],
    how: "3 Rounds For Time",
    isSaved: false,
    title: "Helen",
    type: "For Time",
  },
  {
    exercises: [
      "Deadlift (1.5 bodyweight)",
      "Bench Press (bodyweight)",
      "Clean (3/4 bodyweight)",
    ],
    how: "10-9-8-7-6-5-4-3-2-1 Reps, For Time",
    isSaved: false,
    title: "Linda",
    type: "For Time",
  },
  {
    exercises: ["Double-Unders", "Sit-Ups"],
    how: "50-40-30-20-10 Reps For Time",
    isSaved: false,
    title: "Annie",
    type: "For Time",
  },
  {
    exercises: [
      "1,000 Meter Row",
      "50 Thrusters (45/35 lb bar)",
      "30 Pull-Ups",
    ],
    how: "For Time",
    isSaved: false,
    title: "Jackie",
    type: "For Time",
  },
  {
    exercises: ["30 Snatches (135/95 lb)"],
    how: "For Time",
    isSaved: false,
    title: "Isabel",
    type: "For Time",
  },
  {
    exercises: [
      "20 Pull-Ups",
      "30 Push-Ups",
      "40 Sit-Ups",
      "50 Air Squats",
      "3 Minutes Rest",
    ],
    how: "5 Rounds For Time",
    isSaved: false,
    title: "Barbara",
    type: "For Time",
  },
  {
    exercises: ["Deadlift (225/155 lb)", "Handstand Push-Ups"],
    how: "21-15-9 Reps For Time",
    isSaved: false,
    title: "Diane",
    type: "For Time",
  },
  {
    exercises: ["150 Wall Ball Shots (20/14 lb, 10/9 ft)"],
    how: "For Time",
    isSaved: false,
    title: "Karen",
    type: "For Time",
  },
  {
    exercises: ["400 meter Run", "15 Overhead Squats (95/65 lb)"],
    how: "5 Rounds For Time",
    isSaved: false,
    title: "Nancy",
    type: "For Time",
  },
  {
    exercises: ["5 Pull-Ups", "10 Push-Ups", "15 Air Squats"],
    how: "EMOM in 30 minutes",
    isSaved: false,
    title: "Chelsea",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "100 Pull-Ups",
      "100 Push-Ups",
      "100 Sit-Ups",
      "100 Air Squats",
    ],
    how: "For Time",
    isSaved: false,
    title: "Angie",
    type: "For Time",
  },
  {
    exercises: ["Squat Cleans (135/95 lb)", "Ring Dips"],
    how: "21-15-9 Reps For Time",
    isSaved: false,
    title: "Elizabeth",
    type: "For Time",
  },
  {
    exercises: [
      "5 Handstand Push-Ups",
      "10 Pistols (alternating legs)",
      "15 Pull-Ups",
    ],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Mary",
    type: "For Rounds / Reps",
  },
  {
    exercises: ["Muscle-Ups", "Squat Snatches (135/95 lbs)"],
    how: "9-7-5 Reps For Time",
    isSaved: false,
    title: "Amanda",
    type: "For Time",
  },
  {
    exercises: [
      "50 Air Squats",
      "7 Muscle-Ups",
      "10 Hang Power Cleans (135/95 lb)",
    ],
    how: "3 Rounds For Time",
    isSaved: false,
    title: "Nasty Girls",
    type: "For Time",
  },
  {
    exercises: [
      "400 meter Run",
      "30 Box Jumps (24/20 in)",
      "30 Wall Ball Shots (20/14 lb)",
    ],
    how: "5 Rounds For Time",
    isSaved: false,
    title: "Kelly",
    type: "For Time",
  },
  {
    exercises: [
      "800 meter Run",
      "30 Kettlebell Swings (2/1.5 pood)",
      "30 Pull-Ups",
    ],
    how: "5 Rounds For Time",
    isSaved: false,
    title: "Eva",
    type: "For Time",
  },
  {
    exercises: ["Bench Press (bodyweight)", "Pull-Ups"],
    how: "5 Rounds for Max Reps",
    isSaved: false,
    title: "Lynne",
    type: "For Rounds / Reps",
  },
  {
    exercises: ["400 Meter Run", "Max Pull-Ups"],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Nicole",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "10 Pull-Ups",
      "20 Push-Ups",
      "30 Air Squats",
      "15 Pull-Ups",
      "30 Push-Ups",
      "45 Air Squats",
      "20 Pull-Ups",
      "40 Push-Ups",
      "60 Air Squats",
      "25 Pull-Ups",
      "50 Push-Ups",
      "75 Air Squats",
      "30 Pull-Ups",
      "60 Push-Ups",
      "90 Air Squats",
    ],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Cindy XXX",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "Muscle-Ups",
      "Squat Snatches (135/95 lb)",
      "",
      "Time cap: 13 minutes for males, 15 minutes for females",
    ],
    how: "13-11-9-7-5 Reps for Time",
    isSaved: false,
    title: "Amanda .45",
    type: "For Time",
  },
  {
    exercises: [
      "1 Burpee",
      "1 Push-Up",
      "1 Jumping-Jack",
      "1 Sit-Up",
      "1 Handstand",
    ],
    how: "50 Rounds for Time",
    isSaved: false,
    title: "Marguerita",
    type: "For Time",
  },
  {
    exercises: ["Thrusters (135/95 lb)", "Weighted Pull-Ups (45/30 lb)"],
    how: "15-12-9 Reps For Time",
    isSaved: false,
    title: "Heavy Fran",
    type: "For Time",
  },
  {
    exercises: [
      "Clean-and-Jerks (unbroken)",
      "",
      "Rest as needed between sets",
    ],
    how: "15-12-9 Reps for Load",
    isSaved: false,
    title: "Gwen",
    type: "For Load",
  },
  {
    exercises: ["20 Pull-Ups", "40 Push-Ups", "60 Air Squats"],
    how: "5 Rounds for Time",
    isSaved: false,
    title: "Candy",
    type: "For Time",
  },
  {
    exercises: ["800m Run ", "15 Dumbbell Thrusters (45/35 lb)", "15 Pull-Ups"],
    how: "5 Rounds for Time",
    isSaved: false,
    title: "Frelen",
    type: "For Time",
  },
  {
    exercises: ["5 Pull-Ups", "10 Push-Ups", "15 Air Squats", "20 calorie Row"],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Row Cindy Row",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "10 Handstand Push-Ups",
      "20 Pistols (alternating legs)",
      "30 Pull-Ups",
      "15 Handstand Push-Ups",
      "30 Pistols (alternating legs)",
      "45 Pull-Ups",
      "20 Handstand Push-Ups",
      "40 Pistols (alternating legs)",
      "60 Pull-Ups",
      "25 Handstand Push-Ups",
      "50 Pistols (alternating legs)",
      "75 Pull-Ups",
      "30 Handstand Push-Ups",
      "60 Pistols (alternating legs)",
      "90 Pull-Ups",
    ],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Mary XXX",
    type: "For Rounds / Reps",
  },
  {
    exercises: ["5 Handstand Push-Ups", "10 Pull-Ups", "25 Air Squats"],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Easy Mary",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "5 Weighted Pull-Ups (35/25 lb)",
      '10 Incline Push-Ups (feet on 30/24" box)',
      "15 Squats (with 45/35 lb plate)",
    ],
    how: "AMRAP in 20 minutes",
    isSaved: false,
    title: "Hard Cindy",
    type: "For Rounds / Reps",
  },
  {
    exercises: [
      "50 Pistols (alternating legs)",
      "7 Muscle-Ups",
      "10 Hang Power Cleans (175/125 lb)",
    ],
    how: "3 Rounds for Time",
    isSaved: false,
    title: "Nasty Girls v2",
    type: "For Time",
  },
  {
    exercises: [
      "3 Power Snatches (135/95 lb)",
      "15 Wall Ball Shots (20/14 lb, 10/9 ft)",
    ],
    how: "10 Rounds for Time",
    isSaved: false,
    title: "Karabel",
    type: "For Time",
  },
  {
    exercises: ["60 Clean-and-Jerks (135/95 lb)"],
    how: "For Time",
    isSaved: false,
    title: "Double Grace",
    type: "For Time",
  },
  {
    exercises: ["9 Thrusters (95/65 lb)", "9 Pull-Ups"],
    how: "5 Rounds for Time",
    isSaved: false,
    title: "Fractured Fran",
    type: "For Time",
  },
  {
    exercises: [
      "20 Handstand Push-Ups",
      "40 Pull-Ups",
      "60 Pistols (Alternating Legs)",
    ],
    how: "5 Rounds for Time",
    isSaved: false,
    title: "Maggie",
    type: "For Time",
  },
  {
    exercises: [
      "800 meter Run",
      "50 Thrusters (45/35 lb barbell)",
      "30 Pull-Ups",
    ],
    how: "For Time",
    isSaved: false,
    title: "Running Jackie",
    type: "For Time",
  },
  {
    exercises: [
      "800 meter Run",
      "42 Kettlebell Swings (1.5/1 pood)",
      "24 Pull-Ups",
    ],
    how: "3 Rounds for Time",
    isSaved: false,
    title: "Double Helen",
    type: "For Time",
  },
  {
    exercises: [
      "5 Strict Handstand Push-Ups",
      "10 Pistols",
      "15 Strict Pull-Ups",
      "10 Strict Handstand Push-Ups",
      "20 Pistols",
      "30 Strict Pull-Ups",
      "15 Strict Handstand Push-Ups",
      "30 Pistols",
      "45 Strict Pull-Ups",
      "10 Strict Handstand Push-Ups",
      "20 Pistols",
      "30 Strict Pull-Ups",
      "5 Strict Handstand Push-Ups",
      "10 Pistols",
      "15 Strict Pull-Ups",
    ],
    how: "For Time",
    isSaved: false,
    title: "Special Mary",
    type: "For Time",
  },
  {
    exercises: [
      "60 seconds of Deadlifts (225/155 lb)",
      "60 seconds of Handstand Push-Ups",
      "45 seconds of Deadlifts (225/155 lb)",
      "45 seconds of Handstand Push-Ups",
      "30 seconds of Deadlifts (225/155 lb)",
      "30 seconds of Handstand Push-Ups",
    ],
    how: "Max Reps in 4 minutes 30 seconds",
    isSaved: false,
    title: "Time Priority Diane",
    type: "For Rounds / Reps",
  },
];

export default wods;
