if (typeof jQuery == undefined) {
    alert("제이쿼리 안됨")
    // 바닐라JS는 너무 불편해서 제이쿼리 쓰는게 좋을꺼같은데
}

// 메모 추가
$('#b_add').click(function () {
    // 추가할 내용
    let value = document.getElementById("add_input").value;

    alert("추가할 내용 : " + value);
});

// 각 리스트 클릭 시
$(".checkbox").click(function (e) {
    let li = $(this).closest('li');
    let index = li.index();
    let isCheck = String(li.attr('class')) == "completed" ? true : false;

    // 백엔드 처리
    // $ajax(

    // )


    // 처리 이후 class 수정
    if (isCheck) {
        li.removeClass('completed');
    } else {
        li.addClass('completed');
    }
});