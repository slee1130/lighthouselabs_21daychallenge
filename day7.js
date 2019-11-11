const termTopics = (interviews) => {
    let TopicCount = [0, 0, 0];
    for (let i = 0; i < interviews.length; i++) {
        if (interviews[i] == "smart city") {
            TopicCount[0]++;
        } else if (interviews[i] == "arts funding") {
            TopicCount[1]++;
        } else if (interviews[i] == "transportation") {
            TopicCount[2]++;
        }
    }
    return (TopicCount);
};