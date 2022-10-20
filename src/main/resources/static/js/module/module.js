document.writeln('<script src="/jquery-3.6.1.min.js" type="text/javascript"></script>');

const LIST = {
    li: "<li></li>",
    div: "<div><div>",
    label: "<label></label>",
    input: "<input></input>",
    i: "<i></i>"
};

var private_createMemo = function (content, isCleared) {

    let list = new LIST;

    let li = list.li;

    if (isCleared) {
        $(li).addClass('completed');
    }

    let div = list.div;
    a.$(div).addClass('form-check');

    let label = list.label;
    $(label).addClass('form-check-label');

    let input = list.input;
    $(input).addClass('checkbox');
    $(input).attr("type", "checkbox");
    $(input).attr("checked", "");
    input += content;

    let i = list.i;
    $(i).addClass('input-helper');

    let i2 = list.i;
    $(i2).addClass('remove');
    $(i2).addClass('mdi');
    $(i2).addClass('mdi-close-circle-outline');

    $(div).append(label)
    $(div).append(input)
    $(div).append(i)
    $(li).append(div)
    $(li).append(i2)

    return li;
}

var private_useAjax = function (type, url, data) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        success: function (res) {
            return res;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.");
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            return false;
        }
    });
}

export const createMemo = private_createMemo;
export const useAjax = private_useAjax;