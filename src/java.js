var dogum = prompt ("dogum yılınızı giriniz" );
var yıl = 2022;
var yas = yıl-dogum;

if( yas<18) {
    console.log("ehliyet alamazsınız");

    console.log("ehliyet alabilmeniz için "+(18-yas)+"sene beklemelisiniz");
}


   



else{
    console.log("yanlış bir değer");

}

console.log("hoş geldiniz")