function switchProfile(profileNumber) {
    var profiles = document.querySelectorAll('.profile');
    profiles.forEach(function(profile) {
        profile.classList.remove('active');
    });
    document.getElementById('profile' + profileNumber).classList.add('active');
}

