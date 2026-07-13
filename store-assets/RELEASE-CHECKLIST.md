# Idle Crypto Miner Yayın Kontrol Listesi

## Zorunlu Üretim Ayarları
- [ ] AdMob hesabında Android uygulamasını oluştur.
- [ ] `android/app/src/main/res/values/strings.xml` içindeki test App ID'yi üretim App ID ile değiştir.
- [ ] `index.html` içindeki `ADMOB_CONFIG.rewardedAndroid` değerini üretim Rewarded Ad Unit ID ile değiştir.
- [ ] `ADMOB_CONFIG.testing` değerini `false` yap.
- [ ] AdMob yayıncı kimliğinle `app-ads.txt` dosyası oluştur ve mağaza geliştirici alan adında yayınla.
- [ ] AdMob UMP gizlilik mesajını oluştur ve EEA/UK onay akışını doğrula.
- [ ] `privacy-policy.html` içindeki `DESTEK_EPOSTASI` alanını doldur ve herkese açık HTTPS adresinde yayınla.

## Play Console
- [ ] `MONETIZATION.md` içindeki yedi ürünü Play Console'da aynı Product ID'lerle oluştur.
- [ ] Yerelleştirilmiş fiyatları Google Play Billing yanıtından göster; sabit test fiyatlarını üretimde kullanma.
- [ ] Tek seferlik haklar için satın alma geri yükleme ve makbuz doğrulama testlerini tamamla.
- [ ] `season_pass` hakkının sezon bitişi ve yeni sezon geçişindeki davranışını doğrula.
- [ ] `IAP_CONFIG.production` değerini yalnızca gerçek satın alma adaptörü tamamlandıktan sonra `true` yap.
- [ ] Uygulama adı, kısa açıklama ve tam açıklamayı ekle.
- [ ] `feature-graphic-1024x500.png` özellik görselini yükle.
- [ ] `screenshots/` klasöründeki telefon ekran görüntülerini yükle.
- [ ] Uygulama ikonu olarak `app-icon-1024.png` kullan.
- [ ] Veri Güvenliği formunu `DATA-SAFETY.md` taslağıyla doldur ve güncel AdMob beyanıyla karşılaştır.
- [ ] İçerik derecelendirmesinde oyun/simülasyon ve reklam sorularını doğru yanıtla.
- [ ] Reklam içerdiğini Play Console'da belirt.
- [ ] Gerçek finansal kazanç sağlamadığını mağaza açıklamasında koru.

## İmzalama ve Test
- [ ] Android Studio veya `keytool` ile güvenli upload keystore oluştur.
- [ ] Parolaları repoya ekleme; yerel `keystore.properties` kullan.
- [ ] Play App Signing'i etkinleştir.
- [ ] En az iki gerçek Android cihazda rewarded reklamı test et.
- [ ] Reklam iptal edildiğinde ödül verilmediğini doğrula.
- [ ] Günlük kasa/boost reklam limitlerinin gece yenilendiğini doğrula.
- [ ] Yeni oyun, eski kayıt, prestij, offline kazanç ve kayıt sıfırlama senaryolarını test et.
- [ ] JSON kayıt yedeği alma/geri yükleme, kart yuvaları, aktif yetenek bekleme süreleri ve sezon ödüllerini test et.
- [ ] Piyasa olayları, riskli overclock, arıza ve onarım akışlarının kaydı bozmadığını doğrula.
- [ ] Üretim analitik ve çökme raporlaması eklenirse açık rıza ve Veri Güvenliği beyanını güncelle.
- [ ] Kapalı test kanalına AAB yükle ve tester geri bildirimi topla.

## Mevcut Test Kimlikleri
Projede Google'ın Android test App ID ve rewarded reklam test birimi kullanılır. Bu kimliklerle mağaza üretim yayını yapılmamalıdır.
