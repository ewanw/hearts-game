function a75(n){var t,i;for(t in n)this[t]=n[t];this.a181=new a177(this.a24);this.a181.a186(this.a27);for(t in this.a28)for(list=this.a28[t].split(","),n=0;n<list.length;n++)i=this.a181.a188(list[n]+t),"T"==t?i.trumpRank=n+1:(i.a28=n+1,i.trumpRank=i.a28);for(this.player=[],n=0;n<this.a26.length;n++)t=new a207(this.a26[n]),this.player.push(t);for(this.a26=null,this.a76=this.play.a34.split(","),this.a77=this.a78=this.a79=this.a80=this.winner=this.a81=-1,this.a82=[],this.a83=[],this.a84=[],this.a85=[],this.a86=[],this.a87=this.a88=this.a89=this.a90=0,this.a91=this.a92=this.a93=null,this.a94=this.a95="",this.a96=!1,this.a97=this.a98=0,this.a99=[],this.a100=a69.a57,this.a101=null,this.a102=Array(this.player.length),n=0;n<this.player.length;n++)this.a102[n]=Array(5);this.a103=2e3;this.Start=function(){this.a98=0;this.a123();this.a105()};this.a104=function(n){switch(this.a100){case a69.a226:this.a100=a69.a57;this.a98++;this.a105();break;case a69.a228:if(null==n||""==n)break;this.a100=a69.a57;this.a95=n;this.a105();a12("");break;case a69.a229:this.a100=a69.a57;this.a105();break;case a69.a230:this.a100=a69.a57;this.answer=n;this.a105()}};this.a15=function(n){if(n=this.a181.a188(n),n.enabled)switch(this.a100){case a69.a227:a12("");this.a100=a69.a57;this.a93=n;this.a105();break;case a69.a229:n.selected=!n.selected;n.selected?n.a204(-10):n.a204(10)}};this.a105=function(){for(var t,n,i,r;this.a98<this.a35.length;)if(t=this.a35[this.a98],"End"==t.substr(0,3)){for(n in this.a35)if(this.a35[n]==t.substr(3)){this.a98=n++;break}}else if(n=t.indexOf("?"),0<n?(i=t.substr(n+1),t=t.substr(0,n),this[t](i)):this[t](),this.a100==a69.a57)this.a98++;else if(this.a100==a69.a231){for(n=this.a98+1;n<this.a35.length;n++)if("End"==this.a35[n].substr(0,3)){this.a98=n+1;break}this.a100=a69.a57}else{this.a100==a69.a232&&(this.a99.length?this.a99.push({action:"next"}):(r=this,window.setTimeout(function(){r.a106()},this.a103)));break}};this.a106=function(){this.a100=a69.a57;this.a98++;this.a105()};this.a107=function(){};this.a108=function(){};this.a109=function(){};this.a110=function(n){this.a101[n]()};this.a40=function(){for(var n=0;n<this.player.length;n++)this.player[n].score=0;this.winner=this.a81=-1;this.a97=0;this.a100=a69.a57;$("#resultbox").hide()};this.InitHand=function(){for(var n,t=0;t<this.player.length;t++)for(n=this.player[t],n.a211.clear(),n.a213.clear(),n.a215=0,n.a210=0,n.a216.clear(),suit=1;4>=suit;suit++)this.a102[t][suit]=!1;this.a85.clear();this.a86.clear();this.a82.clear();this.a88=this.a89=this.a90=0;this.a93=null;this.a95="";this.a97++};this.a111=function(){this.a181.a189()};this.a112=function(){var r=this.player.length,t,n,i;for(this.a81++,this.a81>=r&&(this.a81=0),t=this.a81,i=1;i<=r*this.a29.a30;i++)t++,t>=r&&(t=0),n=this.a181.a190(),n.status=a70.a233,this.player[t].a211.push(n),this.player[t].a209||n.Disable();for(this.a92=n,t=0;t<r;t++)for(n=this.player[t],this.a129(n.a211),n.a212.clear(),i=0;i<n.a211.length;i++)n.a212.push(n.a211[i])};this.a113=function(){for(var n=0;n<this.player.length;n++)this.a114(n)};this.a114=function(n){for(var i,t,u=this.player[n].cardPos.x,f=this.player[n].cardPos.y,r=0;r<this.player[n].a211.length;r++)t=this.player[n],i=t.a211[r],i.Position(u,f),t.a209?i.a202():i.a203(),i.a201(!0),0<="NS".indexOf(t.a14)?u+=t.a219:0<="EW".indexOf(t.a14)&&(f+=t.a219)};this.a115=function(n){n=a225(n);0==this.a86.length&&(this.a78="dealer"==n.a31?this.a81:this.a81+1);do{for(this.a78>=this.player.length&&(this.a78=0),this.a91=this.player[this.a78].a211,this.a84.clear(),n=0;n<this.a91.length;n++)this.a84.push(this.a91[n]);if(this.player[this.a78].a209){if(""==this.a95){this.a101.GetBid();this.a100=a69.a228;this.a99.length?(this.a99.push({action:"mess",message:"What is your bid?"}),this.a132()):a12("What is your bid?");return}}else this.a95=this.a101.GetBid();if(this.player[this.a78].a216.push(this.a95),this.a86.push(this.a95),a7.fastplay?this.player[this.a78].a133(this.a95):this.a99.push({action:"speak",player:this.player[this.a78],message:this.a95}),n=this.a101.GetFinalBid(),"busy"!=n)break;this.a95="";this.a78++}while(1);if(this.a99.length&&this.a132(),this.a78=0,"Abort"==n)this.a134();else{if(this.a94=n,-1==this.a80){this.a80=this.a81+1;n=1;do{if(this.a80>=this.player.length&&(this.a80=0),this.a86[n]==this.a94)break;n++;this.a80++}while(1)}this.a100=a69.a232}};this.a116=function(){switch(this.a32){case"lastcard":this.a88=this.a92.suit;break;case"none":this.a88=0;break;case"bid":for(var n=0;n<this.a94.length&&!(this.a88="HSDCN".indexOf(this.a94.substr(n,1))+1);n++);break;case"specific":break;default:this.a88=0}a12(0<=this.a80?this.a94+" by "+this.player[this.a80].name:this.a88?this.a88==a62?"No trumps":a66[this.a88]+" trumps":"");switch(this.a31){case"dealer":this.a79=this.a81;break;case"dealerleft":this.a79=this.a81+1;break;case"bidder":this.a79=this.a80;break;case"bidderleft":this.a79=this.a80+1;break;default:this.a79=this.a81+1}this.a79>=this.player.length&&(this.a79=0);this.a78=this.a79;"trick"!=this.type&&(this.a79=-1);this.a93=null;this.a83.clear()};this.a117=function(){var t,n;if(this.a83.length){for(n=0;n<this.player.length;n++)t=this.player[n].a214,t.Move(this.player[this.a77].a217.x,this.player[this.a77].a217.y,!0);this.player[this.a79].a220(!1);this.a78=this.a79=this.a77}if(0==this.player[this.a78].a211.length)this.a100=a69.a231;else{for(this.a83.clear(),n=0;n<this.player.length;n++)this.player[n].a214=null;this.a77=-1;this.a99.clear();this.player[this.a79].a220(!0)}};this.a118=function(){var n,i,t,r;this.player[this.a78].a209||a12("");do{if(n=this.player[this.a78],this.a91=n.a211,this.a127(null,!0),r=this.a84.length,n.a209){if(null==this.a93){for(t=0;t<this.a91.length;t++)i=this.a91[t],i.Enable(0<=this.a84.indexOf(i));if(1==r&&a7.autoplay)this.a93=this.a84[0];else{this.a100=a69.a227;n="Your turn - "+a1+" card to play";this.a99.length?(this.a99.push({action:"mess",message:n}),this.a132()):a12(n);return}}}else if(null==this.a93&&(this.a93=this.a128(this.a78)),"object"!=typeof this.a93&&alert(typeof this.a93),null==this.a93)return;if(0>this.a84.indexOf(this.a93)){if(n.a209){a12("Invalid card");this.a100=a69.a227;return}a12("Invalid card played by computer player "+this.a93.name+" "+n.name)}a7.fastplay?(this.a93.a197&&this.a93.a202(),this.a93.Move(n.a218.x,n.a218.y,!1)):this.a99.push({action:"move",card:this.a93,x:n.a218.x,y:n.a218.y});n.a214=this.a93;this.a83.push(this.a93);this.a82.push(this.a93);n.a211.remove(this.a93);this.a78++;this.a78>=this.player.length&&(this.a78=0);this.a93=null}while(this.a78!=this.a79);this.a99.length&&this.a132()};this.a46=function(){this.a89=this.player[this.a79].a214.suit;for(var i=0,t=0,n=0;n<this.player.length;n++)t=this.a126(this.player[n].a214),t>i&&(i=t,this.a77=n);for(n="Trick won by "+this.player[this.a77].name+" - "+a1+" table to continue",this.a99.length?this.a99.push({action:"mess",message:n}):a12(n),t=new a222,n=0;n<this.player.length;n++)i=this.player[n].a214,this.player[this.a77].a213.push(i),t.cards[n]=i,t.score[n]=this.player[n].a210,i.Suit!=this.a89&&(this.a102[n][this.a89]=!0);this.player[this.a77].a215++;t.winner=this.a77;t.a79=this.a79;this.a85.push(t);this.a90++;this.a100=a69.a226};this.a119=function(n){var i,r,u,f,e,o,t;for(n=a225(n),i=0<=this.player[0].a208,r=this.player.length,i&&(r/=2),t=0;t<r;t++)i?(u=this.player[t].a210+this.player[this.player[t].a208].a210,f=this.player[t].score+this.player[this.player[t].a208].score,e=this.player[t].a215+this.player[this.player[t].a208].a215,this.player[t].a216.length&&(o=Number(this.player[t].a216.last())+Number(this.player[this.player[t].a208].a216.last()))):(u=this.player[t].a210,f=this.player[t].score,e=this.player[t].a215,this.player[t].a216.length&&(o=this.player[t].a216.last())),0<=n.format.indexOf("hand")&&$("#scorehand"+t).text(u),0<=n.format.indexOf("tot")&&$("#scoretot"+t).text(f),0<=n.format.indexOf("trick")&&$("#scoretricks"+t).text(e),0<=n.format.indexOf("bid")&&$("#scorebid"+t).text(o);n.hasOwnProperty("a14")||(n.a14="topleft");a13(n.a14)};this.a120=function(){for(var n=0;n<this.player.length;n++)this.player[n].score+=this.player[n].a210};this.a121=function(n){var t,i;if(0<=this.winner)this.a100=a69.a231;else if(t=a225(n),this.a96=!1,t.hasOwnProperty("condition")){if($.isNumeric(t.condition))for(n=0;n<this.player.length;n++)this.player[n].score>=t.condition&&(this.a96=!0);if(this.a96){if(i=-1,"highscore"==t.winner)for(n=t=0;n<this.player.length;n++)this.player[n].score>t&&(i=n,t=this.player[n].score);else if("lowscore"==t.winner)for(t=32e3,n=0;n<this.player.length;n++)this.player[n].score<t&&(i=n,t=this.player[n].score);this.winner=i;0<=this.winner&&(this.a100=a69.a231)}}};this.a122=function(){var t=this.player[this.winner],n=t.name;0<=t.a208&&(n=n+=" and "+this.player[t.a208].name);this.a99.clear();a12("End of game -  winner is "+n);$("#winner").text(n);$("#resultbox").show();this.a100=a69.a57;$(this).trigger("gameover")};this.a123=function(n){for(n=0;n<this.player.length;n++)this.player[n].a221()};this.a124=function(n){var i,r,t;switch(a225(n).a14){case"LEFT_BOTTOM":i=a6.left+10;r=this.player[0].cardPos.y;break;case"MIDDLE":i=this.player[0].cardPos.x;r=this.player[0].cardPos.y}for(n=this.a181.a191(),t=n.length-1;0<=t;t--)n[t].a201(!0),n[t].Position(i,r),n[t].a203()};this.a125=function(n){n=a225(n);"statusline"==n.a14&&""<n.mess&&(this.a99.clear(),a12(n.mess));"true"==n.wait&&(this.a100=a69.a226)};this.a126=function(n){return null==n?0:n.suit==this.a88?n.trumpRank+13:n.suit==this.a89||0==this.a89?n.a28:n.a28-14};this.a127=function(n,t){var r,i,u;if(null==n&&(n=this.a91),this.a84.clear(),this.a89=null==this.player[this.a79].a214?0:this.player[this.a79].a214.suit,this.a78==this.a79)if("function"==typeof this.a101.a48)for(this.a101.a48(),r=0;r<n.length;r++)i=n[r],i.selected?i.selected=!1:this.a84.push(i);else for(r=0;r<n.length;r++)this.a84.push(n[r]);else{u=0;do{for(r=0;r<n.length;r++)switch(i=n[r],this.a76[u]){case"f":i.suit==this.a89&&this.a84.push(i);break;case"t":i.suit==this.a88&&this.a84.push(i);break;case"T":i.suit==this.a88&&this.a131(i,this.a83)&&this.a84.push(i);break;case"o":this.a89==this.a88&&i.suit==this.a88&&this.a131(i,this.a83)&&this.a84.push(i);break;case"ft":i.suit!=this.a89&&i.suit!=this.a88||this.a84.push(i);break;case"r":case"tr":case"fr":case"ftr":this.a84.push(i)}if(u++,u>=this.a76.length)break}while(0==this.a84.length);if("function"==typeof this.a101.a49)for(this.a101.a49(),r=0;r<this.a84.length;)this.a84[r].selected?(this.a84[r].selected=!1,this.a84.splice(r,1)):r++}t&&this.SortCardsByValue(this.a84)};this.a128=function(n){var t=null;return this.a89=null==this.player[this.a79].a214?0:this.player[this.a79].a214.suit,n==this.a79?(t=this.a101.a50(),null==t&&(t=this.a91[0])):(t=this.a101.a51(),null==t&&(t=this.a84[0])),t};this.a129=function(n){for(var r,i,t=1;t<n.length;){for(r=n[t],i=0;i<t;i++)if(r.number<n[i].number){n.splice(t,1);n.splice(i,0,r);break}t++}};this.SortCardsByValue=function(n){for(var r,u,i,t=1;t<n.length;){for(r=n[t],u=this.a126(r),i=0;i<t;i++)if(u<this.a126(n[i])){n.splice(t,1);n.splice(i,0,r);break}t++}};this.a131=function(n,t){if(0==t.length)return!0;for(var r=this.a126(n),i=0;i<t.length;i++)if(this.a126(t[i])>r)return!1;return!0};this.a132=function(){if(0!=this.a99.length){var t=this,n=this.a99.shift();switch(n.action){case"move":n.card.a197&&n.card.a202();n.card.Move(n.x,n.y,!1);break;case"mess":a12(n.message);break;case"speak":n.player.a133(n.message,n.after);break;case"next":window.setTimeout(function(){t.a106()},this.a103)}this.a99.length&&window.setTimeout(function(){t.a132()},500)}};this.a133=function(n,t,i){0==this.a99.length?n.a133(t,i):this.a99.push({action:"speak",player:n,message:t,after:i})};this.a134=function(){for(var n=0;n<this.a35.length;n++)if("a107"==this.a35[n]){this.a98=n;break}this.a105()};this.a135=function(n,t){null==t&&(t=this.a91);n==a63&&(n=this.a88);n==a64&&(n=this.a89);for(var r=0,i=0;i<t.length;i++)t[i].suit==n&&r++;return r};this.a136=function(n){var i,r,t;for(null==n&&(n=this.a91),i=[0,0,0,0,0],t=0;t<n.length;t++)i[n[t].suit]++;for(r=n=0,t=1;4>=t;t++)i[t]>n&&(n=i[t],r=t);return r};this.a137=function(n){var i,r,t;for(null==n&&(n=this.a91),i=[0,0,0,0,0],t=0;t<n.length;t++)i[n[t].suit]++;for(n=14,r=0,t=1;4>=t;t++)i[t]<n&&(n=i[t],r=t);return r};this.a138=function(n,t){null==t&&(t=this.a91);for(var r=[],i=0;i<t.length;i++)t[i].suit==n&&r.push(t[i]);return r};this.a139=function(n,t){null==t&&(t=this.a91);for(var r="",i=0;i<t.length;i++)t[i].suit==n&&(r+=t[i].face.substr(0,1));return r};this.a140=function(n,t){null==t&&(t=this.a91);for(var i=0;i<t.length;i++)if(t[i].name==n)return!0;return!1};this.a141=function(n,t){for(var r=n.split(","),u=0,i=0;i<r.length;i++)this.a140(r[i],t)&&u++;return u};this.a142=function(n,t,i){null==i&&(i=this.a91);for(var r=0;r<i.length;r++)if(i[r].face==t&&i[r].suit==n)return i[r];return null};this.a143=function(n,t){if(0==n)return null;null==t&&(t=this.a91);n==a63&&(n=this.a88);n==a64&&(n=this.a89);for(var u=-14,r,f=null,i=0;i<t.length;i++)t[i].suit==n&&(r=this.a126(t[i]),r>u&&(u=r,f=t[i]));return f};this.a144=function(n,t){if(0==n)return null;null==t&&(t=this.a91);n==a63&&(n=this.a88);n==a64&&(n=this.a89);for(var u=99,r,f=null,i=0;i<t.length;i++)t[i].suit==n&&(r=this.a126(t[i]),r<u&&(u=r,f=t[i]));return f};this.a145=function(n,t){var r;if(null==t&&(t=this.a91),n==a63&&(n=this.a88),n==a64&&(n=this.a89),r=this.a143(n,t),null==r)return null;for(var u=[],f,o=this.a126(r),e=13*(n-1)+1,i=e;i<=e+12;i++)f=this.a181.a188(i),this.a126(f)>o&&u.push(f);for(i in this.a82)u.remove(this.a82[i]);return 0==u.length?r:null};this.a146=function(n,t){var r;if(null==t&&(t=this.a91),n==a63&&(n=this.a88),n==a64&&(n=this.a89),r=this.a144(n,t),null==r)return null;for(var u=[],f,o=this.a126(r),e=13*(n-1)+1,i=e;i<=e+12;i++)f=this.a181.a188(i),this.a126(f)<o&&u.push(f);for(i in this.a82)u.remove(this.a82[i]);return 0==u.length?r:null};this.a147=function(n){null==n&&(n=this.a91);for(var i=0,r=[0,0,0,0,0],t=0;t<n.length;t++)r[n[t].suit]++;for(t=1;4>=t;t++)if(1==r[t]&&t!=this.a88){i=t;break}return this.a87=i};this.a148=function(n){var t=this.a145(n.suit);return n==t};this.a149=function(n,t){null==t&&(t=this.a91);n==a63&&(n=this.a88);n==a64&&(n=this.a89);for(var r=0,i=0;i<t.length;i++)t[i].suit==n&&r++;for(i=0;i<this.a82.length;i++)this.a82[i].suit==n&&r++;return this.a181.a184-r};this.a150=function(n,t){var i,r;if(0==t)return!1;if(t==a63&&(t=this.a88),t==a64&&(t=this.a89),i=!1,0>n)for(r=0;r<this.player.length&&!(i=this.a102[r][t]);r++);else i=this.a102[n][t];return i};this.a151=function(n){for(var t,r=a57,i=this.a90-1;0<=i;i--)if(t=this.a85[i],t.a79==n){r=t.cards[n].suit;break}return this.a87=r};this.a152=function(n){n=this.a139(n);var t=0;return 0<=n.indexOf("A")&&t++,0<=n.indexOf("K")&&t++,0<=n.indexOf("Q")&&t++,0<=n.indexOf("J")&&t++,0<=n.indexOf("1")&&t++,t};this.a153=function(){for(var t,n=1;4>=n;n++){if(t=this.a139(n),0<=t.indexOf("QKA"))return this.a181.a188("A"+a65[n]);if(0<=t.indexOf("JQK"))return this.a181.a188("K"+a65[n]);if(0<=t.indexOf("1JQ"))return this.a181.a188("Q"+a65[n])}return null};this.a154=function(n){return n=this.a139(n),0<=n.indexOf("KA")||0<=n.indexOf("QK")||0<=n.indexOf("JQ")||0<=n.indexOf("1J")?!0:!1};this.a155=function(n){return this.a145(n,this.a84)};this.a156=function(n){return this.a143(n,this.a84)};this.a157=function(n){return this.a144(n,this.a84)};this.a158=function(){for(var n=0;n<this.a84.length;n++)if("A"==this.a84[n].face)return this.a84[n];return null};this.a159=function(){for(var t=0,n=0;n<this.a84.length;n++)this.a84[n].status==a70.a74&&t++;return t};this.a74=function(n){for(var t=0;t<this.a84.length;t++)if(this.a84[t].suit==n&&this.a84[t].status==a70.a74)return this.a84[t];return null};this.a161=function(){for(var n=0;n<this.a84.length;n++)if(this.a84[n].status==a70.a74)return this.a84[n];return null};this.a162=function(){for(var n=0;n<this.a84.length;n++)if(this.a84[n].status==a70.a74||this.a84[n].status==a70.a73)return this.a84[n];return null};this.a163=function(){for(var n,i=null,t=0;t<this.a84.length;t++)n=this.a84[t],this.a131(n,this.a83)&&(i=n);return i};this.a164=function(){for(var n,t=0;t<this.a84.length;t++)if(n=this.a84[t],this.a131(n,this.a83))return n;return null};this.a165=function(){for(var n,t=0;t<this.a84.length;t++)if(n=this.a84[t],n.suit!=this.a89&&(n.status==a70.a74&&n.suit!=this.a88||n.status==a70.a73&&n.suit!=this.a88))return n;return null};this.a166=function(){for(var n,i=null,r=0,t=0;t<this.a84.length;t++)n=this.a84[t],n.suit!=this.a89&&n.a28>r&&(i=n,r=n.a28);return i};this.a167=function(){var n,i=null,r=99,t;if(this.a84[0].suit==this.a89)return this.a84[0];for(t=0;t<this.a84.length;t++)n=this.a84[t],n.suit!=this.a89&&n.suit!=this.a88&&n.a28<r&&(i=n,r=n.a28);return i};this.a168=function(){for(var r=100,n,u,t,i=0;i<this.a84.length;i++)n=this.a84[i],t=this.a126(n),t<r&&(r=t,u=n);return u};this.a169=function(n,t){for(var u=0,i,r=this.a84.length-1;0<=r;r--)if(i=this.a84[r],i.suit==t&&(u++,u==n))return i;return null};this.a170=function(n,t){for(var u=0,i,r=0;r<this.a84.length;r++)if(i=this.a84[r],i.suit==t&&(u++,u==n))return i;return null};this.a171=function(){if(this.a89==this.a88)return!1;for(var n=0;n<this.a84.length;n++)if(this.a84[n].suit==this.a88)return!0;return!1};this.a172=function(){for(var n,t=0;t<this.a84.length;t++)if(n=this.a84[t],n.suit==this.a88&&this.a131(n,this.a83))return n;return null};this.a173=function(){if(this.a84[0].suit==this.a89||0==this.a135(this.a88,this.a84))return null;for(var t,n=1;4>=n;n++)if(n!=this.a89&&n!=this.a88&&1==this.a135(n,this.a84)&&(t=this.a144(n,this.a84),!this.a148(t)))return t;return null};this.a174=function(){for(var n,t,r=-99,u=null,i=0;i<this.a84.length;i++)n=this.a84[i],this.a131(n,this.a83)||(t=this.a126(n),t>r&&(u=n,r=t));return u};this.a175=function(n){return this.a131(n,this.a83)};this.a176=function(){var n=this.player[this.player[this.a78].a208];return null==n.a214?!1:this.a131(n.a214,this.a83)}}function a177(n){this.a178=74;this.a179=94;this.a180=document.getElementById(n);this.a181=[];this.a182=[];this.a183=-1;this.a184=13;this.a185=new a223(0);this.a186=function(n){for(var t,r,f,u=0,i=1;4>=i;i++)for(r=n[a65[i]].split(","),f=0;f<r.length;f++)u++,t=document.createElement("canvas"),t.className="card",t.id="card"+u,t.width=this.a178,t.height=this.a179,t.style.position="absolute",this.a180.appendChild(t),t=new a196(r[f],i,t),t.number=u,this.a181.push(t),t.a201(!1);this.a184=r.length};this.a187=function(n){for(var t=0;t<this.a181.length;t++)this.a181[t].a200(n)};this.a188=function(n){for(var t=0;t<this.a181.length;t++)if($.isNumeric(n)){if(this.a181[t].number==n)return this.a181[t]}else if(this.a181[t].name==n)return this.a181[t];return null};this.a189=function(){var n,i,t;for(this.a182.clear(),n=0;n<this.a181.length;n++)this.a182.push(this.a181[n]);for(n=this.a182.length-1;0<n;)t=Math.floor(this.a185.next(0,n-1)),i=this.a182[n],this.a182[n]=this.a182[t],this.a182[t]=i,n--;this.a183=-1};this.a190=function(){return this.a183++,this.a183>=this.a182.length?null:this.a182[this.a183]};this.a191=function(){for(var t=[],n=this.a183+1;n<this.a182.length;n++)t.push(this.a182[n]);return t};this.a192=function(n){return this.a188(13*(n-1)+1)};this.a193=function(n){return this.a188(13*n)};this.a194=function(n){if(n.number==this.a181.length)return null;var t=this.a188(n.number+1);return t.suit!=n.suit&&(t=null),t};this.a195=function(n){if(1==n.number)return null;var t=this.a188(n.number-1);return t.suit!=n.suit&&(t=null),t}}function a196(n,t,i){this.face=n;this.suit=t;this.name=n+a65[t];this.canvas=i;this.ctx=this.canvas.getContext("2d");this.status=this.number=this.trumpRank=this.a28=0;this.a197=this.visible=this.enabled=this.selected=!1;this.$cd=$(this.canvas);this.a198=this.canvasFace=null;this.$cd.on(a3,a15);this.a200=function(n){var t,i;switch(this.face){case"A":t=13;break;case"K":t=12;break;case"Q":t=11;break;case"J":t=10;break;default:t=Number(this.face)-1}t=t%13*this.canvas.width;i=(this.suit-1)*this.canvas.height;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);this.ctx.drawImage(n,t,i,this.canvas.width,this.canvas.height,0,0,this.canvas.width,this.canvas.height);this.canvasFace=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)};this.a201=function(n){n?this.$cd.show():this.$cd.hide();this.visible=n};this.Position=function(n,t){this.$cd.css({left:n,top:t});this.canvas.style.zIndex=a67++};this.BringToTop=function(){this.canvas.style.zIndex=a67++};this.Move=function(n,t,i){null==i&&(i=!1);i?this.$cd.animate({left:n,top:t},500,function(){$(this).hide()}):this.$cd.animate({left:n,top:t},500)};this.a202=function(){this.ctx.putImageData(this.canvasFace,0,0);this.a197=!1};this.a203=function(){null==this.a198&&(this.a205(),this.a198=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));this.ctx.putImageData(this.a198,0,0);this.a197=!0};this.Enable=function(n){(this.enabled=n)?(this.canvas.style.cursor="pointer",this.canvas.style.backgroundColor="white"):(this.canvas.style.cursor="default",this.canvas.style.backgroundColor="bisque")};this.Disable=function(){this.enabled=!1;this.canvas.style.cursor="default";this.canvas.style.backgroundColor="white"};this.a204=function(n){var t=this.$cd.offset().top;this.$cd.css({top:t+n})};this.a205=function(){var r=this.canvas.height,n=this.canvas.width,t,i;this.ctx.clearRect(0,0,n,r);this.ctx.fillStyle="darkblue";for(var u=2,f=2,r=r-4,n=n-4;54<n;)n-=4,r-=4,u+=2,f+=2,this.ctx.fillRect(u,f,n,r),this.ctx.fillStyle="#ffffff"==this.ctx.fillStyle?"darkblue":"#ffffff";for(t=10;t<84;t=t+2)for(i=10;i<n+10;i=i+2)this.ctx.fillRect(i,t,2,2),this.ctx.fillStyle="#ffffff"==this.ctx.fillStyle?"darkblue":"#ffffff"};this.a206=function(n){this.canvas.style.backgroundColor=n}}function a207(n){this.a208=-1;for(var t in n)this[t]=n[t];this.a209="You"==this.name?!0:!1;this.a210=this.score=0;this.a211=[];this.a212=[];this.a213=[];this.a214=null;this.a215=0;this.a216=[];this.a217=this.a218=this.cardPos=null;this.a219=this.a209?touchDevice?40:25:6;this.a220=function(n){n?$("#"+this.name).css({"background-color":"lightblue"}):$("#"+this.name).css({"background-color":"moccasin"})};this.a133=function(n,t){null==t&&(t=!1);var i=$("#say"+this.a14);i.text(n);i.show();t&&window.setTimeout(function(){i.hide()},2e3)};this.a221=function(){$("#say"+this.a14).hide()}}function a222(){this.cards=Array(5);this.a79=this.winner=-1;this.score=Array(5)}function a223(n){this.a224=n;0==this.a224&&(n=(new Date).getTime().toString(),this.a224=parseInt(n.substr(n.length-8,8)));this.next=function(n,t){return this.a224=(9301*this.a224+49297)%233280,Math.floor(this.a224/233280*(t-n+1))+n}}function a225(n){n=n.split("&");for(var r={},i,t=0;t<n.length;t++)i=n[t].indexOf("="),r[n[t].substr(0,i)]=n[t].substr(i+1);return r}function Hearts(){this.a2=new a75({a24:"table",a25:"Hearts",type:"trick",a26:[{name:"You",a14:"S"},{name:"West",a14:"W"},{name:"North",a14:"N"},{name:"East",a14:"E"}],a27:{H:"2,3,4,5,6,7,8,9,10,J,Q,K,A",S:"2,3,4,5,6,7,8,9,10,J,Q,K,A",D:"2,3,4,5,6,7,8,9,10,J,Q,K,A",C:"2,3,4,5,6,7,8,9,10,J,Q,K,A"},a28:{H:"2,3,4,5,6,7,8,9,10,J,Q,K,A",S:"2,3,4,5,6,7,8,9,10,J,Q,K,A",D:"2,3,4,5,6,7,8,9,10,J,Q,K,A",C:"2,3,4,5,6,7,8,9,10,J,Q,K,A"},a29:{a30:13},a31:"dealerleft",a32:"none",play:{a34:"f,r",a33:"standard"},a35:["a40","a110?a40","a107","InitHand","a110?a41","a119?format=hand,tot","a111","a112","a113","a110?a42","a110?a43","a116","a110?a44","a108","a117","a110?a45","a118","a46","a110?a46","a119?format=hand,tot","Enda108","a110?a47","a120","a119?format=hand,tot&a14=center","a121?condition=100&winner=lowscore","a125?mess=Click on table for next hand&a14=statusline&wait=true","Enda107","a122"]});this.a2.a101=this;this.a36=!1;this.a37=null;this.a38=!1;this.a39="";this.a40=function(){this.a37=this.a2.a181.a188("QS");this.a39="LRON"};this.a41=function(){this.a36=!1;this.a38=!0;""===this.a39&&(this.a39="LRON")};this.a42=function(){for(var n=0;n<this.a2.player[0].a211.length;n=n+1)this.a2.player[0].a211[n].Enable(!0)};this.a43=function(){var u,n,f,i,t,r;if("N"===this.a39)this.a39="",this.a2.a78=this.a2.a79;else{for(u=0,n=0;n<this.a2.player[0].a211.length;n=n+1)this.a2.player[0].a211[n].selected&&(u=u+1);if(f=this.a39.substr(0,1),3!==u)a12("Select 3 cards to pass to "+("L"===f?this.a2.player[1].name:"R"===f?this.a2.player[3].name:this.a2.player[2].name)+" then "+a1+" the table"),this.a2.a100=a69.a229;else{for(u=[],t=1;t<this.a2.player.length;t=t+1)this.a2.a91=this.a2.player[t].a211,this.a2.a78=t,this.a54();for(this.a39=this.a39.substr(1),i,r,t=0;t<this.a2.player.length;t=t+1){switch(f){case"L":i=t+1;i>=this.a2.player.length&&(i=0);break;case"R":i=t-1;0>i&&(i=this.a2.player.length-1);break;case"O":i=t+2;i>=this.a2.player.length&&(i-=this.a2.player.length)}for(n=0;n<this.a2.player[t].a211.length;n)r=this.a2.player[t].a211[n],r.selected?(r.selected=!1,this.a2.player[t].a211.splice(n,1),this.a2.player[i].a211.push(r),0===t&&(r.Move(this.a2.player[i].cardPos.x,this.a2.player[i].cardPos.y),r.Disable(),r.a203()),0===i&&u.push(r)):n=n+1}for(n=0;n<this.a2.player.length;n=n+1)this.a2.a129(this.a2.player[n].a211),this.a2.a114(n);for(n=0;n<u.length;n=n+1)r=u[n],r.a204(-10),r.Enable(!0);this.a2.a78=this.a2.a79}}};this.a44=function(){this.a2.a97===1&&$.ajax({url:"/../scripts/start.php?id=11"});for(var t=this.a2.a181.a188("2C"),n=0;n<this.a2.player.length;n=n+1)if(this.a2.player[n].a211.have(t)){this.a2.a79=n;this.a2.a78=n;break}n<this.a2.player.length&&(this.a2.a93=t)};this.a45=function(){return};this.a46=function(){for(var i,t=0,n=0;n<this.a2.a83.length;n=n+1)i=this.a2.a83[n],i.suit===a58&&(t+=1,this.a36=!0),i===this.a37&&(t+=13);if(t>0&&(this.a2.player[this.a2.a77].a210+=t,this.a38)){for(n===0;4>n;n=n+1)n!==this.a2.a77&&(this.a2.player[n].canSlam=!1);for(n=t=0;4>n;n=n+1)this.a2.player[n].a210&&(t=t+1);1<t&&(this.a38=!1)}1===this.a2.a90&&this.a2.a113()};this.a47=function(){for(var t,n=0;4>n;n=n+1)if(26===this.a2.player[n].a210){for(a12(this.a2.player[n].name+" made a slam!"),t=0;4>t;t=t+1)t!==n&&(this.a2.player[t].a210=26);this.a2.player[n].a210=0;this.a2.a133(this.a2.player[n],"Done it!",!0);break}};this.a48=function(){if(!this.a36&&this.a2.a135(a58)!==this.a2.a91.length)for(var n=0;n<this.a2.a91.length;n=n+1)this.a2.a91[n].suit===a58&&(this.a2.a91[n].selected=!0)};this.a49=function(){if(!(0<this.a2.a90))for(var n=0;n<this.a2.a84.length;n=n+1)this.a2.a84[n].suit===a58&&(this.a2.a84[n].selected=!0,"QS"===this.a2.a84[n].name&&(this.a2.a84[n].selected=!0))};this.a50=function(){var t=this.a2,n,i;if(4>t.a82.length&&this.a53(),this.a38&&t.player[t.a78].canSlam)return(n=t.a146(a60),null!==n)?n:(n=t.a146(a61),null!==n)?n:(n=t.a146(a59),null!==n&&n!==this.a37)?n:this.HeartsBroken&&(n=t.a145(a58,t.a84),null!==n)?n:(n=t.a145(a60),null!==n)?n:(n=t.a145(a61),null!==n)?n:(n=t.a145(a59),null!==n?n:t.a91[0]);if(this.a36&&((n=t.a146(a58),null!==n&&0<t.a149(a58))||t.a91.have(this.a37)&&(6<t.a149(a60)&&3>t.a135(a60)&&(n=t.a143(a60),null!==n)||6<t.a149(a61)&&3>t.a135(a61)&&(n=t.a143(a61),null!=n))||6<t.a149(a60)&&0==t.a150(-1,a60)&&(n=t.a143(a60),null!=n)||6<t.a149(a61)&&0==t.a150(-1,a61)&&(n=t.a143(a61),null!=n))||(n=t.a146(a60),null!==n&&t.a150(-1,a60)&&0<t.a149(a60)))return n;if(i=t.a146(a61),null!==i&&t.a150(-1,a61)&&0<t.a149(a61))return i;if(null!==n&&0<t.a149(a60))return n;if(null!==i&&0<t.a149(a61))return i;if(0===t.a91.have(this.a37)&&(n=t.a144(a59),null==n||"KS"!=n.name&&"AS"!=n.name||(n=null),null!=n&&0<t.a149(a59))||(n=t.a144(a60),null!==n&&0<t.a149(a60))||(n=t.a144(a61),null!==n&&0<t.a149(a61)))return n;for(i=0;i<t.a84.length;)if(n=t.a84[i],n.suit===a58||n===this.a37)i=i+1;else return n;return t.a84[0]};this.a51=function(){var n=this.a2,t,i=n.a84,u=0;for(var r in n.a83)t=n.a83[r],t.suit==a58&&u++,t==this.a37&&(u+=13);if(t=this.a38&&n.player[n.a78].canSlam,n.a89===i[0].suit){if(i.have(this.a37)&&!t){if(n.a141("AS,KS",n.a83))return n.a133(n.player[n.a78],"Tough luck!",!0),this.a37;if(n.a140("AS",i))return n.a181.a188("AS");if(n.a140("KS",i))return n.a181.a188("KS")}return u?t&&(t=n.a143(a64,i),null!=t)?t:this.a52(i):3==n.a83.length?t?i[0]:i.have(this.a37)?i[0]:i.last():3<n.a149(a64)&&n.a89!=a59||t?i.last():this.a52(i)}if(t)return(t=n.a144(a60,i),null!==t)?t:(t=n.a144(a61,i),null!==t)?t:(t=n.a144(a59,i),null!==t?t:i[0]);if(i.have(this.a37))return n.a133(n.player[n.a78],"Got you!",!0),this.a37;if(0===n.a82.have(this.a37)&&((t=n.a181.a188("AS"),i.have(t))||(t=n.a181.a188("KS"),i.have(t))))return t;if(this.a38){for(r=0;4>r;r=r+1)r!=n.a78&&18<n.player[r].a210&&(r=10);if(4<r)return i[0]}return t=n.a143(a58,i),null!=t?t:i.last()};this.a52=function(n){for(var r=0,u=n[0],i,t=0;t<this.a2.a83.length;t++)i=this.a2.a126(this.a2.a83[t]),i>r&&(r=i);for(t=n.length-1;0<=t;t--)if(i=n[t]==this.a37?100:this.a2.a126(n[t]),i<r){u=n[t];break}return u};this.a53=function(){var n=!1;this.a2.a140("AH")&&4<this.a2.a135(a58)?3<=this.a2.a141("KH,QH,JH,10H")&&2<=this.a2.a141("AS,KS,QS")&&(n=!0):9<=this.a2.a141("AH,KH,QH,AS,KS,QS,AD,KD,AC,KC")&&(n=!1);this.a2.player[this.a2.a78].canSlam=n};this.a54=function(){var n=0,u,t,f,r,i;if(this.a53())for(1<this.a2.a135(a60)&&(n+=this.a55(this.a2.a144(a60))),1<this.a2.a135(a61)&&(n+=this.a55(this.a2.a144(a61))),t=0;3>n;)n+=this.a55(this.a2.a91[t]),t++;else{for(this.a2.a91.have(this.a37)&&4>this.a2.a135(a59)&&(n+=this.a55(this.a37)),suit=1;4>=suit;suit++)if(r=this.a2.a135(suit),1==r||2==r){if(i=this.a2.a143(suit),5<i.a28&&(n+=this.a55(i)),1<n)break;if(2==r&&(i=this.a2.a144(suit),4<i.a28&&(n+=this.a55(i))),1<n)break}for(u="AS KS AH KH QH JH 10H AD KD QD QC AC KC".split(" "),t=0,f;3>n&&!(f=u[t],i=this.a2.a181.a188(f),this.a2.a91.have(i)&&(n+=this.a55(i)),t++,t>=u.length););if(3>n)for(t=1;13>=t&&(n+=this.a55(this.a2.a91[t-1]),3!=n);t=t+1);}};this.a55=function(n){return n.selected?!1:(n.selected=!0,!0)};this.a56=function(){return this.a2.a98>10&&this.a2.a98<this.a2.a35.length-1}}function a9(){a2.Start()}function a10(){a9()}function a11(){var n=window.location.href.replace(/#.*/,"");window.location.href=n}function a12(n){$msgbox.html(n)}function a13(n){var f=$("#scoreboard"),i,r,t,u;n==="topleft"?(t=120,u="11px",i=40,r=a6.top+5):n==="center"&&(t=200,u="18px",i=a6.left+($table.width()-t)/2,r=a6.top+($table.height()-f.height())/2-25);f.css({left:i,top:r,width:t+"px","font-size":u})}function a15(n){a2.a15(this.id.substr(4));n.stopPropagation()}var a57=0,a58=1,a59=2,a60=3,a61=4,a62=5,a63=6,a64=7,a65="XHSDCT".split(""),a66="X;Hearts;Spades;Diamonds;Clubs;No Trumps".split(";"),a67=500,a68=0,a69={a57:0,a226:1,a227:2,a228:3,a229:4,a230:5,a231:6,a232:7},a70={a233:0,a71:1,a72:2,a73:3,a74:4},touchDevice,a3,a1,hearts,a2,$table,$msgbox,a6,a7,a8;Array.prototype.clear=function(){for(;0<this.length;)this.pop()};Array.prototype.remove=function(n){n=this.indexOf(n);0<=n&&this.splice(n,1)};Array.prototype.have=function(n){return 0<=this.indexOf(n)};Array.prototype.last=function(){return 0<this.length?this[this.length-1]:null};touchDevice=window.navigator.userAgent.indexOf("Mobile")>0||window.navigator.userAgent.indexOf("Android")>0;touchDevice?(a3="touchstart",a1="tap"):(a3="mousedown",a1="click");$(document).ready(function(){hearts=new Hearts;a2=hearts.a2;$table=$("#table");a6=$table.offset();a7={autoplay:!0,fastPlay:!1};for(var t,n,r={x:$table.width()/2,y:$table.height()/2},u,f,o="",e=new Image,i=0;i<a2.player.length;i=i+1)t=a2.player[i],t.a14==="S"?(n={y:$table.height()-108},n.x=touchDevice?70:150):t.a14==="N"?n={x:230,y:15}:t.a14==="W"?n={x:20,y:150}:t.a14==="E"&&(n={x:$table.width()-100,y:150}),n={x:n.x+a6.left,y:n.y+a6.top},i>0?(u=$("<a22 id='player"+i+"' src='images/"+t.name+".png' class='player'>"),f=$("<div id='"+t.name+"' class='playername'>"+t.name+"<\/div>"),$table.append(u),$table.append(f),u.css({left:n.x,top:n.y}),f.css({left:n.x,top:n.y+98}),t.a217=n,n=t.a14==="N"?{x:n.x+100,y:n.y}:{x:n.x,y:n.y+130}):t.a217={x:300,y:n.y},t.cardPos=n,t.a14==="S"?n={x:r.x-35,y:r.y+10}:t.a14==="N"?n={x:r.x-35,y:r.y-100}:t.a14==="W"?n={x:r.x-120,y:r.y-50}:t.a14==="E"&&(n={x:r.x+50,y:r.y-50}),t.a218={x:n.x+a6.left,y:n.y+a6.top},n=t.a14==="S"?{x:t.a217.x,y:t.a217.y-70}:t.a14==="W"?{x:t.a217.x+92,y:t.a217.y+38}:{x:t.a217.x-128,y:t.a217.y+38},$("#say"+t.a14).css({left:n.x,top:n.y}),$("#say"+t.a14).hide(),o+="<tr><td>"+t.name+"<\/td><td id='scorehand"+i+"' align='right'>&nbsp;<\/td><td id='scoretot"+i+"' align='right'>&nbsp;<\/td><\/tr>";$("#scoretable").append(o);a13("topleft");$("#scoreboard").show();$msgbox=$("#msgbox");$msgbox.css({left:170,top:a2.player[0].cardPos.y-$msgbox.height()-35});n={x:a6.left+8,y:a6.top+8};e.onload=function(){a2.a181.a187(e);a10()};e.src="images/cards.png";$.ajax({url:"/scores/m11.html",success:function(n){$("#scores").html(n)}});$("a[href='#scoresmonth']").click(function(n){return $.ajax({url:"/scores/m11.html",success:function(n){$("#scores").html(n)}}),n.preventDefault(),!1});$("a[href='#scoresall']").click(function(n){return $.ajax({url:"/scores/a11.html",success:function(n){$("#scores").html(n)}}),n.preventDefault(),!1});return});$(function(){$("#table").bind(a3,function(){a2.a104()});$("a[href='#newgame']").bind(a3,function(){hearts.a56()?confirm("Are you sure you want to start a new game?")&&a11():a11()});$(a2).bind("gameover",function(){if(a2.winner==0){var n=prompt("Please enter your name to submit your score");$.ajax({url:"/../scripts/won.php?id=11&m="+a2.player[a2.winner].score+"&d=0&n="+n})}else $.ajax({url:"/../scripts/won.php?id=11&m="+a2.player[a2.winner].score+"&d="+a2.winner})})});$.urlParam=function(n){var t=new RegExp("[\\?&amp;]"+n+"=([^&amp;#]*)").exec(window.location.href);return t===null?"":t[1]||0}