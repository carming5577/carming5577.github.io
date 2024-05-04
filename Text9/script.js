// JavaScript腳本

// 圖片按鈕的基本路徑
const imagePath = 'images/photo_';
const imagesToShow=[];

// 第一步選擇圖片後的處理函數，顯示第二步選擇圖片的選項
function showStep2(choice) {
    // 隱藏第一步
    document.getElementById('step1').style.display = 'none';
    // 顯示第二步，屬性設置為 'block'，這會使得 'step2' 元素在網頁上顯示出來
    document.getElementById('step2').style.display = 'block';
    imagesToShow[0]='photo_' + choice;

    const Step2Text = document.getElementById('Step2Text');
    Step2Text.className = 'additional-text';
    if(choice=='A'){
        Step2Text.innerText = '今天你遇到了A.....';
    }
    if(choice=='B'){
        Step2Text.innerText = '今天你遇到了B.....';
    }
    if(choice=='C'){
        Step2Text.innerText = '今天你遇到了C.....';
    }
    if(choice=='D'){
        Step2Text.innerText = '今天你遇到了D.....';
    }
    // 生成第二步的圖片按鈕
    generateImageButtons('step2', choice, 3, showStep3);
}

// 第二步選擇圖片後的處理函數，顯示最後一步選擇圖片的選項
function showStep3(choice) {
    // 隱藏第二步
    document.getElementById('step2').style.display = 'none';
    // 顯示第三步
    document.getElementById('step3').style.display = 'block';
    imagesToShow[1]='photo_' + choice;
    // 在畫面中顯示額外的文字敘述
    const Step3Text = document.getElementById('Step3Text');
    Step3Text.className = 'additional-text';
    if(choice=='A_1'){
        Step3Text.innerText = '你決定A_1.....';
    }
    if(choice=='A_2'){
        Step3Text.innerText = '你決定A_2.....';
    }
    if(choice=='A_3'){
        Step3Text.innerText = '你決定A_3.....';
    }
    if(choice=='B_1'){
        Step3Text.innerText = '你決定B_1.....';
    }
    if(choice=='B_2'){
        Step3Text.innerText = '你決定B_2.....';
    }
    if(choice=='B_3'){
        Step3Text.innerText = '你決定B_3.....';
    }
    if(choice=='C_1'){
        Step3Text.innerText = '你決定C_1.....';
    }
    if(choice=='C_2'){
        Step3Text.innerText = '你決定C_2.....';
    }
    if(choice=='C_3'){
        Step3Text.innerText = '你決定C_3.....';
    }
    if(choice=='D_1'){
        Step3Text.innerText = '你決定D_1.....';
    }
    if(choice=='D_2'){
        Step3Text.innerText = '你決定D_2.....';
    }
    if(choice=='D_3'){
        Step3Text.innerText = '你決定D_3.....';
    }
    
    // 生成第三步的圖片按鈕
    generateImageButtons('step3', choice, 3, showResult);
}

// 最後一步選擇圖片後的處理函數，顯示結果及相應圖片
function showResult(choice) {
    // 隱藏第三步
    document.getElementById('step3').style.display = 'none';
    // 顯示結果
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    
    // 產生從1到2的隨機整數
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    // 顯示結果文本
    const resultText = document.getElementById('resultText');
    resultText.innerText = '您的選擇是：' + choice + '第'+ randomNumber + '種結局';

    // 動態生成相應圖片，(i-2)是為了讓存的圖片不需要從3開始命名
    imagesToShow[2]='photo_' + choice;
    for(let i = 3; i <= 5; i++){
        imagesToShow[i] = 'photo_' + choice + '_' + randomNumber + '_' + i;
        
    }
    
    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'result-images-container';

    imagesToShow.forEach(imageName => {
        const img = document.createElement('img');
        img.src = 'images/' + imageName + '.jpg'; // 假設圖片放在 images 資料夾內
        img.className = 'result-image';
        imagesContainer.appendChild(img);
    });

    resultDiv.appendChild(imagesContainer);

    // 在畫面中下方顯示額外的文字敘述
    const additionalText1 = document.createElement('p');
    additionalText1.className = 'additional-text';
    const additionalText2 = document.createElement('p');
    additionalText2.className = 'bold-red-text';

    if(randomNumber==1){
        additionalText1.innerText = '你是一個黑幫老大，今天你在街上閒逛時遇到了一個小混混，你和他單挑但輸了，你露出不可置信的眼神，甚至提出再比一場的提案，但此時混混說:\n'
        additionalText2.innerText = '你不要輸不起阿！\n你是大哥！不是乃哥！';
    }
    else if(randomNumber==2){
        additionalText1.innerText = '今天002';
    }
    else{
        additionalText1.innerText = '今天003';
    }
    // 在 body 內添加文字敘述
    document.body.appendChild(additionalText1); 
    document.body.appendChild(additionalText2);
}

// 生成圖片按鈕的函數
function generateImageButtons(containerId, choice, count, clickHandler) {
    // 取得容器元素
    const container = document.getElementById(containerId);
    // 清空容器內容(若用了，字藉會被削掉，除非在這行之後再輸入文字)
    //container.innerHTML = '';
    // 生成圖片按鈕
    for (let i = 1; i <= count; i++) {
        const img = document.createElement('img');
        // 圖片路徑為 'photo_(choice)_i.jpg'
        img.src = imagePath + choice + '_' + i + '.jpg';
        // 設置圖片按鈕的 CSS class
        img.className = 'image-button';
        // 點擊圖片後觸發指定的 clickHandler 函數
        img.onclick = function() {
            clickHandler(choice + '_' + i);
        };
        // 將圖片按鈕添加到容器中
        container.appendChild(img);
    }
}
