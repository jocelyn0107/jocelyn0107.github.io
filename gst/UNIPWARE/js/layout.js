$(document).ready(function () {

    // 로그인
    $(".btn_face_login_area").on("click", function () {
        $(this).fadeOut();
    });
    // 팝업 닫기
    $('.btn_close_modal').click(function () {
        $('.modal_popup').fadeOut();
        $('body').removeClass('hiddenScroll');
    });
    // 삭제 버튼 클릭 시
    $('.btn_delete').click(function () {
        console.log('ff')
        $('#modalDelete').fadeIn();
    });
    $('.btn_document_delete').click(function () {
        console.log('ff')
        $('#modalDelete').fadeIn();
    });

    // 메뉴
    $('.pc_nav>ul>li').click(function () {
        $(this).siblings().find('ul').slideUp();
        $(this).find('ul').slideToggle();
    });
    $('.pc_nav>ul>li').mouseenter(function () {
        $(this).find('ul').stop().slideDown();
    });
    $('.pc_nav>ul>li').mouseleave(function () {
        $(this).find('ul').stop().slideUp();
    });

    // 모바일 메뉴
    $('.m_menu').click(function () {
        $('#mobile_nav_area').fadeIn();
    })
    $('.m_close').click(function () {
        $('#mobile_nav_area').fadeOut();
    })
    // $('.mobile_nav>li').click(function () {
    //     $(this).siblings().find('a').removeClass('lnb_active');
    //     $(this).find('a:first').addClass('lnb_active');
    //     $(this).siblings().find('ul.m_sub_menu').removeClass('d-block');
    //     $(this).siblings().removeClass('d-block');
    //     $(this).find('ul.m_sub_menu').toggleClass('d-block');
    // });


    //모바일 메뉴
    $('.mobile_nav>li').click(function () {
        $(this).siblings().find('a').removeClass('lnb_active');
        $(this).find('a:first').addClass('lnb_active');
        $(this).siblings().find('ul.m_sub_menu').slideUp();
        $(this).siblings().children().removeClass('d-block');
        $(this).find('ul.m_sub_menu').slideToggle();
    });



    // 왼쪽 어사이드 메뉴
    $('#left_aside > div.left_aside_menu').click(function () {
        $(this).siblings().removeClass('left_aside_active');
        $(this).addClass('left_aside_active');
        $(this).siblings().find('div.right_arrow_icon').removeClass('visible');
        $(this).find('div.right_arrow_icon').addClass('visible');
    });

    // 콘솔 > 데이터베이스 > 상세보기 > Description 수정
    $('.btn_description_edit').on('click', function () {
        $(this).hide();
        $('.btn_edit_con, .btn_edit_cancel').show();
        var currentDescription = $('#DBDetailDesctiprion').text().trim();
        $('#DBDetailDesctiprion').html('<textarea id="descriptionTextarea" class="form-control">' + currentDescription + '</textarea>');
        $('#descriptionTextarea').data('original', currentDescription);
    });

    $('.btn_edit_con').on('click', function () {
        var newDescription = $('#descriptionTextarea').val();
        $('#DBDetailDesctiprion').text(newDescription);
        $('.btn_edit_con, .btn_edit_cancel').hide();
        $('.btn_description_edit').show();
    });

    $('.btn_edit_cancel').on('click', function () {
        var originalDescription = $('#descriptionTextarea').data('original');
        $('#DBDetailDesctiprion').text(originalDescription);
        $('.btn_edit_con, .btn_edit_cancel').hide();
        $('.btn_description_edit').show();
    });
    // 콘솔 > 데이터베이스 > 상세보기 > 테이블 추가
    $('.btn_add_table').click(function () {
        $('#modalTableAdd').fadeIn();
    });
    // 콘솔 > 데이터베이스 > 상세보기 > 테이블 수정
    $('.btn_edit').click(function () {
        $('#modalTableEdit').fadeIn();
    });
    // 콘솔 > 데이터베이스 > 상세보기 > 테이블 상세보기 > Description 수정
    $('.btn_description_edit').on('click', function () {
        $(this).hide();
        $('.btn_edit_con, .btn_edit_cancel').show();
        var currentDescription = $('#DBTableDesctiprion').text().trim();
        $('#DBTableDesctiprion').html('<textarea id="descriptionTextarea" class="form-control">' + currentDescription + '</textarea>');
        $('#DBTableDesctiprion').data('original', currentDescription);
    });
    $('.btn_edit_con').on('click', function () {
        var newDescription = $('#descriptionTextarea').val();
        $('#DBTableDesctiprion').html(newDescription); // .text() 대신 .html() 사용
        $('.btn_edit_con, .btn_edit_cancel').hide();
        $('.btn_description_edit').show();
    });
    $('.btn_edit_cancel').on('click', function () {
        var originalDescription = $('#DBTableDesctiprion').data('original');
        $('#DBTableDesctiprion').html(originalDescription); // .text() 대신 .html() 사용
        $('.btn_edit_con, .btn_edit_cancel').hide();
        $('.btn_description_edit').show();
    });
    // 콘솔 > 데이터베이스 > 상세보기 > 테이블 상세보기 > 컬럼 추가
    $('.btn_add_column').click(function () {
        $('#modalColumnAdd').fadeIn();
    });
    // 콘솔 > 데이터베이스 > 상세보기 > 테이블 상세보기 > 컬럼 수정
    $('.btn_edit').click(function () {
        $('#modalColumnEdit').fadeIn();
    })
    // 콘솔 > 배포 > 수정
    $('.btn_edit.distribution').on('click', function () {
        var $row = $(this).closest('tr');
        $row.find('.btn_position, .btn_edit.btn_edit, .btn_delete').hide();
        $row.find('.btn_edit_con, .btn_edit_cancel').show();
        $row.find('td').each(function (index) {
            if (index > 0 && index < 5) {
                var currentText = $(this).text().trim();
                $(this).data('original', currentText);
                $(this).html('<div class="d-flex justify-content-center"><input type="text" class="form_control" value="' + currentText + '"></div>');
            }
        });
    });

    // 콘솔 > 리소스관리 > API매핑 > API등록
    $('.database_wrap.api_add tbody tr').on('click', function () {
        console.log('ff')
        // 이미 선택된 행이 있으면 선택 해제
        $('.database_wrap.api_add tbody tr').removeClass('selected_row');
        // 클릭된 행에 선택 클래스 추가
        $(this).addClass('selected_row');
    });




    $('.btn_edit_con').on('click', function () {
        var $row = $(this).closest('tr');
        $row.find('td').each(function (index) {
            if (index > 0 && index < 5) {
                var newText = $(this).find('input').val();
                $(this).text(newText);
            }
        });

        $row.find('.btn_edit_con, .btn_edit_cancel').hide();
        $row.find('.btn_position, .btn_edit.btn_edit, .btn_delete').show();
    });

    $('.btn_edit_cancel').on('click', function () {
        var $row = $(this).closest('tr');
        $row.find('td').each(function (index) {
            if (index > 0 && index < 5) {
                var originalText = $(this).data('original');
                $(this).text(originalText);
            }
        });
        $row.find('.btn_edit_con, .btn_edit_cancel').hide();
        $row.find('.btn_position, .btn_edit.btn_edit, .btn_delete').show();
    });



    // 태그 셀렉박스
    $('.select2').select2({
        closeOnSelect: false
    });

    // 로그아웃 버튼 클릭 시
    $('.btn_signout').click(function () {
        $('#modalSignOut').fadeIn();
    });


    // 셀렉박스
    $(".year > .sel:not(.disable)").on("click", function () {
        $(this).parent().toggleClass("active");
    });
    $(".lSel button").on("click", function () {
        var selectedText = $(this).text();
        var selectedColor = $(this).css("color");
        $(this).parent().parent().removeClass("active");
        var $selButton = $(this).parent().prev();
        $selButton.text(selectedText);
        $selButton.css({
            "color": selectedColor
        });
    });
    // 텍스트 변경 후에 스타일을 조정
    // if (selectedText === "노랑") {
    //     $selButton.removeClass("opt_color_02");
    //     $selButton.removeClass("opt_color_03");
    //     $selButton.addClass("opt_color_01");
    // } else if (selectedText === "파랑") {
    //     $selButton.removeClass("opt_color_01");
    //     $selButton.removeClass("opt_color_03");
    //     $selButton.addClass("opt_color_02");
    // } else if (selectedText === "초록") {
    //     $selButton.removeClass("opt_color_01");
    //     $selButton.removeClass("opt_color_02");
    //     $selButton.addClass("opt_color_03");
    // }

    // 콘솔메뉴 인풋 유효성
    $('.btn_input_check').on('click', function () {
        $('.form_control').each(function () {
            var inputNotice = $(this).next('.input_notice');
            if ($(this).val().trim() === '') {
                inputNotice.fadeIn();
            } else {
                inputNotice.fadeOut();
            }
        });
    });



    // 카드 스타일 클릭 시
    $('.card_style').click(function () {
        $(this).toggleClass('clicked');
    });






    // 문서 등록 > 태그 클릭 시
    $('.document_tag').click(function (event) {
        event.stopPropagation();
        $(this).find('.select_tag_bubble').fadeIn().addClass('active');
    });
    $(document).click(function () {
        $('.select_tag_bubble').fadeOut().removeClass('active');
    });
    $('.select_tag_bubble').click(function (event) {
        event.stopPropagation();
    });
    $('.tag').click(function () {
        var tagColor = $(this).css('color');
        var tagText = $(this).text();
        var documentTag = $(this).closest('.document_tag');
        var documentTagChooseTag = $(this).closest('.document_tag.choose_tag');

        $(this).closest('.select_tag_bubble').fadeOut().removeClass('active');

        documentTag.css('background', tagColor).contents().filter(function () {
            return this.nodeType === 3; // Node.TEXT_NODE
        }).first().replaceWith(tagText);

        documentTagChooseTag.css({
            'border': 'none',
            'background': tagColor
        });
        documentTagChooseTag.find('.tag_ico_plus').replaceWith('<span>' + '</span>');
        $(this).closest('.select_tag_bubble').fadeOut().removeClass('active');
    });



    // 문서 등록 > 태그 수정
    $('.sel .btn_edit').on('click', function () {
        const tagDiv = $(this).closest('.sel').find('.tag');
        const currentTagText = tagDiv.contents().filter(function () {
            return this.nodeType == 3;
        }).text();
        const inputField = $('<input>', {
            type: 'text',
            value: currentTagText,
            class: 'modal_form_control'
        }).css({
            'font-size': '14px',
            'padding': '1px 3px',
            'max-width': '130px'
        });

        tagDiv.contents().filter(function () {
            return this.nodeType == 3;
        }).replaceWith(inputField);

        inputField.on('blur', function () {
            const newTagText = inputField.val();
            inputField.replaceWith(newTagText);
            $(document).click(); // Reactivate document click event after blur
        });

        inputField.on('keydown', function (event) {
            if (event.key === 'Enter') {
                inputField.blur();
            }
        });

        // Temporarily disable document click event while editing
        $(document).off('click');
    });

    // 문서 등록 > 파일 첨부
    function openFileDialog() {
        $('.file_upload_input').click();
    }
    $(document).on('click', '.file_upload_area', function () {
        openFileDialog();
    });
    $(document).on('click', '.document_upload .file_info_area', function () {
        openFileDialog();
    });
    $(document).on('change', '.file_upload_input', function (event) {
        var file = event.target.files[0];
        if (file) {
            $('.file_name').text(file.name);
            $('.file_upload_area').hide();
            $('.file_info_area').show();
            $(this).val('');
        }
    });

    // (수정) 문서 등록 > 파일 첨부
    // 파일 첨부 버튼 클릭 시 파일 선택 창 열기
    $('.btn_file').on('click', function () {
        var parent = $(this).closest('.file_uploader'); // 그룹화된 부모 요소 찾기
        parent.find('.upload_file_input').click(); // 숨겨진 input 요소 클릭
    });

    // 파일 선택 후 처리
    $(document).on('change', '.upload_file_input', function (event) {
        var parent = $(this).closest('.file_uploader'); // 그룹화된 부모 요소 찾기
        var file = event.target.files[0];
        if (file) {
            parent.find('.file_name').text(file.name);
            parent.find('.no_file').hide();
            parent.find('.file_name_wrap').show();
            $(this).val(''); // input 초기화
        }
    });

    // 파일 취소 버튼 클릭 시
    $(document).on('click', '.file_cancel, .btn_previous, .btn_close_modal', function () {
        var parent = $(this).closest('.uploader_section'); // 클릭한 버튼이 속한 .uploader_section 찾기
        parent.find('.file_name').text(''); // 해당 섹션의 파일 이름 지우기
        parent.find('.no_file').show(); // 해당 섹션의 .no_file 나타나게 하기
        parent.find('.file_name_wrap').hide(); // 해당 섹션의 .file_name_wrap 숨기기
    });




    // 문서 등록 > 댓글 등록시 enter하면 창 세로 길이 늘어남
    const textarea = $('.detail_comment_input');
    textarea.on('input', function () {
        $(this).css('height', this.scrollHeight + 2 + 'px');
    });

    // 업로드 아이콘 클릭 시
    $('.btn_upload').click(function () {
        $('#modalDocumentUpload').fadeIn();
    });

    // 공유 아이콘 클릭 시
    $('.btn_share, .add_friend_icon, .add_chat_people_icon').click(function () {
        $('#modalShare').fadeIn();
    });

    // 문서 제목 클릭 시
    $('.btn_document_detail').click(function () {
        $('#modalDocumentDetail').fadeIn();
    });

    // 문서 제목 옆 수정 아이콘 클릭 시
    $('.document_edit').click(function () {
        $('#modalDocumentUpload').fadeIn();
    });

    // 문서 상세보기 > 공유 버튼 클릭 시 
    $('.ico_share_file').click(function () {
        $('#modalDocumentDetail').fadeOut();
        $('#modalShare').fadeIn();
    });
    // 문서 상세보기 > 수정 버튼 클릭 시 
    $('.document_detail_edit').click(function () {
        $('#modalDocumentDetail').fadeOut();
        $('#modalDocumentUpload').fadeIn();
    });
    // 문서 상세보기 > 대댓글 달기
    $('.btn_recomment').click(function () {
        var commenterName = $(this).closest('.comment_wrap').find('.name').text().trim();
        var commentInput = $('.detail_comment_input');
        commentInput.val('@' + commenterName + ' ').focus();

    });
    // 문서 상세보기 > 댓글 수정
    let currentEditingCommentWrap = null;

    $('.btn_recomment_edit').on('click', function () {

        const commentWrap = $(this).closest('.comment_wrap');

        if (currentEditingCommentWrap && currentEditingCommentWrap !== commentWrap) {
            const originalText = currentEditingCommentWrap.data('original-text');
            currentEditingCommentWrap.find('.comment_contents').text(originalText);
            currentEditingCommentWrap.find('.btn_recomment').show();
            currentEditingCommentWrap.find('.btn_recomment_edit').show();
            currentEditingCommentWrap.find('.comment_file').hide();
            currentEditingCommentWrap.find('.btn_comment_edit_con').hide();
            currentEditingCommentWrap.find('.btn_comment_edit_cancel').hide();
            currentEditingCommentWrap.find('.btn_recomment_delete').show();
        }
        commentWrap.find('.btn_recomment').hide();
        commentWrap.find('.btn_recomment_edit').hide();
        commentWrap.find('.comment_file').show();
        commentWrap.find('.btn_comment_edit_con').show();
        commentWrap.find('.btn_comment_edit_cancel').show();
        commentWrap.find('.btn_recomment_delete').hide();

        const commentContents = commentWrap.find('.comment_contents');

        const originalText = commentContents.text();
        commentWrap.data('original-text', originalText);

        const textarea = $('<textarea>').val(originalText);
        commentContents.empty().append(textarea);
        textarea.css('height', commentContents.height());
        textarea.focus();

        currentEditingCommentWrap = commentWrap;
    });

    $('.btn_comment_edit_cancel').on('click', function () {
        const commentWrap = $(this).closest('.comment_wrap');

        const originalText = commentWrap.data('original-text');
        commentWrap.find('.btn_recomment').show();
        commentWrap.find('.btn_recomment_edit').show();
        commentWrap.find('.btn_comment_edit_file').hide();
        commentWrap.find('.btn_comment_edit_con').hide();
        commentWrap.find('.btn_comment_edit_cancel').hide();
        commentWrap.find('.btn_recomment_delete').show();
        const commentContents = commentWrap.find('.comment_contents');
        commentContents.text(originalText);
        currentEditingCommentWrap = null;
    });

    $('.btn_comment_edit_con').on('click', function () {
        const commentWrap = $(this).closest('.comment_wrap');
        const commentContents = commentWrap.find('.comment_contents');
        const textarea = commentContents.find('textarea');
        commentContents.text(textarea.val());
        commentWrap.find('.btn_recomment').show();
        commentWrap.find('.btn_recomment_edit').show();
        commentWrap.find('.btn_comment_edit_con').hide();
        commentWrap.find('.btn_comment_edit_cancel').hide();
        commentWrap.find('.btn_recomment_delete').show();
        currentEditingCommentWrap = null;
    });



    // 공유 팝업 팀 클릭 시
    $('.team_area>div').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $('.team_area>div:nth-child(1)').click(function () {
        $('.name_area_02').hide();
        $('.name_area_03').hide();
        $('.name_area_04').hide();
        $('.name_area_01').show();
    });
    $('.team_area>div:nth-child(2)').click(function () {
        $('.name_area_01').hide();
        $('.name_area_03').hide();
        $('.name_area_04').hide();
        $('.name_area_02').show();
    });
    $('.team_area>div:nth-child(3)').click(function () {
        $('.name_area_01').hide();
        $('.name_area_02').hide();
        $('.name_area_04').hide();
        $('.name_area_03').show();
    });
    $('.team_area>div:nth-child(4)').click(function () {
        $('.name_area_01').hide();
        $('.name_area_02').hide();
        $('.name_area_03').hide();
        $('.name_area_04').show();
    });

    // 프로젝트 추가 버튼 클릭 시
    $('.btn_poject_add').click(function () {
        $('#modalProjectAdd').fadeIn();
        $('#modalCustomerAdd').fadeIn();
    });
    // 프로젝트 등록 > 고객사 검색 버튼 클릭 시
    $('.btn_find_customer').click(function () {
        $('#modalProjectAdd').fadeOut();
        $('#modalCustomerSelect').fadeIn();
    });
    // 프로젝트 등록 > 고객사 검색 창 닫기 버튼
    $('#modalCustomerSelect .btn_close_modal').click(function () {
        $('#modalProjectAdd').fadeIn();
        $('#modalCustomerSelect').fadeOut();
    });

    // 프로젝트 all my radio
    $('.all_my_radio>div').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // 프로젝트 제목 클릭 시
    // $('.project__title').click(function () {
    // $('#modalProjectDetail').fadeIn();
    // });

    // 프로젝트 제목 옆 편집 아이콘 클릭 시
    $('.project_edit').click(function () {
        $('#modalProjectAdd').fadeIn();
    });

    // 프로젝트 HISTORY + 버튼 클릭 시
    $('.add_history, .btn_add_history').click(function () {
        $('#modalProjectDetail').fadeOut();
        $('#modalHistoryUpload').fadeIn();
    });
    // 프로젝트 HISTORY 팝업 닫기
    $('#modalHistoryUpload .btn_close_modal').click(function () {
        $('#modalProjectDetail').fadeIn();
        $('#modalHistoryUpload').fadeOut();
    });

    // 프로젝트 HISTORY 리스트 클릭 시
    $('.pro_detail_history_area').click(function () {
        $('#modalProjectDetail').fadeOut();
        $('#modalDocumentDetail').fadeIn();
    });

    // 프로젝트 HISTORY 리스트 클릭 후 수정 클릭
    $('.modal_btn_edit').click(function () {
        $('#modalProjectAdd').fadeOut();
        $('#modalDocumentDetail').fadeOut();
        $('#modalHistoryUpload').fadeIn();
    });


    // 프로젝트 등록 > 담당 분야 select box 클릭 시
    const $chargeSelectbox = $('.charge_selectbox');
    const $chargeList = $('.charge_list');
    const $iconDownArrow = $('.icon_down_arrow');

    $chargeSelectbox.on('click', function () {
        $chargeSelectbox.toggleClass('on');
    });

    $chargeList.on('click', 'button', function () {
        $chargeSelectbox.text($(this).text());
        $chargeSelectbox.removeClass('on');
    });

    //프로젝트 등록 > 프로그레스 바(To do, On progress, Done)
    $(".range_3step_slider").change(function () {
        var rangeValue = $(".range_3step_slider").val();
        if (rangeValue == 1 && window.innerWidth <= 540) {
            // var rangeValue = $(".range_3step_slider").val();
            $(".project_tag_on").fadeOut();
            $(".project_tag_done").fadeOut();
            $(".project_tag_todo").fadeIn();
            console.log(rangeValue)
        } else if (rangeValue == 2 && window.innerWidth <= 540) {
            // var rangeValue = $(".range_3step_slider").val();
            $(".project_tag_todo").fadeOut();
            $(".project_tag_done").fadeOut();
            $(".project_tag_on").fadeIn();
            console.log(rangeValue)
        } else if (rangeValue == 3 && window.innerWidth <= 540) {
            // var rangeValue = $(".range_3step_slider").val();
            $(".project_tag_todo").fadeOut();
            $(".project_tag_on").fadeOut();
            $(".project_tag_done").fadeIn();
            console.log(rangeValue)
        }
    });
    //프로젝트 등록 > To do 태그 클릭 시 active 전환
    $(".project_tag_todo button").click(function () {
        // $(this).addClass('tag_border');
        if ($(this).hasClass("")) {
            $(this).addClass('todo_tag_border');
        } else if ($(this).hasClass("todo_tag_border")) {
            $(this).removeClass('todo_tag_border');
        }
        $(".project_tag_todo button").not(this).removeClass("todo_tag_border");
    });
    //프로젝트 등록 > On progress(기획)태그 클릭 시 active 전환
    $(".project_tag_on1 button").click(function () {
        if ($(this).hasClass("")) {
            $(this).addClass('on1_tag_border');
        } else if ($(this).hasClass("on1_tag_border")) {
            $(this).removeClass('on1_tag_border');
        }
        $(".project_tag_on1 button").not(this).removeClass("on1_tag_border");
    });
    //프로젝트 등록 > On progress(디자인)태그 클릭 시 active 전환
    $(".project_tag_on2>ul>li:nth-child(1) button,.project_tag_on2>ul>li:nth-child(2) button").click(function () {
        if ($(this).hasClass("")) {
            $(this).addClass('on2_tag_design_border');
        } else if ($(this).hasClass("on2_tag_design_border")) {
            $(this).removeClass('on2_tag_design_border');
        }
        $(".project_tag_on2 button").not(this).removeClass("on2_tag_design_border");
    });
    //프로젝트 등록 > On progress(개발)태그 클릭 시 active 전환
    $(".project_tag_on2>ul>li:nth-child(3) button,.project_tag_on2>ul>li:nth-child(4) button").click(function () {
        if ($(this).hasClass("")) {
            $(this).addClass('on2_tag_dev_border');
        } else if ($(this).hasClass("on2_tag_dev_border")) {
            $(this).removeClass('on2_tag_dev_border');
        }
        $(".project_tag_on2 button").not(this).removeClass("on2_tag_dev_border");
    });
    //프로젝트 등록 > On progress(개발)태그 클릭 시 active 전환
    $(".project_tag_on2>ul>li:nth-child(5) button").click(function () {
        if ($(this).hasClass("")) {
            $(this).addClass('on2_tag_test_border');
        } else if ($(this).hasClass("on2_tag_test_border")) {
            $(this).removeClass('on2_tag_test_border');
        }
    });
    //프로젝트 등록 > Done 태그 클릭 시 active 전환
    $(".project_tag_done button").click(function () {
        if ($(this).hasClass("")) {
            $(this).addClass('done_tag_border');
        } else if ($(this).hasClass("done_tag_border")) {
            $(this).removeClass('done_tag_border');
        }
        $(".project_tag_done button").not(this).removeClass("done_tag_border");
    });

    //프로젝트 등록 > 진행률 프로그레스바
    var el, newPoint, newPlace, offset;

    $("input[type='range']").change(function () {
            el = $(this);
            // 범위 입력 폭 측정
            width = el.width();
            // 입력 좌, 우 사이의 배치 비율을 계산
            newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
            offset = -1;

            // 버블이 왼쪽 또는 오른쪽을 넘지 않도록 방지(지원되지 않는 브라우저)
            if (newPoint < 0) {
                newPlace = 0;
            } else if (newPoint > 1) {
                newPlace = width;
            } else {
                newPlace = width * newPoint + offset;
                offset -= newPoint;
            }

            // Move bubble
            el
                .next("output")
                .css({
                    left: newPlace,
                    marginLeft: offset
                })
                .text(el.val() + '%');
        })
        // Fake a change to position bubble at page load
        .trigger('change');

    //프로젝트 상세보기 페이지
    $('.btn_edit_modal').click(function () {
        $('#modalProjectDetail').fadeOut();
        $('#modalProjectAdd').fadeIn();
    });

    // (수정)프로젝트 - 히스토리 탭
    $('#projecHistory_tab li').click(function () {
        var tabClass = $(this).attr('class').split(' ')[0]; // 첫 번째 클래스를 가져옴 (all, meeting, file, final 중 하나)

        // 탭 활성화/비활성화 처리
        $(this).addClass('on').siblings('li').removeClass('on');

        // 콘텐츠 활성화/비활성화 처리
        var $content = $('.history_contents.' + tabClass + '_contents'); // 해당하는 콘텐츠 선택
        $content.addClass('on').siblings('.history_contents').removeClass('on');
    });

    // (수정)프로젝트 - 문서 등록 팝업 열기, 닫기
    $('.btn_file_upload, .btn_previous').click(function () {
        if ($(this).hasClass('btn_file_upload')) {
            $('#modalNewFileUpload').fadeIn();
        } else if ($(this).hasClass('btn_previous')) {
            $('#modalNewFileUpload').fadeOut();
        }
    });

    // (수정)프로젝트 - 문서 등록 팝업 문서타입 퍼블리싱 선택
    $('.lSel .publishing').on('click', function () {
        $('.new_history.upload').hide();
        $('.new_history.link').show();
    });

    // (수정)프로젝트 - 히스토리 등록 열기, 닫기
    $('.btn_history_add, #historyWrite .btn_previous, #historyView .btn_correction, #historyMeetingView .btn_correction, .history_contents .post_view').click(function () {
        // btn_history_add 또는 btn_correction 버튼을 클릭한 경우
        if ($(this).hasClass('btn_history_add') || $(this).hasClass('btn_correction')) {
            $('#historyWrite').stop(true, true).fadeIn(); // 애니메이션 중복 방지
            $('#historyView').stop(true, true).hide();

        }
        // btn_previous 버튼을 클릭한 경우
        else if ($(this).hasClass('btn_previous') || $(this).hasClass('post_view')) {
            $('#historyView').stop(true, true).fadeIn(); // 애니메이션 중복 방지
            $('#historyWrite').stop(true, true).hide();
            $('.meeting_registered').stop(true, true).hide();
            $('.btn_meeting_add').stop(true, true).show();
        }
    });



    // (수정)프로젝트 - 회의록 등록 팝업 열기, 닫기
    $('.btn_meeting_add, #modalMeetingAdd .btn_previous').click(function () {
        if ($(this).hasClass('btn_meeting_add')) {
            $('#modalMeetingAdd').fadeIn();
        } else if ($(this).hasClass('btn_previous')) {
            $('#modalMeetingAdd').fadeOut();
        }
    });

    // (수정)프로젝트 - 회의록 상세 팝업 수정 
    $('#modalMeetingView .btn_meeting_modal_edit').click(function () {
        $('#modalMeetingView').fadeOut();
        $('#historyMeetingView').hide();
        $('#historyWrite').show();
    });



    // (수정)프로젝트 - 기획안 또는 화면설계 버튼 클릭 시
    $('.lSel button').not('.publishing').on('click', function () {
        $('.new_history.link').hide();
        $('.new_history.upload').show();
    });


    // (수정) 프로젝트 - 문서 항목 텍스트 부모요소보다 길 경우 흐르도록
    $('.txt_wrap').each(function () {
        var $this = $(this);
        var pWidth = $this.find('p').width();
        var wrapWidth = $this.width();

        if (pWidth > wrapWidth) {
            $this.hover(function () {
                $(this).addClass('hover');
            }, function () {
                $(this).removeClass('hover');
            });
        }
    });

    // (수정) 프로젝트 - 회의록 상세보기 팝업 열기, 닫기
    $('.btn_meeting_detail').click(function () {
        if ($(this).hasClass('btn_meeting_detail')) {
            $('#modalMeetingView').fadeIn();
        } else if ($(this).hasClass('btn_previous')) {
            $('#modalMeetingView').fadeOut();
        }
    });

    // (수정) 프로젝트 - 히스토리 리스트 클릭 시 상세보기 나타남
    $('.history_contents .post_view').click(function () {

    });


    // (수정) 프로젝트 - 히스토리 목록 배경색
    $('.btn_history_add').click(function () {
        $('.project_history .history_contents ul li.on').css({
            'background': '#fff'
        });
    });

    $('.history_view.write .btn_previous, .project_history .history_contents ul li.on').click(function () {
        $('.project_history .history_contents ul li.on').css({
            'background': ''
        });
    });

    // (수정) 프로젝트 - 히스토리 등록 회의록 show hide
    $('.meeting_add .modal_btn_ok').click(function () {
        $('.btn_meeting_add').hide();
        $('#modalMeetingAdd').fadeOut();
        $('.meeting_registered').show();
    });

    $('.btn_meeting_edit').click(function () {
        $('#modalMeetingAdd').fadeIn();
    });

    $('.btn_meeting_delete').click(function () {
        $('.btn_meeting_add').show();
        $('.meeting_registered').hide();
    });



    // (수정 - 241104) 프로젝트 상세 - 탭메뉴
    $('.project_info .tabs li').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('.section_cont').hide();

        if ($(this).hasClass('history')) {
            $('#section_history').fadeIn();
        } else if ($(this).hasClass('date_manage')) {
            $('#section_manage').fadeIn();
        }
    });

    $('#section_manage .division li').click(function () {
        $('.table_cont').hide();

        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).hasClass('entire')) {
            $('#entire_table').show();
            $('#entire_table').addClass('active'); // active 클래스 추가
            $('#planning_table, #design_table, #develop_table').removeClass('active'); // 다른 테이블 active 클래스 제거
        } else if ($(this).hasClass('planning')) {
            $('#planning_table').show();
            $('#planning_table').addClass('active');
            $('#entire_table, #design_table, #develop_table').removeClass('active');
        } else if ($(this).hasClass('design')) {
            $('#design_table').show();
            $('#design_table').addClass('active');
            $('#entire_table, #planning_table, #develop_table').removeClass('active');
        } else if ($(this).hasClass('develop')) {
            $('#develop_table').show();
            $('#develop_table').addClass('active');
            $('#entire_table, #planning_table, #design_table').removeClass('active');
        }
    });



    // (수정 - 241104) 프로젝트 상세 - task 등록
    $('button.regist').click(function () {
        $('.table_cont.active .table_regist').show();
    });

    $('.table_regist .buttons .edit_cancel').click(function () {
        $(this).closest('tr').hide();
    });


    // (수정 - 241104) 프로젝트 상세 - table 수정 및 저장 
    $(document).ready(function () {
        $('.table_cont').on('click', '.buttons .edit', function () {
            // 클릭한 이미지의 부모 <td>의 형제 <td> 요소들 선택 (progress_wrap 제외)
            var $siblingsTd = $(this).closest('td').siblings('td:not(.progress_wrap)');

            // 선택된 <td> 요소들의 텍스트를 공백으로 설정하고 <input> 추가
            $siblingsTd.each(function () {
                var text = $(this).text();
                $(this).text('');

                if ($(this).hasClass('date')) {
                    // .date 클래스를 가진 <td>에 대해 date input 생성
                    var $dateInput = $('<input type="date" class="modal_form_control" data-placeholder="" required aria-required="true">')
                        .val(text)
                        .appendTo($(this)); // <td>에 <input> 추가

                    // 초기 텍스트 input 생성
                    var $textInput = $('<input type="text">')
                        .attr('value', text)
                        .val(text) // input의 값으로 텍스트를 설정


                    // date input의 값이 변경될 때
                    $dateInput.on('change', function () {
                        var dateValue = $(this).val(); // 입력된 날짜 값을 가져옴
                        // text input의 값을 변경
                        $textInput.val(dateValue).attr('value', dateValue); // date 값을 text input의 value로 설정
                    });
                } else {
                    // 그 외의 경우에는 일반 text input 생성
                    $('<input type="text" />')
                        .attr('value', text) // value 속성에 텍스트를 설정
                        .val(text) // input의 값으로 텍스트를 설정
                        .appendTo($(this)); // <td>에 <input> 추가
                }

            });

            $(this).hide();
            $(this).siblings('.btn_delete').hide();
            $(this).siblings('.edit_con, .edit_cancel').show();

        });

        // 위임된 클릭 이벤트 - 저장 버튼
        $('.table_cont').on('click', '.edit_con', function () {
            $(this).hide();
            $(this).siblings('.edit_cancel').hide();


            var $siblingsTd = $(this).parent().siblings('td:not(.progress_wrap)');

            // 형제 <td> 안의 <input>을 숨기고 값을 원래 텍스트로 설정
            $siblingsTd.each(function () {
                var $input = $(this).find('input'); // 형제 <td> 내의 <input> 선택
                var newText = $input.val(); // <input>의 값 가져오기
                $input.hide(); // <input> 숨기기
                $(this).text(newText); // <input>의 값을 텍스트로 설정
            });

            $(this).siblings('.edit, .btn_delete').show();
        });

        $('.table_cont').on('click', '.edit_cancel', function () {
            console.log('두 번째 이미지 클릭됨');

            var $siblingsTd = $(this).parent().siblings('td:not(.progress_wrap)');

            // 형제 <td> 안의 <input>을 숨기고 원래 텍스트 값으로 설정
            $siblingsTd.each(function () {
                var $input = $(this).find('input'); // 형제 <td> 내의 <input> 선택

                // .date 클래스를 가진 <td>의 경우
                if ($(this).hasClass('date')) {
                    var originalText = $input.val(); // value 속성에서 원래 텍스트 가져오기
                    $(this).text(originalText); // 원래 텍스트로 설정
                } else {
                    var originalText = $input.attr('value')
                    $input.hide(); // <input> 숨기기
                    $(this).text(originalText); // 원래 텍스트로 설정
                }

                $input.hide(); // 모든 <input> 숨기기
            });

            // 취소 버튼과 저장 버튼 숨기기
            $(this).hide();
            $(this).siblings('.edit_con').hide();
            $(this).siblings('.edit, .btn_delete').show();
        });

        // 프로젝트 등록 페이지 > 권한 설정
        $('.project_add .input_div.permission button, .permission button').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

    });

    // (수정 - 241104) 프로젝트 상세 -
    $(document).ready(function () {
        function syncScroll(headSelector, bodySelector) {
            $(bodySelector).on('scroll', function () {
                $(headSelector).scrollLeft($(bodySelector).scrollLeft());
            });

            $(headSelector).on('scroll', function () {
                $(bodySelector).scrollLeft($(headSelector).scrollLeft());
            });
        }

        // 각 테이블에 스크롤 동기화 적용
        syncScroll('#planning_table .head', '#planning_table .table_outline');
        syncScroll('#design_table .head', '#design_table .table_outline');
        syncScroll('#develop_table .head', '#develop_table .table_outline');
    });


















    // 고객사 등록 버튼
    $('.btn_poject_add').click(function () {
        $('#modalCustomerAdd').fadeIn();
    });

    // 고객사 수정 버전
    $('.project_edit').click(function () {
        console.log('ff')
        $('#modalCustomerAdd').fadeIn();
    });

    // (수정) 고객사 - 담당자 등록 팝업
    $('.customer_info_wrap .btn_add, .manager_list .more_list .modify').click(function () {
        $('#modalCustomerManagerAdd').fadeIn();
    });

    // (수정) 고객사 - 첨부파일 이미지 크게보기 팝업
    $(document).ready(function () {
        let swiper;

        function initSwiper() {
            swiper = new Swiper('.swiper', {
                initialSlide: 0, // 기본적으로 첫 번째 슬라이드
                loop: false,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChange: function () {
                        // 현재 슬라이드 인덱스를 확인
                        const currentIndex = this.activeIndex;
                        // 슬라이드 개수를 가져옴
                        const totalSlides = this.slides.length;

                        if (currentIndex === totalSlides - 1) {
                            this.navigation.nextEl.classList.add('swiper-button-disabled');
                        } else {
                            this.navigation.nextEl.classList.remove('swiper-button-disabled');
                        }

                        if (currentIndex === 0) {
                            this.navigation.prevEl.classList.add('swiper-button-disabled');
                        } else {
                            this.navigation.prevEl.classList.remove('swiper-button-disabled');
                        }
                    },
                },
            });
        }

        // Swiper 초기화
        initSwiper();

        // 첫 번째 줌 아이콘 클릭 이벤트
        $('.view_detail.first').on('click', function () {
            $('#modalCustomerImgSlide').fadeIn();
            swiper.slideTo(0); // 첫 번째 슬라이드로 이동
        });

        // 두 번째 줌 아이콘 클릭 이벤트
        $('.view_detail.second').on('click', function () {
            $('#modalCustomerImgSlide').fadeIn();
            swiper.slideTo(1); // 두 번째 슬라이드로 이동
        });

    });










    // (수정) 고객사 - 고정 toggle
    // .fixed 안의 img 태그를 클릭했을 때
    $(".name .fixed img").on("click", function () {
        if ($(this).css("display") === "none") {
            $(this).css("display", "block");
            $(this).siblings("img").css("display", "none");
        } else {
            $(this).css("display", "none");
            $(this).siblings("img").css("display", "block");
        }
    });

    // (수정) 고객사 - 담당자 더보기
    $('.manager_list .more').click(function (event) {
        event.stopPropagation(); // 이벤트 버블링 방지
        const $moreList = $(this).find('.more_list');

        if ($moreList.is(':visible')) {
            $moreList.hide();
        } else {
            $('.more_list').hide(); // 다른 열린 목록이 있다면 닫기
            $moreList.show();
        }
    });

    $(document).click(function () {
        $('.more_list').hide(); // 바깥 클릭 시 모든 목록 숨김
    });

    // .more_list를 클릭했을 때 닫히지 않도록 방지
    $('.more_list').click(function (event) {
        event.stopPropagation();
    });

    // (수정) 고객사 - 명함 이미지 크게보기 팝업
    $('.business_card .tools .view_detail').click(function () {
        $('#modalCustomerImgView').fadeIn();
    });



    // 메신저 친구 채팅 탭
    $('.messenger_tab>div:nth-child(1)').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.chating_list').fadeOut();
        $('.friend_list').fadeIn();
    });
    $('.messenger_tab>div:nth-child(2)').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.friend_list').fadeOut();
        $('.chating_list').fadeIn();
    });

    // 채팅 리스트에서 클릭 시 active 전환
    $('.chating_list div').click(function () {
        $(this).siblings().removeClass('.active');
        $(this).addClass('.active');
    });

    // 메신저 검색 버튼 클릭 시
    $('.messenger_header_icons>svg:nth-child(1)').click(function () {
        $('.messenger_header_inner_01').fadeOut();
        $('.messenger_header_inner_02').fadeOut();
        $('.messenger_search_w').fadeIn();
    });
    $('.ms_search_close_icon').click(function () {
        $('.messenger_header_inner_01').fadeIn();
        $('.messenger_header_inner_02').fadeIn();
        $('.messenger_search_w').fadeOut();
    });

    // 메신저 화상채팅 버튼 클릭 시
    $('.messenger_header_icons>svg:nth-child(3)').click(function () {
        location.href = 'video_chat.html';
    });

    // 메신저 나가기 버튼 클릭 시
    $('.messenger_header_icons>svg:nth-child(4)').click(function () {
        $('#modalOut').fadeIn();
    });

    // 메신저 헤더 내 프로필 클릭 시
    $('.messenger_header_inner_01').click(function () {
        if (window.innerWidth <= 768) {
            $('#messenger_left_aside').fadeIn();
            $('#messenger_main_contents').css({
                'margin-left': '400px',
                'width': 'calc(100% - 400px)'
            });
            event.stopPropagation();
        }
    });
    $(document).click(function () {
        var leftAside = $('#messenger_left_aside');

        // Check if mobile_nav_bg is visible, then fadeOut it
        if (leftAside.is(':visible') && window.innerWidth <= 768) {
            leftAside.fadeOut();
            $('#messenger_main_contents').css({
                'margin-left': '0',
                'width': '100%'
            });
        }
    });

    // 메신저 화면공유 버튼 클릭 시
    $('.screen_share_icon').click(function () {
        $('#modalScreenShare').fadeIn();
    });
    $('.share_window_screen').click(function () {
        $('#modalWindowScreenShare').fadeIn();
    });
    $('.share_view_screen').click(function () {
        $('#modalViewScreenShare').fadeIn();
    });
    $('.btn_top_close_modal').click(function () {
        $('#modalScreenShare').fadeOut();
        $('#modalWindowScreenShare').fadeOut();
        $('#modalViewScreenShare').fadeOut();
    });

    // 메신저 공유 버튼 클릭 시
    $('.messenger_share_icon>svg').click(function () {
        $('.modal_url_share').fadeIn();
    });
    $('.modal_url_share_okay').click(function () {
        $('.modal_url_share').fadeOut();
    });

    // 화상채팅 셋팅 페이지
    var my_camera_signal_icon = $('.my_camera_area>.signal_area');
    var icons = {
        audio: {
            on: $('.audio_icon'),
            off: $('.audio_off_icon')
        },
        video: {
            on: $('.video_icon'),
            off: $('.video_off_icon')
        },
        signal: {
            on: $('.signal_icon'),
            off: $('.signal_off_icon')
        },
        my_mic: {
            on: $('.my_mic_icon'),
            off: $('.my_mic_off_icon')
        },
        my_mic_2: {
            on: $('.my_video_icon_area'),
            off: $('.video_un_activation_icon')
        },
        my_video: {
            on: $('.my_video_icon'),
            off: $('.my_video_off_icon')
        },
        my_signal: {
            on: $('.my_signal_icon'),
            off: $('.my_signal_off_icon')
        }
    };

    function toggleIcons(type) {
        var icon = icons[type];
        if (icon.on.is(':visible')) {
            icon.on.fadeOut();
            icon.off.fadeIn();
        } else if (icon.off.is(':visible')) {
            icon.off.fadeOut();
            icon.on.fadeIn();
        }
    }
    $('.video_setting_icons>div:nth-child(1) div').click(function () {
        toggleIcons('audio');
    });
    $('.video_setting_icons>div:nth-child(2) div').click(function () {
        toggleIcons('video');
    });
    $('.video_setting_icons>div:nth-child(3) div').click(function () {
        toggleIcons('signal');
    });
    $('.my_video_setting_icons>div:nth-child(1) div').click(function () {
        toggleIcons('my_mic');
        toggleIcons('my_mic_2');
    });
    $('.my_video_setting_icons>div:nth-child(2) div').click(function () {
        toggleIcons('my_video');
    });
    $('.my_video_setting_icons>div:nth-child(3) div').click(function () {
        toggleIcons('my_signal');
        if (my_camera_signal_icon.is(':visible')) {
            my_camera_signal_icon.fadeOut();
        } else {
            my_camera_signal_icon.fadeIn();
        }

    });

    // 화상채팅 끝내기 버튼 클릭 시
    $('.btn_out_video_chat').click(function () {
        $('#modalVideoOut').fadeIn();
    });

    // myboard 달력
    $('.calendar_pick').click(function () {
        $('.calendar_date').fadeIn();
    })
    $('.calendar_close').click(function () {
        $('.calendar_date').fadeOut();
    })
    $('.calendar_month>div').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // 알림 아이콘 클릭 시
    $('.icon_bell').click(function () {
        $('.calendar_comment_view').toggleClass('d-block')
    });


    // 마이보드 > Attendance Status > 팀 선택
    $('.board_attendance .tab_list .all').click(function () {
        $('.attendance_list.all_list').addClass('active');
        $('.attendance_list.all_list').siblings().removeClass('active');
    });
    $('.board_attendance .tab_list .strategy').click(function () {
        $('.attendance_list.strategy_list').addClass('active');
        $('.attendance_list.strategy_list').siblings().removeClass('active');
    });
    $('.board_attendance .tab_list .design').click(function () {
        $('.attendance_list.design_list').addClass('active');
        $('.attendance_list.design_list').siblings().removeClass('active');
    });
    $('.board_attendance .tab_list .development').click(function () {
        $('.attendance_list.development_list').addClass('active');
        $('.attendance_list.development_list').siblings().removeClass('active');
    });

    // 마이보드 > 출퇴근 버튼
    $('.box_wrap.working_hour .btn_work_on').click(function () {
        $('.btn_work_on dl').toggleClass("active");

        // screen_on에 active가 있을 때 label.time의 색상 변경
        if ($('.screen_on').hasClass('active')) {
            $('label.today_start_time').css('color', 'var(--main-color)'); // 원하는 색상으로 변경
        } else {
            $('label.today_start_time').css('color', ''); // 원래 상태로 복원
        }
    });


    // 근무시간 > 공지 버튼 클릭 시
    $('.btn_vacation_notice').click(function () {
        $('#modalWorkingHourNotice').fadeIn();
    });

    // 근무시간 > 휴가 업로드 버튼 클릭 시
    $('.btn_vacation_upload').click(function () {
        $('#modalVacationUpload').fadeIn();
    });

    // 스케쥴 > 날짜 선택 시
    $('.schedule_wrap > table tr:nth-of-type(3) td, .schedule_wrap > table tr:nth-of-type(4) td, .schedule_wrap > table tr:nth-of-type(5) td, .schedule_wrap > table tr:nth-of-type(6) td, .schedule_wrap > table tr:nth-of-type(7) td').click(function () {
        $('.schedule_wrap > table td').removeClass('active');
        $(this).addClass('active');
    });

    const buttons = $('.select_schedule_w button');

    buttons.on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            buttons.removeClass('active');
            $(this).addClass('active');
        }
    });

    // 스케쥴 > + 버튼 클릭 시
    $('.add_schedule').click(function () {
        $('#modalAddSchedule').fadeIn();
    });

    // 스케쥴 > 추가 팝업에서 색상 선택
    const colorButtons = document.querySelectorAll('.sel_w button');
    const mainButtonColor = document.querySelector('.year > .sel .sel_color');
    const mainButtonText = document.querySelector('.year > .sel span:last-child');


    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            colorButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            let selectedClass = this.querySelector('.sel_color').classList;

            let colorClass;
            if (selectedClass.contains('opt_color_01')) {
                colorClass = 'opt_color_01';
            } else if (selectedClass.contains('opt_color_02')) {
                colorClass = 'opt_color_02';
            } else if (selectedClass.contains('opt_color_03')) {
                colorClass = 'opt_color_03';
            }
            mainButtonColor.classList.remove('opt_color_01', 'opt_color_02', 'opt_color_03');
            mainButtonColor.classList.add(colorClass);
            const selectedText = this.querySelector('span:last-child').innerText;
            mainButtonText.innerText = selectedText;
            $(this).parent().parent().removeClass("active");
        });
    });

    // 스케쥴 > 참석 인원 > 셀렉박스
    $(".people input").on("click", function () {
        console.log("00");
        $(this).parent().toggleClass("active");
    });
    $(".people_sel button").on("click", function () {
        $(this).parent().parent().removeClass("active");
    });

    // 스케쥴 > 상세 > 편집 아이콘 클릭 시
    $('.icon_sch_edit').click(function () {
        $('#modalAddSchedule').fadeIn();
    });

    // 스케쥴 > 상세 > 삭제 아이콘 클릭 시
    $('.icon_sch_delete').click(function () {
        $('#modalDelete').fadeIn();
    });

    // 스케쥴 오른쪽에서 로딩되는
    var schedules = document.querySelectorAll('.schedule_w');
    schedules.forEach(function (schedule, index) {
        setTimeout(function () {
            schedule.classList.add('active');
        }, index * 200);
    });

    // 공지 > 삭제 버튼 클릭 시
    $('.btn_conmment_delete').click(function () {
        $('#modalDelete').fadeIn();
    });

    // 공지 > 댓글 표 클릭 시 
    $('.select_box').click(function () {
        $(this).parent().toggleClass("select");
    });

    // 공지 > 공지사항 표 클릭 시
    $('.notice_table tr').click(function () {
        $('#modalNotice').fadeIn();
    });

    // 근태 상세 팝업
    $('.table_em01 tr').click(function () {
        $('#modalWorkingDetail').fadeIn();
    });

    // 연차 상세 팝업
    $('.table_em02 tr').click(function () {
        $('#modalVacationDetail').fadeIn();
    });

    // 연차 공지 관리 팝업
    $('.management_vaca_w button:first-child').click(function () {
        $('#modalWorkingHourNotice').fadeIn();
    });
    $('.management_vaca_w button:nth-child(2)').click(function () {
        $('#modalSpecialVacation').fadeIn();
    });
    $('.management_vaca_w button:nth-child(3)').click(function () {
        $('#modalPersonalVacation').fadeIn();
    });

    // 관리자 > Employees Management 화살표 호버 시
    $('.EM_color_01').mouseover(function () {
        $('.state_hover.in_people').fadeIn();
    });
    $('.EM_color_02').mouseover(function () {
        $('.state_hover.out_people').fadeIn();
    });
    $('.EM_color_03').mouseover(function () {
        $('.state_hover.vacation_people').fadeIn();
    });
    $('.EM_color_01, .EM_color_02, .EM_color_03').mouseout(function () {
        $('.state_hover').fadeOut();
    });

    // 관리자 > 직원 관리 > 연차 현황 옆 select box
    $(".icon_arrow").on("click", function () {
        $(this).toggleClass("active");
    });

    // 연차 기준 공지 팝업
    $(".modal_btn_edit").on("click", function () {
        $('#modalWorkingHourNotice').fadeOut();
        $('#modalWorkingHourNoticeEdit').fadeIn();
    });
    // 출퇴근 시간 팝업 > 수정 팝업 띄우기
    $(".table.table_working_detail01 tbody tr").on("click", function () {
        $('#modalWorkingDetail').fadeOut();
        $('#modalEmployeesEditTime').fadeIn();
    });
    // 출퇴근 시간 팝업 > 수정 팝업 없애기
    $("#modalEmployeesEditTime .btn_close_modal").on("click", function () {
        $('#modalEmployeesEditTime').fadeOut();
        $('#modalWorkingDetail').fadeIn();
    });
    $("#modalEmployeesEditTime .modal_btn_ok").on("click", function () {
        $('#modalEmployeesEditTime').fadeOut();
        $('#modalWorkingDetail').fadeIn();
    });

    // 출퇴근 시간 수정
    // $('.time_input').on('input', function () {
    //     let timeValue = $(this).val();
    //     let [hours, minutes] = timeValue.split(':');
    //     hours = ('0' + hours).slice(-2);
    //     $(this).val(`${hours}:${minutes}`);
    // });


    // 직원 체크 박스
    $('.all_check').click(function () {
        if ($(this).parent().parent().hasClass('active')) {
            $(this).parent().parent().removeClass('active');
        } else {
            $(this).parent().parent().addClass("active");
        }
    });

    // 관리자 > 직원관리 > 근태, 연차 현황 right side 효과
    $(".table_body tr").on("click", function () {
        $('.right_aside_bg.admin_working_hour').addClass('active');
    });
    $(".right_aside .close img").on("click", function () {
        $('.right_aside_bg.admin_working_hour').removeClass('active');
    });

    // 관리자 > 직원관리 > 직원 현황 right side 효과
    $(".employees_card").on("click", function () {
        $('.right_aside_bg.admin_employees').addClass('active');
        $('.employee_info').show();
        $('.employee_info_edit').hide();
    });

    // 관리자 > 직원관리 > 직원추가
    $(".add_employee").on("click", function () {
        $('.right_aside_bg.admin_employees').addClass('active');
        $('.employee_info').hide();
        $('.employee_info_edit').show();
    });

    // 관리자 > 직원관리 > 직원상세보기 > 수정
    $(".employee_info .btn.edit").on("click", function () {
        $('.employee_info').hide();
        $('.employee_info_edit').show();
    });

    // 관리자 > 직원관리 > 이메일 복사
    $(".copy_w").on("click", function (event) {
        event.stopPropagation();
    });

    $(".right_aside .close img").on("click", function () {
        $('.right_aside_bg.admin_employees').removeClass('active');
    });

    // 관리자 > 드롭박스
    $(".main_sel").on("click", function () {
        $(this).parent().toggleClass("active");
    });
    $(".sel button").on("click", function () {
        var selectedText = $(this).text();
        var selectedColor = $(this).css("color");
        $(this).parent().parent().removeClass("active");
        var $selButton = $(this).parent().prev();
        $selButton.text(selectedText);
        $selButton.css({
            "color": selectedColor
        });
    });


    // 관리자 > 직원 관리 > 탭 밑줄 액션
    $(".working_hour .tap_area label").on("click", function () {
        $(".working_hour .tap_area label").removeClass("active");
        $(this).addClass("active");
        var labelWidth = $(this).outerWidth();
        var labelPosition = $(this).position().left;
        $(".working_hour .tap_area .underline").css({
            "width": labelWidth + "px",
            "left": labelPosition + "px"
        });
    });
    var firstLabel = $(".working_hour .tap_area label").first();
    firstLabel.addClass("active");
    var labelWidth = firstLabel.outerWidth();
    var labelPosition = firstLabel.position().left;
    $(".working_hour .tap_area .underline").css({
        "width": labelWidth + "px",
        "left": labelPosition + "px"
    });

    // 관리자 > 직원 관리 > 직원 상세 right aside > 탭 액션
    $(".right_aside .tap_area label").on("click", function () {
        $(".right_aside .tap_area label").removeClass("active");
        $(this).addClass("active");
        var labelWidth = $(this).outerWidth();
        var labelPosition = $(this).position().left;
        $(".right_aside .tap_area .underline").css({
            "width": labelWidth + "px",
            "left": labelPosition + "px"
        });
    });
    var firstLabel = $(".right_aside .tap_area label").first();
    firstLabel.addClass("active");
    var labelWidth = firstLabel.outerWidth();
    var labelPosition = firstLabel.position().left;
    $(".right_aside .tap_area .underline").css({
        "width": labelWidth + "px",
        "left": labelPosition + "px"
    });

    // 관리자 > 직원 관리 > 탭 클릭 시 화면 넘어가는 효과
    const workingHourTapLabel = $(".admin_working_hour_tap");
    const employeesTap = $(".admin_employees_tap");
    const adminWorkingHourWrap = $(".admin_working_hour_wrap");
    const adminEmployeesWrap = $(".admin_employees_wrap");
    workingHourTapLabel.on("click", function () {
        adminWorkingHourWrap.css("transform", "translateX(0)");
        adminEmployeesWrap.css("transform", "translateX(100%)");
        workingHourTapLabel.addClass("active");
        employeesTap.removeClass("active");
    });
    employeesTap.on("click", function () {
        adminWorkingHourWrap.css("transform", "translateX(-100%)");
        adminEmployeesWrap.css("transform", "translateX(0)");
        employeesTap.addClass("active");
        workingHourTapLabel.removeClass("active");
    });

    // 관리자 > 직원 관리 > 탭 클릭 시 화면 넘어가는 효과
    const workingHoursLabel = $(".working_hours");
    const vacationLabel = $(".vacation");
    const workingHoursDetail = $(".working_hours_detail");
    const vacationDetail = $(".vacaion_detail");
    workingHoursLabel.on("click", function () {
        workingHoursDetail.css("transform", "translateX(0)");
        vacationDetail.css("transform", "translateX(100%)");
        workingHoursLabel.addClass("active");
        vacationLabel.removeClass("active");
    });
    vacationLabel.on("click", function () {
        workingHoursDetail.css("transform", "translateX(-100%)");
        vacationDetail.css("transform", "translateX(0)");
        vacationLabel.addClass("active");
        workingHoursLabel.removeClass("active");
    });

    // 관리자 > 직원관리 > 근태 상세 표
    $(".overflow_text span").on("click", function () {
        console.log("ff")
    });
    var overflowTexts = $('.overflow_text');
    overflowTexts.each(function () {
        var span = $(this).find('span');
        var containerWidth = $(this).outerWidth();
        var textWidth = span[0].scrollWidth;
        if (textWidth > containerWidth) {
            $(this).hover(
                function () {
                    span.css({
                        'transition': 'transform 5s linear',
                        'transform': 'translateX(-100%)'
                    });
                },
                function () {
                    span.css({
                        'transition': 'none',
                        'transform': 'translateX(0)'
                    });
                }
            );
        }
    });

    // 관리자 > 공지사항 팝업 수정 버튼
    $(".btn_edit_modal").on("click", function () {
        $('#modalNotice').fadeOut();
        $('#modalSpecialVacation').fadeIn();
    });

    //관리자 > 공지 등록 팝업
    $(".btn_notice_add").on("click", function () {
        $('#modalNoticeAdd').fadeIn();
    });

    //관리자 > 공지 상세 > 수정 버튼 클릭
    $(".btn_edit_modal").on("click", function () {
        $('#modalNoticeAdd').fadeIn();
        $('#modalNotice').fadeOut();
    });

    //관리자 > 공지 상세 > 삭제 버튼 클릭
    $(".modal_btn_delete").on("click", function () {
        $('#modalDelete').fadeIn();
        $('#modalDocumentDetail').fadeOut();
        $('#modalNotice').fadeOut();
    });

    // 관리자 > 공지 등록 > 상단 고정 check box
    $('.top_fixed').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });


    // select_box
    $(".select_w .btn_select").on("click", function () {
        $(this).parent().toggleClass("active");
        $(this).parent().siblings().removeClass('active');
    });




    // 스케쥴 > current date
    var currentDate = new Date();
    var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    // var formattedDate = currentDate.getFullYear() + "년 " + months[currentDate.getMonth()] + "월 " + currentDate.getDate() + "일 " + days[currentDate.getDay()];
    var formattedDate = currentDate.getDate() + "일 " + days[currentDate.getDay()];

    $(".current_date").text(formattedDate);

    $(".select_item button").on("click", function () {
        $(this).addClass("active").siblings("button").removeClass("active");;
        var selectedText = $(this).text();
        $(this).parent().parent().removeClass("active");
        var $selButton = $(this).parent().prev();
        $selButton.text(selectedText);
    });


    // calendar
    $(".date").datepicker({
        dateFormat: 'yy.mm.dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        fadeInMonthAfterYear: true,
        yearSuffix: '년',
        changeMonth: true,
        changeYear: true,
        fadeInButtonPanel: true,
        beforefadeIn: function (input, inst) {
            $('#ui-datepicker-div').removeClass("yearpicker");
        }
    });
    $(".date").each(function (e) {
        $(this).on("propertychange change keyup paste input", function () {
            var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
            var today = new Date($('.date').eq(e).val()).getDay();
            var todayLabel = week[today];
            $(this).prev().children("span").text(todayLabel.split("요일")[0]);
        });
    })


});

$(document).ready(function () {

    //출근하기, 퇴근하기 버튼
    $('button.toggleAttendance').on('click', function () {
        const parentLi = $(this).parent('li');

        parentLi.toggleClass('highlight');

        if ($(this).text() === '출근하기') {
            $(this).text('퇴근하기');
            $(this).removeClass('on').addClass('off');
        } else {
            $(this).text('출근하기');
            $(this).removeClass('off').addClass('on');
        }
    });

    // 출근 상태 탭메뉴
    $('.attendance_wrap a').on('click', function () {
        const TabClass = $(this).attr('class');

        $('.strategy_list, .design_list, .development_list').css('display', 'none')

        if (TabClass.includes('attendance_strategy')) {
            $('.strategy_list').css('display', 'block');
        } else if (TabClass.includes('attendance_design')) {
            $('.design_list').css('display', 'block');
        } else if (TabClass.includes('attendance_development')) {
            $('.development_list').css('display', 'block');
        }
    });

    $('.tab_list li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });



    // 기안 게시글 슬라이드
    var $ApprSlider = $('.appr_slide').slick({
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.appr_slide_top .prev_arrow'),
        nextArrow: $('.appr_slide_top .next_arrow'),
        responsive: [ // 반응형
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true, // 세로 슬라이더 설정
                    verticalSwiping: true
                }
            },
        ]
    });


    // 기안 게시글 슬라이드 좌,우 컨트롤러 / 이전, 다음 슬라이드 없으면 비활성
    $ApprSlider.on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide === 0) {
            $('.appr_slide_top .prev_arrow').prop('disabled', true);
        } else {
            $('.appr_slide_top .prev_arrow').prop('disabled', false);
        }

        if (currentSlide >= slick.slideCount - slick.options.slidesToShow) {
            $('.appr_slide_top .next_arrow').prop('disabled', true);
        } else {
            $('.appr_slide_top .next_arrow').prop('disabled', false);
        }
    });

    // 결재 진행 상태 탭메뉴
    $('.appr_progress li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // 기안하기 버튼 드롭메뉴
    $(document).ready(function () {
        $('.appr_slide_top .dropdown-button').on('click', function () {
            var $dropdownMenu = $(this).siblings('.dropdown_menu');
            $dropdownMenu.toggle();
        });

        // 드롭메뉴 외부를 클릭하면 메뉴 숨김
        $(window).on('click', function (event) {
            if (!$(event.target).closest('.appr_slide_top .dropdown').length) {
                $('.appr_slide_top .dropdown_menu').hide();
            }
        });
    });

    // 기안 게시글 슬라이드 3개 이하일때 왼쪽 정렬
    if ($ApprSlider.slick('getSlick').slideCount < 4) {
        $ApprSlider.addClass('single-slide');
    }

    // 스크롤로 슬라이드 넘기기
    $('.appr_slide').on('mousewheel', function (event) {
        event.preventDefault();

        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            $ApprSlider.slick('slickPrev');
        } else {
            $ApprSlider.slick('slickNext');
        }
    });

    // 기안 게시글 슬라이드 프로그레스바
    $ApprSlider.on('afterChange', function (event, slick, currentSlide) {
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;

        var progressPercent = ((currentSlide + 1) / (totalSlides - slidesToShow + 1)) * 100;

        $('.appr_progressBar').css('width', progressPercent + '%');
    });

    // 페이지가 처음 로딩될 때 프로그레스바를 0%로 설정
    $('.appr_progressBar').css('width', '0%');

    // 휴가신청서 작성 팝업
    $('.appr_slide_top .vacation_request_form').click(function () {
        $('#modalVacationWrite').fadeIn();
    });

    // 휴가신청서 작성 버튼 > 휴가, 반차 탭메뉴
    $('.appr_vacation_tab li').on('click', function () {
        const TabClass = $(this).attr('class');

        $('.appr_vacation_tab_content.dayoff, .appr_vacation_tab_content.half').css('display', 'none')

        if (TabClass.includes('dayoff')) {
            $('.appr_vacation_tab_content.dayoff').css('display', 'block');
        } else if (TabClass.includes('half')) {
            $('.appr_vacation_tab_content.half').css('display', 'block');
        }
    });

    // 지출결의서 작성 팝업
    $('.appr_slide_top .spending_request_form').click(function () {
        $('#modalSpendingWrite').fadeIn();
    });

    $('.appr_vacation_tab li').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // 기안(휴가) 상세보기 팝업
    $('.appr_slide .dayoff_view').click(function () {
        $('#modalDayoffView').fadeIn();
    });

    // 기안(반차) 상세보기 팝업
    $('.appr_slide .half_view').click(function () {
        $('#modalhalfView').fadeIn();
    });

    // 기안(지출결의서) 상세보기 팝업
    $('.appr_slide .spending_view').click(function () {
        $('#modalSpendigView').fadeIn();
    });

    // Approval(admin) - 슬라이드 해제 unslick
    $('.appr_admin_board.appr_slide').slick('unslick');

    $('.appr_admin_board.appr_slide [tabindex]').removeAttr('tabindex');

    // Approval(admin) - 기안(휴가) 결재하기 팝업
    $('.appr_admin_board .dayoff_admin').click(function () {
        $('#modalDayoffAdmin').fadeIn();
    });

    // Approval(admin) - 기안(반차) 결재하기 팝업
    $('.appr_admin_board .half_admin').click(function () {
        $('#modalHalfAdmin').fadeIn();
    });

    // Approval(admin) - 기안(반차) 결재하기 팝업
    $('.appr_admin_board .spending_admin').click(function () {
        $('#modalSpendingAdmin').fadeIn();
    });

});

// 직원관리 > 출퇴근 시간 수정
$('.btn_edit').on('click', function () {
    var row = $(this).closest('tr');

    var workCell = row.find('.work');
    var leaveCell = row.find('.leave');
    var reasonCell = row.find('.reason .overflow_text');

    var workValue = workCell.text();
    var leaveValue = leaveCell.text();
    var reasonValue = reasonCell.find('span').text();

    workCell.html('<input type="text" value="' + workValue + '" class="work_input" />');
    leaveCell.html('<input type="text" value="' + leaveValue + '" class="leave_input" />');
    reasonCell.html('<input type="text" value="' + reasonValue + '" class="reason_input" />');

    // 버튼을 저장 및 취소 버튼으로 변경
    $(this).parent().html(`
        <img src="http://test.s1.unipware.com/unipware/images/ico_comment_edit_con.svg" class="pointer edit_con mr-1" alt="저장">
        <img src="http://test.s1.unipware.com/unipware/images/ico_comment_edit_cancel.svg" class="pointer edit_cancel mr-1" alt="취소">
    `);

    $('.edit_con').on('click', function () {

        var newWorkValue = row.find('.work_input').val();
        var newLeaveValue = row.find('.leave_input').val();
        var newReasonValue = row.find('.reason_input').val();

        workCell.html(newWorkValue);
        leaveCell.html(newLeaveValue);
        reasonCell.parent().html('<span>' + newReasonValue + '</span>');

        $(this).parent().html(`
            <img src="http://test.s1.unipware.com/unipware/images/btn_edit.svg" class="pointer btn_edit" alt="출퇴근시간 수정">
        `);

        row.addClass('working_hour_edit');

        bindEditEvent();
    });

    $('.edit_cancel').on('click', function () {
        workCell.html(workValue);
        leaveCell.html(leaveValue);
        reasonCell.parent().html('<span>' + reasonValue + '</span>');

        $(this).parent().html(`
            <img src="http://test.s1.unipware.com/unipware/images/btn_edit.svg" class="pointer btn_edit" alt="출퇴근시간 수정">
        `);

        bindEditEvent();
    });
});

function bindEditEvent() {
    $('.btn_edit').on('click', function () {});
}

bindEditEvent();


// 직원 정보 > section 토글 효과
$(document).ready(function () {
    $(".close_section").on("click", function () {
        $(this).closest(".section").find(".section_contents").slideToggle(300);
        $(this).toggleClass('rotate');
    });
});


// 공지사항 - 상세 열기 닫기
$(document).ready(function () {
    function noticeSize() {
        $('.notice_table').off('click');
        $('.notice_detail .top_button button').off('click');

        if ($(window).width() > 1600) {
            $('.notice_table').on('click', function () {
                $('.notice_detail').css({
                    width: '100%',
                    height: 'fit-content',
                    marginLeft: '24px',
                    opacity: '1',
                    transition: 'all 1s ease'
                });
            });

            $('.notice_detail .top_button button').on('click', function () {
                $('.notice_detail').css({
                    width: '0',
                    height: '0',
                    opacity: '0',
                    transition: 'all 1s ease'
                });
            });
        } else if ($(window).width() > 960) {
            $('.notice_table').on('click', function () {
                $('.notice_detail').css({
                    width: '80%',
                    height: 'fit-content',
                    marginLeft: '24px',
                    opacity: '1',
                    transition: 'all 1s ease'
                });
            });

            $('.notice_detail .top_button button').on('click', function () {
                $('.notice_detail').css({
                    width: '0',
                    height: '0',
                    opacity: '0',
                    transition: 'all 1s ease'
                });
            });
        }
    }

    // 초기 호출
    noticeSize();

    // 창 크기 변경 시 noticeSize 함수 호출
    $(window).resize(function () {
        noticeSize();
    });
});

$(document).ready(function () {
    // 공지사항 - 목록으로 가기 숨기기
    $('.goto_bottom_wrap').click(function () {
        $(this).hide();
    });

    // 공유하기 팝업 - 링크 복사 클릭 시 toast 노출
    $('.share_input_wrap .btn').click(function () {
        $('.modal_toast.link').fadeIn();
        setTimeout(function () {
            $('.modal_toast.link').fadeOut();
        }, 2000);
    });


    // 공유하기 팝업 - 토글 활성화 시 비밀번호 input 노출
    $('.share_password_wrap .toggle_switch').click(function () {
        $('.share_password').toggleClass('active');
    });

    // 공유하기 팝업 - 토글 활성화 시 options 노출 (반응형)
    function handleResponsiveOptions() {
        const width = $(window).width(); // 현재 창 너비 가져오기

        // 항상 `.toggle_switch`에 이벤트를 바인딩
        $('.share_password_wrap .toggle_switch')
            .off('click.options') // 기존 `.options` 관련 이벤트 제거
            .on('click.options', function () {
                $('.options').toggleClass('active');

                // `.share_password`의 상태에 따라 `.options` 활성화 여부 설정
                if ($('.share_password').hasClass('active')) {
                    $('.options').addClass('active');
                } else {
                    $('.options').removeClass('active');
                }
            });

        if (width > 425) {
            // 큰 화면에서도 `.options` 상태를 유지
            if ($('.share_password').hasClass('active')) {
                $('.options').addClass('active');
            } else {
                $('.options').removeClass('active');
            }
        }
    }

    handleResponsiveOptions(); // 처음 로드 시 실행

    $(window).on('resize', handleResponsiveOptions); // 창 크기 변경 시 이벤트 바인딩



    // 공유하기 팝업 - 유효기간 dropmenu 노출
    $('.period_txt').click(function () {
        $('.share_period .dropmenu').toggle();
        $('.share_period .rotate').toggleClass('active');
    });

    // 공유하기 팝업 - 유효기간 dropmenu li active
    $('.share_period .dropmenu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 공유하기 팝업 - 비밀번호 4자리 입력부터 toast 노출
    let timer;

    $('.share_password input').on("input", function () {
        clearTimeout(timer); // 기존 타이머 초기화

        // 입력값 길이가 4자리 이상인지 확인
        if ($(this).val().length >= 4) {
            $('.modal_toast.password').fadeIn();

            // 2초 후에 토스트 메시지 숨기기
            timer = setTimeout(function () {
                $('.modal_toast.password').fadeOut();
            }, 2000);
        } else {
            $('.modal_toast.password').hide(); // 입력값이 4자리 미만일 경우 숨기기
        }
    });

    // 공유하기 팝업 - 전체 선택 체크박스
    $('#shareFileAll').on('change', function () {
        const isChecked = $(this).is(':checked'); // 전체 선택 상태 확인

        // 모든 tbody의 체크박스를 상위 체크박스 상태와 동기화
        $('.table_outline input[type="checkbox"]').prop('checked', isChecked);
    });

    // 개별 체크박스 이벤트
    $('.table_outline input[type="checkbox"]').on('change', function () {
        // 전체 체크박스의 상태 업데이트
        const allChecked = $('.table_outline input[type="checkbox"]').length === $('.table_outline input[type="checkbox"]:checked').length;
        $('#shareFileAll').prop('checked', allChecked);
    });


    // 신규회원 휴대폰 번호 인증 - 시간 카운트다운
    $(".phone_auth_wrap button").on("click", function () {
        let timer = 120; // 2분(120초)
        const $countdownElement = $(".phone_auth_entry .countdown");
        const $resendButton = $(this); // 클릭된 버튼 요소 참조

        // 기존 타이머가 있을 경우 초기화
        if ($countdownElement.data("intervalId")) {
            clearInterval($countdownElement.data("intervalId"));
        }

        $countdownElement.show(); // 카운트다운 표시

        // 타이머 시작
        const interval = setInterval(function () {
            const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
            const seconds = String(timer % 60).padStart(2, '0');
            $countdownElement.text(`${minutes}:${seconds}`);
            timer--;

            if (timer < 0) {
                clearInterval(interval); // 타이머 멈춤
                $countdownElement.text("시간 초과"); // 시간 초과 메시지 표시
                $resendButton.text("재발송"); // 버튼 텍스트를 "재발송"으로 변경
            }
        }, 1000);

        // 타이머 ID 저장 (중복 방지용)
        $countdownElement.data("intervalId", interval);
    });





});

// table - th sorting 화살표 클릭 애니메이션
$('.table_header thead tr th img.sort').click(function () {
    if ($(this).hasClass("flipped")) {
        $(this).removeClass("flipped");
    } else {
        // 클래스가 없는 경우 추가
        $(this).addClass("flipped");
    }
});


// 공지사항 등록 - quill 게시판 에디터
var quill = new Quill('#noticeEditor', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{
                header: [1, 2, 3, 4, 5, 6, false]
            }],
            [{
                'size': ['small', false, 'large', 'huge']
            }],
            [{
                color: []
            }, {
                background: []
            }],
            ['bold', 'italic', 'underline', 'strike'],
            [{
                align: []
            }],
            ['image', 'code-block'],
            [{
                list: 'ordered'
            }, {
                list: 'bullet'
            }]
        ]
    }
});