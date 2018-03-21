require(["config"], function () {
    require(["jquery"], function ($) {
        $(function () {
            $.ajax({
                type: "GET",
                url: "http://localhost:9090/person/zheng",
                dataType: "json"
            }).done(function (res) {
                console.log(res);
                $("#tab").html("");
                for (var i = 0; i < res.length; i++) {
                    console.log(res[i]);
                    var str = "";
                    str += '<tr data-info="' + res[i].id + '" class="list">';
                    str += '<td><input type="checkbox"></td>';
                    str += ' <td>' + res[i].id + '</td>';
                    str += ' <td><a href="#">' + res[i].name + '</a></td>';
                    str += ' <td>' + res[i].email + '</td>';
                    str += '<td>' + res[i].tel + '</td>';
                    str += '<td>' + res[i].QQ + '</td>';
                    str += '<td><a href="#" class="delete">删除</a></td>';
                    str += '</tr>';
                    $("#tab").html($("#tab").html() + str);
                }
                $(".delete").on("click", function () {
                    $(this).parents(".list").remove();
                    console.log(this);
                    var str = $(this).parents(".list").attr("data-info");
                    console.log(str);
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:9090/person/delete",
                        data: {
                            id: str
                        }
                    })
                })
            })
        })
        $("#btn").on("click",function () {
            $.ajax({
                type: "post",
                url: "http://localhost:9090/person/search",
                data: {
                    name: $("#formTxt").val()
                },
                // dataType: "json"
            }).then(function (res) {
                // console.log(res);
                $("#tab").html("");
                for (var i = 0; i < res.length; i++) {
                    var str = '';
                    str += '<tr data-info="' + res[i].id + '" class="list">';
                    str += '<td><input type="checkbox"></td>';
                    str += ' <td>' + res[i].id + '</td>';
                    str += ' <td><a href="#">' + res[i].name + '</a></td>';
                    str += ' <td>' + res[i].email + '</td>';
                    str += '<td>' + res[i].tel + '</td>';
                    str += '<td>' + res[i].QQ + '</td>';
                    str += '<td><a href="#" class="delete">删除</a></td>';
                    str += '</tr>';
                    $("#tab").html($("#tab").html()+str);
                }
                $(".delete").on("click", function () {
                    $(this).parents(".list").remove();
                    console.log(this);
                    var str = $(this).parents(".list").attr("data-info");
                    console.log(str);
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:9090/person/delete",
                        data: {
                            id: str
                        }
                    })
                })
            })
        })

    })
})