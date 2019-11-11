const castVote = (name, votes) => {
    result = votes;
    switch (name) {
        case "Tim":
            result[0] += 1;
            break;
        case "Sally":
            result[1] += 1;
            break;
        case "Beth":
            result[2] += 1;
            break;
    }
    return result;
}