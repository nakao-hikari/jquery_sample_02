// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,0.2); // ������� 20%

  $(".fade").hover(
    function(){
      $(this).fadeTo("slow", 1.0); // �}�E�X���ڂ�����100%�܂Ńt�F�[�h����
    },
    function(){
      $(this).fadeTo("slow", 0.2); // �}�E�X�����ꂽ��20%�ɖ߂�
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=200px' } , { 'duration': 1000 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=200px' } , { 'duration': 1000 } );
  });
});