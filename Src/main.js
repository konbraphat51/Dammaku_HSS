async function main() {
    //メモ
    //色を変える
    // SetColor("green");
    
    
    // DrawText("vhfuewa", 350, 150);


    //計算
    // DrawText(2-20, 100, 100);
    // DrawText(100*6, 200, 100);
    // DrawText(100/6, 300, 100);
    // DrawText(100%6, 500, 100);

    //変数=variale（メモリ; 記憶; 箱
    // var x = 2;
    // x += 2  //右に=をつけてください
    // DrawText(x, 100, 100);

    //変数の名前はなんでも大丈夫（使われてなければ）
    // var hensuu = 100
    // DrawText(hensuu, 200, 100)

    //繰り返し
    // DrawText(1, 100, 100)
    // DrawText(2, 100, 200)
    // for(let cnt = 0; cnt < 10; cnt++) { //10繰り返し
    //     //cnt -> カウンター（繰り返しの回数を覚えてる）0スタート
    //     DrawText(cnt, 100, 100 + 20*cnt)
    // }

    //もう一回

    //プログラムを一時停止
    // await Sleep(2000)   //ミリ秒 1000ms = 1s
    // DrawText("a", 100, 100)

    //無限ループ
    // var x = 0
    // //true -> 無限、ずっと
    // while(true) {
    //     DrawText("a", x, 100)
    //     x += 1

    //     await Sleep(10)  //冷却時間; 休憩時間
    // }

    //長方形を描く
    // SetColor("pink")
    // DrawRect(100, 200, 500, 500)

    // DrawText("a", 100, 100)

    // await Sleep(1000)

    // //画面リセット
    // SetColor("white")
    // DrawRect(0, 0, 800, 600)

    // //a移動
    // var x = 0
    // //true -> 無限、ずっと
    // while(true) {
    //     //画面リセット
    //     SetColor("white")
    //     DrawRect(0, 0, 800, 600)

    //     //a描く
    //     SetColor("black")
    //     DrawText("a", x, 100)
        
    //     //移動
    //     x += 1

    //     await Sleep(10)  //冷却時間; 休憩時間
    // }

    //もし; 条件分岐
    // if (3 < 2) {
    //     //条件式があっていたら起動; 実行
    //     DrawText("a", 100, 100)
    // } else {
    //     //条件式が間違っていたら起動
    //     DrawText("b", 100, 100)
    // }
    
    //イコールは==(2つ)
    // if (2 == 2) {
    //     //条件式があっていたら起動; 実行
    //     DrawText("a", 100, 100)
    // } else {
    //     //条件式が間違っていたら起動
    //     DrawText("b", 100, 100)
    // }

    //ノンイコール
    //! -> 否定
    // if (1 != 2) {
    //     //条件式があっていたら起動; 実行
    //     DrawText("a", 100, 100)
    // } else {
    //     //条件式が間違っていたら起動
    //     DrawText("b", 100, 100)
    // }

    //キーの取得
    // while(true) {
    //     //画面リセット
    //     SetColor("white")
    //     DrawRect(0,0, 800,600)

    //     SetColor("black")
    //     if (GetKey("KeyW")) {
    //         //キーが押されたら実行
    //         DrawText("スペースおされた", 100, 100)
    //     } else {
    //         //押されていなかったら実行
    //         DrawText("スペース押されない", 100, 100)
    //     }

    //     await Sleep(1)  //休憩時間
    // }


    // //a移動

    // //変数を作成 + 初期位置の指定
    // var x = 100
    // var y = 100
    // var speed = 3

    // //弾の初期位置
    // var bullet_x = [100, 200, 300, 400, 450, 334]
    // var bullet_y = [0, 70, -100, 100, 0, 0]
    // var bullet_radius = 50

    // //true -> 無限、ずっと
    // while(true) {
    //     //画面リセット
    //     SetColor("white")
    //     DrawRect(0, 0, 800, 600)

    //     //a描く
    //     SetColor("black")
    //     DrawCircle(x, y, 50)

    //     //操作
    //     if (GetKey("ArrowRight")) {
    //         //右キーが押されたら、ここ実行

    //         //右に移動
    //         x += speed
    //     }
    //     //左
    //     if (GetKey("ArrowLeft")) {
    //         x -= speed
    //     }
    //     //上
    //     if (GetKey("ArrowUp")) {
    //         y -= speed
    //     }
    //     //下
    //     if (GetKey("ArrowDown")) {
    //         y += speed
    //     }

    //     //デモ用
    //     var distance = ((x-bullet_x)**2 + (y-bullet_y)**2)**0.5   //三平方の定理
    //     if (distance < 50 + bullet_radius) {
    //         //当たったら
    //         SetColor("red")
    //     } else {
    //         //当たってなかったら
    //         SetColor("black")
    //     }
    //     bullet_y += 1
    //     DrawCircle(bullet_x, bullet_y, bullet_radius)

    //     await Sleep(10)  //冷却時間; 休憩時間
    // }

    //     //a移動

    // //変数を作成 + 初期位置の指定
    // var x = 100
    // var y = 100
    // var speed = 3
    // var radius = 30

    // //弾の初期位置
    // var bullet_x = [100, 200, 300, 400, 450, 334]
    // var bullet_y = [0, 70, -100, 100, 0, 0]
    // var bullet_radius = 15
    // var bullet_speed = 2

    // //true -> 無限、ずっと
    // while(true) {
    //     //画面リセット
    //     SetColor("white")
    //     DrawRect(0, 0, 800, 600)

    //     //a描く
    //     SetColor("black")
    //     DrawCircle(x, y, radius)

    //     //操作
    //     if (GetKey("ArrowRight")) {
    //         //右キーが押されたら、ここ実行

    //         //右に移動
    //         x += speed
    //     }
    //     //左
    //     if (GetKey("ArrowLeft")) {
    //         x -= speed
    //     }
    //     //上
    //     if (GetKey("ArrowUp")) {
    //         y -= speed
    //     }
    //     //下
    //     if (GetKey("ArrowDown")) {
    //         y += speed
    //     }

    //     //デモ用
    //     for (let cnt = 0; cnt < bullet_x.length; cnt++) {
    //         var distance = ((x-bullet_x[cnt])**2 + (y-bullet_y[cnt])**2)**0.5   //三平方の定理
    //         if (distance < radius + bullet_radius) {
    //             //当たったら
    //             SetColor("red")
    //         } else {
    //             //当たってなかったら
    //             SetColor("black")
    //         }
    //         bullet_y[cnt] += bullet_speed
    //         DrawCircle(bullet_x[cnt], bullet_y[cnt], bullet_radius)

    //     }

    //     await Sleep(10)  //冷却時間; 休憩時間
    // }

    // //配列; リスト
    // var li = [1, 2, 3, 4, 5]
    // DrawText(li, 100, 100)  //1個め

    // //0スタート
    // li[1] += 2
    // DrawText(li, 100, 200)  //2個め

    // //liの個数だけ繰り返し
    // //配列をまとめて操作 -> for文を使う
    // for (let cnt = 0; cnt < li.length; cnt++) {
    //     li[cnt] += 2
    // }

    // DrawText(li, 100, 300)

    // //クラス
    // //データの設計図
    // class Student {
    //     //2つ変数＝フィールドを用意
    //     english = 50
    //     math = 50
    // }

    // var takahashi = new Student()   //インスタンス
    // takahashi.english = 45
    // takahashi.math = 70

    // var fujii = new Student()
    // fujii.english = 1000

    // DrawText(takahashi.english, 100, 100)

    //a移動

    //変数を作成 + 初期位置の指定
    var x = 500
    var y = 500
    var speed = 3
    var radius = 15

    class Bullet{
        x = 100
        y = 0
    }

    //弾の初期位置
    // var bullet_x = [100, 200, 300, 400, 450, 334]
    // var bullet_y = [0, 70, -100, 100, 0, 0]
    var bullets = []    //フィールドにある弾すべて保存
    var bullet_radius = 15
    var bullet_speed = 2

    //スコア
    var score = 0
    var high_score = 0

    //true -> 無限、ずっと
    while(true) {
        //画面リセット
        SetColor("white")
        DrawRect(0, 0, 800, 600)

        //a描く
        SetColor("purple")
        DrawCircle(x, y, radius)

        //操作
        if (GetKey("ArrowRight")) {
            //右キーが押されたら、ここ実行

            //右に移動
            x += speed
        }
        //左
        if (GetKey("ArrowLeft")) {
            x -= speed
        }
        //上
        if (GetKey("ArrowUp")) {
            y -= speed
        }
        //下
        if (GetKey("ArrowDown")) {
            y += speed
        }

        //弾ごとの繰り返し
        for (let cnt = 0; cnt < bullets.length; cnt++) {    //bulletsの個数だけ
            var distance = ((x-bullets[cnt].x)**2 + (y-bullets[cnt].y)**2)**0.5   //三平方の定理
            if (distance < radius + bullet_radius) {
                //当たったら
                SetColor("red")

                score = 0
            } else {
                //当たってなかったら
                SetColor("black")
            }
            bullets[cnt].y += bullet_speed
            DrawCircle(bullets[cnt].x, bullets[cnt].y, bullet_radius)


            //下に行き過ぎたbulletを削除

            if (bullets[cnt].y > 600) {
                //下に行き過ぎた

                //削除
                bullets.splice(cnt, 1)

                //削除した分のcntの調整
                cnt -= 1
            }
        }

        //弾を生成
        if (Math.random() < 0.1) {
            //0.1の確率でここが実行

            var bullet = new Bullet()   //Bulletインスタンスを生成

            //初期位置を設定
            bullet.x = Math.random() * 800      //0-800の乱数を指定
            bullet.y = Math.random() * 200 -300     //-300～-100の乱数を指定
    
            //bulletsにbulletを追加;　保存
            bullets.push(bullet)    //push->リストの末尾に追加
        }

        //スコア加算
        score += 0.1

        //ハイスコア処理
        if (high_score < score) {
            //ハイスコアが更新されている
            high_score = score
        }

        //スコア表示
        SetFont("50px Arial")
        DrawText(Math.floor(score), 650, 100)   //整数

        //ハイスコア表示
        SetColor("red")
        DrawText(Math.floor(high_score), 650, 170)

        await Sleep(10)  //冷却時間; 休憩時間
    }
}