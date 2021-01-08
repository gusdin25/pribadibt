exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, aktif) => {
	return ` *${BotName}*
  
📆 *${tampilTanggal}* 
⏱️ *${tampilWaktu}* 
📢 Bot Aktif ; *${aktif}*

╔════════════════════
║ *Donasi Ke ${BotName}*
╠════════════════════
║├≽️⚜ *OVO*: _0819-9782-6183_
║├≽️⚜ *DANA*: _0819-9782-6183_
║├≽️⚜ *Saweria*: https://saweria.co/gusdin

「 *LIST MENU* 」

╭════•›「 SimSimi 」
├≽️ *.simi*
├ _Gunakan huruf kecil_
├ _Contoh_
├ _.simi kamu mau makan_
╰═══════════════

╭════•›「 ${BotName} 」
├≽️ *#help*
├ _Menampilkan list menu_
├≽️ *.Owner*
├ _Info Admin bot_
╰═══════════════

╭════•›「 GRUP 」
├≽️ *.setname*
├ _Merubah nama grup_
├≽️ *.setdesc*
├ _Merubah deskripsi grup_
├≽️ *.opengc*
├ _Membuka grup_
├≽️ *.closegc*
├ _Menutup grup_
╰═══════════════

╭════•›「 Game 」
├≽️ *Kerang ajaib*
├ _.apakah_
├ _.bolehkah_
├ _.kapan_
╰═══════════════

╭════•›「 FUN 」
├≽️ *.receh*
├ _Random jokes receh_
├≽️ *.statpack*
├ _Random status bapack_
├≽️ *.gombal*
├ _Random kata gombal_
├≽️ *.pantun*
├ _Random pantun_
├≽️ *.say*
├  _Ex = .say aku sayang kamu_
├≽️ *.infonime (nama anime)*
├ _.infonime naruto_
├≽️ *.namae*
├ _Ex = .namae udin_
├≽️ *.alay*
├ _Ex = .alay hai udin_
├≽️ *.Seberapagay*
├ _Persentase gay_
├≽️ *.seberapabucin*
├ _Persentase bucin_
├≽️ *.ping*
├ _Mengetahui kecepatan respon_
├≽️ *.chatprank (teks)*
├ _Ex : .chatprank Hai bang/sat_
╰═══════════════

╭════•›「 PRIMBON 」
├≽️ *.arti (Namamu)*
├ _Ex = .arti udin_
├≽️ *.couple (Namamu & doi)*
├ _Ex = .couple udin & udan_
├≽️ *.getzodiak*
├ _Ex : .getzodiak udin & 09-09-2002_
├≽️ *.zodiak (zodiak)*
├ _Ex : .zodiak libra_
├≽️ *.mimpi (teks)*
├ _Ex : .mimpi ular_
╰═══════════════

╭════•›「 TOOlS 」
├≽️ *.stiker*
├ _Kirim foto ketik .stiker_
├≽️ *.nulis*
├ _Ex = .nulis aku cinta udin_
├≽️ *.ocr*
├ _Mencopy kalimat di gambar_
├≽️ *.stalk (username ig)*
├ _Ex = .Stalk @udin_
├≽️ *.shortlink (link)*
├ _Shorter link_
├≽️ *.spamcall (jangan gunakan 0 +62 62 di awal nomor)*
├ _Ex = .spamcall 81997xxxxxx
├≽️ *.spamsms (gunakan 62 di awal nomor)*
├ _Ex = .spamsms 6281997xxxxxx
╰═══════════════

╭════•›「 PICTURE 」
├≽️ *.cecan/.cogan*
├ _Random foto cewe/cowo_
├≽️ *.anime*
├ _Random foto anime_
├≽️ *.loli*
├ _Random foto anime loli_
├≽️ *.neko*
├ _Random foto anime neko_
├≽️ *.quotes*
├ _Random foto quotes_
├≽️ *.twit*
├ _Random twit_
├≽️ *.wp*
├ _Random wallpaper_
├≽️ *.img (nama yang dicari)*
├ _Ex = .img iqbal_
├≽️ *.meme*
├ _Random foto lucu_
╰═══════════════

╭════•›「 TEXT 」
├≽️ *.kata (quotes/author/keyword background)*
├ Buat Quotes mu disini
├ _Ex = .kata Aku cinta dia/Udin/love_
├≽️ *.logopornhub (teks1/teks2)*
├ _Ex : .logopornhub Udin/nime
├≽️ *.logolion (teks1/teks2)*
├ _Ex : .logolion Udin/nime
├≽️ *.logowolf1 (teks1/teks2)*
├ _Ex : .logowolf1 Udin/nime
├≽️ *.logowolf2 (teks1/teks2)*
├ _Ex : .logowolf2 Udin/nime
├≽️ *.logoninja (teks1/teks2)*
├ _Ex : .logoninja Udin/nime
├≽️ *.logojoker (teks)*
├ _Ex : .logojoker udin
├≽️ *.teksneon (teks)*
├ _Ex : .teksneon Udin
├≽️ *.teksblackpink (teks)*
├ _Ex : .teksblackpink Udin
├≽️ *.tekspetir (teks)*
├ _Ex : .tekspetir Udin
├≽️ *.teksglitch (teks1/teks2)*
├ _Ex : .teksglitch Udin/nime
╰═══════════════

╭════•›「 EDUKASI 」
├≽️ *.brainly (Pertanyaan)*
├ _Mengambil jawaban Brainly_
├≽️ *.ngaji*
├ _Random ayat Al-Quran_
├≽️ *.wiki*
├ _Ex = .wiki sejarah Indonesia_
├≽️ *.sholat (Nama daerah)*
├ _Ex = .sholat Jakarta_
├≽️ *.covid*
├ _Info terkini covid indo_
├≽️ *.fakta*
├ _Random fakta_
├≽️ *.kbbi (kata)*
├ _Ex = .kbbi manusia_
╰═══════════════

╭════•›「 WEATHER 」
├≽️ *.infogempa*
├ _info gempa_
├≽️ *.cuaca (nama daerah)*
├ _Ex = .Cuaca Jakarta_
╰═══════════════

╭════•›「 OTHER 」
├≽️ *.lirik*
├ _Ex = .lirik Anji - Dia_
├≽️ *.chord*
├ _Ex = .chord Anji - Dia_
├≽️ *.map (nama daerah)*
├ _Mini map_
╰═══════════════

╭════•›「 DOWNLOADER 」
├≽️ *.Ytmp3/.Ytmp4 link*
├ _Ex = .Ytmp3 http://www.you..._
├≽️ *.Twt link*
├ _Ex = .Twt http://www.twt..._
├≽️ *.Fb link*
├ _Ex = .Fb http://www.face..._
├≽️ *.Ig link*
├ _Ex = .Ig http://www.inst.._
├≽️ *.joox link*
├ _Ex = .joox http://www.joox.._
╰═══════════════

*Follow Me On Instagram*
${instagram}`

}
