document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail"); // 썸네일 선택
    const modal = document.getElementById("image-modal"); // 모달 선택
    const modalImage = document.getElementById("modal-image"); // 모달 이미지 선택
    const closeModal = document.querySelector(".close"); // 닫기 버튼 선택

    // 썸네일 클릭 시 모달 열기
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            modal.style.display = "block"; // 모달 표시
            modalImage.src = this.src; // 클릭한 이미지의 경로를 모달 이미지에 설정
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // 모달 숨김
    });

    // 모달 배경 클릭 시 닫기
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; // 모달 숨김
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");
    const copyAlert = document.getElementById("copy-alert");

    // 복사 버튼 클릭 이벤트 처리
    copyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const textToCopy = this.dataset.text; // data-text 속성에서 텍스트 가져오기

            // 텍스트 복사하기
            navigator.clipboard.writeText(textToCopy).then(() => {
                // 복사 완료 알림 표시
                showCopyAlert();
            }).catch(err => {
                console.error("텍스트 복사 실패", err);
            });
        });
    });

    // 복사 완료 알림 표시 함수
    function showCopyAlert() {
        copyAlert.textContent = "텍스트가 복사되었습니다!";
        copyAlert.classList.add("show");

        // 3초 후 알림 숨김
        setTimeout(() => {
            copyAlert.classList.remove("show");
        }, 3000);
    }
});
