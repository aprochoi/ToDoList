if (typeof jQuery == undefined) {
    alert("제이쿼리 안됨")
}

// 메모 추가
$('#b_add').click(function () {
    // 추가할 내용
    // let value = document.getElementById("add_input").value;
    let value = $('#add_input').val();

    // $.ajax({
    //     type: "POST",
    //     url: "/add",
    //     dataType: 'json',
    //     contentType: 'application/json',
    //     data: value,
    //     success: success(),
    //     error: fail()
    // });

    alert("추가할 내용 : " + value);
});

// 추가
// 삭제
// 수정


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