(function (global){

    if (typeof window.localStorage === "undefined") {
        
        const previous$c = global.$c;

        function parseCookies(unparsedCookies) {
            const parsedCookies = {};
            const pairs = unparsedCookies.split("; ");
            for (let i = 0; i < pairs.length; i++) {
            const [key, value] = pairs[i].split("=");
            parsedCookies[key] = decodeURIComponent(value || "");
            }
            return parsedCookies;
        }

        const $c = {
            getItem: (cookieName) => {
            const cookies = parseCookies(document.cookie);
            return cookies[cookieName];
            },
        
            setItem: (cookieName, cookieValue) => {
            let cookieStr = `${cookieName}=${encodeURIComponent(cookieValue)}; path=/;`;
            },
        
            removeItem: (cookieName) => {
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            },
        
            all() {
            return parseCookies(document.cookie);
            },
        
            has(cookieName) {
            const cookies = parseCookies(document.cookie);
            return cookies.hasOwnProperty(cookieName);
            },
        
            noConflict() {
            global.$c = previous$c;
            return this;
            }
        };

        global.localStorage = $c;
    }
})(window);