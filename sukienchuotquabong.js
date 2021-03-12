let imgObj= null;
window.onload= init;
function init(){
    imgObj= document.getElementById('myImage');
    imgObj.style.position='relative'; //relative là thuộc tính position của CSS cho phép các phần tử HtML di chuyển
    imgObj.style.left= '0px';//căn cách lề trái màn hình 0px.
}
function moveRight(){
    //imgObj= document.getElementById('myImage'); //->không cần phải khai báo vì window.onload đã gọi, áp dụng all mọi thứ liên quan
    imgObj.style.left=parseInt(imgObj.style.left) + 10  +'px';// cách lề trái bao px, mỗi lần sẽ cách 10px-> lưu giá trị mới và chạy tiếp
}
