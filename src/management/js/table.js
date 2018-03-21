require(["config"], function () {
    require(["jquery"], function ($) {
        $(function () {
            $.ajax({
                type: "GET",
                url: "http://localhost:9090/person/zheng",
                dataType: "json"
            }).done(function (res) {

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
                $(".span").html($("#tab input:checked").length)
                $("table thead tr th input").on("click",function(){
                    $("#tab input").prop("checked",$(this).prop("checked"))
                    $(".span").text($("#tab input:checked").length)
                })
                $("#tab input").on("click",function () {
                    $(this).prop("checked", $(this).prop("checked"))
                    var count = $("#tab input").length;//个数
                    var cbxCount = $("#tab input:checked").length;//选中的个数
                    $("table thead tr th input").prop("checked", count == cbxCount);
                    $(".span").html($("#tab input:checked").length)
                })
            })
        })
        $("#btn").on("click",function () {
            $.ajax({
                type: "post",
                url: "http://localhost:9090/person/search",
                data: {
                    name: $("#formTxt").val()
                }
            }).then(function (res) {

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