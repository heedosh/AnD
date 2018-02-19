$(window).load(function () {
    "use strict";
    $('#calendar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        defaultDate: '2018-02-12',
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'M/H 오픈',
                start: '2018-02-02',
                className: 'b-l b-2x b-greensea'
            },
            {
                title: '청약',
                start: '2018-02-07',
                end: '2018-02-10',
                className: 'bg-cyan'
            },
            {
                id: 999,
                title: '당첨자 발표',
                start: '2018-02-14T16:00:00',
                className: 'b-l b-2x b-lightred'
            },
            {
                title: '정당계약',
                start: '2018-02-26',
                end: '2018-03-01',
                className: 'bg-cyan'
            },
            {
                title: 'D+11',
                start: '2018-02-12',
                end: '2018-02-13',
                className: 'b-l b-2x b-primary'
            },
            {
                title: '전직원 회의',
                start: '2018-02-12T10:30:00',
                end: '2018-02-12T12:30:00',
                className: 'b-l b-2x b-amethyst'
            },
            {
                title: '소장님 외부점심',
                start: '2018-02-12T12:00:00',
                className: 'b-l b-2x b-primary'
            },
            {
                title: '광고사 미팅',
                start: '2018-02-12T14:30:00',
                className: 'b-l b-2x b-drank'
            },
            {
                title: '경쟁사 오픈보고',
                start: '2018-02-12T17:30:00',
                className: 'b-l b-2x b-lightred'
            },
            {
                title: '직원전체 회식',
                start: '2018-02-12T20:00:00',
                className: 'b-l b-2x b-amethyst'
            },
            {
                title: '당첨자 관리 회의',
                start: '2018-02-13T07:00:00',
                className: 'b-l b-2x b-primary'
            },
            {
                title: '홈페이지 오픈',
                url: 'http://google.com/',
                start: '2018-02-23',
                className: 'b-l b-2x b-greensea'
            }
        ]
    });

    // Hide default header
    //$('.fc-header').hide();
    // Previous month action
    $('#cal-prev').on('click',function () {
        $('#calendar').fullCalendar('prev');
    });

    // Next month action
    $('#cal-next').on('click',function () {
        $('#calendar').fullCalendar('next');
    });

    // Change to month view
    $('#change-view-month').on('click',function () {
        $('#calendar').fullCalendar('changeView', 'month');

        // safari fix
        $('#content .main').fadeOut(0, function () {
            setTimeout(function () {
                $('#content .main').css({ 'display': 'table' });
            }, 0);
        });

    });

    // Change to week view
    $('#change-view-week').on('click',function () {
        $('#calendar').fullCalendar('changeView', 'agendaWeek');

        // safari fix
        $('#content .main').fadeOut(0, function () {
            setTimeout(function () {
                $('#content .main').css({ 'display': 'table' });
            }, 0);
        });

    });

    // Change to day view
    $('#change-view-day').on('click',function () {
        $('#calendar').fullCalendar('changeView', 'agendaDay');

        // safari fix
        $('#content .main').fadeOut(0, function () {
            setTimeout(function () {
                $('#content .main').css({ 'display': 'table' });
            }, 0);
        });

    });

    // Change to today view
    $('#change-view-today').on('click',function () {
        $('#calendar').fullCalendar('today');
    });

    /* initialize the external events
     -----------------------------------------------------------------*/
    $('#external-events .event-control').each(function () {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });

    $('#external-events .event-control .event-remove').on('click', function () {
        $(this).parent().remove();
    });

    // Submitting new event form
    $('#add-event').submit(function (e) {
        e.preventDefault();
        var form = $(this);

        var newEvent = $('<div class="event-control p-10 mb-10">' + $('#event-title').val() + '<a class="pull-right text-muted event-remove"><i class="fa fa-trash-o"></i></a></div>');

        $('#external-events .event-control:last').after(newEvent);

        $('#external-events .event-control').each(function () {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
        $('#external-events .event-control .event-remove').on('click', function () {
            $(this).parent().remove();
        });
        form[0].reset();
        $('#cal-new-event').modal('hide');
    });
});
