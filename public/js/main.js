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
});
