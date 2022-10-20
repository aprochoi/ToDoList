// import module from "../module/js";
import { useAjax, createMemo } from "../module/module.js";

if (typeof jQuery == undefined) {
    alert("제이쿼리 안됨")
}


// 메모 추가
$('#b_add').click(function () {
    // 추가할 내용
    // let value = document.getElementById("add_input").value;
    let value = $('#add_input').val();

    value = { "contents": value, "userSeq": 1 };

    alert("추가할 내용 : " + value);

    // 모듈화 예시
    let res = useAjax("POST", "/add", value);

    let example = {
        length: 5,
        0: { contents: "memo1", isCleared: false },
        1: { contents: "memo2", isCleared: true },
        2: { contents: "memo3", isCleared: false },
        3: { contents: "memo4", isCleared: true },
        4: { contents: "memo5", isCleared: false },
    }

    for (let i = 0; i < example.length; i++) {
        $('#list').append(createMemo(example[i].contents, example[i].isCleared));
    }



});

// 불러오기
function success(result) {

    // for (let i = 0; i < result.length; i++) {
    //     $("#list").append("<li> " + result[i].contents + "</li>");
    // }



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