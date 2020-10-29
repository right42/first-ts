interface User {
    name: string;
    readonly height: number;    
    favoriteLanguage?: string;
}

const author: User = {
    name : 'test',
    height : 177
};

author.favoriteLanguage = 'java';

console.log(author);

interface GetUserName{
    (user: User): string;
}

const getUserName: GetUserName = function(user: User) {
    return user.name;
}

console.log(getUserName(author));



