var _click = "tap";
$(document)
    .on("touchstart", function (e) {
        e.preventDefault();
    })
    .on("touchmove", function (e) {
        e.preventDefault();
    })
    .on("touchend", function (e) {
        e.preventDefault();
    });

//Ԥ����
var myScreen = $('.screen');
var _Loading=$('.Loading');
$.loader(_Loading, "_src", null, function () {
    var _box=$(".Loading_Speed").html('0%');
    myScreen.fadeIn(0.6,function(){
        $.loader(myScreen, "_src",function (i,count) {
         _box.html(Math.round(i/count*100)+"%");
          _Loading.fadeOut(1)
        },function(){
            $.loader(myScreen,"_src",null,function(){
                setTimeout(function () {
                    $('.page-box').show();
                    page1.addClass('show');
                }, 1000);
            });
        });
        });
    });
//����
var _music=$(".music").on("tap",function(){
    if(audio!="")
    {
        if(audio.paused)
        {
            audio.play();
            _music.removeClass("audio_off").addClass("audio_on");
        }
        else
        {
            audio.pause();
            _music.removeClass("audio_on").addClass("audio_off");
        }
    }
    else
    {
        return;
    }
});
var page1 = $('.page1');
var page2 = $(".page2");
var page3 = $(".page3");
var page4 = $(".page4");
var page5 = $(".page5");
var page6 = $(".page6");
page1.on('swipeUp', function () {
    nextpage.call(this, null, function () {
        page2.show()
    })
})
page2.on('swipeUp', function () {
    nextpage.call(this, null, function () {
        page3.show()
    })
}).on("swipeDown", function () {
    prevpage.call(this, null, function () {
        page1.show()
    });
});
page3.on("swipeUp", function () {
    nextpage.call(this, null, function () {
        page4.show()
        $(".page4_Skill").autotype();
    });
}).on("swipeDown", function () {
    prevpage.call(this, null, function () {
        page2.show();
    });
});
page4.on("swipeUp", function () {
    nextpage.call(this, null, function () {
        page5.show();
    });
}).on("swipeDown", function () {
    prevpage.call(this, null, function () {
        page3.show()
    });
});
page5.on("swipeUp", function () {
    nextpage.call(this, null, function () {
        page6.show();
    });
}).on("swipeDown", function () {
    prevpage.call(this, null, function () {
        page4.show()
        //$(".page4_Skill").autotype();
    });
});
page6.on("swipeDown", function () {
    prevpage.call(this, null, function () {
        page5.show();
    });
})

//��һҳ
var pageMoving = false;
function nextpage(fnEnd, fnStart) {
    if (pageMoving) {
        return;
    };
    pageMoving = true;
    fnStart && fnStart.call(this);
    $(this).toY("-100%", 0.8, "ease", function () {
        $(this).removeClass('show')
        $(this).next().addClass('show')
        pageMoving = false;
        $.isFunction(fnEnd) && fnEnd.call(this);
    });
};
//��һҳ
function prevpage(fnEnd, fnStart) {
    var _this = this
    if (pageMoving) {
        return
    };
    pageMoving = true;
    fnStart && fnStart.call(this);
    $(this).prev().toY("0", 0.8, "ease", function () {
        $(_this).removeClass('show')
        $(_this).prev().addClass('show')
        pageMoving = false;
        $.isFunction(fnEnd) && fnEnd.call(this);
    });
};
$.fn.autotype = function () {
    clearTimeout(timer);
    timer = null;
    var timer = null;
    var _this = $(this);
    var str = _this.html();
// �����滻������֮����ӵĶ���ո񣬲�ȥ����������������Ե�ͣ�٣�ʵ�������������ո�
    str = str.replace(/(\s){2,}/g, "$1");
    var index = 0;
    $(this).html('');
    var printer = function () {
        clearTimeout(timer);
        timer = null;
        var args = arguments;
        var current = str.slice(index, index + 1);
// html��ǩ�������,�磺<p>
        if (current == '<') {
            index = str.indexOf('>', index) + 1;
        }
        else {
            index++;
        }
        timer = setTimeout(args.callee, 20);
        //λ�����: ����setInterval������ż�����ж��Ƿ�����»����ַ���_����ʹ����Ч��������
        if (index < str.length - 1) { //��ӡ�ַ�������2���ַ���ʼ�������»����ַ����Է�ֹ���������ܻ�����һ�»����ַ�
            _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
        } else {
            _this.html(str.substring(0, index));
            clearTimeout(timer);
        }
        ;
    };
    // �ӳ�1s��ʼ
    var timer = setTimeout(printer, 1000);
};
var _p = $(".page5_Works").find("p");
for (var i = 0; i < _p.length; i++) {
    (function (i) {
        $(_p[i]).tap(function () {
            if (i == 0) {
                window.location.href = "http://mobi.mconnect.cn/i3-chezhan";
                return false;
            }
            if (i == 1) {
                window.location.href = "http://www.mobi.mconnect.cn/BMW-NSC";
                return false;
            }
            if (i === 2) {
                window.location.href = "http://mobi.mconnect.cn/BMW-X1Q4";
                return false;
            }
            if (i === 3) {
                window.location.href = "http://mobi.audi.cn/A8Lyaoqinghan";
                return false;
            }
        });
    })(i);
}




