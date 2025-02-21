function wood(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood =20;
    const perTableWood =30;
    const perBedWood =50;

        totalChairWood =chairQuantity * perChairWood;
        totalTableWood =tableQuantity * perTableWood;
        totalBedWood =bedQuantity * perBedWood;

    totalWood = totalBedWood + totalChairWood + totalTableWood;
    return totalWood;
}
const total = wood (2, 3, 2);
console.log(total);