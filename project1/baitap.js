// mở file product-view.html ra, làm chức năng mua hàng như sau:
// click ADD TO CART:
// - neu color va size chua chon thi bao loi
// - neu color va size chon roi thi lay qty đưa lên chỗ giỏ hàng.
// - nếu giỏ hàng dang có 2 mà mua tiếp 4, thi tăng lên 6.

// click  REMOVE TO CART:
// - neu gio hàng = 0 thi  báo lỗi: k co product de xoa
// - neu gio hang < qty muốn xoá => lỗi sô luong muôn xoá lớn hơn gio hàng.
// - nêu gio hàng > qty muôn xoá thi thực hiện trừ và đưa lên giỏ hàng lại.
//   vdu gio hang có 5, mà chon 4 xoá thi gio hang còn lại 1.

// Gợi ý: đặt 1 biên toan cục la TONG = 0.
// tong = tong + qty
// va dua tong lên trên giỏ hàng bằng ham TEXT

$(document).ready(function () {
  var Tong = 0;

  $("#add").click(function () {
    var color = $(".color").val();
    var size = $(".size").val();
    var amount = Number($(".amount").val());

    if (color == "" || size == "") {
      alert("color hoặc size  chưa chọn");
    } else {
      Tong = Tong + amount;
      $(".empty").text(Tong);
    }
  });
  $("#remove").click(function () {
    var amount = Number($(".amount").val());
    console.log( amount);
    console.log( Tong);
    if (Tong == 0) {
      alert("k co product de xoa");
      Tong = "";
    } else if (Tong < amount) {
      alert("sô luong muôn xoá lớn hơn gio hàng");
    } else {
      Tong -= amount;
      $(".empty").text(Tong);
    }
  });
});

