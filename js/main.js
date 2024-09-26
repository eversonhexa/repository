function getProjects(){
    const urlGitHub = 'http://api.github/users/eversonhexa/repos'

    fetch(urlGitHub, {
        method: 'GET'
    })

        .then((response) => response.json())
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {
            console(e)
        })
}

getProjects()