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
        Step2Text.innerText = '今天你打算.....';
        choiceText1.innerText='探索未知的神秘地區';
        choiceText2.innerText='尋找失落的文明遺址';
        choiceText3.innerText='解開古老的謎題';
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
        Step2Text.innerText = '今天打算做什麼事情?';
        choiceText1.innerText='參加地下拳擊比賽';
        choiceText2.innerText='經營神秘面包店';
        choiceText3.innerText='駕駛飛天掃帚探險';
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
        Step3Text.innerText = '你決定.....';
        choiceText4.innerText='對抗危險的自然環境';
        choiceText5.innerText='躲避敵對勢力的追擊';
        choiceText6.innerText='解決隊伍內部的衝突';
    }
    if(choice=='A_2'){
        Step3Text.innerText = '你決定.....';
        choiceText4.innerText='對抗危險的自然環境';
        choiceText5.innerText='躲避敵對勢力的追擊';
        choiceText6.innerText='解決隊伍內部的衝突';
    }
    if(choice=='A_3'){
        Step3Text.innerText = '你決定.....';
        choiceText4.innerText='對抗危險的自然環境';
        choiceText5.innerText='躲避敵對勢力的追擊';
        choiceText6.innerText='解決隊伍內部的衝突';
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
        Step3Text.innerText = '你即將...';
        choiceText4.innerText='對戰猛男山姆';
        choiceText5.innerText='對戰神秘忍者';
        choiceText6.innerText='對戰機器拳擊手';
    }
    if(choice=='D_2'){
        Step3Text.innerText = '你打算...';
        choiceText4.innerText='研製魔法面包';
        choiceText5.innerText='舉辦面包比賽';
        choiceText6.innerText='探尋面包的秘密配方';
    }
    if(choice=='D_3'){
        Step3Text.innerText = '你打算...';
        choiceText4.innerText='飛往神秘島嶼';
        choiceText5.innerText='拯救被困的動物';
        choiceText6.innerText='尋找失落的寶藏';
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

    if((choice=='A_1_1') & (randomNumber==1)){
        additionalText1.innerText = '探險家在神秘地區遇到極端天氣和致命的野生動物，但憑藉他的智慧和勇氣，最終成功穿越這片地區並發現了一個未被記錄的奇異景觀。\n'
        additionalText2.innerText = '你的智慧和勇氣能讓你在極端困難的環境中脫穎而出。';
    }
    if((choice=='A_1_1') & (randomNumber==2)){
        additionalText1.innerText = '探險家在探索途中克服了重重困難，包括險惡的地形和突如其來的天災，最終到達目的地並獲得珍貴的科學資料。\n'
        additionalText2.innerText = '意味著你需要不斷迎接新的考驗，以證明你的價值和能力。';
    }
    if((choice=='A_1_1') & (randomNumber==3)){
        additionalText1.innerText = '探險家在對抗自然環境時，經歷了一次重大危機，但他通過團隊合作和堅韌的意志，成功渡過難關並完成了探險任務。\n'
        additionalText2.innerText = '可能意味著你的能力不足，需要依賴他人來渡過難關。';
    }
    if((choice=='A_1_2') & (randomNumber==1)){
        additionalText1.innerText = '探險家在探索過程中發現一個神秘地區的秘密，但被敵對勢力盯上，他們經歷了驚心動魄的追擊戰，最終成功逃脫並保住了發現的秘密。\n'
        additionalText2.innerText = '暗示著你的發現和成功可能會引起他人的覬覦，需要面對來自外界的威脅。';
    }
    if((choice=='A_1_2') & (randomNumber==2)){
        additionalText1.innerText = '探險家在敵對勢力的追擊下，利用地形和智慧設下陷阱，使敵人誤入歧途，最終順利完成探險並揭開神秘地區的真相。\n'
        additionalText2.innerText = '意味著你必須時刻保持警惕，運用策略來應對各種挑戰和敵對勢力。';
    }
    if((choice=='A_1_2') & (randomNumber==3)){
        additionalText1.innerText = '探險家在敵對勢力的重重包圍中，憑藉非凡的技巧和策略，成功擺脫了追擊，並將神秘地區的重要信息安全帶回。\n'
        additionalText2.innerText = '意味著你需要時刻保持警惕，應對不斷出現的挑戰，才能確保成功。';
    }
    if((choice=='A_1_3') & (randomNumber==1)){
        additionalText1.innerText = '探險家在探索過程中，隊伍內部出現了嚴重分歧，他通過智慧和領導力，化解了衝突，最終帶領隊伍成功發現了一個令人驚嘆的遺跡。\n'
        additionalText2.innerText = '暗示著你的領導才能和智慧將幫助你在困難時刻團結他人，共同達成目標。';
    }
    if((choice=='A_1_3') & (randomNumber==2)){
        additionalText1.innerText = '探險家在解決隊伍內部的衝突時，展示了非凡的協調能力，使隊伍重新團結一致，並在未知的神秘地區取得了重要的發現。\n'
        additionalText2.innerText = '意味著你需要不斷處理人際關係中的挑戰，才能達到你的目標。';
    }
    if((choice=='A_1_3') & (randomNumber==3)){
        additionalText1.innerText = '探險家在隊伍內部出現危機時，採取果斷措施，最終不僅解決了內部矛盾，還發現了一個能改變歷史的重大發現。\n'
        additionalText2.innerText = '意味著你需要在壓力下做出關鍵決策，才能實現突破性的成就。';
    }
    if((choice=='A_2_1') & (randomNumber==1)){
        additionalText1.innerText = '探險家在尋找失落的文明遺址過程中，經歷了嚴酷的自然挑戰，但他最終成功發現了遺址，並解開了其背後的歷史之謎。\n'
        additionalText2.innerText = '意味著你必須經歷艱難的試煉，才能揭開真相並獲得成功。';
    }
    if((choice=='A_2_1') & (randomNumber==2)){
        additionalText1.innerText = '探險家在對抗自然環境的過程中，發現了失落文明的線索，並最終憑藉堅韌不拔的精神找到了遺址，成為一個重大的考古發現。\n'
        additionalText2.innerText = '面對生活中的困境和挑戰時，我們可以獲得新的洞察力和成長，發現內在或外在世界的新契機。';
    }
    if((choice=='A_2_1') & (randomNumber==3)){
        additionalText1.innerText = '探險家在自然災害和危險生物的威脅下，經歷了生死考驗，最終找到了失落的文明遺址，並揭示了其驚人的歷史故事。\n'
        additionalText2.innerText = '意味著你或者他人將面臨重大的挑戰，但通過勇氣和堅持不懈，最終將獲得意想不到的收穫和成就。';
    }
    if((choice=='A_2_2') & (randomNumber==1)){
        additionalText1.innerText = '探險家在尋找遺址的過程中，被敵對勢力盯上，經過多次驚險的追擊，最終成功找到遺址，並揭開了文明失落的原因。\n'
        additionalText2.innerText = '意味著會在過程中揭示重要的真相或理解深層次的問題，帶來新的洞察和成長。';
    }
    if((choice=='A_2_2') & (randomNumber==2)){
        additionalText1.innerText = '探險家在敵對勢力的威脅下，巧妙地利用智慧和地形優勢，成功擺脫追擊，並找到了失落的文明遺址，成為重大考古發現。\n'
        additionalText2.innerText = '可能會面臨來自他人競爭、敵意或挑戰的情況。通過聰明的策略和靈活的應對，能夠化解危機。';
    }
    if((choice=='A_2_2') & (randomNumber==3)){
        additionalText1.innerText = ' 探險家在躲避敵對勢力的同時，發現了遺址的入口，經過一場驚心動魄的冒險，最終成功解開了遺址的秘密。\n'
        additionalText2.innerText = '達成目標過程不僅可能帶來寶貴的成就，還可能改變自己的人生觀和生活方向。';
    }
    if((choice=='A_2_3') & (randomNumber==1)){
        additionalText1.innerText = '探險家在尋找遺址的過程中，隊伍內部出現了嚴重的矛盾，他通過有效的溝通和領導，最終團結了隊伍，並成功找到了失落的文明遺址。\n'
        additionalText2.innerText = '通過良好的溝通、堅定的領導和團隊合作，最終能夠克服內部矛盾，達成共同的目標。';
    }
    if((choice=='A_2_3') & (randomNumber==2)){
        additionalText1.innerText = '探險家在解決隊伍內部衝突時，展示了卓越的領導才能，使隊伍重新團結一致，並最終發現了遺址，解開了其背後的秘密。\n'
        additionalText2.innerText = '可能會面臨到諸多挑戰和困難，特別是在人際關係和領導能力的應用上。';
    }
    if((choice=='A_2_3') & (randomNumber==3)){
        additionalText1.innerText = '探險家在面對隊伍內部的分歧時，通過智慧和決斷力，成功解決了問題，並在尋找失落文明的過程中，取得了重大進展。\n'
        additionalText2.innerText = '你或他人將在挑戰和困難中展現出智慧和決斷力，成功克服障礙並取得重要的進展。';
    }
    if((choice=='A_3_1') & (randomNumber==1)){
        additionalText1.innerText = '探險家在解開古老謎題的過程中，經歷了重重自然挑戰，但最終成功解開了謎題，揭示了一個古老文明的秘密。\n'
        additionalText2.innerText = '需具備足夠的堅持不懈和尋找解決方案的能力來克服困難，最終達成目標。';
    }
    if((choice=='A_3_1') & (randomNumber==2)){
        additionalText1.innerText = '探險家在對抗自然環境的同時，發現了解開謎題的線索，經過不懈努力，最終解開了謎題，並發現了一個失落的遺跡。\n'
        additionalText2.innerText = '解開謎題的過程可能需要付出極大的努力和耐心，以克服各種自然障礙和困難。';
    }
    if((choice=='A_3_1') & (randomNumber==3)){
        additionalText1.innerText = '探險家在面對自然災害時，展現了驚人的求生能力，最終不僅成功生存下來，還解開了古老的謎題，獲得了重要的發現。\n'
        additionalText2.innerText = '意味著在面對自然災害和極端環境時，將面臨到生存上的極大挑戰。';
    }
    if((choice=='A_3_2') & (randomNumber==1)){
        additionalText1.innerText = '探險家在解開謎題的過程中，被敵對勢力追擊，但他利用智慧和策略，成功擺脫了敵人，並最終解開了謎題，揭示了一個驚人的秘密。\n'
        additionalText2.innerText = '意味著在解開謎題的過程中，將面臨到來自敵對勢力的強烈追擊和壓力。';
    }
    if((choice=='A_3_2') & (randomNumber==2)){
        additionalText1.innerText = '探險家在面對敵對勢力的威脅時，巧妙地運用計謀，最終解開了古老的謎題，並將敵人引入陷阱，成功脫險。\n'
        additionalText2.innerText = '意味著需要面對極端的挑戰，但如果能以智慧和策略應對，仍有機會克服困難並達成目標。';
    }
    if((choice=='A_3_2') & (randomNumber==3)){
        additionalText1.innerText = '探險家在解開謎題的關鍵時刻，遭遇敵對勢力的攻擊，但他憑藉非凡的勇氣和智慧，最終解開了謎題並安全逃脫。\n'
        additionalText2.innerText = '意味著你或他人將面臨極端的挑戰和危險，特別是來自敵對勢力的攻擊。';
    }
    if((choice=='A_3_3') & (randomNumber==1)){
        additionalText1.innerText = '探險家在解開謎題的過程中，隊伍內部出現了嚴重的分歧，他通過有效的溝通和領導，最終團結了隊伍，成功解開了古老的謎題。\n'
        additionalText2.innerText = '意味著你擁有卓越的人際關係和溝通技巧，能夠有效地化解衝突並促進團隊合作，最終實現共同目標。';
    }
    if((choice=='A_3_3') & (randomNumber==2)){
        additionalText1.innerText = '探險家在解決隊伍內部衝突時，展示了卓越的領導才能，使隊伍重新團結一致，並最終解開了謎題，發現了一個重大秘密。\n'
        additionalText2.innerText = '意味著可能需要付出大量的努力和時間在處理團隊，並可能會對個人和團隊產生壓力。';
    }
    if((choice=='A_3_3') & (randomNumber==3)){
        additionalText1.innerText = '探險家在面對隊伍內部的矛盾時，通過智慧和決斷力，成功解決了問題，並在解開古老謎題的過程中，取得了重要的進展。\n'
        additionalText2.innerText = '意味著你擁有解決複雜問題的能力，能夠有效地處理團隊內部的衝突，並在探險中取得積極的成就。';
    }



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
    if((choice=='D_1_1') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶擊敗了猛男山姆，成為地下拳擊界的傳奇。\n'
        additionalText2.innerText = '只要有毅力和勇氣，也能成為傳奇。';
    }
    if((choice=='D_1_1') & (randomNumber==2)){
        additionalText1.innerText = '比賽中受傷，但超級奶奶的精神鼓舞了整個社區。\n'
        additionalText2.innerText = '暗示著即使你面臨挫折，你的堅韌和精神力量依然能激勵他人。';
    }
    if((choice=='D_1_1') & (randomNumber==3)){
        additionalText1.innerText = '比賽因突發事件取消，超級奶奶和山姆成為了好朋友，共同打擊犯罪。\n'
        additionalText2.innerText = '可能意味著你永遠無法知道你的人生結果。';
    }
    if((choice=='D_1_2') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶用她的家常智慧擊敗了神秘忍者，贏得了拳擊比賽。\n'
        additionalText2.innerText = '智慧和經驗能帶來勝利，甚至在最不可能的情況下，所以不應該輕言放棄。';
    }
    if((choice=='D_1_2') & (randomNumber==2)){
        additionalText1.innerText = '忍者的詭計讓比賽變得困難重重，但超級奶奶最終化險為夷。\n'
        additionalText2.innerText = '你很幸運，你的對手在耍陰招時其實自己也不怎麼高明。';
    }
    if((choice=='D_1_2') & (randomNumber==3)){
        additionalText1.innerText = '比賽結束後，超級奶奶和忍者組成了探險隊，共同對抗邪惡勢力。\n'
        additionalText2.innerText = '你的最大敵人有時會成為你最不可思議的夥伴。';
    }
    if((choice=='D_1_3') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶用她的智慧和勇氣擊敗了機器拳擊手，成為全場英雄。\n'
        additionalText2.innerText = '這代表高科技也沒什麼有用拉!。';
    }
    if((choice=='D_1_3') & (randomNumber==2)){
        additionalText1.innerText = '比賽過程中，超級奶奶發現機器人有自我意識，決定幫助他找到自由。\n'
        additionalText2.innerText = '你可能不是冠軍，但在可能是某些人的救世主。';
    }
    if((choice=='D_1_3') & (randomNumber==3)){
        additionalText1.innerText = '比賽過程中，超級奶奶發現機器人有自我意識，決定幫助他找到自由。\n'
        additionalText2.innerText = '你的成名只是因為別人的失誤。';
    }
    if((choice=='D_2_1') & (randomNumber==1)){
        additionalText1.innerText = '魔法面包大受歡迎，超級奶奶成為了城鎮的名人。\n'
        additionalText2.innerText = '成為了大眾注目的焦點，需要承受更多的壓力和期待，不見得是好事。';
    }
    if((choice=='D_2_1') & (randomNumber==2)){
        additionalText1.innerText = '魔法面包引發了意外效果，超級奶奶必須解決這一問題，最終成功挽救了局面。\n'
        additionalText2.innerText = '你的創造力有時會帶來一些無法預料的後果，有時還是要務實一點';
    }
    if((choice=='D_2_1') & (randomNumber==3)){
        additionalText1.innerText = '魔法面包被用來對抗邪惡勢力，超級奶奶成為了英雄。\n'
        additionalText2.innerText = '你的創造力和智慧能夠應對意想不到的挑戰。';
    }
    if((choice=='D_2_2') & (randomNumber==1)){
        additionalText1.innerText = '比賽圓滿成功，超級奶奶的面包店名聲大噪。\n'
        additionalText2.innerText = '你的努力和才能為你帶來了驚人的成就。';
    }
    if((choice=='D_2_2') & (randomNumber==2)){
        additionalText1.innerText = '比賽中出現了各種意外，超級奶奶憑藉她的機智化解了所有困難。\n'
        additionalText2.innerText = '看你常常處於困難的局面，看來你也ㄙㄨㄟ狠久了。';
    }
    if((choice=='D_2_2') & (randomNumber==3)){
        additionalText1.innerText = '比賽引來了神秘的面包大師，超級奶奶與他們結成了聯盟，共同探索面包的奧秘。\n'
        additionalText2.innerText = '對方可能另有居心，需要小心處理這種新的關係動態。';
    }
    if((choice=='D_2_3') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶找到了失落的配方，面包店的生意興隆，成為傳奇。\n'
        additionalText2.innerText = '如果只因一時的運氣，未來遇到問題時不一定可以解決。';
    }
    if((choice=='D_2_3') & (randomNumber==2)){
        additionalText1.innerText = '配方的尋找過程充滿了挑戰，但超級奶奶的努力最終得到了回報。\n'
        additionalText2.innerText = '你必須克服種種障礙，才能實現你的目標。';
    }
    if((choice=='D_2_3') & (randomNumber==3)){
        additionalText1.innerText = '配方的秘密揭示了古老的傳說，超級奶奶成為了歷史的探索者。\n'
        additionalText2.innerText = '你的好奇心和勇氣將帶你走向未知領域，過程中需要小心謹慎。';
    }
    if((choice=='D_3_1') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶發現了神秘島嶼上的奇異植物，成為了科學界的明星。\n'
        additionalText2.innerText = '意味著你將面臨更多的壓力和期待，需要繼續努力保持你的成就。';
    }
    if((choice=='D_3_1') & (randomNumber==2)){
        additionalText1.innerText = '島嶼上的危險讓探險變得艱難，超級奶奶最終安全返回並分享了她的經歷。\n'
        additionalText2.innerText = '意味著你的經歷會成為他人的啟發，不要瞧不起自己。';
    }
    if((choice=='D_3_1') & (randomNumber==3)){
        additionalText1.innerText = '島嶼上的居民需要幫助，超級奶奶成為了他們的救世主。\n'
        additionalText2.innerText = '意味著若你想要成功，你需要承擔更多的責任和挑戰。';
    }
    if((choice=='D_3_2') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶成功拯救了所有動物，成為了動物界的英雄。\n'
        additionalText2.innerText = '哈哈!動物界的英雄，我就說你就是個猴子吧!';
    }
    if((choice=='D_3_2') & (randomNumber==2)){
        additionalText1.innerText = '動物拯救過程中，超級奶奶遇到了各種挑戰，但她的勇氣和智慧讓她成功完成任務。\n'
        additionalText2.innerText = '你面對挑戰時，擁有勇氣和智慧將會成為克服困難的關鍵。';
    }
    if((choice=='D_3_2') & (randomNumber==3)){
        additionalText1.innerText = '被困動物中的一隻神秘生物帶來了新的冒險，超級奶奶踏上了新的旅程。\n'
        additionalText2.innerText = '意味著每一次解救和成功都會帶來新的使命，讓你不斷探索和成長。';
    }
    if((choice=='D_3_3') & (randomNumber==1)){
        additionalText1.innerText = '超級奶奶找到了失落的寶藏，成為了富有的探險家。\n'
        additionalText2.innerText = '意味著你會面臨新的挑戰和誘惑，如何運用這筆財富將成為你新的考驗。';
    }
    if((choice=='D_3_3') & (randomNumber==2)){
        additionalText1.innerText = '寶藏被邪惡勢力盯上，超級奶奶用她的智慧和勇氣保護了寶藏。\n'
        additionalText2.innerText = '意味著你需要不斷面對挑戰，才能保護你所珍視的東西。';
    }
    if((choice=='D_3_3') & (randomNumber==3)){
        additionalText1.innerText = '寶藏揭示了一個古老的秘密，超級奶奶成為了歷史的守護者。\n'
        additionalText2.innerText = '意味著你將肩負更大的責任，面對新的挑戰，來捍衛秘密。';
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
