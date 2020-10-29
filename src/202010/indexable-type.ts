const users = [
    { name: '안희종', height: 176, favoriteLanguage: 'TypeScript' },
    { name: '이방인', height: 42 }
];

interface NameHeightMap {
    [userName: string]: number | undefined;    
}
const nameHeightMap: NameHeightMap = {};
users.map(user => {
    nameHeightMap[user.name] = user.height;
});

const h = nameHeightMap['이방인'];
if (h) {
    console.log(h.toString());
}
