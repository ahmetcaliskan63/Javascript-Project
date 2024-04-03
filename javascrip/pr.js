<script>
        function Sifre_Islemi(){
        var sifre;
        var tekrarsifre;
        sifre=document.getElementById("sifre");
        tekrarsifre=document.getElementById("tekrarsifre");
        if(sifre==tekrarsifre){
            alert("geçerli  giriş gerçekleştirdiniz girdiniz")
        }
        else{
            alert("geçersiz giriş gerçekleştirdiniz")
        }
    }
    </script>