function getStroage (name) {
    return JSON.parse(localStorage.getItem(name));
}

function setStroage (name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

module.exports = {
    getStroage,
    setStroage
}