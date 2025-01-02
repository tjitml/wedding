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
    new daum.roughmap.Lander({
        "timestamp": "1735810736505",
        "key": "2moh7",
        "mapWidth": "100%",  /* 상대적 크기 */
        "mapHeight": "100%"  /* 상대적 크기 */
    }).render();
});
