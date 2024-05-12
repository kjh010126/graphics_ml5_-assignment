let handpose;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", results => {
    predictions = results;
  });

  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  image(video, 0, 0, width, height);

  // 손 모양 표시
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(255, 0, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }

    // 손가락 개수 세기
    const fingerCount = countFingers(prediction);
    textSize(24);
    fill(255);
    text("손가락 개수: " + fingerCount, 5, 30);
  }
}

// 손가락 개수 세는 함수
function countFingers(prediction) {
  const landmarks = prediction.landmarks;

  // 손바닥 위치 찾기
  const palm = landmarks[0];
  const palmX = palm[0];
  const palmY = palm[1];

  // 각 손가락 끝점의 y 좌표 찾기
  const fingerTipsY = [landmarks[4][1], landmarks[8][1], landmarks[12][1], landmarks[16][1], landmarks[20][1]];

  // 손가락 개수 세기
  let fingerCount = 0;
  for (let i = 0; i < fingerTipsY.length; i++) {
    if (fingerTipsY[i] < palmY) {
      fingerCount += 1;
    }
  }

  return fingerCount;
}
