

const allBtns = document.querySelectorAll('.right button');
    
        allBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const parent = this.parentElement; // li 요소
                const content = parent.querySelector('.row4 .right .text'); // text 찾기
    
                // 현재 활성화된 요소가 있다면 닫기
                document.querySelectorAll('.row4 .right .text').forEach(text => {
                    if (text !== content) {
                        text.classList.remove('active');
                        text.style.maxHeight = '0px'; // 높이 0으로 조정
                    }
                });
    
                // 클릭된 요소만 토글
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                    content.style.maxHeight = '0px';
                    span.textContent = '+';
                } else {
                    content.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px'; // 실제 높이로 설정
                    span.textContent = '-';
                }
            });
        });