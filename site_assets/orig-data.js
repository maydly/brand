/* 대문 · 촬영 미리보기 전용 — 같은 자리를 보정본에서 다시 잘라 낸 큰 판(orig/)과 작은 판(orig/s/).
   갤러리는 이 파일을 읽지 않는다(인스타에 올린 모양 그대로). 게시물 데이터(ig-data.js) 바로 다음에 불러야 한다 */
window.MAYDLY_ORIG = {"DQ8zeaoEQMe_01":[2100,1400],"DQ8zeaoEQMe_02":[1500,1000],"DQ8zeaoEQMe_06":[1600,1067],"DQ8zeaoEQMe_07":[1600,1067],"DQ8zeaoEQMe_09":[1600,1067],"DQ8zeaoEQMe_11":[1600,1067],"DQ8zeaoEQMe_12":[1500,1000],"DQ8zeaoEQMe_17":[1600,1067],"DZ2a8RamCQj_01":[1080,1350],"DZ2a8RamCQj_04":[1080,1350],"DZ2a8RamCQj_08":[1080,1350],"DZ2a8RamCQj_11":[1080,1350],"DZ2a8RamCQj_12":[1080,1350],"DaFbJ3WGB4W_01":[800,1000],"DaFbJ3WGB4W_02":[1300,1625],"DaFbJ3WGB4W_04":[1300,1625],"DaFbJ3WGB4W_05":[1300,1625],"DaFbJ3WGB4W_06":[1300,1625],"DaFbJ3WGB4W_11":[1300,1625],"DaHi_5cGDZc_03":[800,1000],"DaHi_5cGDZc_05":[1200,1500],"DaHi_5cGDZc_06":[800,1000],"DaSZFTCmBit_02":[1300,1625],"DaSZFTCmBit_03":[1300,1625],"DaSZFTCmBit_06":[1300,1625],"DasN6JaGD8k_01":[1200,1506],"DasN6JaGD8k_02":[1200,1505],"DasN6JaGD8k_03":[1100,1380],"DasN6JaGD8k_04":[1200,1506],"DasN6JaGD8k_05":[1300,1631],"DasN6JaGD8k_06":[1200,1506],"DasN6JaGD8k_08":[1200,1505],"DasN6JaGD8k_11":[1200,1505],"DbS3kN3mMBu_01":[1100,1375],"DbS3kN3mMBu_03":[1300,1625],"DbS3kN3mMBu_04":[1300,1625],"DbS3kN3mMBu_06":[1300,1625],"DbS3kN3mMBu_08":[1300,1625],"Ddd8h8xGEIs_01":[1100,1467],"Ddd8h8xGEIs_02":[800,1067],"Ddd8h8xGEIs_03":[800,1067],"Ddd8h8xGEIs_04":[800,1067],"Ddd8h8xGEIs_05":[800,1067],"Ddd8h8xGEIs_06":[800,1067],"Ddd8h8xGEIs_07":[800,1067],"Ddd8h8xGEIs_08":[800,1067],"DeJgwL9GBaQ_01":[1100,1375],"DeJgwL9GBaQ_02":[1100,1375],"DeJgwL9GBaQ_03":[1100,1375],"DeJgwL9GBaQ_04":[1400,1750],"DeJgwL9GBaQ_05":[1100,1375],"DeJgwL9GBaQ_06":[1100,1375],"DeJgwL9GBaQ_07":[1100,1375],"DeJgwL9GBaQ_08":[1100,1375],"DeJgwL9GBaQ_09":[1200,1500],"DeMJQuZmHwl_01":[1200,1500],"DeMJQuZmHwl_02":[1200,1500],"DeMJQuZmHwl_03":[1200,1500],"DeMJQuZmHwl_04":[1200,1500],"DeMJQuZmHwl_05":[1200,1500],"DeMJQuZmHwl_06":[1200,1500],"DeMJQuZmHwl_07":[1200,1500],"DeMJQuZmHwl_08":[1200,1500],"DeMJQuZmHwl_09":[1200,1500]};
(function(){
  var G = window.MAYDLY_IG, O = window.MAYDLY_ORIG;
  if (!G || !G.posts || !O) return;
  G.posts.forEach(function(p){
    (p.slides || []).forEach(function(x, k){
      var key = p.code + '_' + (k < 9 ? '0' : '') + (k + 1), o = O[key];
      if (!o || !x || x.src !== 'ig/g/' + key + '.jpg') return;   // 장 번호가 어긋나면 손대지 않는다
      x.src = 'orig/' + key + '.jpg'; x.w = o[0]; x.h = o[1];
      if (x.t) x.t = 'orig/s/' + key + '.jpg';
    });
  });
})();
