function mostFrequentElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    const frequency = {};

    arr.forEach(element => {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    });

    let mostCommonElement = arr[0];
    let maxFrequency = 0;

    for (const element in frequency) {
        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostCommonElement = element;
        }
    }

    return mostCommonElement;
}

class Voter {
    constructor() {
        this.train_dictionary = {};
        this.options = [];
    }

    setOptions(options_) {
        this.options = options_;
    }

    train(input, trainList) {
        let input_train = this.train_dictionary[input];
        if (!Array.isArray(input_train)) {
            input_train = [];
            for (let train_item of trainList) {
                let isInOption = this.options.includes(train_item);
                if (!isInOption) {
                    console.error("A item in the train list isn't in options");
                    return;
                }
            }
            this.train_dictionary[input] = input_train;
        }

        for (let train_item of trainList) {
            let isInOption = this.options.includes(train_item);
            if (!isInOption) {
                console.error("A item in the train list isn't in options");
                return;
            }

            input_train.push(train_item);
        }

        console.log("Success");
    }

    respond(input) {
        let input_list = this.train_dictionary[input];
        if (!input_list) {
            console.error("No trained data for input:", input);
            return;
        }

        let output = input_list[~~(Math.random() * input_list.length)];
        return output;
    }
}

class VoteAlgorithm {
    constructor(voters_num, options) {
        this.voters = [];
        this.last_response = "";
        this.last_input = "";
        for (let i = 0; i < voters_num; i++) {
            let new_voter = new Voter();
            new_voter.setOptions(options);
            this.voters.push(new_voter);
        }
    }

    train(input, trainList) {
        for (let voter of this.voters) {
            voter.train(input, trainList)
        }
    }

    respond(input) {
        let votes = [];
        for (let voter of this.voters) {
            votes.push(voter.respond(input));
        }

        console.log("votes: " + votes);

        this.last_input = input;
        this.last_response = mostFrequentElement(votes);
        return this.last_response;
    }

    last_answer_correct(bool) {
        if (bool === true) {
            this.train(this.last_input, [this.last_response]);
        }
    }
}


module.exports = {
    Voter,
    VoteAlgorithm
};