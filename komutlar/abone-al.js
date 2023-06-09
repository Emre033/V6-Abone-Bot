module.exports = {
name:"abone-al",
  code:`
$description[1;<@$mentioned[1]> Kullanıcısının **Abone Rolü** <@$authorID> Adlı Yetkili Tarafından **Abone Rolü** Alındı.]
$takeRoles[$guildID;$mentioned[1];$getGuildVar[abonerol]] 
$argsCheck[1;Birini Etiketlemen Gerek!]
$onlyForRoles[$getGuildVar[aboneyetkilisi];Bu Komutu Kullanabilmek İçin **Abone Yetkilisi** Olman Lazım!]
`}
