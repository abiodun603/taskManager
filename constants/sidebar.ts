const screens = {
    main_layout: "MainLaoyout",
    home: "Home",
    messages: "Messages",
    pad: "Dial pad",
    crm: "CRM"
}

const sidebar__tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 2,
        label: screens.messages
    },
    {
        id: 1,
        label: screens.pad
    },
    {
        id: 3,
        label: screens.crm
    },
]

const constants = { sidebar__tabs, screens };

export default constants;