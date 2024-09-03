// 현재 날짜와 시간 표시
function displayCurrentDateTime() {
    const dateTimeElement = document.getElementById('current-date-time');
    const now = new Date();
    const formattedDateTime = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
    dateTimeElement.innerText = `현재 시간: ${formattedDateTime}`;
}

// 다크모드 토글 기능
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 페이지 로드 시 현재 날짜와 시간 표시 업데이트
displayCurrentDateTime();
setInterval(displayCurrentDateTime, 1000); // 1초마다 업데이트

// 예시 데이터 (크롤링한 데이터를 가정)
const data = [
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
];

// 테이블에 데이터 추가
const dataTable = document.getElementById('data-table');
data.forEach((item) => {
    const row = dataTable.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.price;
});
