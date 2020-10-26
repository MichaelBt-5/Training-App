const excerciseList = [
    {
        name: 'Biceps curl',
        difficulty: 1,
        muscleGroup: 'Biceps',
        trainingType: 'Strength training',
        id: 1,
        advance: 'Beginner',
    },
    {
        name: 'Triceps extension',
        difficulty: 2,
        muscleGroup: 'Triceps',
        trainingType: 'Conditioning training',
        id: 2,
        advance: 'Intermidate',
    },
    {
        name: 'Leg press',
        difficulty: 3,
        muscleGroup: 'Quadriceps',
        trainingType: 'Crossfit training',
        id: 3,
        advance: 'Advanced',
    },
    {
        name: 'Bench press',
        difficulty: 2,
        muscleGroup: 'Pecs',
        trainingType: 'Strength training',
        id: 4,
        advance: 'Intermidate',
    },
    {
        name: 'Barbell row',
        difficulty: 1,
        muscleGroup: 'Back',
        trainingType: 'Strength training',
        id: 5,
        advance: 'Beginner',
    },
    {
        name: 'Back squat',
        difficulty: 2,
        muscleGroup: 'Quadriceps',
        trainingType: 'Strength training',
        id: 6,
        advance: 'Intermidate',
    },
    {
        name: 'Air squat',
        difficulty: 1,
        muscleGroup: 'Quadriceps',
        trainingType: 'Conditioning training',
        id: 7,
        advance: 'Beginner',
    },
    {
        name: 'Ergometer row',
        difficulty: 1,
        muscleGroup: 'Back',
        trainingType: 'Crossfit training',
        id: 8,
        advance: 'Beginner',
    },
    {
        name: 'Dips',
        difficulty: 3,
        muscleGroup: 'Triceps',
        trainingType: 'Crossfit training',
        id: 9,
        advance: 'Advanced',
    },
    {
        name: 'Deadlift',
        difficulty: 2,
        muscleGroup: 'Back',
        trainingType: 'Strength training',
        id: 10,
        advance: 'Intermidate',
    },
    {
        name: 'Chin ups',
        difficulty: 2,
        muscleGroup: 'Biceps',
        trainingType: 'Strength training',
        id: 11,
        advance: 'Intermidate',
    },
    {
        name: 'Push ups',
        difficulty: 1,
        muscleGroup: 'Pecs',
        trainingType: 'Crossfit training',
        id: 12,
        advance: 'Beginner',
    },
    {
        name: 'Pectoral fly',
        difficulty: 2,
        muscleGroup: 'Pecs',
        trainingType: 'Strength training',
        id: 13,
        advance: 'Intermidate',
    },
    {
        name: 'French press',
        difficulty: 1,
        muscleGroup: 'Triceps',
        trainingType: 'Strength training',
        id: 14,
        advance: 'Beginner',
    },
    {
        name: 'Hammer curl',
        difficulty: 1,
        muscleGroup: 'Biceps',
        trainingType: 'Strength training',
        id: 15,
        advance: 'Beginner',
    },
]

export const muscles = [
    {
        muscle: 'Rhomboids',
        id: 1,
    },
    {
        muscle: 'Biceps',
        id: 2,
    },{
        muscle: 'Pecs',
        id: 3,
    },{
        muscle: 'Quadriceps',
        id: 4,
    },
    {
        muscle: 'Triceps',
        id: 5,
    },
    {
        muscle: 'Glutes',
        id: 6,
    },
    {
        muscle: 'Hamstrings',
        id: 7,
    },
    {
        muscle: 'Deltoids',
        id: 8,
    },
    {
        muscle: 'Lats',
        id: 9,
    },
    {
        muscle: 'Abs',
        id: 10,
    },
    {
        muscle: 'Obliques',
        id: 11,
    },
    {
        muscle: 'Trapezius',
        id: 12,
    },
    {
        muscle: 'Calfs',
        id: 13,
    },
    {
        muscle: 'Erector',
        id: 14,
    },
]

export const excerciseToMuscle = [
    {
        muscleId: 2,
        excerciseId: 1,
    },
    {
        muscleId: 5,
        excerciseId: 2,
    },
    {
        muscleId: 4,
        excerciseId: 3,
    },
    {
        muscleId: 6,
        excerciseId: 3,
    },
    {
        muscleId: 7,
        excerciseId: 3,
    },
    {
        muscleId: 3,
        excerciseId: 4,
    },
    {
        muscleId: 5,
        excerciseId: 4,
    },
    {
        muscleId: 8,
        excerciseId: 4,
    },
    {
        muscleId: 1,
        excerciseId: 5,
    },
    {
        muscleId: 2,
        excerciseId: 5,
    },
    {
        muscleId: 8,
        excerciseId: 5,
    },
    {
        muscleId: 9,
        excerciseId: 5,
    },
    {
        muscleId: 12,
        excerciseId: 5,
    },
    {
        muscleId: 4,
        excerciseId: 6,
    },
    {
        muscleId: 6,
        excerciseId: 6,
    },
    {
        muscleId: 7,
        excerciseId: 6,
    },
    {
        muscleId: 10,
        excerciseId: 6,
    },
    {
        muscleId: 13,
        excerciseId: 6,
    },
    {
        muscleId: 4,
        excerciseId: 7,
    },
    {
        muscleId: 6,
        excerciseId: 7,
    },
    {
        muscleId: 7,
        excerciseId: 7,
    },
    {
        muscleId: 13,
        excerciseId: 7,
    },
    {
        muscleId: 1,
        excerciseId: 8,
    },
    {
        muscleId: 4,
        excerciseId: 8,
    },
    {
        muscleId: 9,
        excerciseId: 8,
    },
    {
        muscleId: 12,
        excerciseId: 8,
    },
    {
        muscleId: 13,
        excerciseId: 8,
    },
    {
        muscleId: 3,
        excerciseId: 9,
    },
    {
        muscleId: 5,
        excerciseId: 9,
    },
    {
        muscleId: 8,
        excerciseId: 9,
    },
    {
        muscleId: 4,
        excerciseId: 10,
    },
    {
        muscleId: 6,
        excerciseId: 10,
    },
    {
        muscleId: 7,
        excerciseId: 10,
    },
    {
        muscleId: 9,
        excerciseId: 10,
    },
    {
        muscleId: 10,
        excerciseId: 10,
    },
    {
        muscleId: 12,
        excerciseId: 10,
    },
    {
        muscleId: 14,
        excerciseId: 10,
    },
    {
        muscleId: 1,
        excerciseId: 11,
    },
    {
        muscleId: 2,
        excerciseId: 11,
    },
    {
        muscleId: 3,
        excerciseId: 11,
    },
    {
        muscleId: 9,
        excerciseId: 11,
    },
    {
        muscleId: 12,
        excerciseId: 11,
    },
    {
        muscleId: 3,
        excerciseId: 12,
    },
    {
        muscleId: 5,
        excerciseId: 12,
    },
    {
        muscleId: 8,
        excerciseId: 12,
    },
    {
        muscleId: 3,
        excerciseId: 13,
    },
    {
        muscleId: 5,
        excerciseId: 13,
    },
    {
        muscleId: 8,
        excerciseId: 13,
    },
    {
        muscleId: 5,
        excerciseId: 14,
    },
    {
        muscleId: 2,
        excerciseId: 15,
    },
]

export default excerciseList