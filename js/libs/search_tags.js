/**
 * Created by Cubla on 07.08.2017.
 */
(function(_export) {
    var name = "js/libs/search_tags";

    var libs = [
    ];

    define(name, libs, function () {

        function bindClose() {
            $('.tagclose').unbind('click').click(function () {
                li = $(this).parent();
                li.remove();
            });
            //$('.tagclose').unbind('mouseover').mouseover(function () {
            //    $(this).parent().addClass('tagholder-focus');
            //    $(this).unbind('mouseleave').mouseleave(function () {
            //        $(this).parent().removeClass('tagholder-focus');
            //    });
            //});
        }

        $('.taginput').keydown(function (e) {
            var text = $(this).val();
            if (e.which == 8 && text.length == 0) {
                $(this).parent().prev('.tagitem').remove();
            }
            if (e.which == 32 || e.which == 13 || e.which == 188 || e.which == 9) {
                if (e.which == 188 || e.which == 9) {
                    e.preventDefault();
                }

                if(text == ""){
                    e.preventDefault();
                    return;
                }

                $(this).parent().before('<div class="tagitem"><div class="tagtext">' + text + '</div><div class="tagclose">x</div>			</div>');
                $(this).val('');
                bindClose();
            }
        });

        function addTags(inp, tagstr) {
            tagstr = tagstr.replace(/,/g, " ");
            var tags = tagstr.split(' ');
            for (tag in tags) {
                $(inp).parent().before('<div class="tagitem"><div class="tagtext">' + tags[tag] + '</div><div class="tagclose">x</div></div>');
            }
            bindClose();
        }


        $('.taginput').each(function () {
            $(this).wrap('<div class="tagholder"></div>');
            $(this).wrap('<div class="taginputholder"></div>');
            $(this).focus();
        });

        //addTags('#tag1', 'one,two,three');


    });
})(window);
