class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="container">
        <div class="card">
            <div class="row">
                <div class="col s3 center">
                    <div class="container">
                        <img src="${user.avatar_url}" alt="avatar" class="responsive-img">
                        <a href="${user.html_url}" class="btn waves-effect indigo">View profile</a>
                    </div>
                </div>
                <div class="col s9">
                    <div class="collection">
                        <a class="collection-item black-text"><span class="indigo white-text badge">${user.public_repos}</span>Public Repos: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text ">${user.public_gists}</span>Public gists: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text">${user.followers}</span>Followers: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text">${user.following}</span>Following: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text">${user.company}</span>Company: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text">${user.blog}</span>Website: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text">${user.location}</span>Location: </a>
                        <a class="collection-item black-text"><span class="badge indigo white-text">${user.created_at}</span>Member since: </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <h3 class="large mb-10">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `
            <div class="card">
                <div class="row">
                    <div class="col s6">
                        <a href="${repo.html_url}" class="center" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col s6">
                        <div class="collection">
                            <a class="collection-item black-text">
                                Stars:<span class="indigo white-text badge"> ${repo.stargazers_count}</span>
                            </a>
                            <a class="collection-item black-text">
                                Watchers:<span class="indigo white-text badge"> ${repo.watchers_count}</span> 
                            </a>
                            <a class="collection-item black-text">Forks:<span class="indigo white-text badge"> ${repo.forks_count}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        // Output the repos
        document.getElementById("repos").innerHTML = output;
    }


    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}