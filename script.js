// JavaScript腳本

// 圖片按鈕的基本路徑
const imagePath = 'images/photo_';
const imagesToShow=[];
const choiceText1=document.getElementById('choiceText1');
const choiceText2=document.getElementById('choiceText2');
const choiceText3=document.getElementById('choiceText3');
const choiceText4=document.getElementById('choiceText4');
const choiceText5=document.getElementById('choiceText5');
const choiceText6=document.getElementById('choiceText6');
//如果網頁上有多個元素使用了相同的 id，getElementById 只會返回第一個

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
        Step2Text.innerText = '今天打算做什麼事情?';
        choiceText1.innerText='調查謀殺案';
        choiceText2.innerText='追蹤失踪人口';
        choiceText3.innerText='偵破盜竊案';
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
   /* const choiceText1=document.getElementById('choiceText1')
    const choiceText2=document.getElementById('choiceText2')
    const choiceText3=document.getElementById('choiceText3')*/
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
        Step3Text.innerText = '你打算...';
        choiceText4.innerText='潛入黑幫組織';
        choiceText5.innerText='搜集關鍵證據';
        choiceText6.innerText='面對致命威脅';
    }
    if(choice=='C_2'){
        Step3Text.innerText = '你打算...';
        choiceText4.innerText='潛入黑幫組織';
        choiceText5.innerText='搜集關鍵證據';
        choiceText6.innerText='面對致命威脅';
    }
    if(choice=='C_3'){
        Step3Text.innerText = '你打算...';
        choiceText4.innerText='潛入黑幫組織';
        choiceText5.innerText='搜集關鍵證據';
        choiceText6.innerText='面對致命威脅';
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
    
    // 產生從1到3的隨機整數
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
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

    if((choice=='C_1_1') & (randomNumber==1)){
        additionalText1.innerText = '偵探發現謀殺案的主謀與黑幫有關，成功潛入黑幫組織並搜集到關鍵證據，使主謀被繩之以法。\n'
        additionalText2.innerText = '你將揭示真相，並獲得成功，正義終將得以伸張。';
    }
    if((choice=='C_1_1') & (randomNumber==2)){
        additionalText1.innerText = '偵探在潛入黑幫組織後，發現了一個更大的犯罪陰謀，並成功阻止了黑幫的計劃。\n'
        additionalText2.innerText = '你會發現隱藏的機會，並成功扭轉局勢，帶來正面的變化。';
    }
    if((choice=='C_1_1') & (randomNumber==3)){
        additionalText1.innerText = '偵探在潛入黑幫過程中身份暴露，經歷了一場生死搏鬥後，最終成功脫險並破解謀殺案。\n'
        additionalText2.innerText = '你將經歷風波，但最終會像貓一樣有九條命。';
    }
    if((choice=='C_1_2') & (randomNumber==1)){
        additionalText1.innerText = '偵探在調查中發現了一個重要的證人，通過仔細搜集證據，最終使兇手被捕並定罪。\n'
        additionalText2.innerText = '你會找到一位關鍵證人，不然就是你的搜證只能用來壓著辦公桌上。';
    }
    if((choice=='C_1_2') & (randomNumber==2)){
        additionalText1.innerText = '偵探在調查中發現了一個重要的證人，通過仔細搜集證據，最終使兇手被捕並定罪。\n'
        additionalText2.innerText = '你遇到了重重阻礙，但你像一隻滿身泥巴的狗一樣。';
    }
    if((choice=='C_1_2') & (randomNumber==3)){
        additionalText1.innerText = '偵探發現證據被故意隱藏，但經過不懈努力，終於找到了被藏匿的證據，並成功破案。\n'
        additionalText2.innerText = '證據被故意隱藏，看來你做人不怎麼樣。';
    }
    if((choice=='C_1_3') & (randomNumber==1)){
        additionalText1.innerText = '偵探在調查過程中接近真相，卻遭遇致命威脅，但他成功躲過並最終將兇手繩之以法。\n'
        additionalText2.innerText = '即使目前一切看似順利，也有可能隨時遭遇危險。';
    }
    if((choice=='C_1_3') & (randomNumber==2)){
        additionalText1.innerText = '偵探在面對威脅時展現出色的危機處理能力，最終破解了謀殺案並保全了性命。\n'
        additionalText2.innerText = '你的智慧和應變能力將成為你的利器，讓你在逆境中立於不敗之地。';
    }
    if((choice=='C_1_3') & (randomNumber==3)){
        additionalText1.innerText = '偵探在調查中發現了更大的陰謀，雖然面臨致命威脅，但憑藉智慧和勇氣，最終成功揭開真相。\n'
        additionalText2.innerText = '即使面對巨大挑戰，你的堅持和智慧將會幫助你戰勝一切。';
    }
    if((choice=='C_2_1') & (randomNumber==1)){
        additionalText1.innerText = '偵探發現失踪人口被黑幫綁架，成功潛入黑幫並解救了被綁架的人，將黑幫一網打盡。\n'
        additionalText2.innerText = '你即將面臨挑戰，但你的勇氣和決心將讓你克服一切。';
    }
    if((choice=='C_2_1') & (randomNumber==2)){
        additionalText1.innerText = '偵探在追蹤失踪人口的過程中，成功潛入黑幫並揭開了黑幫的非法活動網絡。\n'
        additionalText2.innerText = '當面對挑戰時，保持開放的心態。';
    }
    if((choice=='C_2_1') & (randomNumber==3)){
        additionalText1.innerText = '偵探在黑幫組織內遇到重重危險，但憑藉智慧和勇氣，最終解救了失踪人口並逃脫險境。\n'
        additionalText2.innerText = '即使面對逆境，也別放棄希望。';
    }
    if((choice=='C_2_2') & (randomNumber==1)){
        additionalText1.innerText = '偵探在追蹤過程中發現重要線索，通過搜集關鍵證據，成功解救了失踪人口並將罪犯繩之以法。\n'
        additionalText2.innerText = '即使你找到關鍵證據，也可能會被認為是湊巧發現的。';
    }
    if((choice=='C_2_2') & (randomNumber==2)){
        additionalText1.innerText = '偵探在追蹤過程中發現重要線索，通過搜集關鍵證據，成功解救了失踪人口並將罪犯繩之以法。\n'
        additionalText2.innerText = '即使你摧毀了問題的根源，也可能被認為只是碰巧撞上了。';
    }
    if((choice=='C_2_2') & (randomNumber==3)){
        additionalText1.innerText = '偵探在搜集證據的過程中遇到重重困難，但最終成功找到了失踪人口並將罪犯定罪。\n'
        additionalText2.innerText = '你成功了，可能仍會被認為只是運氣好。';
    }
    if((choice=='C_2_3') & (randomNumber==1)){
        additionalText1.innerText = '偵探在搜集證據的過程中遇到重重困難，但最終成功找到了失踪人口並將罪犯定罪。\n'
        additionalText2.innerText = '你成功避開了危險，也可能被視為總是陷入麻煩。';
    }
    if((choice=='C_2_3') & (randomNumber==2)){
        additionalText1.innerText = '偵探在面對威脅時展現了出色的應對能力，最終找到了失踪人口並成功將罪犯繩之以法。\n'
        additionalText2.innerText = '你有出色的能力，可能仍會被認為總是在麻煩中才表現突出。';
    }
    if((choice=='C_2_3') & (randomNumber==3)){
        additionalText1.innerText = '偵探在追蹤過程中發現了更大的陰謀，雖然面臨致命威脅，但憑藉智慧和勇氣，最終成功解救失踪人口並揭開真相。\n'
        additionalText2.innerText = '無論挑戰多大，你都有能力克服。';
    }
    if((choice=='C_3_1') & (randomNumber==1)){
        additionalText1.innerText = '偵探發現盜竊案背後的黑幫組織，成功潛入並搜集到關鍵證據，使黑幫頭目被捕。\n'
        additionalText2.innerText = '如果你有足夠的毅力和決心，你將能夠打敗這些障礙，沒有那就完了。';
    }
    if((choice=='C_3_1') & (randomNumber==2)){
        additionalText1.innerText = '偵探在潛入黑幫過程中，揭開了一個更大的犯罪網絡，並最終將其瓦解。\n'
        additionalText2.innerText = '的勇氣和決心將使你成為解決這些問題的關鍵。';
    }
    if((choice=='C_3_1') & (randomNumber==3)){
        additionalText1.innerText = '偵探在潛入黑幫時身份暴露，經歷生死搏鬥後成功逃脫，並破解了盜竊案。\n'
        additionalText2.innerText = '你可能會面臨困難和危險，真可憐。';
    }
    if((choice=='C_3_2') & (randomNumber==1)){
        additionalText1.innerText = '偵探在偵破盜竊案時發現了一個重要的證據，這些證據最終使盜賊團夥被捕。\n'
        additionalText2.innerText = '你可能會在意想不到的地方找到解決問題的關鍵。';
    }
    if((choice=='C_3_2') & (randomNumber==2)){
        additionalText1.innerText = '偵探在偵破盜竊案時發現了一個重要的證據，這些證據最終使盜賊團夥被捕。\n'
        additionalText2.innerText = '你可能會意識到問題的根源並採取行動，解決更大的問題。';
    }
    if((choice=='C_3_2') & (randomNumber==3)){
        additionalText1.innerText = '偵探在搜集證據時遇到困難，但憑藉智慧和堅韌，最終找到了關鍵證據並成功破案。\n'
        additionalText2.innerText = '藉著你的聰明才智和不屈不撓的精神，你將能夠克服困難。';
    }
    if((choice=='C_3_3') & (randomNumber==1)){
        additionalText1.innerText = '偵探在搜集證據時遇到困難，但憑藉智慧和堅韌，最終找到了關鍵證據並成功破案。\n'
        additionalText2.innerText = '你可能會在追求目標的道路上面臨艱險。';
    }
    if((choice=='C_3_3') & (randomNumber==2)){
        additionalText1.innerText = '偵探在面對威脅時展現了卓越的危機處理能力，成功破解盜竊案並保全了性命。\n'
        additionalText2.innerText = '只要冷靜就能安然度過困難，只可惜你心浮氣燥。';
    }
    if((choice=='C_3_3') & (randomNumber==3)){
        additionalText1.innerText = '偵探在面對威脅時展現了卓越的危機處理能力，成功破解盜竊案並保全了性命。\n'
        additionalText2.innerText = '即使局面看似危險重重，但只要你有智慧和勇氣，就能逆轉乾坤。';
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
