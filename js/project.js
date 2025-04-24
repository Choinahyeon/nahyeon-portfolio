// DOM 요소 선택
const elAll = document.querySelector('.all');
const elBtn = document.querySelectorAll('.btn');
const buttons = document.querySelectorAll('.buttons button');
const elItems = document.querySelector('.items');

// 아이템 렌더링 함수
function renderItems(items) {
    return items.map(item => `
        <div class="item">
            <a href="${item.link}">
                <div class="img">
                    <img class="front" src="${item.frontImg}" alt="${item.alt}">
                    <img class="back" src="${item.backImg}" alt="${item.alt}">
                </div>
                <div class="inner">
                    <div class="top">
                        <span>${item.category}</span>
                    </div>
                    <div class="bt">
                        <div class="title">
                            <h1>${item.title}</h1>
                            <p>${item.subTxt}</p>
                        </div>
                        <div class="icon">
                            <img src="img/i_up-right.svg" alt="">
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

// 리스트 업데이트 함수
function updateList(items) {
    elItems.innerHTML = renderItems(items);
}

// 데이터 콜백 함수
function callback(data) {
    // 초기 리스트 렌더링
    updateList(data.items);

    // 로고 클릭 이벤트
    elAll.addEventListener('click', () => updateList(data.items));

    // 카테고리 버튼 클릭 이벤트
    elBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.dataset.key === 'category') {
                const filteredItems = data.items.filter(item => item.category === this.dataset.value);
                updateList(filteredItems);
            }
        });
    });
}

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 버튼 활성화 이벤트
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 데이터 로드
    fetch('./data/data.json')
        .then(res => res.json())
        .then(data => callback(data))
        .catch(error => console.error('데이터 로드 중 오류 발생:', error));
});