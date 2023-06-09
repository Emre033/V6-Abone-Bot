module.exports = {
name:"abone-ver",
  code:`
$description[1;<@$mentioned[1]> Kullanıcısına <@$authorID> Adlı Yetkili Tarafından **Abone Rolü** Verildi.]
$giveRoles[$guildID;$mentioned[1];$getGuildVar[abonerol]] 
$argsCheck[1;Birini Etiketlemen Gerek!]
$onlyForRoles[$getGuildVar[aboneyetkilisi];Bu Komutu Kullanabilmek İçin **Abone Yetkilisi** Olman Lazım!]`}
