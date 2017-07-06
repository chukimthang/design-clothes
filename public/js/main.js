$(document).ready(function(){
  //load image by class
  $('#sub-images').on('click', '.img-item', function(event) {
    event.preventDefault();
    var subImage = $(this).attr("src");
    $('#large-img').attr({src:subImage});
    $('.img-item').removeClass('img-active');
    $(this).addClass('img-active');
  });

  // create tabs
  function activeTab(obj) {
    $('.product-tabs ul li').removeClass('active');
    $(obj).addClass('active');
    var id = $(obj).find('a').attr('href');
    $('.tab-item').hide();
    $(id) .show();
  }

  // Sự kiện click đổi tab
  $('.nav-tabs li').click(function(){
    activeTab(this);
    return false;
  });
 
  // Active tab đầu tiên khi trang web được chạy
  activeTab($('.nav-tabs li:first-child'));

   // Sự kiện chuột kich vào radio thanh toán thẻ
  $("#payment_method_cheque").on("click", function() {
    if("#payment_method_bacs:selected") {
      $(".payment_method_bacs_model").hide();
      $(".payment_method_cheque_model").show();
    }
  });

  // Sự kiện kich vào radio thanh toán tại nhà
  $("#payment_method_bacs").on("click", function() {
    if("#payment_method_cheque:selected") {
      $(".payment_method_bacs_model").show();
      $(".payment_method_cheque_model").hide();
    }
  });
});
