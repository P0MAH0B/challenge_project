function userInformationHTML(user){
    return `
    <h2>${user.name}
        <span class="small-name">
            (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
        </span>
    </h2>
    <div class="gh-content>
        <div class="gh-avatar">
            <a href="${user.html_url}" target="_blank">
                <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}"/>
            </a>
        </div>
        <p>Followers: ${user.followers} - Folowing ${user.following} <br> Repos: ${user.public_repos}</p>
    </div>`;
}

function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/images/loader.gif" alt="loading..." />
            </div>`);

    $.when(
        $.getJSON(`http://api.github.com/users/${username}`)
    ).then(
        function(responce) {
            var userData = responce;
            $("#gh-user-data").html(userInformationHTML(userData));
        }, function(errorResponce) {
            if (errorResponce.status === 404) {
                $("#gh-user-data").html(`<h2>NO info found for user ${username}</h2>`);
            } else {
                console.log(errorResponce);
                $("#gh-user-data").html(
                    `<h2>Error: $(errorResponce.responceJSON.message)</h2>`);
            }
        })
    
}