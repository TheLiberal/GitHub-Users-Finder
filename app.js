// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;

//* Search input
const searchUser = document.getElementById("searchUser");


//* Search input event listener

searchUser.addEventListener("keyup", (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        //* Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    //* Show alert
                    // Materialize.toast(message, displayLength, className, completeCallback);
                    Materialize.toast('User not found', 3800, 'indigo rounded') // 4000 is the duration of the toast
                } else {
                    //* Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //* Clear the profile
        ui.clearProfile();
    }
});