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
    if (arguments.length > 1 || typeof(cookieName) !== 'string') {
        throw new Error("getCookie function must has one argument of type string");
    }
    else {
        return cookies[cookieName];
    }
}


function setCookie(cookieName, cookieValue, expiryDate)
{
    if (arguments.length > 3 || typeof(cookieName) !== 'string' || typeof(cookieValue) !== 'string') {
        throw new Error("setCookie function must has  at least two arguments of type string");
    }
    else {
        document.cookie = " " + cookieName + "=" + cookieValue + ";";
        cookies = parseCookies(document.cookie)
        if (expiryDate) {
            cookies['expires'] = expiryDate;
            document.cookie += " expires=" + expiryDate + ";";  
        }   
    }
}

function deleteCookie(cookieName) {
    if (arguments.length > 1 || typeof(cookieName) !== 'string') {
        throw new Error("deleteCookie function must has one argument of type string");
    }
    delete cookies[cookieName];

    document.cookie += cookieName + "=  expires=Thu, 18 Dec 2013 12:00:00 UTC;";
}


function allCookieList() {
    if (arguments.length > 0) {
        throw new Error("allCookieList doesn't has any arguments")
    }
    return cookies;
}

function hasCookie(cookieName) {
    if (arguments.length > 1 || typeof(cookieName) !== 'string') {
        throw new Error("hasCookie function must has one argument of type string");
    }
    return cookies.hasOwnProperty(cookieName);
}

// getCookie(1) // not string* 
// getCookie('name', 'age')  //more than one argument*
// const date = new Date('2026-03-01')
// setCookie('age','18',date, 20) //more than three argument
// console.log(allCookieList('name')) //passing an argument
// deleteCookie('age', 5) //passing more than one argument
// deleteCookie(5) //passing non string object)
// console.log(hasCookie('age' , 5)) //passing more than one argument
console.log(hasCookie(5)) //passing a non string key
