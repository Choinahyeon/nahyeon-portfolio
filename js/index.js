// 모든 flip 요소를 선택
const flip = document.querySelectorAll('.row2 .row2_inner .flip');
// 현재 활성화된 요소를 추적하기 위한 변수
let active = null;

// 각 요소에 대해 이벤트 리스너를 추가합니다.
flip.forEach(flip => {
    flip.addEventListener('click', function() {
        // 이전에 활성화된 요소가 있다면 비활성화
        if (active && active !== this) {
            active.classList.remove('active');
        }
        
        // 현재 요소 토글
        this.classList.toggle('active');
        
        // 현재 요소가 활성화되었다면 activeElement 업데이트
        // active = this.classList.contains('active') ? this : null;
    });
});