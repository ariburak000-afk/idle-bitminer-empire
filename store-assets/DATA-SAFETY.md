# Play Console Veri Güvenliği Taslağı

Bu belge Play Console formunu doldurmak için taslaktır; nihai cevaplar yayıncının AdMob ve hedef kitle ayarlarına göre doğrulanmalıdır.

## Uygulamanın kendi topladığı veriler
- Oyun ilerlemesi ve ayarlar yalnızca cihazda localStorage içinde tutulur.
- Geliştirici sunucusuna hesap veya oyun verisi gönderilmez.
- Kullanıcı hesabı oluşturulmaz.

## Üçüncü taraf SDK: Google AdMob
AdMob yapılandırmasına bağlı olarak aşağıdaki veri türlerini işleyebilir:
- Cihaz veya diğer tanımlayıcılar
- Yaklaşık konum
- Uygulama etkileşimleri
- Tanılama ve performans verileri

Amaçlar:
- Reklam veya pazarlama
- Analiz
- Sahtekârlığı önleme, güvenlik ve uyumluluk

## Form için kontrol
- Veri aktarım sırasında şifrelenir: Evet
- Kullanıcı veri silme talebi: Yerel kayıt Ayarlar > Kaydı Sil ile kaldırılır
- Hesap oluşturma: Hayır
- İsteğe bağlı reklam: Evet, yalnızca kullanıcı ödül düğmesine dokununca
- Çocuklara yönelik uygulama: Yayıncı hedef kitle kararına göre ayrıca değerlendirilmeli

Google Mobile Ads SDK veri beyanlarını yayın tarihindeki güncel Google dokümantasyonuyla tekrar kontrol edin.

## Google Play Billing

Üretim içi satın alma etkinleştirildiğinde ödeme bilgileri uygulama tarafından doğrudan alınmaz; işlemler Google Play tarafından yürütülür. Satın alma geçmişi, ürün kimliği ve işlem doğrulama verileri işlevsellik, sahtekârlığı önleme ve satın alımları geri yükleme amaçlarıyla işlenebilir. Play Billing ve kullanılacak doğrulama servisinin güncel veri güvenliği beyanları yayın öncesinde forma eklenmelidir.
