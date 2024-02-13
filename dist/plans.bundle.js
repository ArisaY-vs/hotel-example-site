(()=>{"use strict";var e={338:e=>{e.exports=JSON.parse('{"validation":{"valueMissing":"Please fill out this field.","typeMismatch":{"email":"Please enter a non-empty email address.","url":"Please enter a non-empty URL."},"badInput":"Please enter a valid value.","patternMismatch":"Please match the requested format.","tooLong":"Please shorten this text to {} characters or less.","tooShort":"Please lengthen this text to {} characters or more.","rangeOverflow":"Value must be less than or equal to {}.","rangeUnderflow":"Value must be greater than or equal to {}.","stepMismatch":"Please enter a valid value.","shoudBeNextDay":"Please enter a date after tomorrow.","shouldBeThreeMonth":"Please enter a date within 3 months.","mailOrAddressMismatch":"Email or password is invalid.","existsMail":"Email has already been taken.","passwordUnmatch":"Password doesn\'t match.","underTenKb":"Please select a file with a size of 10 KB or less.","onlyImageFile":"Please select an image file."},"user":{"gender":{"unregistered":"not answered","male":"male","female":"female","other":"other"},"rank":{"premium":"Premium","normal":"Normal"},"unregistered":"not answered","notification":{"true":"received","false":"not received"},"deleteConfirm":"If you cancel your membership, all information will be deleted.\\nDo you wish to proceed?","deleteComplete":"The process has been completed. Thank you for your service."},"plans":{"premiumOnly":"❤️Premium members ONLY❤️","memberOnly":"members ONLY","oneAdult":"{} per guest","minHeadCount":"at least {} person(s)","reserveLink":"Reserve room"},"reserve":{"planDescLong":"{} per night. If contains Sun or Sat, plus 25%. {} - {} persons. Max {} nights","planDescShort":"{} per night. If contains Sun or Sat, plus 25%.","roomInfo":"Room info","totalBill":"Total {} (included taxes)","term":"{} - {}. {} night(s)","headCount":"{} person(s)","breakfast":"Breakfast","earlyCheckIn":"Early check-in","sightseeing":"Sightseeing","none":"none","username":"{}","contact":{"no":"not required","email":"Email: {}","tel":"Tel: {}"}}}')},277:e=>{e.exports=JSON.parse('[{"email":"clark@example.com","password":"password","username":"Clark Evans","rank":"premium","address":"Mountain View, California","tel":"01234567891","gender":"1","birthday":"","notification":true},{"email":"diana@example.com","password":"pass1234","username":"Diana Johansson","rank":"normal","address":"Redmond, Washington","tel":"","gender":"2","birthday":"2000-04-01","notification":false},{"email":"ororo@example.com","password":"pa55w0rd!","username":"Ororo Saldana","rank":"premium","address":"Cupertino, California","tel":"01212341234","gender":"9","birthday":"1988-12-17","notification":false},{"email":"miles@example.com","password":"pass-pass","username":"Miles Boseman","rank":"normal","address":"","tel":"01298765432","gender":"0","birthday":"1992-08-31","notification":true}]')},754:e=>{e.exports=JSON.parse('{"validation":{"valueMissing":"このフィールドを入力してください。","typeMismatch":{"email":"メールアドレスを入力してください。","url":"URLを入力してください。"},"badInput":"有効な値を入力してください。","patternMismatch":"指定されている形式で入力してください。","tooLong":"{}文字以内で入力してください。","tooShort":"{}文字以上で入力してください。","rangeOverflow":"{}以下の値を入力してください。","rangeUnderflow":"{}以上の値を入力してください。","stepMismatch":"有効な値を入力してください。","shoudBeNextDay":"翌日以降の日付を入力してください。","shouldBeThreeMonth":"3ヶ月以内の日付を入力してください。","mailOrAddressMismatch":"メールアドレスまたはパスワードが違います。","existsMail":"このメールアドレスはすでに登録済みです。","passwordUnmatch":"入力されたパスワードと一致しません。","underTenKb":"ファイルサイズは10KB以下にしてください。","onlyImageFile":"画像ファイルを選択してください。"},"user":{"gender":{"unregistered":"未登録","male":"男性","female":"女性","other":"その他"},"rank":{"premium":"プレミアム会員","normal":"一般会員"},"unregistered":"未登録","notification":{"true":"受け取る","false":"受け取らない"},"deleteConfirm":"退会すると全ての情報が削除されます。\\nよろしいですか？","deleteComplete":"退会処理を完了しました。ご利用ありがとうございました。"},"plans":{"premiumOnly":"❤️プレミアム会員限定❤️","memberOnly":"会員限定","oneAdult":"大人1名{}","minHeadCount":"{}名様から","reserveLink":"このプランで予約"},"reserve":{"planDescLong":"お一人様1泊{}〜、土日は25%アップ。{}名様〜{}名様、最長{}泊","planDescShort":"お一人様1泊{}〜、土日は25%アップ","roomInfo":"部屋情報","totalBill":"合計 {}（税込み）","term":"{} 〜 {} {}泊","headCount":"{}名様","breakfast":"朝食バイキング","earlyCheckIn":"昼からチェックインプラン","sightseeing":"お得な観光プラン","none":"なし","username":"{}様","contact":{"no":"希望しない","email":"メール：{}","tel":"電話：{}"}}}')},4:e=>{e.exports=JSON.parse('[{"email":"ichiro@example.com","password":"password","username":"山田一郎","rank":"premium","address":"東京都豊島区池袋","tel":"01234567891","gender":"1","birthday":"","notification":true},{"email":"sakura@example.com","password":"pass1234","username":"松本さくら","rank":"normal","address":"神奈川県横浜市鶴見区大黒ふ頭","tel":"","gender":"2","birthday":"2000-04-01","notification":false},{"email":"jun@example.com","password":"pa55w0rd!","username":"林潤","rank":"premium","address":"大阪府大阪市北区梅田","tel":"01212341234","gender":"9","birthday":"1988-12-17","notification":false},{"email":"yoshiki@example.com","password":"pass-pass","username":"木村良樹","rank":"normal","address":"","tel":"01298765432","gender":"0","birthday":"1992-08-31","notification":true}]')}},a={};function r(n){var t=a[n];if(void 0!==t)return t.exports;var s=a[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(()=>{const e={ja:r(754),"en-US":r(338)},a={ja:r(4),"en-US":r(277)},n={ja:new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY",currencyDisplay:"name"}),"en-US":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",currencyDisplay:"symbol"})};function t(){return $("html").attr("lang")}function s(a){return a=void 0!==a?a:t(),e[a]}function o(e,a){return!e.only||!!a&&("member"===e.only||("premium"===e.only?"premium"===a.rank:void 0))}function l(){const e=Array.prototype.slice.call(arguments),a=e.shift();let r=s();const n=a.split(".");let t;for(let e=0;e<n.length&&(t=r[n[e]],"string"!=typeof t);e++)r=r[n[e]];for(let a=0;a<e.length;a++)t=t.replace("{}",e[a]);return t}function i(e){let a="";return"premium"===e.only?a='<div class="card-header">'+l("plans.premiumOnly")+"</div>":"member"===e.only&&(a='<div class="card-header">'+l("plans.memberOnly")+"</div>"),'<div class="col-12 col-md-6 col-lg-4"><div class="card text-center shadow-sm mb-3">'+a+'<div class="card-body"><h5 class="card-title">'+e.name+'</h5><ul class="list-unstyled"><li>'+l("plans.oneAdult",(r=e.roomBill,(s=void 0!==s?s:t(),n[s]).format(r)))+"</li><li>"+l("plans.minHeadCount",e.minHeadCount)+"</li><li>"+e.room+'</li></ul><a href="./index.html?plan-id='+e.id+'" class="btn btn-primary" target="_blank" rel="opener">'+l("plans.reserveLink")+"</a></div></div></div>";var r,s}new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"long",day:"numeric"}),new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}),$((function(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)session\s*\=\s*([^;]*).*$)|^.*$/,"$1");e&&($("#signup-holder").removeClass("d-block").addClass("d-none"),$("#login-holder").removeClass("d-block").addClass("d-none"),$("#mypage-holder").removeClass("d-none").addClass("d-block"),$("#logout-holder").removeClass("d-none").addClass("d-block"),$("#logout-form").submit((function(){document.cookie="session=; max-age=0"})));const r=function(e){const r=(n=void 0!==n?n:t(),a[n]);var n;let s=null;for(let a=0;a<r.length;a++)if(r[a].email===e){s=r[a];break}return s?(s.preset=!0,s):(s=localStorage.getItem(e),s?JSON.parse(s):null)}(e),n=location.origin+"/hotel-example-site/data/"+t()+"/plan_data.json?"+Date.now();$.getJSON(n).done((function(e){let a="";for(let n=0;n<e.length;n++)0!==e[n].id&&o(e[n],r)&&(a+=i(e[n]));$("#plan-list").html(a)}))}))})()})();
//# sourceMappingURL=plans.bundle.js.map