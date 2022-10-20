if (typeof jQuery == undefined) {
    alert("제이쿼리 안됨")
}

// 메모 추가
$('#b_add').click(function () {
    // 추가할 내용
    // let value = document.getElementById("add_input").value;
    let value = $('#add_input').val();

    value = { "contents": value };

    console.log(JSON.stringify(value));

    alert("추가할 내용 : " + value);

    $.ajax({
        type: "POST",            // HTTP method type(GET, POST) 형식이다.
        url: "/add/1",      // 컨트롤러에서 대기중인 URL 주소이다.
        data: value,
        dataType: "json"     // Json 형식의 데이터이다.
        success: function (res) { // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
            // 응답코드 > 0000
            alert(res.code);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.");
        }
    });


});

function success(aaa) {
    alert(sss);
}

// 추가
// 삭제
// 수정(완료여부)

function success(json) {

}

function fail() {

}

// 각 리스트 클릭 시
$(".checkbox").click(function (e) {
    let li = $(this).closest('li');
    let index = li.index();
    let isCheck = String(li.attr('class')) == "completed" ? true : false;

    // 백엔드 처리



    // 처리 이후 class 수정
    if (isCheck) {
        li.removeClass('completed');
    } else {
        li.addClass('completed');
    }
});