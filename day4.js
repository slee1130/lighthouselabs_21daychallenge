const registerToVote = (name, unregisteredVoters) => {
    // Code here!
    let mailingList = []
    for (i = 0; i < unregisteredVoters.length; i++) {
        if (name != unregisteredVoters[i]) {
            mailingList.push(unregisteredVoters[i])
        }
    }

    return mailingList;
    // Remember to return a value!
}