# Yayın Öncesi QA Senaryoları

1. Temiz kurulum: 100 coin ile başlama, tutorial ve ilk yükseltme.
2. 500 kazım: yalnızca bir Standart Kasa verilmesi.
3. Kasa: coin ve tam bir koleksiyon kartı düşmesi; kopyaların birikmesi.
4. Kart: gerekli kopya olmadan yükseltilememe; yükseltme sonrası pasif etkinin artması.
5. Reklam: tamamlamadan ödül verilmemesi; tamamlayınca tek ödül verilmesi.
6. Günlük limit: kasa 2, boost 2, ekip yeteneği 6 ve offline x2 1 kullanım.
7. Offline: uygulama kapanışından sonra kazanç; 2x reklam akışının tek kez işlemesi.
8. Prestij: kart koleksiyonu, başarımlar, kasalar, Şifre Anahtarları ve Kuantum Çiplerinin korunması.
9. Isı: kritik ısıda gelir cezası; hızlı soğutmanın 120 saniye beklemesi.
10. Kayıt: yenileme ve uygulama yeniden açılışında ilerlemenin korunması.
11. Responsive: 360x800, 390x844 ve 430x932 ekranlarda taşma olmaması.
12. Android geri tuşu ve uygulama arka plan/ön plan geçişleri.
13. Kart yuvaları: 1/2/3 yuvanın prestij sayısına göre açılması ve koleksiyon kartlarının %25 güçte kalması.
14. Kart yetenekleri: yalnızca takılı kartta çalışma, bekleme süresinin kayda ve yeniden açılışa dayanması.
15. Sezon: ücretsiz/premium ödül hakları, çift talep engeli ve sınırlı kartların normal kasalardan düşmemesi.
16. Piyasa: olumlu/olumsuz olay katsayıları, hedge maliyeti ve süre sonunda normal ekonomiye dönüş.
17. Overclock ve arıza: kondisyon kaybı, arıza üretimi, onarım maliyeti ve pasif gelir etkisi.
18. Prestij uzmanlığı: seçim kilidi, her uzmanlığın aktif/pasif/kritik/offline etkisi ve prestij sonrası korunması.
19. Kayıt yedeği: JSON dışa aktarma, geçerli yedeği geri yükleme ve bozuk dosyayı reddetme.
20. Denge paneli: örneklerin dakikada bir kaydı, rapor dışa aktarma ve hata günlüğünün kişisel veri içermemesi.
21. Rig Builder: beş yuvanın doğru parçayı kabul etmesi, satın alma maliyeti, parça değiştirme ve tam set bonusu.
22. Kontratlar: aynı anda tek ağ, süre sonunda cüzdana aktarım, piyasa katsayısıyla satış ve prestijde açık pozisyonun sıfırlanması.
23. Hikâye: seviye ön koşulları, tek seçim kilidi, küçük kalıcı bonus ve çift ödül engeli.
24. Ekip görevleri: karakter/ilerleme koşulları, tek talep ve Veri Tozu/kristal/kasa ödülleri.
25. Boss kontratları: dokunuş, ısı, gelir ve stabilite hedefleri; başarısızlık, başarı ödülü ve 10 dakika bekleme.
26. Prestij rotaları: döngü başına tek rota seçimi, düğüm ön koşulları, maliyet artışı ve beş prestij sonrası Ana Düğüm.
27. Etkinlik zinciri: kişisel katkının aşamaları açması, ödüllerin yalnızca bir kez alınması ve sezon sıfırlaması.
28. Ekonomi regresyonu: `npm run balance:simulate` sonucunun ilk prestij için 30-40 dakika bandında kalması.
29. v17 kayıt göçü: eski kayıt açıldığında yeni alanların varsayılanlarla eklenmesi ve mevcut ilerlemenin korunması.
30. Kayıt göçü: v18 kaydının fiyat geçmişi, kozmetik ve yeni telemetri alanlarıyla v19'a taşınması.
31. Kademeli başlangıç: beş temel öğretici adımı, altı erken hedef ve her hedefte tek açılış kutlaması.
32. Kazım efektleri: normal/kritik parçacıkları, combo sahne vurgusu, düşük grafik ayarında parçacıkların kapanması.
33. Boss arenası: üç faz etiketinin ilerlemeyle değişmesi, rota boss bonusu ve termal eşik davranışı.
34. Kontrat grafiği: 18 fiyat örneği sınırı, risk etiketi, erken çıkış cezası ve son dört satışın gösterimi.
35. Prestij rota zinciri: önceki düğüm açılmadan sonraki düğümün alınamaması ve 20/32 çip maliyetleri.
36. Kozmetik: kristal maliyeti, satın alma/kuşanma, prestij sonrası korunma ve gelir değerlerini değiştirmeme.
37. Denge senaryoları: 2/5/10/20 dokunuş kartlarının görünmesi ve rapora kontrat geçmişinin eklenmesi.
38. Gizlilik/yayın modalları: yerel veri açıklaması, web/native durum etiketi ve satın alma test modu uyarısı.
39. Vite izleme: Android, dist ve mağaza paketlerinin geliştirme sunucusunda EBUSY oluşturmaması.
40. PWA güncelleme: v19 cache etkinleşince önceki cache'lerin temizlenmesi.
41. v2 kayıt göçü: v19 kaydına Şifre Anahtarı, operasyon becerileri, yeni rig yuvaları ve yeni istatistiklerin eklenmesi.
42. Yükseltme havuzu: işlemci, GPU ve altyapı sekmelerinin her birinde 7 öğe ve doğru maliyet eğrisi.
43. Ekonomi regresyonu: 21 donanımlı simülasyonun ilk prestiji 30-40 dakika bandında tutması.
44. Perfect Tap: 45-170ms ritim aralığı, x1.35 ödül, seri sıfırlama ve görev ilerlemesi.
45. Operasyon becerileri: gelir, soğutma, otomatik kazım ve elektrik etkileri; cooldown ve kayıt davranışı.
46. Şifre Anahtarı: 500 kazımda 4 anahtar, görev ödülleri ve 8/24/60 kasa maliyetleri.
47. Rig Builder: 7 yuva, bellek/anakart parçaları, T4 parçalar ve tam set bonusu.
48. Ekip sinerjisi: üç Lv.5 ikilisinin global, pasif ve kritik etkilerinin ayrı hesaplanması.
49. İçerik genişlemesi: 30 araştırma, 23 kart, 7 set, 8 boss, 8 kozmetik ve yeni görev zincirleri.
50. PWA güncelleme: v20 cache etkinleşince v19 ve daha eski cache'lerin temizlenmesi.
