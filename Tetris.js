// Tetris
// moe aoki

// ゲームの状態
const init = 1;
const play = 0;
const over = 2;

let gameState = init;

// ゲームの形状
const size = 30;
const rows = 20;
const cols = 12;
let satu = 255;
let value = 255;
let alpha = 255;

// 色
const color = {
    [0]: [0, satu, value, alpha],
    [1]: [30, satu, value, alpha],
    [2]: [60, satu, value, alpha],
    [3]: [120, satu, value, alpha],
    [4]: [180, satu, value, alpha],
    [5]: [240, satu, value, alpha],
    [6]: [300, satu, value, alpha],
    [7]: [200, 44, 88, alpha],
    [8]: [0, 0, 20, alpha],
}

// 壁と背景の色の指定
const wall = 7;
const back = 8;

// ステージ
const rows = 20;
const cols = 12;
stage[rows][cols];
size = 50;

// ブロックの位置と回転数
let x, y, r;

// ブロックパターン
Px[4], Py[4];

// ブロック移動制御
const fallFlag = 0;
const loopCnt = 0;

// ブロックパターン番号

let ptnNo;

// ブロックパターン
const ptnOffsets[7][3][2] = {
    // I ブロック 0
    -1,
    0,
    1,
    0 2,
    0,
    // L ブロック 1
    -1,
    -1,
    -1,
    0,
    1,
    0,
    // J ブロック 2
    -1,
    -0,
    1,
    -1,
    1,
    0,
    // Z ブロック 3
    -1,
    0,
    0,
    1,
    -1,
    -1,
    // S ブロック 4
    1,
    0,
    0,
    -1,
    -1,
    1,
    // T ブロック 5
    -1,
    0,
    0,
    -1,
    1,
    0,
    // O ブロック 6
    1,
    0,
    0,
    1,
    1,
    1,
};

function setPtnPosition();

function init() {
    //壁と背景の色番号を指定
    for (y = 0; y < rows; y++) {
        stage[y][0] = stage[y][cols - 1] = wall;
        for (x = 1; x < cols - 1; x++) {
            stage[y][x] = back;
            if (y == rows - 1) {
                stage[y][x] = wall;
            }
        }
    }
    x = 5;
    y = 1;
    r = 0;
    ptnNo = random() % 7;
    setPtnPosition();
    // 次のシーケンス
    gameState = play;
}

function drawStage() {
    angeleMode(DEGREES);
    colorMode(HSV);
    strokeWeight(20);
    rectMode(CENTER);
    for (y = 0; y < rows; y++) {
        for (x = 0; x < cols; x++) {
            no = stage[y][x];
            stroke(color[no]);
            fill(0, 0, 100);
            rect(size / 2 + size * x, size / 2 + size * y, size / 2, size / 2);
        }
    }
}



function play() {
    // 最初は壁の色
    stage[y][x] = back;
    // 色が変わる
    const dy = 0;
    if ((++loopCnt % 10) == 0) dy = 1;
    if (keycode == d) dx = 1;
    if (keycode == a) dx = -1;
    if (keycode == w) dr = 1;
    if (keycode == s) FallFlag = 1;
    if (FallFlag) dy = 1;
    y += dy;
    x += dx;
    r += dr;
    if (collision()) {
        //元の位置、回転に戻す
        y -= dy;
        x -= dx;
        r -= dr;
        FallFlag = 0;
        if (dy == 1 && dx == 0 && dr == 0) {
            //積もらせる
            setPtnNoToStage();
            //行がそろっていたらスライドさせる
            complete();
            //新しいブロック誕生
            x = 5;
            y = 1;
            r = 0;
            PtnNo = random() % 7;
            if (collision()) {
                GameState = OVER;
            }
        }

    }

    function over() {

    }

    function gmain() {
        window(size * cols, size * rows);
        while (true) {
            switch (state) {
                case init:
                    init();
                    break;
                case play:
                    play();
                    break;
                case over:
                    over();
                    break;
            }
        }
    }