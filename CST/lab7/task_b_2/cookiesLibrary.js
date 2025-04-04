let allCookies = document.cookie;
let cookies;

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
    cookies = parseCookies(allCookies);
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
    document.cookie += cookieName + "=  expires=Thu, 18 Dec 2013 12:00:00 UTC;";
}


function allCookieList() {
    cookies = parseCookies(allCookies);
    return cookies;
}

function hasCookie(cookieName) {
    cookies = parseCookies(allCookies);
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