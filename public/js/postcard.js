let btnPostcard = document.getElementById('btnPostcard');
let canvasPhoto = document.getElementById('canvasPhoto');
let canvasCtx = canvasPhoto.getContext('2d');
let canvasImg = document.getElementById("canvasImg");

let FooterImg = new Image();
    FooterImg.setAttribute('crossOrigin', 'anonymous');
    FooterImg.src = "images/postcard/cody.png";

export function PostcardEvent() {
    btnPostcard.addEventListener('change', function(e) {
        let ImgDraw = new Image();
        let ImgTag = 0;
        let Hei = 0;
        let Wid = 0;
            ImgDraw.setAttribute('crossOrigin', 'anonymous');
                if(this.files[0] !== undefined)
                { ImgDraw.src = URL.createObjectURL(this.files[0]); }
                else
                { ImgDraw.src = "images/postcard/default.png"; }
                
            ImgDraw.onload = function() {              
                let ImgLong = 600;              
                let WidthImgDraw = ImgDraw.width;
                let HeightImgDraw = ImgDraw.height;              
                let WidthFooterImg = FooterImg.width;
                let HeightFooterImg = FooterImg.height;
                
                if (WidthImgDraw < HeightImgDraw) {
                    Hei = ImgLong;
                    Wid = Hei * WidthImgDraw / HeightImgDraw;
                } 
                else {
                    Wid = ImgLong;
                    Hei = Wid * HeightImgDraw / WidthImgDraw;
                }

                canvasPhoto.width = canvasImg.width = Wid;
                canvasPhoto.height = canvasImg.height = Hei;
                
                let HeiF = Wid * HeightFooterImg / WidthFooterImg;
                
                canvasCtx.beginPath();
                canvasCtx.drawImage(ImgDraw, 0, 0, Wid, Hei);  
                canvasCtx.drawImage(FooterImg, 0, Hei - HeiF, Wid, HeiF);
                canvasCtx.closePath();
                
                ImgTag = canvasPhoto.toDataURL("image/png");
                    canvasImg.src = ImgTag;
                    canvasImg.setAttribute('style','display: block;');
                        document.getElementById("btnDownload").setAttribute("href", ImgTag);
            };
    
            ImgDraw.onerror = function() {
                canvasImg.src = ImgTag;
                canvasImg.setAttribute('style','display: none;');
                    document.getElementById("btnDownload").setAttribute("href", ImgTag);
            };
    });    
}
