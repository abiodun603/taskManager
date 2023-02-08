const screens = {
    main_layout: "MainLaoyout",
    home: "Home",
    guard: "Guard",
    search: "Search",
    notification: "Notification"
}

const sidebar__tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 2,
        label: screens.search
    },
    {
        id: 1,
        label: screens.guard
    },
    {
        id: 3,
        label: screens.notification
    },
]

const constants = { sidebar__tabs, screens };

export default constants;