let allCookies = document.cookie;
let cookies = parseCookies(allCookies);

function parseCookies(unparsedCookies) {
    const parsedCookies = {};
    const pairs = unparsedCookies.split("; ");
    for (i in pairs) {
        let [key, value] = pairs[i].split("=");
        parsedCookies[key] = decodeURIComponent(value);
    } 
    return parsedCookies;
}

function getCookie(cookieName) {
    return cookies[cookieName];
}


function setCookie(cookieName, cookieValue, expiryDate)
{
    document.cookie = " " + cookieName + "=" + cookieValue + ";";
    cookies = parseCookies(document.cookie)
    if (expiryDate) {
        cookies['expires'] = expiryDate;
        document.cookie += " expires=" + expiryDate + ";";  
    }
}

function deleteCookie(cookieName) {
    delete cookies[cookieName];

    document.cookie += cookieName + "=  expires=Thu, 18 Dec 2013 12:00:00 UTC;";
}


function allCookieList() {
    return cookies;
}

function hasCookie(cookieName) {
    return cookies.hasOwnProperty(cookieName);
}

// setCookie("gender", "female")
// console.log(allCookieList())
// const date = new Date('2026-03-01')
// setCookie('age','18',date)
// console.log(allCookieList())
// deleteCookie('age')
// console.log(allCookieList())
// console.log(hasCookie('age'))