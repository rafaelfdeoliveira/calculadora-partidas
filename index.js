function showHeroLevel(victoriesNum, defeatsNum) {
    const balance = victoriesNum - defeatsNum;
    let level;
    if (balance <= 10) {
        level = 'Ferro';
    } else if (balance <= 20) {
        level = 'Bronze';
    } else if (balance <= 50) {
        level = 'Prata';
    } else if (balance <= 80) {
        level = 'Ouro';
    } else if (balance <= 90) {
        level = 'Diamante';
    } else if (balance <= 100) {
        level = 'Lendário';
    } else {
        level = 'Imortal';
    }

    console.log(`O Herói tem de saldo de ${balance} e está no nível de ${level}`);
}

showHeroLevel(100, 5);