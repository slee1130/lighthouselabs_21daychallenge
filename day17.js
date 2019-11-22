const judgeVegetable = (vegetables, metric) => {
    firstplace = vegetables.reduce((Leader, Submission) => {
        return Submission[metric] > Leader[metric] ? Submission : Leader
    })
    return firstplace.submitter
}