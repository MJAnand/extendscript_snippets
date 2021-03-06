/*
ぷつぷつ分布
"make distributed dots"

使い方：
最前面のドキュメントのサイズいっぱいに、
ランダムドットで少しずつ広げながら、グラデーションのようなものをつくります。
開いているドキュメントがなければ新規ドキュメントを勝手に作って実行します。
ステップ毎にレイヤー分けしていきます。

動作確認：OS10.4.11 InDesign CS3

milligramme
www.milligramme.cc
*/
if(app.documents.length==0){
	var doc = app.documents.add();
}
var doc = app.documents[0];
var dWidth = doc.documentPreferences.pageWidth;
var dHeight = doc.documentPreferences.pageHeight;

//いじるとかわるパラメーター
//ぷつぷつの方向
var gDirection = 73;//topLeftToBottomRight
//var gDirection = 82;//topToBottom
//var gDirection = 46;//LeftToRight

var areaDevide = 8;//ドキュメントの分割数（ステップ数）
var dotR = 2;//ぷつぷつの大きさ
var dotValue = 200;//ぷつぷつの数
//
for(var st = 1; st<areaDevide+1; st++){
	try{
		var areaLayer = doc.layers.add({name:"area"+st});
		}catch(e){}
	var areaLayer = doc.layers.itemByName("area"+st);

	for(var dt = 0; dt<dotValue; dt++){
	var dotObj = doc.ovals.add(areaLayer);
	dotObj.geometricBounds = [0,0,dotR,dotR];
	switch (gDirection){
		case 73 :
		dotObj.move ("by",[dWidth/areaDevide*st*Math.random(),dHeight/areaDevide*st*Math.random()]) break;
		case 82 :
		dotObj.move (undefined,[dWidth*Math.random(),dHeight/areaDevide*st*Math.random()]) break;
		case 46 :
		dotObj.move (undefined,[dWidth/areaDevide*st*Math.random(),dHeight*Math.random()]) break;
		}
	dotObj.fillColor = "Black";
	dotObj.strokeColor = "None";
	}
}