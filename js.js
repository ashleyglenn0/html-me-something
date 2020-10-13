<script src="jquery-3.4.0.min.js"></script>
<script src="scripts/navbar.js"></script>



$(document).ready(function(){
    $('button').click(function(){
        if($('button').text() == "☰"){
            $('button').text('✖');
        }else{
            $('button').text('☰');
        }
        $('menu').toggle('slow');
    });
});