(function (global){
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
        get(cookieName) {
          const cookies = parseCookies(document.cookie);
          return cookies[cookieName];
        },
    
        set(cookieName, cookieValue, expiryDate) {
          let cookieStr = `${cookieName}=${encodeURIComponent(cookieValue)}; path=/;`;
          if (expiryDate) {
            cookieStr += ` expires=${expiryDate};`;
          }
          document.cookie = cookieStr;
        },
    
        delete(cookieName) {
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

      global.$c = $c;
})(window);

$c.set('user', 'Jihan');
console.log($c.get('user'));
console.log($c.has('user'));
$c.delete('user');
console.log($c.has('user'));

const myCookies = $c.noConflict();
console.log(myCookies.get('user'));