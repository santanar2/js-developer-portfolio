async function fetchProfileData() {
    const url = 'https://github.com/santanar2/js-developer-portfolio/tree/mainon';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
