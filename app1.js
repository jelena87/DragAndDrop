function myFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
function myFunctionTwo() {
    document.getElementById("dropdown-menu-two").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-two')) {

        var dropdown = document.getElementsByClassName("dropdown-content-two");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropdowns = dropdown[i];
            if (openDropdowns.classList.contains('show')) {
                openDropdowns.classList.remove('show');
            }
        }
    }
};
function myFunctionThree() {
    document.getElementById("dropdown-menu-three").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-three')) {

        var dropdown2 = document.getElementsByClassName("dropdown-content-three");
        var i;
        for (i = 0; i < dropdown2.length; i++) {
            var openDropdown2 = dropdown2[i];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }
};

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var drag_depo = ['drag1','drag2'];
    var drag_cont = ['text_box','text_area','html_editor','check_box',
        'datapicker','dropdown','radiobutton','lookup','grid','label','field_text','field_area',
        'field_date', 'field_number', 'field_drop_down', 'field_checkbox', 'field_radio_button', 'field_decimal'];
    var isLeft;
    if(drag_depo.includes(data)){
        isLeft = 'depositories';
    }
    if(drag_cont.includes(data)) {
        isLeft = 'controls';
    }


    if (isLeft === 'depositories') {

        //create elements in grid
        var element = document.createElement("div");
        ev.target.appendChild(element);

         if(data ==='drag1' && element.parentNode.id ==='frame'){
             element.classList.add("container-fluid", "row");
             element.innerHTML =`<div id="container"></div>`;
             return element;
         }

         else if(data === 'drag2' && element.parentNode.id ==='container') {
          //   element.classList.add("cards");
             element.innerHTML =`<div class="cards">
               <div><span class='card-title'>Card Title</span>
                   <div class='right'>
                   <span class='glyphicon glyphicon-pencil'></span>
                   <span class='glyphicon glyphicon-trash'></span></div>
                   </div>
                   <div class='card'>
                   </div>
             </div>`;
             // element.draggable();
             return element;
         }
        else if(data === 'drag2' && element.parentNode.id ==='frame') {

            element.classList.add("container-fluid","row");
            element.innerHTML =`<div id="container"><div class="cards">
              <div><span class='card-title'>Card Title</span>
                  <div class='right'>
                  <span class='glyphicon glyphicon-pencil'></span>
                  <span class='glyphicon glyphicon-trash'></span></div>
                  </div>
                  <div class='card'>
                  </div>
            </div></div>`;
            return element;
        }
        else {
            element.remove();
        }

    }
    if (isLeft === 'controls'){

        var element = document.createElement("div");
        ev.target.appendChild(element);

        //Create templates


        var text_box = "<div class='items-fields'>" +
            "<label for='text_box'>Text</label>" +
            "<input  type='text'>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";

        var text_area ="<div class='items-fields'>" +
            "<label for='textarea'>Textarea</label>" +
            "<textarea class='textarea'></textarea>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";
        var html_editor="";

        var check_box = "<div class='items-fields'>" +
            "<input type='checkbox'/>" +
            "<label for='test'>Red</label>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";
        var datapicker = "<div class='items-fields'>" +
            "<input type='date' class='datepicker'>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";
        var dropdown = "<div class='dropdown items-fields'>"+
            "<button class='btn btn-info dropdown-toggle' type='button' data-toggle='dropdown'>Dropdown Example"+
            "<span class='caret'></span></button>"+
            "<ul class='dropdown-menu'>" +
            "<li><a href='#'>HTML</a></li>" +
            "<li><a href='#'>CSS</a></li>" +
            "<li><a href='#'>JavaScript</a></li>" +
            "</ul>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";

        var radiobutton="<div class='items-fields'>" +
            "<input name='group' type='radio'/>"+
            "<label for='test'>Red</label>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";
        var lookup="";
        var grid="";

        var label="<div class='items-fields'>" +
            "<label>Label</label>" +
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";

        var field_number = "<div class='items-fields'>"+
            "<label for='num'>Number</label>" +
            "<input type='number' name='num' min='1' max='5'>"+
            "<div class='right'>" +
            "<span class='glyphicon glyphicon-pencil'></span>" +
            "<span class='glyphicon glyphicon-remove'></span></div>" +
            "</div>";
        var field_decimal = "<div class='items-fields'>"+
        "<label for='decimal'>Decimal</label>" +
        "<input type='number' required name='decimal' min='0' value='0' step='.01'>"+
        "<div class='right'>" +
        "<span class='glyphicon glyphicon-pencil'></span>" +
        "<span class='glyphicon glyphicon-remove'></span></div>" +
        "</div>";

        var group_field;


        var template;

        //Get dragged element and set template for this element
        switch (data) {
            // Controls
            case 'text_box':
                template = text_box;
                break;
            case 'text_area':
                template = text_area;
                break;
            case 'html_editor':
                template = html_editor;
                break;
            case 'check_box':
                template = check_box;
                break;
            case 'datapicker':
                template = datapicker;
                break;
            case 'dropdown':
                template = dropdown;
                break;
            case 'radiobutton':
                template = radiobutton;
                break;
            case 'lookup':
                template = lookup;
                break;
            case 'grid':
                template = grid;
                break;
            case 'label':
                template = label;
                break;
            // Fields
            case 'field_text':
                template = text_box;
                break;
            case 'field_area':
                template = text_area;
                break;
            case 'field_date':
                template = datapicker;
                break;
            case 'field_checkbox':
                template = check_box;
                break;
            case 'field_drop_down':
                template = dropdown;
                break;
            case 'field_radio_button':
                template = radiobutton;
                break;
            case 'field_number':
                template = field_number;
                break;
            case 'field_decimal':
                template = field_decimal;
                break;
        }

        if( element.parentNode.classList.contains("cards")){
            element.classList.add("field");
            element.innerHTML = template;
            return element;

        }
        if(element.parentNode.classList.contains("block")){
            element.classList.add("cards","col-md-4");
            element.innerHTML ="<div><span class='card-title'>Card Title</span>" +
                "<div class='right'>" +
                "<span class='glyphicon glyphicon-pencil'></span>" +
                "<span class='glyphicon glyphicon-trash'></span></div>" +
                "</div>" +
                "<div class='card'>"+
                "<div class='field'>" + template + "</div></div>";
            return element;

        }
        if(element.parentNode.id ==='frame'){
            element.classList.add("container-fluid","row");
            element.innerHTML ="<div class='block'><div class='cards col-md-4'>" +
                "<div><span class='card-title'>Card Title</span>" +
                "<div class='right'>" +
                "<span class='glyphicon glyphicon-pencil'></span>" +
                "<span class='glyphicon glyphicon-trash'></span></div>" +
                "</div>" +
                "<div class='card'>"+
                "<div class='field'>" + template + "</div></div>"+
                "</div></div>";
            return element;
        }
        if(!element.parentNode.classList.contains("cards")  && !element.parentNode.classList.contains("block") && element.parentNode.id != 'frame') {
            element.remove();
        }

    }

    ev.stopPropagation();
    return false;
}



$('#frame').on('mousedown','#container',function(){

  var container = $("#container");
  var box = $(".cards");

  var width  = 80;
  var height = 80;
  var rows   = 8;
  var cols   = 12;
  var snap   = 80;

  for (var i = 0; i < rows * cols; i++) {
      var y = Math.floor(i / cols) * height;
      var x = (i * width) % (cols * width);
      $("<div grid-cell></div>").css({ top: y, left: x }).prependTo(container);
  }

  Draggable.create(box, {
      bounds: container,
      onDrag: onDrag
  });
  function onDrag() {

      TweenLite.to(box, 0.5, {
          x: Math.round(this.x / snap) * snap,
          y: Math.round(this.y / snap) * snap,
          ease: Back.easeOut.config(2)
      });
  }

        $(".block").sortable({
            items: ".cards"
        });
        $(".cards").draggable({
          obstacle: ".cards",
          preventCollision: true,
          containment:".block"
        });

        $(".cards").sortable({
            items: ".field"
        });

        var classname = document.getElementsByClassName("glyphicon-trash");
        var delete_field = document.getElementsByClassName("glyphicon-remove");
        var editCard = document.getElementsByClassName("glyphicon-pencil");

        var myFunction = function() {
            $(this).closest('.cards').remove();
        };
        var deleteField = function () {
            $(this).closest('.field').remove();
        };

      /*  $(editCard).click(function() {
            $('.rightSidebar').toggle();
        }); */

        Array.from(classname).forEach(function(element) {
            element.addEventListener('click', myFunction);
        });
        Array.from(delete_field).forEach(function(element) {
            element.addEventListener('click', deleteField);
        });



});