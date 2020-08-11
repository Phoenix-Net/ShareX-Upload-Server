const bcrypt = require('bcryptjs');

function auth(myKey, givenKey, c, public=true) {  
    const checkKey = (key) =>  typeof givenKey === "string" && bcrypt.compareSync(givenKey, key);
    if (c.admin.key.some(key => checkKey(key)) || (public && (c.key.some(key => checkKey(key)) || c.public === true || myKey === null)))
        return true;

    return false; 
}

module.exports = auth;