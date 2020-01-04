const state = {
    features: [
        {
            name: "Feature #1",
            description: "Desc",
            illustrationURL: require("../assets/illustrations/directions.svg"),
        },
        {
            name: "Feature #2",
            description: "Desc",
            illustrationURL: require("../assets/illustrations/annotation.svg"),
        },
        {
            name: "Feature #3",
            description: "Desc",
            illustrationURL: require("../assets/illustrations/complete_task.svg"),
        },
        {
            name: "Feature #4",
            description: "Desc",
            illustrationURL: require("../assets/illustrations/problem_solving.svg"),
        },
        {
            name: "Feature #5",
            description: "Desc",
            illustrationURL: require("../assets/illustrations/subway.svg"),
        },
        {
            name: "Feature #6",
            description: "Desc",
            illustrationURL: require("../assets/illustrations/location.svg"),
        },
    ],
    reasons: [
        {
            text: "Because all the cool kids do it.",
            explanation:
                "All the cool kids do it, are you gonna tell me you're not about to succumb to peer pressure?",
        },
        {
            text: "Increases available data.",
            explanation:
                "The more you rate the more data we have on you so next time you don't pay your taxes, the government will instantly know your location. Rate!",
        },
        {
            text: "Helps other travellers as well.",
            explanation:
                "As you continue to rate and the data continues to grow, we will be able to track not only you but everyone on the network. We will assume full control of planet Earth.",
        },
        {
            text: "There are incentives.",
            explanation:
                "The more you rate the more likely you are to get checked for a ticket. And declared a Schwarzfahrer and ger fined for 60 Euro. You're welcome!",
        },
    ],
    team: [
        {
            leader: true,
            name: "Asen Georgiev",
            bio: "Lead Leader. Legit Lifter. Amazing Artist.",
            imageURL: require("../assets/placeholder-image.jpg"),
        },
        {
            name: "Derek Haus",
            bio: "Massive legend.",
            imageURL: require("../assets/placeholder-image.jpg"),
        },
        {
            name: "Franz",
            bio: "I don't know him really well.",
            imageURL: require("../assets/placeholder-image.jpg"),
        },
        {
            name: "Yulin",
            bio: "Math wiz.",
            imageURL: require("../assets/placeholder-image.jpg"),
        },
    ],
    contacts: [
        { iconType: "fas", iconName: "envelope", label: "Email", info: "niggas@gaymail.com" },
        { iconType: "fas", iconName: "phone", label: "Phone", info: "006942069420" },
        { iconType: "fab", iconName: "twitter", label: "Twitter", info: "TweetThisBitch" },
        { iconType: "fab", iconName: "facebook", label: "Facebook", info: "BoomerBook" },
        { iconType: "fab", iconName: "skype", label: "Skype", info: "Skype.me.69" },
    ],
};

export default state;
